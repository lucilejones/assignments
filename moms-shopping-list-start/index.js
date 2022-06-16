const form = document.addItem
const list = document.getElementById("list")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    var item = form.title.value
    form.title.value = ""

    console.log(item)

    var li = document.createElement("li")
    li.style.textAlign = "center"
    li.style.marginBottom = "10px"
    list.append(li)

    var div = document.createElement("div")
    div.textContent = item
    li.append(div)

    var newInput = document.createElement("input")

    var editButton = document.createElement("button")
    editButton.textContent = "edit"
    editButton.style.margin = "2.5px"
    editButton.addEventListener("click", function () {
        div.remove()

        newInput.value = item
        li.prepend(newInput)
        console.log(newInput)
        editButton.remove()

        li.append(saveButton)
    })
    li.append(editButton)

    var deleteButton = document.createElement("button")
    deleteButton.textContent = "x"
    deleteButton.style.margin = "2.5px"
    deleteButton.addEventListener("click", function () {
        li.remove()
    })
    li.append(deleteButton)

    var saveButton = document.createElement("button")
    saveButton.textContent = "save"
    saveButton.style.margin = "2.5px"
    saveButton.addEventListener("click", function () {
        newItem = newInput.value
        console.log(newItem)
        var newDiv = document.createElement("div")
        newDiv.textContent = newItem
        li.prepend(newDiv)
        newInput.remove()
        saveButton.remove()
        li.append(editButton)
    })

    // possible solution:
    // use conditional statement to toggle between edit and save button (ternary statement?)
    // var saveButton = function () {
    //     if (editButton.textContent = "edit" && editButton.onclick) {
    //         editButton.textContent = "save";
    //         editButton.className = "save";
    //     } else {
    //         editButton.textContent = "edit";
    //         editButton.className = "edit";
    //     }
    // };

})



// javascript create delete button



