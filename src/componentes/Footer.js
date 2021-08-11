import React from 'react';
import Adicionar from '../assets/icones/adicionar.svg'

export const Footer = props => {
    const {showModal} = props;
    return (
        <div className='container-footer'>
            <button onClick={showModal}><img src={Adicionar} alt='adicionar tarefa'/>Adicionar tarefa</button>   
            <span>© Copyright {new Date().getFullYear()} Billar. Todos os direitos reservados.</span>
        </div>
    )
}
