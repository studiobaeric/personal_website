const info_card = document.getElementById("infoCard");
const info_card_lines = info_card.children;

function init_line_format() {
  info_card_lines[0].style.fontWeight = "bold";
  info_card_lines[0].style.fontSize = "25px";
  info_card_lines[0].style.paddingBottom = "10px";
  info_card_lines[0].width = "100%"
  info_card_lines[0].style.textAlign = "center";

  for (const line of info_card_lines) {
    line.style.textDecoration = ""
  }
}

function clear_info_card() {
  for (const line of info_card_lines) {
    line.textContent = "";
  }
}

function reset_info_card() {
  clear_info_card();
  init_line_format()
}

function show_personal_information() {
  info_card_lines[0].textContent = "Eric Sodemann";
  info_card_lines[1].textContent = "+49 163/*******";
  info_card_lines[2].textContent = "eri*****03@gmail.com";
}

document.getElementById("label_abitur").addEventListener("click", () => {
  reset_info_card();

  info_card_lines[3].style.textDecoration = "underline";

  info_card_lines[0].textContent = "Abitur 2022";
  info_card_lines[1].textContent = "Schnitt: 1,9";
  info_card_lines[3].textContent = "Leistungskurse:";
  info_card_lines[4].textContent = "\u00A0- Mathematik";
  info_card_lines[5].textContent = "\u00A0- Informatik";
  info_card_lines[7].textContent = "Informatik Bieber: 1. Preis";
  info_card_lines[8].textContent = "Schulsanitätsdienst, Tutoriumssprecher";
});

document.getElementById("label_tudarmstadt").addEventListener("click", () => {
  reset_info_card();

  info_card_lines[4].style.textDecoration = "underline";

  info_card_lines[0].textContent = "TU-Darmstadt 2022";
  info_card_lines[1].textContent = "Studiengang: B.Sc. Informatik";
  info_card_lines[2].textContent = "Aktueller Schnitt: 2,49";
  info_card_lines[4].textContent = "Tätigkeiten als Studentische Hilfskraft:";
  info_card_lines[5].textContent = "\u00A0- Tutor für Compilerbau";
  info_card_lines[6].textContent = "\u00A0- Mentoring für Erstsemester";
});

document.getElementById("label_mentoring").addEventListener("click", () => {
  reset_info_card();

  info_card_lines[4].style.textDecoration = "underline";

  info_card_lines[0].textContent = "Mentoring 2023 (& 2025)";
  info_card_lines[1].textContent = "Studienbezogener Lehrgang zum Mentoring";
  info_card_lines[2].textContent = "Betreuung von insg. 27 Mentees";
  info_card_lines[4].textContent = "Themen:";
  info_card_lines[5].textContent = "\u00A0- Zeitmanagement";
  info_card_lines[6].textContent = "\u00A0- Selbstmanagement";
  info_card_lines[7].textContent = "\u00A0- Ressourcenmanagement";
  info_card_lines[8].textContent = "\u00A0- Pacing, Selbstreflexion";
})

document.getElementById("label_seriousgames").addEventListener("click", () => {
  reset_info_card();

  info_card_lines[0].textContent = "Serious Games 2024";
  info_card_lines[1].textContent = "Projektpraktikum im Rahmen des Studiums";
  info_card_lines[2].textContent = "OSM und Geodaten basiertes Crafting Spiel";
  info_card_lines[3].textContent = "C# Programmierung in Unity";
});

document.getElementById("label_wwdc").addEventListener("click", () => {
  reset_info_card();

  info_card_lines[0].textContent = "Wrong-Way-Driving Detection 2024";
  info_card_lines[1].textContent = "Echtzeit Falschfahrer Erkennung";
  info_card_lines[2].textContent = "System als Edge-Computing auf OSM-Daten";
  info_card_lines[3].textContent = "C# Programmierung mit .NET Framework";

  info_card_lines[5].textContent = "Projektpraktikum in vierköpfigem Team";
  info_card_lines[6].textContent = "Unit- & System-Tests mit SUMO";
  info_card_lines[7].textContent = "Präsentation der Ergebnisse vor Publikum"
  info_card_lines[8].textContent = "Ausführliche Dokumentation";
})

document.getElementById("label_micromobility").addEventListener("click", () => {
  reset_info_card();

  info_card_lines[0].textContent = "Active- & Micromobility 2025";
  info_card_lines[1].textContent = "Zukunftsorientierte Stadtplanung";
  info_card_lines[2].textContent = "Kartenentwurf mit QGIS";
  info_card_lines[3].textContent = "Rohdaten-Verarbeitung von Verkehrsdaten"
})

document.getElementById("label_website").addEventListener("click", () => {
  reset_info_card();

  info_card_lines[0].textContent = "Website-Entwicklung 2026";
  info_card_lines[1].textContent = "Entwurf und Entwicklung eigener Website";
  info_card_lines[2].textContent = "Cardboard Prototyping";
  info_card_lines[3].textContent = "Plain HTML, CSS & JS";
  info_card_lines[4].textContent = "CI/CD mit Github Workflow";
})

document.getElementById("label_bachelor").addEventListener("click", () => {
  reset_info_card();

  info_card_lines[0].textContent = "vsl. Bachelor Informatik 2027";
})

document.addEventListener("click", (e) => {
  if (!e.target.closest("button")) {
    reset_info_card()
    show_personal_information()
  }
});


init_line_format();
show_personal_information()
