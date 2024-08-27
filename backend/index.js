const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const multer = require('multer');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'secreta'; // Guarde essa chave de forma segura


const app = express();

// Configuração do multer para upload de arquivos em memória
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Configuração do Express
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

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
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).send('Dados incompletos.');
  }

  const query = 'INSERT INTO usuarios (usua_nome, usua_email, usua_senha) VALUES (?, ?, ?)';
  db.query(query, [nome, email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);
      return res.status(500).send({
        error: 'Erro ao cadastrar usuário',
        details: err.message
      });
    }
    res.status(200).send('Usuário cadastrado com sucesso!');
  });
});

// Endpoint para login
app.post('/api/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).send('E-mail e senha são obrigatórios.');
  }

  const query = 'SELECT * FROM usuarios WHERE usua_email = ? AND usua_senha = ?';
  db.query(query, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).send('Erro no servidor');
    }

    if (results.length === 0) {
      return res.status(401).send('E-mail ou senha incorretos.');
    }

    res.status(200).send('Login bem-sucedido!');
  });
});



// Endpoint para envio de denúncia com imagem como BLOB
app.post('/api/denuncia', async (req, res) => {
  try {
    const { imagens, opcaoSelecionada, localizacao, manterAnonimo, usuarioId } = req.body;

    // Verifica se todos os campos obrigatórios estão presentes
    if (!opcaoSelecionada || !localizacao || !usuarioId) {
      return res.status(400).json({ message: 'Dados faltando', data: req.body });
    }

    // Converte a localização de volta para um objeto, se necessário
    const localizacaoObjeto = JSON.parse(localizacao);

    // Verifica se imagens é um array e se a primeira imagem não é nula
    const imagemParaSalvar = (Array.isArray(imagens) && imagens.length > 0) ? imagens[0] : null;

    // Salvar a denúncia no banco de dados
    const query = 'INSERT INTO denuncias (denu_id_usuario, denu_imagem, denu_categoria, denu_localizacao, denu_manter_anonimo, denu_dt_denuncia) VALUES (?, ?, ?, ?, ?, NOW())';
    db.query(query, [usuarioId, imagemParaSalvar, opcaoSelecionada, localizacaoObjeto, manterAnonimo ? 1 : 0], (err, results) => {
      if (err) {
        console.error('Erro ao salvar denúncia no banco de dados:', err);
        return res.status(500).json({ message: 'Erro no servidor', error: err.message });
      }
      res.status(200).json({ message: 'Denúncia enviada com sucesso' });
    });

  } catch (error) {
    console.error('Erro ao processar a denúncia:', error);
    res.status(500).json({ message: 'Erro no servidor', error: error.message });
  }
});



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
