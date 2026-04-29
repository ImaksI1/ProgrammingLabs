const button = document.getElementById("przycisk");
const wynik_label = document.getElementById("wynik");
const click_upgrade_button = document.getElementById("clickUpgrade");
const passive_upgrade_button = document.getElementById("passiveUpgrade");
const m = document.getElementById("m");
const p = document.getElementById("p");

let m_click = 1;
let p_click = 0;
let m_cena = 0;
let p_cena = 0;

const p_text = "Upgrade passive earn cena: ";
const m_text = "Upgrade click cena: ";
const m_label = "1 klik daje: "
const p_label = "pasywne klikniecia: "
const updatePassiveEarnings = () => {
    let currentTime = Date.now();
    let lastActivity = Number(localStorage.getItem("lastActivity")) || currentTime;
    let timeDiff = (currentTime - lastActivity) / 1000;

    let passiveEarned = Math.floor(timeDiff) * p_click;
    if (passiveEarned > 0) {
        let currentWynik = Number(localStorage.getItem("wynik")) || 0;
        currentWynik += passiveEarned;
        localStorage.setItem("wynik", currentWynik);
        localStorage.setItem("lastActivity", currentTime);
        
    }
};

const userActivity = () => {
    localStorage.setItem("lastActivity", Date.now());
};

const aktualizujStrone = () => {
    m.textContent = `${m_label} ${m_click}`;
    p.textContent = `${p_label} ${p_click}`;
    m_click = Number(localStorage.getItem("m_click")) || 1;
    p_click = Number(localStorage.getItem("p_click")) || 0;

    m_cena = Math.round(25 * (1.3 * m_click));
    p_cena = Math.round(25 * (1.6 * (p_click + 1)));

    wynik_label.textContent = localStorage.getItem("wynik");
    click_upgrade_button.textContent = `${m_text} ${m_cena}`;
    passive_upgrade_button.textContent = `${p_text} ${p_cena}`;
};

window.onload = () => {
    userActivity()
    updatePassiveEarnings()
    let wynik = Number(localStorage.getItem("wynik"));

    if (isNaN(wynik)) {
        localStorage.setItem("wynik", 0);
    }

    aktualizujStrone();

    setInterval(() => {
        let currentWynik = Number(localStorage.getItem("wynik")) || 0;
        currentWynik += p_click;
        localStorage.setItem("wynik", currentWynik);
        localStorage.setItem("lastActivity", Date.now());
        aktualizujStrone()
    }, 1000);
};

button.addEventListener("click", () => {
    let wynik = Number(localStorage.getItem("wynik")) || 0;
    wynik += m_click;
    localStorage.setItem("wynik", wynik);
    aktualizujStrone();
});

click_upgrade_button.addEventListener("click", () => {
    let wynik = Number(localStorage.getItem("wynik")) || 0;

    if (wynik >= m_cena) {
        wynik -= m_cena;
        localStorage.setItem("wynik", wynik);
        
        m_click += 1; 
        localStorage.setItem("m_click", m_click);
        
        aktualizujStrone();
    } else {
        alert("Not enough points for the upgrade!");
    }
});

passive_upgrade_button.addEventListener("click", () => {
    let wynik = Number(localStorage.getItem("wynik")) || 0;

    if (wynik >= p_cena) {
        wynik -= p_cena;
        localStorage.setItem("wynik", wynik);

        p_click += 1;
        localStorage.setItem("p_click", p_click);

        aktualizujStrone();
    }
});