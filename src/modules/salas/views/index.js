import SalaController from '../controllers/index.js';
import prompt from 'prompt-sync';
const input = prompt();

class SalaView {
  // Criar uma nova sala
  static async criar() {
    const nome = input('Digite o nome da sala: ');
    const andar = input('Digite o andar da sala: ');
    const capacidade = input('Digite a capacidade da sala: ');

    const sala = await SalaController.criar(nome, andar, capacidade);
    console.table(sala);
  }

  // Editar os dados de uma sala existente
  static async editarSala() {
    const id_sala = input('Digite o ID da sala: ');
    const nome = input('Digite o novo nome da sala: ');
    const andar = input('Digite o novo andar da sala: ');
    const capacidade = input('Digite a nova capacidade da sala: ');

    const sala = await SalaController.editar(id_sala, nome, andar, capacidade);
    console.table(sala);
  }

  // Listar todas as salas
  static async listarTodas() {
    const salas = await SalaController.listarTodas();
    console.table(salas);
  }

  // Listar uma sala específica pelo ID
  static async listarPorId() {
    const id_sala = input('Digite o ID da sala: ');
    const sala = await SalaController.listarPorId(id_sala);
    console.table(sala);
  }

  // Deletar uma sala pelo ID
  static async deletarSala() {
    const id_sala = input('Digite o ID da sala: ');
    await SalaController.deletarSala(id_sala);
  }

  // Mostrar o total de salas cadastradas
  static async totalSalas() {
    const total = await SalaController.totalSalas();
    console.table(total);
  }
}

export default SalaView;
