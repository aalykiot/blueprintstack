import React, { useState } from 'react';
import { Modal as SemanticModal, Button, Select } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateSettings } from '../../models/settings/actions';
import { editorThemes, previewThemes } from './themes';
import './modal.scss';

const Modal = ({ isOpen, settings, toggleModal, updateSettings }) => {
  const [localSettings, setLocalSettings] = useState(settings);

  const handleOnSave = () => {
    updateSettings(localSettings);
    toggleModal();
  };

  return (
    <SemanticModal size="tiny" open={isOpen} onClose={toggleModal} closeIcon>
      <SemanticModal.Header>Settings</SemanticModal.Header>
      <SemanticModal.Content>
        <div className="modal_option">
          <span className="modal_label">Editor Theme</span>
          <Select
            fluid
            defaultValue={settings.theme.editor}
            options={editorThemes}
            onChange={(_, { value }) =>
              setLocalSettings({
                ...localSettings,
                theme: { ...localSettings.theme, editor: value },
              })
            }
          />
        </div>
        <div className="modal_option">
          <span className="modal_label">Preview Theme</span>
          <Select
            fluid
            defaultValue={settings.theme.preview}
            options={previewThemes}
            onChange={(_, { value }) =>
              setLocalSettings({
                ...localSettings,
                theme: { ...localSettings.theme, preview: value },
              })
            }
          />
          <span className="modal_note">
            *You need to re-run your code in order this setting to take effect
          </span>
        </div>
      </SemanticModal.Content>
      <SemanticModal.Actions>
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content="Save"
          onClick={handleOnSave}
        />
      </SemanticModal.Actions>
    </SemanticModal>
  );
};

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = dispatch => ({
  updateSettings: bindActionCreators(updateSettings, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
