const form = document.getElementById("form")
const button = document.getElementById("ok")

button.addEventListener("click", () => {
    const data = new FormData(form)
    alert(`wynik z dzielenia: ${Number(data.get("one")) / Number(data.get("dwo"))}`)
})
