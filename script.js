// =============================================
// TÍMAVERKEFNI · Hitastigsbreytir
// =============================================

// ---------------------------------------------
// HLUTI 1
// ---------------------------------------------
function convert() {
  console.log("convert keyrir");

  // 1. Ná í textann úr input "celsius"

  // 2. Ef hann er tómur → sýna "Sláðu inn hitastig!" í output og return
  //    ATH: 0°C er gilt hitastig, svo athugaðu hvort textinn sé "" (ekki hvort talan sé 0)

  // 3. Breyta í Number

  // 4. Reikna Fahrenheit: c * 1.8 + 32

  // 5. Nota if / else til að velja skilaboð:
  //    undir 0°C          → "Frost! Húfa og vettlingar"
  //    0 til 10°C         → "Kalt, úlpuveður"
  //    yfir 10 upp í 20°C → "Fínt veður, taktu peysu"
  //    yfir 20°C          → "Stuttbuxnaveður!"

  // 6. Sýna niðurstöðuna í output, t.d. "12°C = 53.6°F - Fínt veður, taktu peysu"
}

// ---------------------------------------------
// HLUTI 2 · Ef þú klárar snemma (í hvaða röð sem er)
// ---------------------------------------------
// A · Vindur: Bættu við input fyrir vind (m/s).
//     Ef hiti er undir 5 OG vindur yfir 10 → "Brjálað veður, vertu heima!"
//
// B · Öfug átt: Bættu við select með "°C → °F" og "°F → °C".
//     Formúlan til baka: (F - 32) / 1.8
//     Skilaboðin eiga alltaf að miðast við hitann í °C.
//
// C · Nafn: Bættu við input fyrir nafn → "Kinga, taktu peysu!"
//     Sýndu villu ef nafnið vantar.
//
// D · Snyrta: Námundaðu í einn aukastaf með toFixed(1)
//     og gefðu síðunni smá CSS.
