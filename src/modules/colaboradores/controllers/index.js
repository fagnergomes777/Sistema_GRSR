import ColaboradorModel from "../models/index.js";
import CursoModel from "../../salas/models/index.js";

class ColaboradorController {
    static async criar(nome, email, departamento) {
        try {
            if (!nome || !email || !departamento) {
                return console.error("Todos os campos devem ser preenchidos!");
            }

            const colaborador = await ColaboradorModel.criar(nome, email, departamento);
            console.log("Colaborador criado com sucesso!");
            return colaborador;
        } catch (error) {
            console.log("Erro ao criar colaborador:", error.message);
        }
    }

    static async editar(nome, email, departamento) {
        try {
            if (!nome || !email || !departamento) {
                return console.error('Todos os campos devem ser preenchidos!');
            }

            const colaborador = await ColaboradorModel.atualizar(nome, email, departamento);
            if (!colaborador || colaborador.length === 0) {
                return console.error('Colaborador não encontrado!');
            }

            console.log('Colaborador atualizado com sucesso!');
            return colaborador;
        } catch (error) {
            console.log('Erro ao atualizar o colaborador:', error.message);
        }
    }

    static async deletarColaborador(email) {
        try {
            const colaborador = await ColaboradorModel.listarPorEmail(email);
            if (!colaborador || colaborador.length === 0) {
                return console.error('Colaborador não encontrado!');
            }

            await ColaboradorModel.deletar(email);
            console.log('Colaborador excluído com sucesso!');
        } catch (error) {
            console.log('Erro ao excluir o colaborador:', error.message);
        }
    }

    static async deletarTodos() {
        try {
            await ColaboradorModel.deletarTodos();
            console.log('Todos os colaboradores foram excluídos com sucesso!');
        } catch (error) {
            console.log('Erro ao excluir todos os colaboradores:', error.message);
        }
    }

    static async listarTodos() {
        try {
            const colaboradores = await ColaboradorModel.listarTodos();
            if (!colaboradores || colaboradores.length === 0) {
                return console.log('Nenhum colaborador a ser exibido!');
            }

            console.log('Listagem de colaboradores:');
            return colaboradores;
        } catch (error) {
            console.log('Erro ao listar colaboradores:', error.message);
        }
    }

    static async listarPorEmail(email) {
        try {
            const colaborador = await ColaboradorModel.listarPorEmail(email);
            if (!colaborador || colaborador.length === 0) {
                return console.error('Colaborador não encontrado!');
            }

            return colaborador;
        } catch (error) {
            console.log('Erro ao buscar colaborador por email:', error.message);
        }
    }

    static async totalColaboradores() {
        try {
            const total = await ColaboradorModel.totalColaboradores();
            if (!total || total.length === 0) {
                return console.error('Não há colaboradores na contagem!');
            }

            return total;
        } catch (error) {
            console.log('Erro ao contar os colaboradores:', error.message);
        }
    }
}

export default ColaboradorController;
