import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from '../Modal';
import NavButton from '../NavButton';
import { getPreviewAsync } from '../../models/preview/thunks';
import './header.scss';

const Header = ({ previewLoading, getPreviewAsync }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="header">
      <div className="header_logo">Blueprint Dash</div>
      <div className="header_options">
        <NavButton
          content="Run"
          icon="play"
          loading={previewLoading}
          handleClick={getPreviewAsync}
        />
        <NavButton
          content="Settings"
          icon="setting"
          handleClick={toggleModal}
        />
      </div>
      <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

const mapStateToProps = state => ({
  previewLoading: state.preview.loading,
});

const mapDispatchToProps = dispatch => ({
  getPreviewAsync: bindActionCreators(getPreviewAsync, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
