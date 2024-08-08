export default function ListaTarefas(){
    const tarefas = [ "Comprar café", "Estudar React", "Fazer exercícios" ];
    return (
        <div>
            <ol>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ol>
        </div>
    );
}