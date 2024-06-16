function ListDemo() {
    let todos = [
        {
            id: 1,
            task: 'Todo 1',
        },

        {
            id: 2,
            task: 'Todo 2',
        },

        {
            id: 3,
            task: 'Todo 3',
        },
    ]


    return (
        <div className="list-group">
            <h1>Todos</h1>

            {
                todos.map(todo => {
                    return Todo({ todo })
                })
            }
        </div>
    )
}

export default ListDemo

function Todo({ todo }) {

    let btnClickHandler = () => {
        alert(todo.id)
    };

    return <li className="list-group-item d-flex justify-content-between align-items-center"
        key={todo.id}>
        {todo.task}

        <button className="btn btn-primary btn-sm" onClick={btnClickHandler}>
            Click Me
        </button>
    </li>
}
