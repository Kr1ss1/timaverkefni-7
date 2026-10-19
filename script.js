// =============================================
// TÍMAVERKEFNI · Hitastigsbreytir
// =============================================

// ---------------------------------------------
// HLUTI 1
// ---------------------------------------------
function convert() {
  console.log("convert keyrir");

  // 1. Ná í textann úr input "celsius"
  const temperatureText = document.getElementById("celsius").value;
  const output = document.getElementById("output");
  const name = document.getElementById("name").value.trim();
  const windText = document.getElementById("wind").value;
  const conversion = document.getElementById("conversion").value;

  // 2. Ef hann er tómur → sýna "Sláðu inn hitastig!" í output og return
  //    ATH: 0°C er gilt hitastig, svo athugaðu hvort textinn sé "" (ekki hvort talan sé 0)
  if (temperatureText === "") {
    output.textContent = "Sláðu inn hitastig!";
    return;
  }

  // Athuga hvort nafnið vanti
  if (name === "") {
    output.textContent = "Sláðu inn nafnið þitt!";
    return;
  }

  // 3. Breyta í Number
  const temperature = Number(temperatureText);

  // 4. Reikna Fahrenheit: c * 1.8 + 32
  let c;
  let f;

  if (conversion === "cToF") {
    c = temperature;
    f = c * 1.8 + 32;
  } else {
    f = temperature;
    c = (f - 32) / 1.8;
  }

  // 5. Nota if / else til að velja skilaboð:
  //    undir 0°C          → "Frost! Húfa og vettlingar"
  //    0 til 10°C         → "Kalt, úlpuveður"
  //    yfir 10 upp í 20°C → "Fínt veður, taktu peysu"
  //    yfir 20°C          → "Stuttbuxnaveður!"

  let message;

  if (c < 0) {
    message = "Frost! Húfa og vettlingar";
  } else if (c <= 10) {
    message = "Kalt, úlpuveður";
  } else if (c <= 20) {
    message = "Fínt veður, taktu peysu";
  } else {
    message = "Stuttbuxnaveður!";
  }

  // 6. Sýna niðurstöðuna í output, t.d. "12°C = 53.6°F - Fínt veður, taktu peysu"

  // ---------------------------------------------
  // HLUTI 2 · Ef þú klárar snemma (í hvaða röð sem er)
  // ---------------------------------------------
  // A · Vindur: Bættu við input fyrir vind (m/s).
  //     Ef hiti er undir 5 OG vindur yfir 10 → "Brjálað veður, vertu heima!"

  const wind = Number(windText);

  if (windText !== "" && c < 5 && wind > 10) {
    message = "Brjálað veður, vertu heima!";
  }

  // B · Öfug átt: Bættu við select með "°C → °F" og "°F → °C".
  //     Formúlan til baka: (F - 32) / 1.8
  //     Skilaboðin eiga alltaf að miðast við hitann í °C.

  // C · Nafn: Bættu við input fyrir nafn → "Kinga, taktu peysu!"
  //     Sýndu villu ef nafnið vantar.

  if (c > 10 && c <= 20) {
    message = `${name}, taktu peysu`;
  }

  if (windText !== "" && c < 5 && wind > 10) {
    message = "Brjálað veður, vertu heima!";
  } else if (!(c > 10 && c <= 20)) {
    message = `${name}: ${message}`;
  }

  // D · Snyrta: Námundaðu í einn aukastaf með toFixed(1)
  //     og gefðu síðunni smá CSS.

  c = c.toFixed(1);
  f = f.toFixed(1);

  if (conversion === "cToF") {
    output.textContent = `${c}°C = ${f}°F - ${message}`;
  } else {
    output.textContent = `${f}°F = ${c}°C - ${message}`;
  }
}
