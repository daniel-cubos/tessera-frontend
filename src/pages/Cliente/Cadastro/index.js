import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import CircularProgress from '@material-ui/core/CircularProgress';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkEntrarCadastrar from '../../../components/LinkEntrarCadastrar';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useStyles from './style';
import ilustracaoCadastro from '../../../assets/ilustracao-cadastro.svg';
import logobarril from '../../../assets/logo-barril.svg';
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const toastOpts = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [telefone, setTelefone] = useState('');
  const [mask, setMask] = useState('(99) 9999-9999');
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const history = useHistory();

  const verificaInfo = (data) => {

    if (!data.nome) {
      toast.error('Nome é obrigatório.', toastOpts);
      return false;
    }
    if (!data.email) {
      toast.error('Email é obrigatório.', toastOpts);
      return false;
    }
    if (!telefone) {
      toast.error('Telefone é obrigatório.', toastOpts);
      return false;
    }
    if (telefone.length < 14) {
      toast.error('Telefone inválido.', toastOpts);
      return false;
    }
    if (!data.senha) {
      toast.error('Senha é obrigatória.', toastOpts);
      return false;
    }
    if (!data.senhaConfirm) {
      toast.error('Confirmação de senha é obrigatória.', toastOpts);
      return false;
    }
    if (data.senha !== data.senhaConfirm) {
      toast.error('As duas senhas não conferem.', toastOpts);
      return false;
    }
    return true;
  };

  const onSubmit = async (data) => {
    if (!verificaInfo(data)) return;
    setLoading(true);
    try {
      const { senhaConfirm, ...body } = data;
      body.telefone = telefone;
      const response = await fetch(`${BASE_URL}/clientes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const dados = await response.json();
      if (!response.ok) {
        toast.error(dados, toastOpts);
        setLoading(false);
        return;
      }
      toast.success('Cadastro realizado com sucesso.', toastOpts);
      history.push('/cliente/login');
    } catch (error) {
      console.log(error.message);
      toast.error('Ocorreu um erro ao cadastrar.', toastOpts);
    }
    setLoading(false);
  };

  const handleMask = (value) => {
    setTelefone(value);
    if (value[5] === '9') setMask('(99) 99999-9999');
    else {
      setMask('(99) 9999-9999');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPasswordConfirm = () => {
    setShowPasswordConfirm((prevValue) => !prevValue);
  };

  const handleMouseDownPasswordConfirm = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.containerCadastro}>
      <div className={loading ? classes.backdrop : classes.noBackdrop}>
        <CircularProgress />
      </div>
      <img src={logobarril} alt='logo barril' />
      <div className={classes.containerIllustration}>
        <img src={ilustracaoCadastro} alt='cadastro' />
      </div>
      <div className={classes.containerForm}>
        <form
          className={classes.form}
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={classes.loginHeader}>
            <h2>Cadastro</h2>
          </div>
          <div className={classes.inputs}>
            <div className={classes.containerInput}>
              <label htmlFor='nome'>Nome de usuário</label>
              <TextField
                className={classes.input}
                id='nome'
                variant='outlined'
                {...register('nome')}
              />
            </div>
            <div className={classes.containerInput}>
              <label htmlFor='email'>Email</label>
              <TextField
                className={classes.input}
                id='email'
                variant='outlined'
                {...register('email')}
              />
            </div>
            <div className={classes.containerInput}>
              <label htmlFor='telefone'>Telefone</label>
              <InputMask
                mask={mask}
                id='telefone'
                value={telefone}
                onChange={(e) => handleMask(e.target.value)}
                alwaysShowMask={false}
                maskChar=''
              >
                {(inputProps) => (
                  <TextField className={classes.input} variant='outlined' />
                )}
              </InputMask>
            </div>
            <div className={classes.containerInput}>
              <label htmlFor='senha'>Senha</label>
              <FormControl variant='outlined' className={classes.input}>
                <OutlinedInput
                  className={classes.input}
                  id='senha'
                  type={showPassword ? 'text' : 'password'}
                  {...register('senha')}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className={classes.containerInput}>
              <label htmlFor='senha'>Repita a senha</label>
              <FormControl variant='outlined' className={classes.input}>
                <OutlinedInput
                  className={classes.input}
                  id='senhaConfirm'
                  type={showPasswordConfirm ? 'text' : 'password'}
                  {...register('senhaConfirm')}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPasswordConfirm}
                        onMouseDown={handleMouseDownPasswordConfirm}
                        edge='end'
                      >
                        {showPasswordConfirm ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          </div>
          <div className={classes.containerBotoes}>
            <button type='submit' className={classes.botao}>
              Criar conta
            </button>
            <LinkEntrarCadastrar
              texto='Já tem uma conta?'
              destino='/cliente/login'
              titulo='Login'
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;

