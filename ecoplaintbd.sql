use ecoplaint;

CREATE TABLE usuarios (
    usua_id INT AUTO_INCREMENT PRIMARY KEY,
    usua_email VARCHAR(255) NOT NULL,
    usua_senha VARCHAR(255) NOT NULL,
    usua_cpf VARCHAR(14) NOT NULL,
    usua_nome VARCHAR(100) NOT NULL,
    usua_cep VARCHAR(9) NOT NULL
);

CREATE TABLE localizacao (
    loca_id INT AUTO_INCREMENT PRIMARY KEY,
    loca_latitude DECIMAL(10, 8) NOT NULL,
    loca_longitude DECIMAL(11, 8) NOT NULL,
    loca_usuario_id INT NOT NULL,
    FOREIGN KEY (loca_usuario_id) REFERENCES usuarios(usua_id)
);

CREATE TABLE notificacoes (
    noti_id INT AUTO_INCREMENT PRIMARY KEY,
    noti_titulo VARCHAR(255) NOT NULL,
    noti_descricao TEXT NOT NULL,
    noti_data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    noti_usuario_id INT NOT NULL,
    FOREIGN KEY (noti_usuario_id) REFERENCES usuarios(usua_id)
);

CREATE TABLE perfil_usuario (
    perf_id INT AUTO_INCREMENT PRIMARY KEY,
    perf_usuario_id INT NOT NULL,
    perf_foto_perfil VARCHAR(255),
    perf_descricao TEXT,
    FOREIGN KEY (perf_usuario_id) REFERENCES usuarios(usua_id)
);

CREATE TABLE denuncia (
    denu_id INT AUTO_INCREMENT PRIMARY KEY,
    denu_titulo VARCHAR(255) NOT NULL,
    denu_descricao TEXT NOT NULL,
    denu_status ENUM('Pendente', 'Em andamento', 'Concluída') DEFAULT 'Pendente',
    denu_data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    denu_usuario_id INT NOT NULL,
    FOREIGN KEY (denu_usuario_id) REFERENCES usuarios(usua_id)
);

CREATE TABLE chat (
    chat_id INT AUTO_INCREMENT PRIMARY KEY,
    chat_mensagem TEXT NOT NULL,
    chat_data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    chat_de_usuario_id INT NOT NULL,
    chat_para_usuario_id INT NOT NULL,
    FOREIGN KEY (chat_de_usuario_id) REFERENCES usuarios(usua_id),
    FOREIGN KEY (chat_para_usuario_id) REFERENCES usuarios(usua_id)
);

CREATE TABLE loca_padrao_usuario (
    loca_padrao_id INT AUTO_INCREMENT PRIMARY KEY,
    loca_padrao_latitude DECIMAL(10, 8) NOT NULL,
    loca_padrao_longitude DECIMAL(11, 8) NOT NULL,
    loca_padrao_usuario_id INT NOT NULL,
    FOREIGN KEY (loca_padrao_usuario_id) REFERENCES usuarios(usua_id)
);

CREATE TABLE noti_usuario (
    noti_usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    noti_usuario_titulo VARCHAR(255) NOT NULL,
    noti_usuario_descricao TEXT NOT NULL,
    noti_usuario_data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    noti_usuario_usuario_id INT NOT NULL,
    FOREIGN KEY (noti_usuario_usuario_id) REFERENCES usuarios(usua_id)
);

CREATE TABLE denu_denuncia (
    denu_id INT AUTO_INCREMENT PRIMARY KEY,
    denu_titulo VARCHAR(255) NOT NULL,
    denu_descricao TEXT NOT NULL,
    denu_tipo ENUM('Ambiental', 'Trânsito', 'Outro') NOT NULL,
    denu_status ENUM('Pendente', 'Em andamento', 'Concluída') DEFAULT 'Pendente',
    denu_data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    denu_anonimo BOOLEAN DEFAULT FALSE,
    denu_usuario_id INT,
    FOREIGN KEY (denu_usuario_id) REFERENCES usuarios(usua_id)
);

CREATE TABLE denu_midia (
    denu_midia_id INT AUTO_INCREMENT PRIMARY KEY,
    denu_midia_tipo ENUM('Foto', 'Vídeo') NOT NULL,
    denu_midia_url VARCHAR(255) NOT NULL,
    denu_denuncia_id INT NOT NULL,
    FOREIGN KEY (denu_denuncia_id) REFERENCES denu_denuncia(denu_id)
);

CREATE TABLE analistas (
    anal_id INT AUTO_INCREMENT PRIMARY KEY,
    anal_nome VARCHAR(100) NOT NULL,
    anal_email VARCHAR(255) NOT NULL,
    anal_senha VARCHAR(255) NOT NULL
);

CREATE TABLE analista_denuncia_atribuida (
    analista_denuncia_atribuida_id INT AUTO_INCREMENT PRIMARY KEY,
    analista_denuncia_id INT NOT NULL,
    analista_id INT NOT NULL,
    FOREIGN KEY (analista_denuncia_id) REFERENCES denu_denuncia(denu_id) ON DELETE CASCADE,
    FOREIGN KEY (analista_id) REFERENCES analistas(anal_id) ON DELETE CASCADE
);

CREATE TABLE analista_comentario_denuncia (
    analista_comentario_id INT AUTO_INCREMENT PRIMARY KEY,
    analista_comentario_texto TEXT NOT NULL,
    analista_comentario_data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    analista_denuncia_id INT NOT NULL,
    analista_id INT NOT NULL,
    FOREIGN KEY (analista_denuncia_id) REFERENCES denu_denuncia(denu_id),
    FOREIGN KEY (analista_id) REFERENCES analistas(anal_id)
);


CREATE TABLE consc_recursos_educacionais (
    consc_recurso_id INT AUTO_INCREMENT PRIMARY KEY,
    consc_recurso_titulo VARCHAR(255) NOT NULL,
    consc_recurso_descricao TEXT NOT NULL,
    consc_recurso_url VARCHAR(255) NOT NULL
);

