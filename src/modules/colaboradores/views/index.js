import ColaboradorController from "../controllers/index.js";
import prompt from 'prompt-sync';

const input = prompt();

class ColaboradoresView {
  static async cadastrar() {
    const nome = input("Digite o nome do colaborador: ");
    const email = input("Digite o email do colaborador: ");
    const departamento = input("Digite o departamento do colaborador: ");
    const colaborador = await ColaboradorController.criar(nome, email, departamento);
    console.table(colaborador);
  }

  static async atualizarColaborador() {
    const nome = input("Digite o nome do colaborador: ");
    const email = input("Digite o email do colaborador: ");
    const departamento = input("Digite o novo departamento do colaborador: ");
    const colaborador = await ColaboradorController.editar(nome, email, departamento);
    console.table(colaborador);
  }

  static async listarTodos() {
    const colaboradores = await ColaboradorController.listarTodos();
    console.table(colaboradores);
  }

  static async listarPorEmail() {
    const email = input("Digite o email do colaborador: ");
    const colaborador = await ColaboradorController.listarPorEmail(email);
    console.table(colaborador);
  }

  static async deletarTodos() {
    await ColaboradorController.deletarTodos();
  }

  static async deletarColaborador() {
    const email = input("Digite o email do colaborador: ");
    await ColaboradorController.deletarColaborador(email);
  }

  static async totalColaboradores() {
    const total = await ColaboradorController.totalColaboradores();
    console.table(total);
  }
}

export default ColaboradoresView;
