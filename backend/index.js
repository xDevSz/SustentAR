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
  password: '@Dudu2801',
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

// Endpoint para cadastro com hash de senha
app.post('/api/cadastrar', async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).send('Dados incompletos.');
  }

  try {
    const hashedPassword = await bcrypt.hash(senha, 10); // Hash da senha
    const query = 'INSERT INTO usuarios (usua_nome, usua_email, usua_senha) VALUES (?, ?, ?)';
    db.query(query, [nome, email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Erro ao cadastrar usuário:', err);
        return res.status(500).send({
          error: 'Erro ao cadastrar usuário',
          details: err.message
        });
      }
      res.status(200).send('Usuário cadastrado com sucesso!');
    });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).send('Erro no servidor');
  }
});

// Endpoint para login com validação de senha e geração de JWT
app.post('/api/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).send('E-mail e senha são obrigatórios.');
  }

  const query = 'SELECT * FROM usuarios WHERE usua_email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).send('Erro no servidor');
    }

    if (results.length === 0) {
      return res.status(401).send('E-mail ou senha incorretos.');
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(senha, user.usua_senha);

    if (!isPasswordValid) {
      return res.status(401).send('E-mail ou senha incorretos.');
    }

    // Gera o token JWT
    const token = jwt.sign({ id: user.usua_id_usuario }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login bem-sucedido!', token });
  });
});


// Middleware de autenticação para verificar JWT
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    console.log('Token não fornecido.');
    return res.status(403).send('Acesso negado.');
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], secretKey);
    req.user = decoded;
    console.log('Usuário autenticado:', req.user);
    next();
  } catch (error) {
    console.log('Erro ao verificar o token:', error.message);
    res.status(401).send('Token inválido.');
  }
};





// Endpoint para envio de denúncia com imagem como BLOB
app.post('/api/denuncia', authenticateJWT, upload.single('imagens'), async (req, res) => {
  try {
    console.log('Usuário autenticado no endpoint de denúncia:', req.user);
    console.log('Requisição recebida:', req.body);
    console.log('Arquivo recebido:', req.file);

    const { opcaoSelecionada, localizacao, manterAnonimo } = req.body;
    const imagemParaSalvar = req.file ? req.file.buffer : null;

    if (!opcaoSelecionada || !localizacao) {
      return res.status(400).json({ message: 'Dados faltando', data: req.body });
    }

    if (!imagemParaSalvar) {
      console.log('Imagem não recebida corretamente.');
      return res.status(400).json({ message: 'Nenhuma imagem foi enviada' });
    }

    const query = 'INSERT INTO denuncias (denu_id_usuario, denu_imagem, denu_categoria, denu_localizacao, denu_manter_anonimo, denu_dt_denuncia) VALUES (?, ?, ?, ?, ?, NOW())';
    db.query(query, [req.user.id, imagemParaSalvar, opcaoSelecionada, localizacao, manterAnonimo ? 1 : 0], (err, results) => {
      if (err) {
        console.error('Erro ao salvar denúncia no banco de dados:', err);
        return res.status(500).json({ message: 'Erro no servidor', error: err.message });
      }
      console.log('Denúncia salva com sucesso:', results);
      res.status(200).json({ message: 'Denúncia enviada com sucesso' });
    });

  } catch (error) {
    console.error('Erro ao processar a denúncia:', error);
    res.status(500).json({ message: 'Erro no servidor', error: error.message });
  }
});








const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
