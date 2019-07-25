import React, { useState } from 'react';
import injectSheet from 'react-jss';
import { compose } from 'ramda';
import { Query, withApollo } from 'react-apollo';
import { FaPlay, FaCog } from 'react-icons/fa';
import { gql } from 'apollo-boost';

import styles from './HeaderStyles';

import Button from '../Button';

const GET_EDITOR_VALUE = gql`
  {
    editorValue @client
  }
`;

const GET_BLUEPRINT_TEMPLATE = gql`
  query Template($blueprint: String!) {
    template(blueprint: $blueprint)
  }
`;

const UPDATE_PREVIEW = gql`
  mutation UpdatePreview($value: String!) {
    updatePreview(value: $value) @client
  }
`;

const Header = ({ classes, client }) => {
  const [loading, setLoading] = useState(false);

  const _updatePreview = async blueprint => {
    if (!blueprint) return;

    setLoading(true);
    const { data } = await client.query({
      query: GET_BLUEPRINT_TEMPLATE,
      variables: { blueprint },
    });

    await client.mutate({
      mutation: UPDATE_PREVIEW,
      variables: { value: data.template },
    });
    setLoading(false);
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>BlueprintDash</div>
      <div className={classes.options}>
        <Query query={GET_EDITOR_VALUE}>
          {({ data }) => (
            <Button
              text={loading ? 'Running...' : 'Run'}
              icon={<FaPlay />}
              loading={loading}
              onClick={() => _updatePreview(data.editorValue)}
            />
          )}
        </Query>
        <Button text="Settings" icon={<FaCog />} />
      </div>
    </div>
  );
};

export default compose(
  injectSheet(styles),
  withApollo
)(Header);
