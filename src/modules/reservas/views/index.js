import ReservaController from '../controllers/index.js';
import prompt from 'prompt-sync';

const input = prompt();

class ReservasView {
  static async criarReserva() {
    const data = input('Digite a data da reserva (AAAA-MM-DD): ');
    const hora_inicio = input('Digite a hora de início (HH:MM): ');
    const hora_fim = input('Digite a hora de fim (HH:MM): ');
    const motivo = input('Digite o motivo da reserva: ');
    const status = input('Digite o status da reserva (ex: pendente, confirmada): ');
    const id_colaborador = input('Digite o ID do colaborador: ');
    const id_sala = input('Digite o ID da sala: ');

    const reserva = await ReservaController.criar(
      data,
      hora_inicio,
      hora_fim,
      motivo,
      status,
      id_colaborador,
      id_sala
    );
    console.table(reserva);
  }

  static async editarReserva() {
    const id = input('Digite o ID da reserva que deseja editar: ');
    const data = input('Digite a nova data (AAAA-MM-DD): ');
    const hora_inicio = input('Digite a nova hora de início (HH:MM): ');
    const hora_fim = input('Digite a nova hora de fim (HH:MM): ');
    const motivo = input('Digite o novo motivo da reserva: ');
    const status = input('Digite o novo status da reserva: ');

    const reserva = await ReservaController.editar(
      id,
      data,
      hora_inicio,
      hora_fim,
      motivo,
      status
    );
    console.table(reserva);
  }

  static async listarTodos() {
    const reservas = await ReservaController.listarTodos();
    console.table(reservas);
  }

  static async listarPorColaborador() {
    const id_colaborador = input('Digite o ID do colaborador: ');
    const reservas = await ReservaController.listarPorColaborador(id_colaborador);
    console.table(reservas);
  }

  static async deletarReserva() {
    const id = input('Digite o ID da reserva que deseja deletar: ');
    await ReservaController.deletarReserva(id);
  }
}

export default ReservasView;
