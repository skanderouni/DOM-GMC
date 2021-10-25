// Selector
const btnsPlus = document.querySelectorAll('.plus');
const btnsMoin = document.querySelectorAll('.moin');
const PrixUnit = document.querySelectorAll('.Prixun');
const SousTotal = document.querySelectorAll('.SousTot');
const SousTotall = document.querySelectorAll('.SousTot1');
const PrixTotal = document.getElementById('Prixt');
const Qtsotal = document.getElementById('panier');
const Liker = document.querySelectorAll('.like');
const Delete = document.querySelectorAll('.supp');
const qts = document.querySelectorAll('.qte');
const Article = document.querySelectorAll('.article');
const Articlee = document.querySelectorAll('.ArtCalcul');
const Annuler = document.getElementById('annuler');
const Shopping = document.getElementById('shop');
const ArtCalcul = document.getElementById('ArtCalcul');

TotalePrice();

for (let i = 0; i < btnsPlus.length; i++) {
  //  augmenter le nombre des articles
  btnsPlus[i].addEventListener('click', function () {
    qts[i].innerHTML++;
    SousTotal[i].innerHTML = PrixUnit[i].innerHTML * qts[i].innerHTML;
    SousTotall[i].innerHTML = SousTotal[i].innerHTML;
    TotalePrice();
  });

  // Diminuer le nombre des articles
  btnsMoin[i].addEventListener('click', function () {
    if (qts[i].innerHTML > 0) {
      qts[i].innerHTML--;
      SousTotal[i].innerHTML = PrixUnit[i].innerHTML * qts[i].innerHTML;
      SousTotall[i].innerHTML = SousTotal[i].innerHTML;
      TotalePrice();
    }
  });

  // Aimer un article
  Liker[i].addEventListener('click', function () {
    if (Liker[i].style.color == 'red') {
      Liker[i].style.color = 'black';
    } else {
      Liker[i].style.color = 'red';
    }
  });

  // Effacer un article
  Delete[i].addEventListener('click', function () {
    Article[i].remove();
    Articlee[i].remove();
    TotalePrice();
  });
}

// Effacer tous les Articles
Annuler.addEventListener('click', function () {
  Shopping.remove();
  ArtCalcul.remove();
  TotalePrice();
});

// Calculer le totale des Prix et des Quantités des articles
function TotalePrice() {
  const PrixUnit = document.querySelectorAll('.Prixun');
  const qts = document.querySelectorAll('.qte');
  let somme = 0;
  let sommeQ = 0;
  for (let i = 0; i < qts.length; i++) {
    somme = somme + qts[i].innerHTML * PrixUnit[i].innerHTML;
    sommeQ = sommeQ + parseInt(qts[i].innerHTML);
  }
  PrixTotal.innerHTML = somme;
  Qtsotal.innerHTML = sommeQ;
}
