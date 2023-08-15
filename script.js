// Funktion, die auf Fragen antwortet
function antworteAufFrage(frage) {
  // Überprüfe, ob nach dem Sinn des Lebens gefragt wurde
  if (frage.toLowerCase().includes('sinn des lebens')) {
    return 'Die Antwort auf die Frage nach dem Sinn des Lebens ist 42.';
  }

  // Simulierte Berechnung
  let ergebnis = berechneErgebnis(frage);

  // Zahlenfolge generieren
  let zahlenfolge = generiereZahlenfolge();

  // Antwort zusammenstellen
  let antwort = `Die Antwort auf deine Frage "${frage}" ist ${ergebnis}. Die zugehörige Zahlenfolge lautet: ${zahlenfolge}`;

  return antwort;
}

// Funktion zur simulierten Berechnung
function berechneErgebnis(frage) {
  // Hier kannst du deine eigene Berechnung implementieren
  // Beispiel: Multipliziere die Länge der Frage mit 42
  let ergebnis = frage.length * 42;

  return ergebnis;
}

// Funktion zur Generierung einer zufälligen Zahlenfolge
function generiereZahlenfolge() {
  // Hier kannst du deine eigene Logik zur Generierung einer Zahlenfolge implementieren
  // Beispiel: Generiere eine Zahlenfolge von 5 zufälligen Zahlen zwischen 1 und 10
  let zahlenfolge = [];
  for (let i = 0; i < 5; i++) {
    let zufallszahl = Math.floor(Math.random() * 10) + 1;
    zahlenfolge.push(zufallszahl);
  }

  return zahlenfolge.join(', ');
}

// Funktion, um auf die Frage zu antworten und die Ausgabe zu aktualisieren
function antwortenAufFrage() {
  let frageInput = document.getElementById('frageInput');
  let antwortOutput = document.getElementById('antwortOutput');

  let frage = frageInput.value;
  let antwort = antworteAufFrage(frage);

  antwortOutput.textContent = antwort;
}
