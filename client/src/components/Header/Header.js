import React, { useState } from 'react';
import injectSheet from 'react-jss';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { FaPlay, FaCog } from 'react-icons/fa';

import CustomButton from '../Button';
import SettingsModal from '../SettingsModal';

import styles from './HeaderStyles';

import {
  GET_EDITOR,
  GET_BLUEPRINT_TEMPLATE,
  UPDATE_PREVIEW,
} from '../../graphql/queries';

const Header = ({ classes }) => {
  // React hooks
  const [fetching, setFetching] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Apollo hooks
  const client = useApolloClient();
  const { data } = useQuery(GET_EDITOR);

  // Update apollo local state
  const updatePreview = async blueprint => {
    if (!blueprint) return;

    setFetching(true);
    const { data } = await client.query({
      query: GET_BLUEPRINT_TEMPLATE,
      variables: { blueprint },
    });

    // console.log('DEBUG ==> ', data);

    await client.mutate({
      mutation: UPDATE_PREVIEW,
      variables: { value: data.template },
    });
    setFetching(false);
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>BlueprintDash</div>
      <div className={classes.options}>
        <CustomButton
          text={fetching ? 'Running...' : 'Run'}
          icon={<FaPlay />}
          loading={fetching}
          onClick={() => updatePreview(data.editor)}
        />
        <CustomButton
          text="Settings"
          icon={<FaCog />}
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <SettingsModal isOpen={isModalOpen} toggle={toggleModal} />
    </div>
  );
};

export default injectSheet(styles)(Header);
