const form = document["travel-info"]

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const firstName = form["first-name"].value
    const lastName = form["last-name"].value
    const age = form.age.value
    const gender = form.gender.value
    const location = form.location.value

    const checkedFood = []
    const checkedBoxes = document.querySelectorAll("input[name=diet]:checked");
    for (let i = 0; i < checkedBoxes.length; i++) {
        checkedFood.push(checkedBoxes[i].value)
    }


    alert(`First name: ${firstName} \nLast Name: ${lastName} \nAge: ${age} \nGender: ${gender} \nDestination: ${location} \nDietary restrictions: ${checkedFood}`)
})
