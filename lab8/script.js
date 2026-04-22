//zadanie 1
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = new FormData(form);
    const object = {
        name: data.get("name_input"),
        surname: data.get("surname_input"),
        age: data.get("age_input")
    }
    console.log(object)
})


//zadanie 2 i 3
class ComplexNumber 
{
    constructor(re, im) {
        this.real = re;
        this.imaginary = im;
    }
    wypisz() {
        let znak;
        let re = this.real;
        let im = this.imaginary;
        if (this.imaginary < 0) { znak = ' - '; im = -im}
        else { znak = ' + '}
        return re + znak + im + 'i';
    }
    module() { return Math.sqrt(this.real**2 + this.imaginary**2); }
}
const liczba = new ComplexNumber(6, 7);
console.log(liczba.wypisz())
console.log(liczba.module())

function tablica_liczb(n) {
    let tablica = [];
    for (let i = 0; i < n; i++) {
        let re = Math.floor(Math.random() * 21) - 10;
        let im = Math.floor(Math.random() * 21) - 10;
        tablica.push(new ComplexNumber(re, im));
    }
    return tablica;
}
let tab = tablica_liczb(10);
tab.forEach(t => console.log(t.wypisz()));
console.log("----------------------------------------------------------------------");
//zadanie 4
let updatedTab = tab.filter(t => t.real > 0 && t.imaginary > 0);
updatedTab.forEach(t => console.log(t.wypisz()));
console.log("----------------------------------------------------------------------");
//zadanie 5
updatedTab = tab.map(t => new ComplexNumber(t.imaginary, t.real));
updatedTab.forEach(t => console.log(t.wypisz()));
//zadanie 6
const suma = tab.reduce((sum, prev) => sum + prev.module(), 0);
console.log(suma);
//zadanie 7
const min = tab.reduce((a, b) => a.module() < b.module() ? a : b);
console.log(min.module());
//zadanie 8
const max = tab.reduce((a, b) => a.module() > b.module() ? a : b);
console.log(max.wypisz());