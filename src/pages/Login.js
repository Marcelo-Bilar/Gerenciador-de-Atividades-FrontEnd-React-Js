import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icones/logo.svg';
import mail from '../assets/icones/mail.svg';
import lock from '../assets/icones/lock.svg';
import { Input } from '../componentes/Input';
import { executaRequisicao } from '../services/api';

export const Login = props => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [msgErro, setmsgErro] = useState('');
    const [isLoading, setLoading] = useState(false);


    const executaLogin = async evento => {
        try{
            evento.preventDefault(); 
            setLoading(true);
            setmsgErro('');
        
            const body = {
                login,
                senha
            }
        
            const resultado = await executaRequisicao('login', 'post', body);
            if(resultado?.data?.token){
                localStorage.setItem('accessToken', resultado.data.token);
                localStorage.setItem('usuarioNome', resultado.data.nome);
                localStorage.setItem('usuarioEmail', resultado.data.email);
                props.setAccessToken(resultado.data.token);
            }
            } catch(e){
                console.log(e);
                if(e?.response?.data?.erro){
                    setmsgErro(e.response.data.erro);
                } else {
                    setmsgErro('Não foi possível efetuar o login, fale com o administrador');
                }
            }
            setLoading(false);
        }

    return(
        <div className={'container-login '+'container-cadastro'}>
            <img 
                src={logo}
                alt='Logo Devaria'
                className='logo'
            />
            <form>
                <h1>Entrar</h1>
                {msgErro && <p>{msgErro}</p>}
                <Input 
                    srcImg={mail}
                    altImg={'Icone email'}
                    inputType='text'
                    inputName='login'
                    inputPlaceholder='Informe seu email'
                    value={login}
                    setValue={setLogin}
                />
                <Input 
                    srcImg={lock}
                    altImg={'Icone senha'}
                    inputType='password'
                    inputName='senha'
                    inputPlaceholder='Informe sua senha'
                    value={senha}
                    setValue={setSenha}
                />

                <button onClick={executaLogin} disabled={isLoading}>{isLoading === true ? 'Carregando' : 'Entrar'} </button>
                <Link className='link' to="/cadastro">Não é cadastrado? Clique aqui</Link> 
            </form>
        </div>
    );
}