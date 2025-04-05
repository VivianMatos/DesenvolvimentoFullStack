CREATE TABLE tarefas (
    id INT PRIMARY KEY,
    descricao TEXT NOT NULL,
    concluida BOOLEAN DEFAULT FALSE,
    usuario_id INT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
