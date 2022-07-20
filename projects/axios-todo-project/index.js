// dynamically create the todo list - has to be in JS not HTML
// document.createElement
// for loops going through array of todos that we get from axios and put them onto the DOM
<<<<<<< HEAD



// classList property is an iterable, has a few methods that normal arrays don't
// .add, .remove, .toggle

const todoList = document.getElementById("todo-list")

=======
 
 
 
// classList property is an iterable, has a few methods that normal arrays don't
// .add, .remove, .toggle
 
const todoList = document.getElementById("todo-list")
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
function getData() {
    axios.get("https://api.vschool.io/lucijones/todo")
        .then(response => listData(response.data))
        .catch(error => console.log(error))
}
<<<<<<< HEAD

function listData(data) {
    clearListData()
    
=======
 
function listData(data) {
    clearListData()
   
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
    for(let i = 0; i < data.length; i++){
        makeTodo(data[i])
    }
}
<<<<<<< HEAD

=======
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
function clearListData() {
    const element = document.getElementById("todo-list")
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}
<<<<<<< HEAD

getData()


=======
 
getData()
 
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
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
<<<<<<< HEAD

=======
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
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
<<<<<<< HEAD
    
=======
   
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
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
<<<<<<< HEAD
    

    checkbox.addEventListener("click", (e) => {
        if(checkbox.checked) {
            title.style.textDecoration = "line-through"

            const updates = {
                completed: true
            }

=======
   
 
    checkbox.addEventListener("click", (e) => {
        if(checkbox.checked) {
            title.style.textDecoration = "line-through"
 
            const updates = {
                completed: true
            }
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
            axios.put(`https://api.vschool.io/lucijones/todo/${todo._id}`, updates)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
        } else if(!checkbox.checked) {
            title.style.textDecoration = "none"
<<<<<<< HEAD

=======
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
            const updates = {
                completed: false
            }
            axios.put(`https://api.vschool.io/lucijones/todo/${todo._id}`, updates)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
        }
<<<<<<< HEAD
        
        
    })

=======
       
       
    })
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
    editButton.addEventListener("click", (e)=> {
        container.removeChild(title)
        container.removeChild(description)
        container.removeChild(price)
        container.removeChild(imgUrl)
        buttons.removeChild(editButton)
        // remove edit button and add save button?
        // toggle between them?
<<<<<<< HEAD

=======
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
        const editForm = document.createElement("form")
        console.log(editForm)
        const titleInput = document.createElement("input")
        const descriptionInput = document.createElement("input")
        const priceInput = document.createElement("input")
        const ImgUrlInput = document.createElement("input")
        const saveButton = document.createElement("button")
<<<<<<< HEAD

=======
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
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
<<<<<<< HEAD

        console.log(titleInput)
        
=======
 
        console.log(titleInput)
       
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
        container.prepend(editForm)
        editForm.appendChild(titleInput)
        editForm.appendChild(descriptionInput)
        editForm.appendChild(priceInput)
        editForm.appendChild(ImgUrlInput)
        editForm.appendChild(saveButton)
<<<<<<< HEAD

        editForm.addEventListener("submit", function(e) {
            e.preventDefault()

=======
 
        editForm.addEventListener("submit", function(e) {
            e.preventDefault()
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
            const edits = {
                title: editForm["title-input"].value,
                description: editForm["description-input"].value,
                price: editForm["price-input"].value,
                imgUrl: editForm["img-url-input"].value
            }

<<<<<<< HEAD
=======
            editForm["price-input"].value = 0
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
            axios.put(`https://api.vschool.io/lucijones/todo/${todo._id}`, edits)
                .then(response => getData())
                .catch(error => console.log(error))
        })
    })
<<<<<<< HEAD

=======
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
    deleteButton.addEventListener("click", (e)=>{
        // console.log(e.target)
        axios.delete(`https://api.vschool.io/lucijones/todo/${todo._id}`)
            .then(response => todoList.removeChild(container))
            .catch(error => console.log(error))
        })
}
<<<<<<< HEAD

const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e) {
    e.preventDefault()

=======
 
const todoForm = document["todo-form"]
 
todoForm.addEventListener("submit", function(e) {
    e.preventDefault()
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm["image-url"].value
    }
<<<<<<< HEAD

=======
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""
    todoForm["image-url"].value = ""
<<<<<<< HEAD

=======
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
    axios.post("https://api.vschool.io/lucijones/todo", newTodo)
        .then(response => getData())
        .catch(error => console.log(error))
})
<<<<<<< HEAD




// from the scrimba video

=======
 
 
 
 
// from the scrimba video
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
// axios.get().then(()=>{
    // write a for loop in here that's going to call the makeTodo function for every todo
    // call the makeTodo function and pass in the todo
// })
<<<<<<< HEAD

// function makeTodo(){
    
// }

    // when we write our axios.post() we want to still be able to use the makeTodo function



    // div on the HTML with id="todo-list"; control styling with grid,etc in CSS file
    // each container inside the "todo-list" div

=======
 
// function makeTodo(){
   
// }
 
    // when we write our axios.post() we want to still be able to use the makeTodo function
 
 
 
    // div on the HTML with id="todo-list"; control styling with grid,etc in CSS file
    // each container inside the "todo-list" div
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
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
<<<<<<< HEAD
    
=======
   
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
//     deleteButton.addEventListener("click", (e)=>{
//         console.log(e.target)
//          axios.delete()
//         in the .then of the axios call you'll use parent.removeChild()
//          think of the parent and what child you're wanting to remove for example todoList.removeChild(container)
//          a few ways to remove the e.target
//          if console.dir(e.target) it'll have a .parentNode property
//     })
// }
<<<<<<< HEAD

=======
 
>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
// e is event object - tells us everything about the event
// e.target will be whatever got clicked
// using the delete button we want to delete its parent and make the axios call
// can make the axios call using todo._id
// have an axios call, and have a removeChild
// parent.removeChild()
// every time the makeTodo function runs it's like a new instance of the function
<<<<<<< HEAD
// it'll know the _id of the current todo, associated with this event
=======
// it'll know the _id of the current todo, associated with this event

>>>>>>> 81175451261f8686a2e0f93ecbbb5d7614d162ca
