import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
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

import { editorThemes, previewThemes } from './themes';

const GET_SETTINGS = gql`
  {
    settings {
      editorTheme @client
      previewTheme @client
    }
  }
`;

const SettingsModal = ({ isOpen, toggle }) => {
  // Apollo hooks
  const { data } = useQuery(GET_SETTINGS);

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Settings</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="editor-theme">Editor Theme</Label>
          <Input
            type="select"
            name="editor-theme"
            defaultValue={data.settings.editorTheme}
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
            defaultValue={data.settings.previewTheme}
          >
            {previewThemes.map(theme => (
              <option value={theme.value} key={theme.value}>
                {theme.label}
              </option>
            ))}
          </Input>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="success">Save</Button>
      </ModalFooter>
    </Modal>
  );
};

export default SettingsModal;
