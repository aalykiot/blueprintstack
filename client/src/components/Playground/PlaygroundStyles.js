const styles = {
  playground: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,

    '& .splitter-layout > .layout-splitter': {
      width: 13,
      background: '#444857',
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
