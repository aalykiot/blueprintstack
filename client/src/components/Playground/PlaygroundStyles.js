const styles = {
  playground: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
  },
  resizer: {
    background: '#444857',
    width: 13,
    '&:hover': {
      cursor: 'col-resize',
    },
  },
  notInteractive: {
    height: '100%',
    pointerEvents: 'none',
  },
  isInteractive: {
    height: '100%',
    pointerEvents: 'auto',
  },
};

export default styles;
