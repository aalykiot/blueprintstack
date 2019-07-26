import React from 'react';
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

const SettingsModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Settings</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="editor-theme">Editor Theme</Label>
          <Input type="select" name="editor-theme">
            <option value="railscasts">Default</option>
            <option value="dracula">Dracula</option>
            <option value="mdn-like">MDN</option>
            <option value="neat">Neat</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="preview-theme">Preview Theme</Label>
          <Input type="select" name="preview-theme">
            <option value="default">Default</option>
            <option value="streak">Streak</option>
            <option value="flaty">Flaty</option>
            <option value="slate">Slate</option>
            <option value="cyborg">Cyborg</option>
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
