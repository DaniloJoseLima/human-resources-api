import { afterAll, beforeAll, describe, expect, test } from "@jest/globals"
import mysql, { Connection } from 'mysql2/promise';
import { fail } from "assert";
import 'dotenv/config'

let connection: Connection;

beforeAll(async () => {
  const port = process.env.DB_PORT as number | undefined
  const connectionConfig: mysql.PoolOptions = {
    port: port,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };
  connection = mysql.createPool(connectionConfig);
})

describe("/user", () => {
  describe("POST /", () => {
    test('Creat', async () => {
      expect(connection).toBeDefined();
      const rows = await connection.execute(`INSERT INTO users (id, role_id, name, email, password) VALUES ('fa170779-8111-4dbb-8573-0bbc880f8da1', '1', 'Teste', 'teste@teste.com', '123456');
      `);
      if (Array.isArray(rows)) {
        expect(rows.length).toBeGreaterThan(0);
      } else {
        fail('Erro ao criar usuário');
      }
    });
  })
  describe("GET /", () => {
    test('findAll', async () => {
      expect(connection).toBeDefined();
      const [rows] = await connection.execute('SELECT * FROM users');
      if (Array.isArray(rows)) {
        expect(rows.length).toBeGreaterThan(0);
      } else {
        fail('Erro ao consultar usuários');
      }
    });
    test('find/:id', async () => {
      expect(connection).toBeDefined();
      const [rows] = await connection.execute("SELECT * FROM users WHERE id = 'fa170779-8111-4dbb-8573-0bbc880f8da1'");
      if (Array.isArray(rows)) {
        expect(rows.length).toBeGreaterThan(0);
      } else {
        fail('Erro ao consutar usuário');
      }
    });
  })
  describe("PUT /", () => {
    test('update', async () => {
      expect(connection).toBeDefined();
      const rows = await connection.execute(`UPDATE users SET name = 'Teste' WHERE (id = 'fa170779-8111-4dbb-8573-0bbc880f8da1')`);
      if (Array.isArray(rows)) {
        expect(rows.length).toBeGreaterThan(0);
      } else {
        fail('Erro ao atualizar');
      }
    });
  })
  describe("DELETE /", () => {
    test('update', async () => {
      expect(connection).toBeDefined();
      const rows = await connection.execute(`DELETE FROM users WHERE (id = 'fa170779-8111-4dbb-8573-0bbc880f8da1')`);
      if (Array.isArray(rows)) {
        expect(rows.length).toBeGreaterThan(0);
      } else {
        fail('Erro ao deletar');
      }
    });
  })
})


afterAll(async () => {
  if (connection) {
    await connection.end();
  }
});