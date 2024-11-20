1 let Tasks = [
    {"titolo": "Studiare Italiano", "done" : false},
    {"titolo": "Giocare a Basket", "done" : false},
    {"titolo": "Svegliarsi" , "done": true},
];

let elencoAzioniSvolte = document.getElementById
("ul-done")
let elencoAzioniDaSvolgere = document.getElementById
("ul-not-done")

let azioni = "";

Tasks.forEach(task => {
    azioni+="<li>" + task.titolo + "</li>"   ; 


})

elencoAzioniSvolte.innerHTML = azioni;