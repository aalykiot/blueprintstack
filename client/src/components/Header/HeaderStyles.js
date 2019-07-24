const styles = {
  '@import': ['url(https://fonts.googleapis.com/css?family=Arvo&display=swap)'],
  header: {
    background: '#444857',
    display: 'flex',
  },
  logo: {
    color: '#fff',
    opacity: 0.8,
    fontFamily: `'Arvo', serif`,
    fontSize: '1.3em',
    fontWeight: 'bold',
    padding: 12,
    flex: 1,
  },
  options: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  optionButton: {
    display: 'flex',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#fff',
    opacity: 0.7,
    padding: '5px',
    margin: '0 10px',
    borderRadius: 5,
    '&:hover': {
      cursor: 'pointer',
      opacity: 1,
    },
  },
  optionButtonText: {
    marginLeft: 10,
  },
};

export default styles;
