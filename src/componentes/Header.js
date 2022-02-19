import React from 'react';
import logo from '../assets/icones/logo.svg';
import sair from '../assets/icones/exit.svg';
import sairdesktop from '../assets/icones/exit-desktop.svg';
import sairdesktopdarkmode from '../assets/icones/exit-desktop-darkmode.svg';
import { ButtonTheme } from '../componentes/ButonTheme';

export const Header = props => {
    const {showModal} = props;

    const nomeCompleto = localStorage.getItem('usuarioNome');
    const primeiroNome = nomeCompleto?.split(' ')[0] || '';
    const temaAtual = localStorage.getItem('theme');

    return(
        <div className="container-header">
            <img className="logo" src={logo} alt='Logo Devaria' /> 
            <button onClick={showModal}><span>+</span>Adicionar tarefa</button>   
            <ButtonTheme/>
            <div className="mobile">
                <span>Olá, {primeiroNome}</span>
                <img className="sair" src={sair} alt='Deslogar' onClick={props.sair}/>
            </div>
            <div className="desktop">
                <span>Olá, {primeiroNome}</span>
                <img className="sair" src={ temaAtual === "light"? sairdesktop : sairdesktopdarkmode} alt='Deslogar' onClick={props.sair}/>
            </div>
        </div>
    )

}