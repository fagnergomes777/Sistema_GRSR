import client from '../../../config/database.js';

class ColaboradorModel {
    static async criar(nome, email, departamento) {
        const dados = [nome, email, departamento];
        const consulta = `
            INSERT INTO colaboradores (nome, email, departamento)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async listarTodos() {
        const consulta = `SELECT * FROM colaborador;`;
        const resultado = await client.query(consulta);
        return resultado.rows;
    }

    static async listarPorEmail(email) {
        const dados = [email];
        const consulta = `SELECT * FROM colaborador WHERE email = $1;`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async atualizar(nome, email, departamento) {
        const dados = [nome, email, departamento];
        const consulta = `
            UPDATE colaborador
            SET nome = $1, departamento = $3
            WHERE email = $2
            RETURNING *;
        `;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async deletar(email) {
        const dados = [email];
        const consulta = `DELETE FROM colaborador WHERE email = $1;`;
        await client.query(consulta, dados);
    }

    static async deletarTodos() {
        const consulta = `DELETE FROM colaborador;`;
        await client.query(consulta);
    }

    static async totalColaboradores() {
        const consulta = `SELECT COUNT(email) AS total FROM colaborador;`;
        const resultado = await client.query(consulta);
        return resultado.rows;
    }
}

export default ColaboradorModel;
