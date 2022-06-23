const additionForm = document.addition

additionForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const num1 = additionForm["first-number"].value
    const num2 = additionForm["second-number"].value
    additionForm["first-number"].value = ""
    additionForm["second-number"].value = ""

    const result = +num1 + +num2

    const h3 = document.getElementById("add-result")
    h3.textContent = `${num1} + ${num2} = ${result}.`
})

const subtractionForm = document.subtraction

subtractionForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const num1 = subtractionForm["first-number"].value
    const num2 = subtractionForm["second-number"].value
    subtractionForm["first-number"].value = ""
    subtractionForm["second-number"].value = ""

    const result = +num1 - +num2

    const h3 = document.getElementById("subtract-result")
    h3.textContent = `${num1} - ${num2} = ${result}.`
})

const multiplicationForm = document.multiplication

multiplicationForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const num1 = multiplicationForm["first-number"].value
    const num2 = multiplicationForm["second-number"].value
    multiplicationForm["first-number"].value = ""
    multiplicationForm["second-number"].value = ""

    const result = +num1 * +num2

    const h3 = document.getElementById("multiply-result")
    h3.textContent = `${num1} x ${num2} = ${result}.`
})