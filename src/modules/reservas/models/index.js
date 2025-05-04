import client from '../../../config/database.js';

class ReservaModel {
  static async criar(data, hora_inicio, hora_fim, motivo, status, id_colaborador, id_sala) {
    const dados = [data, hora_inicio, hora_fim, motivo, status, id_colaborador, id_sala];
    const consulta = `
      INSERT INTO reservas (data, hora_inicio, hora_fim, motivo, status, id_colaborador, id_sala)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async listarTodos() {
    const consulta = `SELECT * FROM reservas;`;
    const resultado = await client.query(consulta);
    return resultado.rows;
  }

  static async listarPorId(id_reserva) {
    const dados = [id_reserva];
    const consulta = `SELECT * FROM reservas WHERE id_reserva = $1;`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async listarPorColaborador(id_colaborador) {
    const dados = [id_colaborador];
    const consulta = `SELECT * FROM reservas WHERE id_colaborador = $1;`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async atualizarReserva(id_reserva, data, hora_inicio, hora_fim, motivo, status) {
    const dados = [data, hora_inicio, hora_fim, motivo, status, id_reserva];
    const consulta = `
      UPDATE reservas
      SET data = $1,
          hora_inicio = $2,
          hora_fim = $3,
          motivo = $4,
          status = $5
      WHERE id_reserva = $6
      RETURNING *;
    `;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async deletarReserva(id_reserva) {
    const dados = [id_reserva];
    const consulta = `DELETE FROM reservas WHERE id_reserva = $1;`;
    await client.query(consulta, dados);
  }
}

export default ReservaModel;
