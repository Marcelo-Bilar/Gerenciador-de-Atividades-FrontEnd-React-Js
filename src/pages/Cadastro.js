import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icones/logo.svg';
import mail from '../assets/icones/mail.svg';
import lock from '../assets/icones/lock.svg';
import { Input } from '../componentes/Input';
import { executaRequisicao } from '../services/api';

export const Cadastro = props => {
    const [nome, setnome] = useState('');
    const [email, setemail] = useState('');
    const [senha, setSenha] = useState('');
    const [msgErro, setmsgErro] = useState('');
    const [msgSucesso, setmsgSucesso] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [type, settype] = useState('password');

    const executaCadastro = async evento => {
        try{
            evento.preventDefault(); 
            setLoading(true);
            setmsgErro('');
        
            const body = {
                nome,
                email,
                senha
            }
        
            const resultado = await executaRequisicao('usuario', 'post', body);
            // O que o cadastro devolve
            // Por enquanto vou deixar desse jeito
            if(resultado){
                setmsgSucesso('Usuário cadastrado com sucesso! ');
            }

            } catch(e){
                console.log(e);
                if(e?.response?.data?.erro){
                    setmsgErro(e.response.data.erro);
                } else {
                    setmsgErro('Não foi possível efetuar o cadastro, fale com o administrador');
                }
            }
            setLoading(false);
        }

    const visuSenha = () => {
            if(type === 'password'){
                settype('text')
            } else {
                settype('password')
            }
        }

    return(
        <div className={'container-login '+'container-cadastro'}>
            <img 
                src={logo}
                alt='Logo Devaria'
                className='logo'
            />
            <form>
                <h1>Cadastrar</h1>
                {msgErro && <p>{msgErro}</p>}
                <Input 
                    srcImg={mail}
                    altImg={'Icone email'}
                    inputType='text'
                    inputName='nome'
                    inputPlaceholder='Informe seu nome'
                    value={nome}
                    setValue={setnome}
                />
                <Input 
                    srcImg={mail}
                    altImg={'Icone email'}
                    inputType='text'
                    inputName='email'
                    inputPlaceholder='Informe seu email'
                    value={email}
                    setValue={setemail}
                />
                <Input 
                    srcImg={lock}
                    altImg={'Icone senha'}
                    inputType={type}
                    inputName='senha'
                    inputPlaceholder='Informe sua senha'
                    value={senha}
                    setValue={setSenha}
                />
                <img className="olho" src="https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-14-512.png" onClick={visuSenha}></img>

                <button onClick={executaCadastro} disabled={isLoading}>{isLoading === true ? 'Carregando' : 'Cadastrar'} </button>
                {msgSucesso && <p className='sucesso'>{msgSucesso}</p>}
                <Link className='link' to="/">Já é cadastrado? Clique aqui</Link>
            </form>
        </div>
    );
}