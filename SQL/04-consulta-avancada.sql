-- Consulta que retorna nome do usuário e suas tarefas não concluídas
SELECT 
    u.nome AS nome_usuario,
    t.descricao AS tarefa,
    t.data_criacao
FROM 
    usuarios u
JOIN 
    tarefas t ON u.id = t.usuario_id
WHERE 
    t.concluida = FALSE
ORDER BY 
    t.data_criacao DESC;
