// public/app.js

import { getMaterias, getQuestoes } from '../services/function.js';

const app = document.getElementById('app');

const loadMaterias = async () => {
    const materias = await getMaterias();
    const materiasDiv = document.getElementById('materias');
    materiasDiv.innerHTML = '<h2>Matérias</h2>';
    
    materias.forEach(materia => {
        const button = document.createElement('button');
        button.innerText = materia.nome;
        button.onclick = () => loadQuestoes(materia.id);
        materiasDiv.appendChild(button);
    });
};

const loadQuestoes = async (materiaId) => {
    const questoes = await getQuestoes(materiaId);
    const questoesDiv = document.getElementById('questoes');
    questoesDiv.innerHTML = '<h2>Questões</h2>';
    
    questoes.forEach(questao => {
        const p = document.createElement('p');
        p.innerText = questao.enunciado;
        questoesDiv.appendChild(p);
    });
};

// Inicializa o aplicativo
loadMaterias();