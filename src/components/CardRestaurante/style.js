import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',

    '& > img': {
      borderRadius: 16,
      width: 174,
      height: 174,
    },
    padding: 32,
    backgroundColor: 'white',
    boxShadow: '0px 4px 6px rgba(50, 50, 50, 0.24)',
    borderRadius: 24,
    gap: 32,
    position: 'relative',
    cursor: 'pointer',
  },
  cardTexto: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: 'Montserrat',
    '& > h4': {
      color: '#525459',
      fontSize: 20,
      fontWeight: '600',
      margin: 0,
    },
    '& > p': {
      color: 'rgba(34, 34, 34, 0.87)',
      fontSize: 16,
    },
  },
  containerPreco: {
    backgroundColor: '#0D8A4F1A',
    alignSelf: 'flex-start',
    borderRadius: 4,
    textAlign: 'center',
    padding: '4px 10px',
    color: '#006335',
    fontWeight: 600,
    fontSize: 10,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 24,
    backdropFilter: 'blur(6px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 29,
  },
  botaoExcluir: {
    all: 'unset',
    cursor: 'pointer',
    fontFamily: 'Montserrat',
    color: '#F21B1B',
    fontWeight: 600,
    fontSize: 14,
  },
  botaoEditar: {
    backgroundColor: '#D13201 !important',
    borderRadius: '20px !important',
    padding: '8px 40px !important',
    textTransform: 'none !important',
    color: 'white !important',
    fontFamily: 'Montserrat !important',
    fontWeight: '600 !important',
    fontSize: '14px !important',
    '&:hover': {
      backgroundColor: '#D13201 !important',
    },
  },
  loading: {
    position: 'absolute',
    zIndex: 6,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'grid',
    placeContent: 'center',
  },
}));

export default useStyles;