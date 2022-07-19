// dynamically create the todo list - has to be in JS not HTML
// document.createElement
// for loops going through array of todos that we get from axios and put them onto the DOM



// classList property is an iterable, has a few methods that normal arrays don't
// .add, .remove, .toggle

const todoList = document.getElementById("todo-list")

function getData() {
    axios.get("https://api.vschool.io/lucijones/todo")
        .then(response => listData(response.data))
        .catch(error => console.log(error))
}

function listData(data) {
    clearListData()
    
    for(let i = 0; i < data.length; i++){
        makeTodo(data[i])
    }
}

function clearListData() {
    const element = document.getElementById("todo-list")
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

getData()


function makeTodo(todo) {
    const container = document.createElement("div")
    const title = document.createElement("h1")
    const description = document.createElement("p")
    const price = document.createElement("p")
    const imgUrl = document.createElement("img")
    const completedBox = document.createElement("div")
    const completed = document.createElement("p")
    const checkbox = document.createElement("input")
    const buttons = document.createElement("div")
    const editButton = document.createElement("button")
    const deleteButton = document.createElement("button")

    container.className = "item-box"
    container.id = "container"
    title.textContent = todo.title
    description.textContent = todo.description
    price.textContent = `$${todo.price}`
    imgUrl.src = todo.imgUrl
    imgUrl.className = "image"
    buttons.className = "buttons"
    editButton.textContent = "Edit"
    deleteButton.textContent = "Delete"
    completedBox.className = "completed-box"
    completed.textContent = "Completed"
    checkbox.setAttribute("type", "checkbox")
    
    todoList.appendChild(container)
    container.appendChild(title)
    container.appendChild(description)
    container.appendChild(price)
    container.appendChild(imgUrl)
    container.appendChild(buttons)
    buttons.appendChild(editButton)
    buttons.appendChild(deleteButton)
    container.appendChild(completedBox)
    completedBox.appendChild(completed)
    completedBox.appendChild(checkbox)
    

    checkbox.addEventListener("click", (e) => {
        if(checkbox.checked) {
            title.style.textDecoration = "line-through"

            const updates = {
                completed: true
            }

            axios.put(`https://api.vschool.io/lucijones/todo/${todo._id}`, updates)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
        } else if(!checkbox.checked) {
            title.style.textDecoration = "none"

            const updates = {
                completed: false
            }
            axios.put(`https://api.vschool.io/lucijones/todo/${todo._id}`, updates)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
        }
        
        
    })

    editButton.addEventListener("click", (e)=> {
        container.removeChild(title)
        container.removeChild(description)
        container.removeChild(price)
        container.removeChild(imgUrl)
        buttons.removeChild(editButton)
        // remove edit button and add save button?
        // toggle between them?

        const editForm = document.createElement("form")
        console.log(editForm)
        const titleInput = document.createElement("input")
        const descriptionInput = document.createElement("input")
        const priceInput = document.createElement("input")
        const ImgUrlInput = document.createElement("input")
        const saveButton = document.createElement("button")

        titleInput.setAttribute("type", "text")
        titleInput.setAttribute("name", "title-input")
        titleInput.value = todo.title
        descriptionInput.setAttribute("type", "text")
        descriptionInput.setAttribute("name", "description-input")
        descriptionInput.value = todo.description
        priceInput.setAttribute("type", "number")
        priceInput.setAttribute("name", "price-input")
        priceInput.value = todo.price
        ImgUrlInput.setAttribute("type", "text")
        ImgUrlInput.setAttribute("name", "img-url-input")
        ImgUrlInput.value = todo.imgUrl
        saveButton.textContent = "Save"

        console.log(titleInput)
        
        container.prepend(editForm)
        editForm.appendChild(titleInput)
        editForm.appendChild(descriptionInput)
        editForm.appendChild(priceInput)
        editForm.appendChild(ImgUrlInput)
        editForm.appendChild(saveButton)

        editForm.addEventListener("submit", function(e) {
            e.preventDefault()

            const edits = {
                title: editForm["title-input"].value,
                description: editForm["description-input"].value,
                price: editForm["price-input"].value,
                imgUrl: editForm["img-url-input"].value
            }

            axios.put(`https://api.vschool.io/lucijones/todo/${todo._id}`, edits)
                .then(response => getData())
                .catch(error => console.log(error))
        })
    })

    deleteButton.addEventListener("click", (e)=>{
        // console.log(e.target)
        axios.delete(`https://api.vschool.io/lucijones/todo/${todo._id}`)
            .then(response => todoList.removeChild(container))
            .catch(error => console.log(error))
        })
}

const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm["image-url"].value
    }

    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""
    todoForm["image-url"].value = ""

    axios.post("https://api.vschool.io/lucijones/todo", newTodo)
        .then(response => getData())
        .catch(error => console.log(error))
})




// from the scrimba video

// axios.get().then(()=>{
    // write a for loop in here that's going to call the makeTodo function for every todo
    // call the makeTodo function and pass in the todo
// })

// function makeTodo(){
    
// }

    // when we write our axios.post() we want to still be able to use the makeTodo function



    // div on the HTML with id="todo-list"; control styling with grid,etc in CSS file
    // each container inside the "todo-list" div

// const todoList = document.getElementById("todo-list")
    // the todo is going to be coming from the database, either an item in the array from the .get or the one we get from the .post
    // it'll have a .title, .description, ._id
// function makeTodo(todo){
//     // create the element
//     const container = document.createElement("div")
//     const title = document.createElement("h1")
        // <p>tag for the description
        // checkbox that says whether it's completed
        // edit button
//     const deleteButton = document.createElement("button")
//     // edit element (adding text or classNames)
//     title.textContent = todo.title
//     title.className = "title"
            // console.dir(title) will show how it's represented in JS, can find .style property, etc
//     deleteButton.textContent = "delete"
//     // append
//     todoList.appendChild(container)
        // the todoList will have a bunch of children named container
        // the container will have children named title, description, etc
//     container.appendChild(title)
//     container.appendChild(deleteButton)
    
//     deleteButton.addEventListener("click", (e)=>{
//         console.log(e.target)
//          axios.delete()
//         in the .then of the axios call you'll use parent.removeChild()
//          think of the parent and what child you're wanting to remove for example todoList.removeChild(container)
//          a few ways to remove the e.target
//          if console.dir(e.target) it'll have a .parentNode property
//     })
// }

// e is event object - tells us everything about the event
// e.target will be whatever got clicked
// using the delete button we want to delete its parent and make the axios call
// can make the axios call using todo._id
// have an axios call, and have a removeChild
// parent.removeChild()
// every time the makeTodo function runs it's like a new instance of the function
// it'll know the _id of the current todo, associated with this event