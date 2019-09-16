import React from 'react';
import { Button } from 'semantic-ui-react';

const NavButton = ({ content, icon, loading, handleClick }) => {
  return (
    <Button
      content={content}
      icon={icon}
      inverted
      loading={loading}
      onClick={handleClick}
    />
  );
};

export default NavButton;
