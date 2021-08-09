import React, { useState } from 'react';
import { Header } from '../componentes/Header';
import { Filtros } from '../componentes/Filtros';
import { Listagem } from '../componentes/Listagem';
import { Footer } from '../componentes/Footer';

export const Home = props => {

    const[tarefas, setTarefas] = useState([
        {
            "id": 2,
            "idUsuario": 5,
            "nome": "Atividade 1",
            "dataPrevistaConclusao": "2021-08-09",
            "dataConclusao": "2021-08-09"
        },
        {
            "id": 3,
            "idUsuario": 5,
            "nome": "Atividade 2",
            "dataPrevistaConclusao": "2021-08-10",
        }
    ])

    const sair = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('usuarioNome');
        localStorage.removeItem('usuarioEmail');
        props.setAccessToken('');
    }

    return (
        <>
            <Header sair={sair}/>
            <Filtros/>
            <Listagem tarefas={tarefas}/>
            <Footer/>
        </>
    )
}