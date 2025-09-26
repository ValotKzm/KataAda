const calendrierDuCrayon = {
  septembre: 10,
  octobre: 9,
  novembre: 8,
  decembre: 7,
  janvier: 6,
  fevrier: 5,
  mars: 4,
  avril: 3,
  mai: 2,
  juin: 1,
};
//  /\
// /__\
// ||||
// ||||
// ||||
// ||||
// ||||
// ||||
// ||||
// ||||
// ||||
// ||||
// |__|
// |  |
// |__|

function drawMyPen(mois) {
  const normalizedMois = mois.toLowerCase();
  const etages = calendrierDuCrayon[normalizedMois];

  if (!etages) {
    return console.log("Mois invalide");
  } else {
    console.log(" /\\ ");
    console.log("/__\\");

    for (let i = 0; i < etages; i++) {
      console.log("||||");
    }
  }

  if (etages <= 4) {
    console.log("|__|");
    console.log("|__|");
  } else {
    console.log("|__|");
    console.log("|  |");
    console.log("|__|");
  }

  return console.log(`voici le crayon pour le mois de ${normalizedMois}`);
}

drawMyPen("testerreur");
drawMyPen("juin");
drawMyPen("septeMbre");
