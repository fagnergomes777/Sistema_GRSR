import client from '../../../config/database.js';

class SalaModel {
    // Criar uma nova sala
    static async criar(nome, andar, capacidade) {
        const dados = [nome, andar, capacidade];
        const consulta = `insert into sala(nome, andar, capacidade) values ($1, $2, $3) returning *;`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    // Listar todas as salas
    static async listarTodas() {
        const consulta = `select * from sala`;
        const resultado = await client.query(consulta);
        return resultado.rows;
    }

    // Atualizar uma sala existente
    static async atualizarSala(id_sala, nome, andar, capacidade) {
        const dados = [nome, andar, capacidade, id_sala];
        const consulta = `update sala set nome = $1, andar = $2, capacidade = $3 where id_sala = $4 returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    // Deletar uma sala pelo ID
    static async deletarSala(id_sala) {
        const dados = [id_sala];
        const consulta = `delete from sala where id_sala = $1`;
        await client.query(consulta, dados);
    }

    // Listar uma sala específica pelo ID
    static async listarPorId(id_sala) {
        const dados = [id_sala];
        const consulta = `select * from sala where id_sala = $1`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    // Contar o número total de salas
    static async totalSalas() {
        const consulta = `select count(id_sala) as total from sala`;
        const resultado = await client.query(consulta);
        return resultado.rows;
    }
}

export default SalaModel;
