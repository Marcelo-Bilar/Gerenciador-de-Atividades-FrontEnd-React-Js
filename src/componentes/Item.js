import React from "react";
import moment from "moment";
import naoConcluido from '../assets/icones/not-checked.svg';
import concluido from '../assets/icones/checked.svg';

export const Item = props =>{

    const {tarefa, selecionarTarefa } = props;
    const {dataConclusao, nome, dataPrevistaConclusao} = tarefa;

    const getDataTexto = (dtConclusao, dtPrevistaConclusao) => {
        if(dtConclusao){
            return `Concluído em: ${moment(dtConclusao).format('DD/MM/yyyy')}`;
        }else {
            return `Previsão de conclusão em: ${moment(dtPrevistaConclusao).format('DD/MM/yyyy')}`;  
        };
    }

    return (
        <div className={"container-item " + (dataConclusao ? "nao-ativo" : "ativo")} onClick={() => dataConclusao ? selecionarTarefa(tarefa) : selecionarTarefa(tarefa)}>
            <img
                src={dataConclusao ? concluido : naoConcluido}
                alt={dataConclusao ? "tarefa concluida" : "selecione a tarefa"} />
            <div>
                <p className={dataConclusao ? "concluido" : ""}>{nome}</p>
                <span>{getDataTexto(dataConclusao, dataPrevistaConclusao)}</span>
            </div>
        </div>
    );
}