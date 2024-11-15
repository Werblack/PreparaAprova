import api from './api.js';

export const getMaterias = async () => {
    try {
        const response = await api.get('/PublicQuestoes/GetMaterias');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar matérias:", error);
        return [];
    }
};

export const getQuestoes = async (materiaId) => {
    try {
        const response = await api.get(`/PublicQuestoes/GetQuestoes?materiaId=${materiaId}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar questões:", error);
        return [];
    }
};
