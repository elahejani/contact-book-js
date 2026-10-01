const names = document.getElementById("name")
const numbers = document.getElementById("num")
const addbtn = document.querySelector(".btn")
const unorderdlist = document.querySelector("ul")
const contact = []
function deleteContact(index) {
    contact.splice(index, 1)
}
addbtn.addEventListener("click", () => {
    const namevalue = names.value
    const numbervalue = numbers.value
    const person = {
        name: namevalue,
        number: numbervalue
    }
    contact.push(person)
    const index = contact.length - 1
    const li = document.createElement("li")
    const Deletebutton = document.createElement("button")
    Deletebutton.textContent = 'delete'
    Deletebutton.addEventListener("click", () => {
        deleteContact(index)
        li.remove()
    })
    const Editbutton = document.createElement("button")
    Editbutton.textContent = 'edit'
    Editbutton.addEventListener("click", () => {
        alert(" شماره هارو با دقت وارد کن ")
    })

    const title = document.createElement("span")
    title.textContent = namevalue

    const phone = document.createElement("span")
    phone.textContent = numbervalue
    const buttons = document.createElement("div")
    buttons.classList.add("buttons")
    buttons.appendChild(Editbutton)
    buttons.appendChild(Deletebutton)
    li.appendChild(title)
    li.appendChild(phone)
    li.appendChild(buttons)

    unorderdlist.appendChild(li)
})


