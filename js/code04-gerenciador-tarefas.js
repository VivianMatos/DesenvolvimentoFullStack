function gerenciadorDeTarefas() {
    let tarefas = [];

    return {
        adicionar: function(tarefa) {
            tarefas.push(tarefa);
            console.log(`Tarefa "${tarefa}" adicionada com sucesso.`);
        },

        remover: function(tarefa) {
            const index = tarefas.indexOf(tarefa);
            if (index !== -1) {
                tarefas.splice(index, 1);
                console.log(`Tarefa "${tarefa}" removida com sucesso.`);
            } else {
                console.log(`Tarefa "${tarefa}" não encontrada.`);
            }
        },

        listar: function() {
            console.log("Lista de Tarefas:");
            tarefas.forEach((tarefa, i) => {
                console.log(`${i + 1}. ${tarefa}`);
            });
        }
    };
}

// Exemplo de uso:
const minhasTarefas = gerenciadorDeTarefas();

minhasTarefas.adicionar("Estudar JavaScript");
minhasTarefas.adicionar("Fazer o TCC");
minhasTarefas.listar();

minhasTarefas.remover("Estudar JavaScript");
minhasTarefas.listar();
