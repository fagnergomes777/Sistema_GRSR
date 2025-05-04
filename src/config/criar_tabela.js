import dotenv from 'dotenv';
dotenv.config();
import client from './database.js';

class CriarTabela {
  
  
  static async colaboradores() {
    const consulta = `
      CREATE TABLE IF NOT EXISTS colaboradores (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        telefone CHAR(11) NOT NULL,
        cargo VARCHAR(50),
        departamento VARCHAR(50),
        senha VARCHAR(255) NOT NULL
      );
    `;
    try {
      await client.query(consulta);
      console.log('Tabela colaboradores criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar tabela colaboradores:', error.message);
    }
  }

  
  static async reservas() {
    const consulta = `
      CREATE TABLE IF NOT EXISTS reservas (
        id SERIAL PRIMARY KEY,
        data DATE NOT NULL,
        hora_inicio TIME NOT NULL,
        hora_fim TIME NOT NULL,
        motivo VARCHAR(255) NOT NULL,
        status VARCHAR(20) DEFAULT 'pendente',
        id_colaborador INTEGER REFERENCES colaboradores(id) ON DELETE CASCADE,
        id_sala INTEGER REFERENCES salas(id_sala) ON DELETE CASCADE
      );
    `;
    try {
      await client.query(consulta);
      console.log('Tabela reservas criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar tabela reservas:', error.message);
    }
  }

  
  static async salas() {
    const consulta = `
      CREATE TABLE IF NOT EXISTS salas (
        id_sala SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        andar INTEGER NOT NULL,
        capacidade INTEGER NOT NULL
      );
    `;
    try {
      await client.query(consulta);
      console.log('Tabela salas criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar tabela salas:', error.message);
    }
  }
}

export default CriarTabela;
