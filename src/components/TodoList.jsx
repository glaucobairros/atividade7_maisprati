/* 3. Lista de Tarefas: Crie um aplicativo de lista de tarefas (to-do list) onde o usuário pode adicionar
e remover tarefas. Use useState para armazenar a lista de tarefas e renderize cada tarefa como um item de lista.
Desafio: permita que o usuário marque as tarefas como concluídas e filtre para ver apenas as tarefas pendentes. */


import React, { useState } from "react"
import '../css/TodoList.css'

function TodoList() {
    const [tasks, setTasks] = useState([]) //tasks armazena a lista de tarefas
    const [newTask, setNewTask] = useState('') //newTask armazena o texto da nova tarefa a ser adicionada
    const [filter, setFilter] = useState('all') //filter controla o filtro aplicado (Todas ou Pendentes)


    //Função para adicionar uma nova tarefa à lista
    const addTask = () => {
        if (newTask.trim() !== '') { // verifica se o campo da tarefa não está vazio
            setTasks([...tasks, { text: newTask, completed: false }]) //adiciona a nova tarefa ao array de tarefas
            setNewTask('') // limpa o campo após adicionar
        }
    }


    //Função para remover uma tarefa da lista pelo índice
    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index)) //filtra mantendo apenas as tarefas que não possuem o índice fornecido
    }


    //Função para alternar o estado de conclusão de uma tarefa específica
    const toggleTaskCompletion = (index) => {
        setTasks(
            tasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task)
            //verifica se a tarefa atual é a que deve ser alterada 
            //(caso sim, modifica a propriedade completed para o inverso de seu valor atual)
            //se i !== index, não faz nenhuma alteração
        )
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'all') { //mostra todas as tarefas
            return true
        }
        if (filter === 'pending') { //mostra apenas as tarefas pendendes (completed = false)
            return !task.completed
        }
        return false
    })

    return (
        <div className="toDoList-div">
            <h2>Lista de Tarefas</h2>

            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Digite uma nova tarefa"
            />
            <button onClick={addTask} className="addTaskBtn">Adicionar Tarefa</button>

            <div className="tasks">
                <button className="all-btn" onClick={() => setFilter('all')}>Todas</button>
                <button className="pending-btn" onClick={() => setFilter('pending')}>Pendentes</button>
            </div>

            <ul>
                {filteredTasks.map((task, index) => (
                    <li key={index}>
                        <span onClick={() => toggleTaskCompletion(index)}
                            style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}>
                            {/* Caso a tarefa esteja concluída, seu texto é exibido riscado */}
                            {task.text}
                        </span>
                        <button className="remove-btn" onClick={() => removeTask(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList