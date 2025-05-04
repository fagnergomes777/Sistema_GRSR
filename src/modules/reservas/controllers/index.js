import ReservaModel from '../models/index.js';

class ReservaController {
  static async criar(data, hora_inicio, hora_fim, motivo, status, id_colaborador, id_sala) {
    try {
      if (!data || !hora_inicio || !hora_fim || !motivo || !status || !id_colaborador || !id_sala) {
        return console.error('Todos os campos devem ser preenchidos!');
      }

      const reserva = await ReservaModel.criar(
        data,
        hora_inicio,
        hora_fim,
        motivo,
        status,
        id_colaborador,
        id_sala
      );

      console.log('Reserva criada com sucesso!');
      return reserva;
    } catch (error) {
      console.log('Erro ao criar reserva:', error.message);
    }
  }

  static async editar(id_reserva, data, hora_inicio, hora_fim, motivo, status) {
    try {
      if (!id_reserva || !data || !hora_inicio || !hora_fim || !motivo || !status) {
        return console.error('Todos os campos devem ser preenchidos!');
      }

      const busca = await ReservaModel.listarPorId(id_reserva);
      if (busca.length === 0) {
        return console.error('Reserva não encontrada!');
      }

      const reserva = await ReservaModel.atualizarReserva(
        id_reserva,
        data,
        hora_inicio,
        hora_fim,
        motivo,
        status
      );

      console.log('Reserva atualizada com sucesso!');
      return reserva;
    } catch (error) {
      console.log('Erro ao editar reserva:', error.message);
    }
  }

  static async listarTodos() {
    try {
      const reservas = await ReservaModel.listarTodos();
      console.log('Listagem de reservas:');
      return reservas;
    } catch (error) {
      console.log('Erro ao listar reservas:', error.message);
    }
  }

  static async listarPorColaborador(id_colaborador) {
    try {
      const reservas = await ReservaModel.listarPorColaborador(id_colaborador);
      if (reservas.length === 0) {
        return console.error('Nenhuma reserva encontrada para este colaborador!');
      }
      return reservas;
    } catch (error) {
      console.log('Erro ao buscar reservas:', error.message);
    }
  }

  static async deletarReserva(id_reserva) {
    try {
      const busca = await ReservaModel.listarPorId(id_reserva);
      if (busca.length === 0) {
        return console.error('Reserva não encontrada!');
      }

      await ReservaModel.deletarReserva(id_reserva);
      console.log('Reserva excluída com sucesso!');
    } catch (error) {
      console.log('Erro ao excluir reserva:', error.message);
    }
  }
}

export default ReservaController;
