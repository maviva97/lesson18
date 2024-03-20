function sorteazaCifre(arrayCifre, ordine) {
    // Verificați dacă array-ul conține doar cifre.
    const areDoarCifre = arrayCifre.every((element) => !isNaN(element));
    if (!areDoarCifre) {
      return "Va rog sa introduceti doar liste de cifre.";
    }
  
    // Convertește ordinea primită la o valoare booleană.
    const sortareAsc = ordine === "ASC";
  
    // Sortează array-ul crescător sau descrescător.
    if (sortareAsc) {
      arrayCifre.sort((a, b) => a - b);
    } else {
      arrayCifre.sort((a, b) => b - a);
    }
  
    return arrayCifre;
  }
  
  // Exemplu de utilizare
  
  const listaCifre = [5, 2, 3, 1, 4];
  const ordineSortare = "DSC";
  
  const listaSortata = sorteazaCifre(listaCifre, ordineSortare);
  
  console.log(listaSortata); // [5, 4, 3, 2, 1]
  
  const listaInvalida = ["a", 2, 3, 4];
  
  const mesajEroare = sorteazaCifre(listaInvalida, "ASC");
  
  console.log(mesajEroare); // "Va rog sa introduceti doar liste de cifre."
  ///////////////////
  //Funcție pentru găsirea indexului unui element in listă:

function gasesteIndexElement(lista, element) {
  const indexElement = lista.indexOf(element);

  if (indexElement === -1) {
    return "not found";
  } else {
    return indexElement;
  }
}

// Exemplu de utilizare

const listaElemente = ["a", "b", "c", "d", "e"];
const elementDeGasit = "c";

const indexGasit = gasesteIndexElement(listaElemente, elementDeGasit);

console.log(`Indexul elementului "${elementDeGasit}" este: ${indexGasit}`); // Output: Indexul elementului "c" este: 2

const elementInexistent = "z";

const indexInexistent = gasesteIndexElement(listaElemente, elementInexistent);

console.log(`Indexul elementului "${elementInexistent}" este: ${indexInexistent}`); // Output: Indexul elementului "z" este: not found
////////////////////
function gasesteRadaciniPerfecte(arrayNumere) {
    const radaciniPerfecte = [];
  
    for (const numar of arrayNumere) {
      const radacinaPatrata = Math.sqrt(numar);
  
      // Verificați dacă rădăcina pătrată este un număr întreg.
      if (Number.isInteger(radacinaPatrata)) {
        radaciniPerfecte.push(numar);
      }
    }
  
    return radaciniPerfecte;
  }
  
  // Exemplu de utilizare
  
  const listaNumere = [4, 9, 121, 144, 169, 225];
  
  const radaciniGasite = gasesteRadaciniPerfecte(listaNumere);
  
  console.log(radaciniGasite); // [4, 9, 144, 169]

  ////////////////////
  function separaNumerePareImpare(listaCifre) {
    // Verificați dacă lista conține doar cifre.
    const areDoarCifre = listaCifre.every((element) => !isNaN(element));
    if (!areDoarCifre) {
      return "Va rog sa introduceti doar liste de cifre.";
    }
  
    const numerePare = [];
    const numereImpare = [];
  
    for (const cifra of listaCifre) {
      if (cifra % 2 === 0) {
        numerePare.push(cifra);
      } else {
        numereImpare.push(cifra);
      }
    }
  
    return { numerePare, numereImpare };
  }
  
  // Exemplu de utilizare
  
  const listaNumere1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  const numereSeparate = separaNumerePareImpare(listaNumere1);
  
  console.log(numereSeparate.numerePare); // [2, 4, 6, 8]
  console.log(numereSeparate.numereImpare); // [1, 3, 5, 7, 9]
  
  const listaInvalida1 = ["a", 2, 3, 4];
  
  const mesajEroare1 = separaNumerePareImpare(listaInvalida1);
  
  console.log(mesajEroare); // "Va rog sa introduceti doar liste de cifre."

  