CREATE DATABASE Ecoplaint;
USE Ecoplaint;

-- Cadastrar e fazer login
CREATE TABLE usuarios (
    usua_id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    usua_nome VARCHAR(100) NOT NULL,
    usua_email VARCHAR(100) UNIQUE NOT NULL,
    usua_senha VARCHAR(255) NOT NULL,
    usua_foto_perfil BLOB, -- Para armazenar a foto de perfil do usuário
    usua_idioma_preferido VARCHAR(50) DEFAULT 'Português', -- Para armazenar o idioma preferido do usuário
    usua_configuracoes_privacidade JSON, -- Para armazenar configurações de privacidade e segurança
    usua_notificacoes JSON, -- Para armazenar preferências de notificações
    usua_dt_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Esqueceu a senha
CREATE TABLE tokens_redefinicao_senha (
    toke_id_token INT AUTO_INCREMENT PRIMARY KEY,
    toke_id_usuario INT,
    toke_token VARCHAR(255) NOT NULL,
    toke_expira_em TIMESTAMP NOT NULL,
    FOREIGN KEY (toke_id_usuario) REFERENCES usuarios(usua_id_usuario)
);

-- Denúncias
CREATE TABLE denuncias (
    denu_id_denuncia INT AUTO_INCREMENT PRIMARY KEY,
    denu_id_usuario INT,
    denu_imagem BLOB, -- Para armazenar a imagem enviada na denúncia
    denu_categoria VARCHAR(100) NOT NULL, -- Para armazenar a categoria selecionada, ex: "Queimadas Ambientais"
    denu_localizacao VARCHAR(255) NOT NULL, -- Armazena a localização fornecida
    denu_manter_anonimo BOOLEAN DEFAULT FALSE, -- Indica se a denúncia foi feita anonimamente
    denu_dt_denuncia TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (denu_id_usuario) REFERENCES usuarios(usua_id_usuario)
);

-- Tabela para armazenar as opções de suporte
CREATE TABLE suporte (
    supo_id_suporte INT AUTO_INCREMENT PRIMARY KEY,
    supo_id_usuario INT,
    supo_tipo_suporte VARCHAR(100), -- Ex: Contato, FAQs, Reportar um Problema
    supo_mensagem TEXT, -- Detalhes da solicitação ou problema
    supo_dt_solicitacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (supo_id_usuario) REFERENCES usuarios(usua_id_usuario)
);

-- Tabela para armazenar notificações dos usuários
CREATE TABLE notificacoes (
    noti_id_notificacao INT AUTO_INCREMENT PRIMARY KEY,
    noti_id_usuario INT,
    noti_tipo_notificacao VARCHAR(100) NOT NULL, -- Ex: Email, SMS, Push Notification
    noti_mensagem TEXT NOT NULL, -- Mensagem da notificação
    noti_lida BOOLEAN DEFAULT FALSE, -- Indica se a notificação foi lida
    noti_dt_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data e hora de envio da notificação
    FOREIGN KEY (noti_id_usuario) REFERENCES usuarios(usua_id_usuario)
);
