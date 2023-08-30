export default function () {
    const todos = useState("todos", () => [])

    const addTodo = (form) => {
        todos.value.push(form)
    }

    const completeTodo = (id) => {
        const todoIndex = todos.value.findIndex(obj => obj.id === id);
    
        if (todoIndex !== -1) {
            const updatedTodo = { ...todos.value[todoIndex] };
            updatedTodo.isCompleted = true;
    
            todos.value.splice(todoIndex, 1, updatedTodo);
        }
    };

    const deleteTodo = (id) => {
        const todoIndex = todos.value.findIndex(obj => obj.id === id);
        todos.value.splice(todoIndex, 1)
    }

    const deleteCompletedTodo = () => {
        const unDoneTodo = todos.value.filter(obj => !obj.isCompleted)
        todos.value = unDoneTodo
    }

    const deleteAllTodo = () => {
        todos.value = []
    }

    return {
        todos,
        addTodo,
        completeTodo,
        deleteTodo,
        deleteAllTodo,
        deleteCompletedTodo
    };
  }