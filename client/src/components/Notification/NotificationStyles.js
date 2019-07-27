const styles = {
  notification: {
    padding: 15,
    borderRadius: 5,
    background: '#1c2128',
    border: '3px solid #40739e',
    position: 'absolute',
    left: 15,
    bottom: 15,
    zIndex: 1000,
    color: '#fff',
    width: '350px',
    fontSize: '10pt',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  title: {
    fontWeight: 'bold',
  },
  body: {
    marginTop: 5,
    lineHeight: 1.4,
  },
  footer: {
    marginTop: 5,
  },
};

export default styles;
