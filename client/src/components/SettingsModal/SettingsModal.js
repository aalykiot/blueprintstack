import React, { useState } from 'react';
import injectSheet from 'react-jss';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import { GET_SETTINGS, UPDATE_SETTINGS } from '../../graphql/queries';

import { editorThemes, previewThemes } from './themes';

const SettingsModal = ({ classes, isOpen, toggle }) => {
  // Apollo hooks
  const { data } = useQuery(GET_SETTINGS);
  const [updateSettings] = useMutation(UPDATE_SETTINGS);

  // React hooks
  const [settings, setSettings] = useState({
    themes: {
      editor: data.settings.themes.editor,
      preview: data.settings.themes.preview,
      __typename: 'Themes',
    },
    __typename: 'Settings',
  });

  const handleOnSave = () => {
    updateSettings({ variables: { settings } });
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Settings</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="editor-theme">Editor Theme</Label>
          <Input
            type="select"
            name="editor-theme"
            defaultValue={data.settings.themes.editor}
            onChange={e =>
              setSettings({
                ...settings,
                themes: {
                  ...settings.themes,
                  editor: e.target.value,
                },
              })
            }
          >
            {editorThemes.map(theme => (
              <option value={theme.value} key={theme.value}>
                {theme.label}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="preview-theme">Preview Theme</Label>
          <Input
            type="select"
            name="preview-theme"
            defaultValue={data.settings.themes.preview}
            onChange={e =>
              setSettings({
                ...settings,
                themes: {
                  ...settings.themes,
                  preview: e.target.value,
                },
              })
            }
          >
            {previewThemes.map(theme => (
              <option value={theme.value} key={theme.value}>
                {theme.label}
              </option>
            ))}
          </Input>
          <strong className={classes.reminder}>
            *You need to re-run your code in order this setting to take effect
          </strong>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={handleOnSave}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const styles = {
  reminder: {
    fontSize: '8pt',
  },
};

export default injectSheet(styles)(SettingsModal);
