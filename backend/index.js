const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const server = express();
server.use(express.json());

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

server.use(cors(corsOptions));


const PORT = 3000;

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'senac'
  });

// Conexão ao banco de dados
connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão com o banco de dados estabelecida');
  });

// Retorna um aluno por id
server.get('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const SELECT_ALUNO_QUERY = 'SELECT * FROM Alunos WHERE id = ?';
    
    connection.query(SELECT_ALUNO_QUERY, [id], (error, results) => {
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
  
      if (results.length === 0) {
        res.status(404).json({ message: 'Aluno não encontrado' });
        return;
      }
  
      res.json({ aluno: results[0] });
    });
  });
  

// Retorna todos os alunos do banco de dados
server.get('/alunos', (req, res) => {
    connection.query('SELECT Alunos.id, Alunos.nome, Alunos.turma, Notas.nota1, Notas.nota2, Notas.mf, Disciplinas.nome AS nome_disciplina FROM Alunos LEFT JOIN Notas ON Alunos.id = Notas.aluno_id LEFT JOIN Alunos_Disciplinas ON Alunos.id = Alunos_Disciplinas.aluno_id LEFT JOIN Disciplinas ON Alunos_Disciplinas.disciplina_id = Disciplinas.id', (error, results) => {
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      res.json({ alunos: results });
    });
  });


// Cria um novo aluno no banco de dados
server.post('/alunos', (req, res) => {
  const { nome, turma, disciplinas, notas } = req.body;

  const INSERT_ALUNO_QUERY = 'INSERT INTO Alunos (nome, turma) VALUES (?, ?)';
  connection.query(INSERT_ALUNO_QUERY, [nome, turma], (error, result) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    const alunoId = result.insertId;

    // Inserir disciplinas associadas ao aluno na tabela Alunos_Disciplinas
    if (disciplinas && disciplinas.length > 0) {
      const INSERT_ALUNOS_DISCIPLINAS_QUERY = 'INSERT INTO Alunos_Disciplinas (aluno_id, disciplina_id) VALUES ?';
      const values = disciplinas.map((disciplinaId) => [alunoId, disciplinaId]);

      connection.query(INSERT_ALUNOS_DISCIPLINAS_QUERY, [values], (error) => {
        if (error) {
          res.status(500).json({ error: error.message });
          return;
        }
      });
    }

    // Inserir notas associadas ao aluno na tabela Notas
    if (notas && notas.length > 0) {
      const INSERT_NOTAS_QUERY = 'INSERT INTO Notas (aluno_id, disciplina, nota1, nota2, mf) VALUES ?';
      const values = notas.map((nota) => [alunoId, nota.disciplina, nota.n1, nota.n2, (nota.n1 + nota.n2) / 2]);

      connection.query(INSERT_NOTAS_QUERY, [values], (error) => {
        if (error) {
          res.status(500).json({ error: error.message });
          return;
        }
      });
    }

    res.json({ message: 'Aluno adicionado com sucesso', alunoId });
  });
});

// Atualiza um aluno no banco de dados
server.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, turma, disciplina, n1, n2  } = req.body;
    const mf = (Number(n1) + Number(n2)) / 2; // Cálculo da média final
    const UPDATE_ALUNO_QUERY = 'UPDATE Alunos SET nome = ?, turma = ?, disciplina = ?, n1 = ?, n2 = ?, mf = ? WHERE id = ?';
    connection.query(UPDATE_ALUNO_QUERY, [nome, turma, disciplina, n1, n2, mf, id], (error, result) => {
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      res.json({ message: 'Aluno atualizado com sucesso' });
    });
  });

// Deleta um aluno do banco de dados
server.delete('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const DELETE_ALUNO_QUERY = 'DELETE FROM Alunos WHERE id = ?';
    connection.query(DELETE_ALUNO_QUERY, [id], (error, result) => {
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      res.json({ message: 'Aluno deletado com sucesso' });
    });
  });
  

// Iniciar o servidor
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });