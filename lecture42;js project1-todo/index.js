let todos = [
    {
        id: Date.now(),
        text: "Go to gym",
        isCompleted: true
    },
    {
        id: Date.now(),
        text: "Revision web dev",
        isCompleted: false
    },
    {
        id: Date.now(),
        text: "take class",
        isCompleted: false
    }
]
const todoform = document.querySelector("#todo-form")
const todoinput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")

todoform.addEventListener('submit', (e) => {
    e.preventDefault()

    const todovalue = todoinput.value;
    todos.push(todovalue)

    let newTodo = {
        id: Date.now(),
        text: todovalue,
        isCompleted: false
    }
    addTodo(newTodo)


})

function rendertodo() {
    todos.forEach(function (todo) {
        addTodo(todo)

    })
}

rendertodo()

function addTodo(todo) {
    const li = document.createElement("li")
    // li.textContent = todo.text
    // <li data-id="1" class="flex gap-2 border border-slate-300 p-3 rounded-xl">
    li.className = `flex gap-2 border border-slate-300 p-3 rounded-xl`
    li.innerHTML = `
                    <input data-id=${todo.id} type="checkbox">
                    <p class="flex-1">${todo.text}</p>
                    <div class="flex gap-2 ">
                        <button data-action="edit" data-id=${todo.id}>Edit</button>
                        <button data-action="delete" data-id=${todo.id}>Delete</button>
                    </div>
                </li>
    `
    todoList.append(li)
}

todoList.addEventListener('click', (e) => {
    // console.log(e.target.closest('button'));
    let btn = e.target.closest('button')
    let action = btn?.dataset.action;
    let id = btn?.dataset?.id
    let checkbox = e.target.closest('input[type="checkbox"]')

    if (action === "edit") {
        console.log("editing..")
    }
    if (action === "delete") {
        deleteTodo(e, id)
    }
    if (action === "toogle") {
        todos = todos.map((todo) => {
            if (todo.id === Number(id)) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })
        localStorage.setItem("todos", JSON.stringify(todos))
        rendertodo()
    }
})

function deleteTodo(e, id) {
    e.target.closest('li').remove()

    todos = todos.filter((todo) => {
        if (todo.id !== Number(id)) {
            return todo
        }
    })
    rendertodo
}