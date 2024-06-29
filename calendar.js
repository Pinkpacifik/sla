// Déclaration des Variables 

const currentDate = new Date();

const jsemaine = currentDate.getDay();

const newDate = currentDate.toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
});

// console.log(jsemaine);
// console.log(newDate);


// Ajouter la date du jour (format : 29 Juin)
const thJourMois = document.querySelector('tr #jour-mois');

thJourMois.innerHTML = currentDate.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
});

// Ajouter l'Année (ex 2024)
const thYear = document.querySelector('tr #fullyear');
thYear.innerHTML = currentDate.getFullYear();




// Calculer le nombre de jours du mois actuel
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Créer le calendrier pour un mois spécifique
function createCalendar(month, year) {
    const calendar = document.querySelector("#calendar");
    calendar.innerHTML = "";
    let date = 1;
    const daysInMonth = getDaysInMonth(month + 1, year);

    for (let i = 0; i < 6; i++) {
        let week = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (
                (i === 0 && j < new Date(year, month, 1).getDay()) ||
                date > daysInMonth
            ) {
                let day = document.createElement("td");
                week.appendChild(day);
            } else {
                let day = document.createElement("td");
                day.innerText = date;
                week.appendChild(day);
                date++;
            }
        }

        calendar.appendChild(week);
    }
}


createCalendar(currentDate.getMonth(), currentDate.getFullYear());

