const form = document["baddies-caught"]


form.addEventListener("submit", function (event) {
    event.preventDefault()

    const totalGoombas = form.goombas.value
    const totalBobombs = form.bobombs.value
    const totalCheepcheeps = form.cheepcheeps.value

    const totalNumber = +totalGoombas + +totalBobombs + +totalCheepcheeps
    const totalCaught = document.getElementById("total-caught")
    totalCaught.textContent = totalNumber

    const totalAmount = (+totalGoombas * 5) + (+totalBobombs * 7) + (+totalCheepcheeps * 11)
    // const totalPrice = document.getElementById("total-price")
    // totalPrice.textContent = totalAmount
    document.getElementById("total-price").textContent = totalAmount
})



