import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    containerPaginaProdutos: {
        position: 'relative',
    },
    headerProdutos: {
        position: 'relative',
    },
    imgHeader: {
        width: '100vw',
        height: '180px',
        borderBottomRightRadius: 232,
        objectFit: 'cover',
        filter: 'brightness(0.7)',
    },
    imgProfile: {
        boxSizing: 'border-box',
        width: 176,
        height: 176,
        borderRadius: '50%',
        border: '6px solid white',
        position: 'absolute',
        bottom: '-88px',
        left: '7.77%',
        zIndex: 3,
        backgroundColor: 'white',
    },
    headerTexto: {
        display: 'flex',
        width: '65%',
        zIndex: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: '23%',
        bottom: 0,
        '& > h3': {
            fontFamily: "'Baloo 2', cursive",
            color: 'white',
            fontSize: 40,
        },
        '& > button': {
            all: 'unset',
            cursor: 'pointer',
            fontFamily: 'Montserrat',
            fontSize: 16,
            color: 'white',
            fontWeight: 400,
        },
    },
    illustrationHeader: {
        position: 'absolute',
        bottom: -80,
        left: -50,
    },
    restaurantesContainer: {
        boxSizing: 'border-box',
        position: 'relative',
        width: '100%',
        padding: 112,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 30,
        '& > *': {
            width: 'calc(50% - 15px)',
        },
        '& > input': {
            fontFamily: 'Montserrat',
            width: 488,
            height: 40,
            padding: '0 33px',
            position: 'absolute',
            top: 50,
            right: 100,
            backgroundColor: '#F5F5F5',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
            borderRadius: 20,
            boxSizing: 'border-box',
            border: 'none',
            '&:focus': {
                outline: 'none',
            },
        },
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
    semRestaurantes: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 100,
        '& > img': {
            height: 50,
        },
        '& > p': {
            fontFamily: 'Montserrat',
            fontSize: 18,
            color: '#D13201',
        },
    },
}));

export default useStyles;