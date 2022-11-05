CREATE TABLE postagem (
    id_postagem INT AUTO_INCREMENT PRIMARY KEY, 
    titulo_postagem VARCHAR(255) NOT NULL, 
    descricao_postagem VARCHAR(255) NOT NULL, 
    telefone_postagem VARCHAR(255) NOT NULL, 
    whatsapp_postagem VARCHAR(255) NOT NULL, 
    imagem_postagem VARCHAR(255) NOT NULL
);

CREATE TABLE cadastro (
    id_cadastro INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    nome_cadastro VARCHAR(255) NOT NULL, 
    email_cadastro VARCHAR(255) NOT NULL, 
    senha_cadastro VARCHAR(255) NOT NULL
);