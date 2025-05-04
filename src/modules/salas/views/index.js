import SalaController from '../controllers/index.js';
import prompt from 'prompt-sync';
const input = prompt();

class SalaView {
  
  static async criar() {
    const nome = input('Digite o nome da sala: ');
    const andar = input('Digite o andar da sala: ');
    const capacidade = input('Digite a capacidade da sala: ');

    const sala = await SalaController.criar(nome, andar, capacidade);
    console.table(sala);
  }

  
  static async editarSala() {
    const id_sala = input('Digite o ID da sala: ');
    const nome = input('Digite o novo nome da sala: ');
    const andar = input('Digite o novo andar da sala: ');
    const capacidade = input('Digite a nova capacidade da sala: ');

    const sala = await SalaController.editar(id_sala, nome, andar, capacidade);
    console.table(sala);
  }

  
  static async listarTodas() {
    const salas = await SalaController.listarTodas();
    console.table(salas);
  }

  
  static async listarPorId() {
    const id_sala = input('Digite o ID da sala: ');
    const sala = await SalaController.listarPorId(id_sala);
    console.table(sala);
  }

  
  static async deletarSala() {
    const id_sala = input('Digite o ID da sala: ');
    await SalaController.deletarSala(id_sala);
  }

  
  static async totalSalas() {
    const total = await SalaController.totalSalas();
    console.table(total);
  }
}

export default SalaView;
