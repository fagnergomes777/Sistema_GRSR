import SalaModel from '../models/index.js';

class SalaController {
    
    static async criar(nome, andar, capacidade) {
        try {
            if (!nome || !andar || !capacidade) {
                return console.error('Todos os campos devem ser preenchidos!');
            }
            const sala = await SalaModel.criar(nome, andar, capacidade);
            console.log('Sala criada com sucesso!');
            return sala;
        } catch (error) {
            console.log('Erro ao criar sala:', error.message);
        }
    }

    
    static async editar(id_sala, nome, andar, capacidade) {
        try {
            if (!id_sala || !nome || !andar || !capacidade) {
                return console.error('Todos os campos devem ser preenchidos!');
            }
            const sala = await SalaModel.atualizarSala(id_sala, nome, andar, capacidade);
            if (sala.length === 0) {
                return console.error('Sala não encontrada!');
            }
            console.log('Sala atualizada com sucesso!');
            return sala;
        } catch (error) {
            console.log('Erro ao editar sala:', error.message);
        }
    }

    
    static async listarTodas() {
        try {
            const salas = await SalaModel.listarTodas();
            console.log('Listagem de salas:');
            return salas;
        } catch (error) {
            console.log('Erro ao listar salas:', error.message);
        }
    }

    
    static async listarPorId(id_sala) {
        try {
            const sala = await SalaModel.listarPorId(id_sala);
            if (sala.length === 0) {
                return console.error('Sala não encontrada!');
            }
            return sala;
        } catch (error) {
            console.log('Erro ao listar sala:', error.message);
        }
    }

    
    static async deletarSala(id_sala) {
        try {
            const sala = await SalaModel.listarPorId(id_sala);
            if (sala.length === 0) {
                return console.error('Sala não encontrada!');
            }
            await SalaModel.deletarSala(id_sala);
            console.log('Sala excluída com sucesso!');
        } catch (error) {
            console.log('Erro ao excluir sala:', error.message);
        }
    }
}

export default SalaController;
