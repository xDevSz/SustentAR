const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ifro',
  database: 'ecoplaint',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Endpoint para cadastro
app.post('/api/cadastrar', (req, res) => {
  // Verificar se os dados estão sendo recebidos corretamente
  console.log('Dados recebidos no backend:', req.body);

  const { nome, email, senha } = req.body;

  // Verificação básica de campos obrigatórios
  if (!nome || !email || !senha) {
    return res.status(400).send('Dados incompletos.');
  }

  // Consulta para inserir usuário no banco
  const query = 'INSERT INTO usuarios (usua_nome, usua_email, usua_senha) VALUES (?, ?, ?)';
  db.query(query, [nome, email, senha], (err, results) => {
    if (err) {
      // Log detalhado do erro
      console.error('Erro ao cadastrar usuário:', err);
      return res.status(500).send({
        error: 'Erro ao cadastrar usuário',
        details: err.message // Retornar detalhes do erro para ajudar no debug
      });
    }
    res.status(200).send('Usuário cadastrado com sucesso!');
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// Endpoint para login
app.post('/api/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).send('E-mail e senha são obrigatórios.');
  }

  // Consulta para verificar se o usuário existe no banco
  const query = 'SELECT * FROM usuarios WHERE usua_email = ? AND usua_senha = ?';
  db.query(query, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).send('Erro no servidor');
    }

    if (results.length === 0) {
      return res.status(401).send('E-mail ou senha incorretos.');
    }

    // Se o login for bem-sucedido, você pode enviar uma resposta de sucesso ou um token de autenticação
    res.status(200).send('Login bem-sucedido!');
  });
});
