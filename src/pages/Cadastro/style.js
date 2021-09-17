import { makeStyles } from '@material-ui/core/styles';
import BackgroundCadastro from '../../assets/bg-cadastro-cliente.svg';

const useStyles = makeStyles((theme) => ({
    containerCadastro: {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${BackgroundCadastro})`,
        backgroundSize: '70%',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        boxSizing: 'border-box',
        '&>*': {
            boxSizing: 'border-box',
        },
        '& > img': {
            position: 'absolute',
            top: 30,
            left: 20,
        },
    },
    containerIllustration: {
        width: '100%',
        display: 'grid',
        placeContent: 'center',
        '& > img': {
            width: 420,
        },
    },
    containerForm: {
        width: 611,
        height: '100vh',
        borderBottomLeftRadius: 88,
        backgroundColor: 'white',
        boxShadow: '0px 4px 16px rgba(50, 50, 50, 0.15)',
        padding: '50px 102px 58px 102px',
        boxSizing: 'border-box',
    },
    loginHeader: {
        fontSize: 32,
        fontFamily: "'Baloo 2', cursive",
        color: '#D13201',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        margin: 0,
        '& > h2': {
            margin: 0,
        },
    },
    form: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 20,
        height: '100%',
        '& > *': {
            width: '100%',
            padding: 0,
        },
    },
    inputs: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 15,
    },
    containerInput: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        '& > label': {
            fontSize: 16,
            color: '#393C40',
            marginLeft: 16,
            fontFamily: 'Montserrat',
            fontWeight: '600',
        },
    },
    input: {
        '&>*': {
            height: 40,
        },
    },
    botao: {
        all: 'unset',
        cursor: 'pointer',
        padding: '12px 40px',
        borderRadius: 25,
        backgroundColor: '#D13201',
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontWeight: '500',
        textTransform: 'capitalize',
        alignSelf: 'center',
        '&:hover': {
            backgroundColor: '#FB3B00',
        },
    },
    containerBotoes: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
    },
    backdrop: {
        position: 'absolute',
        zIndex: 5,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'grid',
        placeContent: 'center',
    },
    noBackdrop: {
        display: 'none',
    },
}));

export default useStyles;