const descriptionText = document.querySelector(".descriptionText");
const imgContainer = document.querySelector(".imgContainer");
// const presentationOfThePlaceImg = document.querySelector(
//   ".presentationOfThePlaceImg"
// );
// const presentationOfThePlaceImg = document.getElementsByClassName(
//   "presentationOfThePlaceImg"
// )[0];

let imgParentNode;

let imgClickedIndex;

let overImgsIndex1;
let overImgsIndex2;
// Recupère l'index de l'image cliqué

const findOverImgIndex = (a) => {
  // length - 1 i'mportant
  if (a > imgParentNode.children.length - 1) {
    a = 0;
  } else if (a < 0) {
    a = imgParentNode.children.length - 1;
  }
  return a;
};

const imgIndexRecuparation = () => {
  for (i = 0; i <= imgParentNode.children.length - 1; i++) {
    console.log(imgParentNode.children[i]);
    if (
      imgParentNode.children[i].classList[0] ==
      "presentationOfThePlaceImgClicked"
    ) {
      imgClickedIndex = i;
    }
  }
};

// Recupère les éléments et leurs ajoute un eventListener

const getAllImgElement = () => {
  for (
    i = 0;
    i <=
    document.getElementsByClassName("presentationOfThePlaceImg").length - 1;
    i++
  ) {
    console.log(
      document.getElementsByClassName("presentationOfThePlaceImg")[i]
    );
    document
      .getElementsByClassName("presentationOfThePlaceImg")
      [i].addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target.parentNode.parentNode.classList[0]);
        imgParentNode = e.target.parentNode.parentNode;
        if (e.target.parentNode.classList == "presentationOfThePlaceImg") {
          e.target.parentNode.classList.add("presentationOfThePlaceImgClicked");
          e.target.parentNode.classList.remove("presentationOfThePlaceImg");
          if (e.target.classList[0] == "imgDouble") {
            console.log("oui");
            imgIndexRecuparation();
            console.log(imgClickedIndex);
            // +1 ou moins 1 avec image triple
            console.log(findOverImgIndex(imgClickedIndex + 1));
            console.log(imgParentNode.children.length);
            overImgsIndex1 = findOverImgIndex(imgClickedIndex + 1);
            imgParentNode.children[overImgsIndex1].classList.add(
              "presentationOfThePlaceImgClosed"
            );
            imgParentNode.children[overImgsIndex1].classList.remove(
              "presentationOfThePlaceImg"
            );
          } else if (e.target.classList[0] == "imgTriple") {
            imgIndexRecuparation();
            console.log(imgClickedIndex);
            // +1 ou moins 1 avec image triple
            console.log(findOverImgIndex(imgClickedIndex + 1));
            console.log(imgParentNode.children.length);
            overImgsIndex1 = findOverImgIndex(imgClickedIndex + 1);
            overImgsIndex2 = findOverImgIndex(imgClickedIndex - 1);
            imgParentNode.children[overImgsIndex1].classList.add(
              "presentationOfThePlaceImgClosed"
            );
            imgParentNode.children[overImgsIndex1].classList.remove(
              "presentationOfThePlaceImg"
            );
            imgParentNode.children[overImgsIndex2].classList.add(
              "presentationOfThePlaceImgClosed"
            );
            imgParentNode.children[overImgsIndex2].classList.remove(
              "presentationOfThePlaceImg"
            );
          }
        } else if (
          e.target.parentNode.classList == "presentationOfThePlaceImgClicked"
        ) {
          e.target.parentNode.classList.add("presentationOfThePlaceImg");
          e.target.parentNode.classList.remove(
            "presentationOfThePlaceImgClicked"
          );
          if (e.target.classList[0] == "imgDouble") {
            imgParentNode.children[overImgsIndex1].classList.add(
              "presentationOfThePlaceImg"
            );
            imgParentNode.children[overImgsIndex1].classList.remove(
              "presentationOfThePlaceImgClosed"
            );
          } else if (e.target.classList[0] == "imgTriple") {
            imgParentNode.children[overImgsIndex1].classList.add(
              "presentationOfThePlaceImg"
            );
            imgParentNode.children[overImgsIndex1].classList.remove(
              "presentationOfThePlaceImgClosed"
            );
            imgParentNode.children[overImgsIndex2].classList.add(
              "presentationOfThePlaceImg"
            );
            imgParentNode.children[overImgsIndex2].classList.remove(
              "presentationOfThePlaceImgClosed"
            );
          }
        }
      });
  }
};

getAllImgElement();

// const terrasse = document.querySelector(".terrasse");
// const cuisine = document.querySelector(".cuisine");
// const chambrePrincipale = document.querySelector(".chambrePrincipale");
// const chambreConvertible = document.querySelector(".chambreConvertible");
// const salleDeBain = document.querySelector(".salleDeBain");

const descriptionTerrasse = `<p id="descriptionTitle">${"Terrasse ombragée"}</p><p id="descriptionContent">${"Idéale pour profiter de moments de détente à l'extérieur tout en étant protégé du soleil"}</p>`;

const descriptionCuisine = `<p id="descriptionTitle">${"Cuisine ouverte fonctionnelle"}</p>
<p id="descriptionContent">${"Un petit espace moderne alliant esthétique et praticité, décoré dans des tons bois chaleureux avec une dominante de blanc et de marron. De nombreux rangements astucieux facilitent l'organisation, et cette cuisine s'intègre harmonieusement au reste des pièces, offrant une belle continuité visuelle."}</p>`;

const descriptionSalleDeBain = `<p id="descriptionTitle">${"Salle de bain élégante"}</p><p id="descriptionContent">${"Douche à l'italienne moderne, toilettes intégrées, et de multiples espaces dédiés au rangement, dont un placard et un porte-serviettes pratique."}</p>`;

const descriptionChambrePrincipale = `<p id="descriptionTitle">${"Chambre principale lumineuse"}</p><p id="descriptionContent">${"Entièrement blanche, elle est équipée d'une climatisation pour un confort optimal ainsi que d'une grande armoire de rangement."}</p>`;

const descriptionChambreConvertible = `<p id="descriptionTitle">${"Seconde chambre convertible"}</p><p id="descriptionContent">${"Aménagée avec un lit simple et encore plus de rangements, parfaite pour un enfant, un invité ou pour une utilisation comme bureau."}</p>`;

const terrasseDescription = `<div class="terrasse">
                <div class="presentationOfThePlaceImg" id="img00">
                  <img
                    class="imgSolo paysage"
                    src="00.jpg"
                    alt=""
                  />
                </div>
              </div>`;
const cuisineDescription = `<div class="cuisine">
                <div class="presentationOfThePlaceImg" id="img01">
                  <img
                    class="imgDouble paysage"
                    src="01.jpg"
                    alt=""
                  />
                </div>
                <div class="presentationOfThePlaceImg" id="img02">
                <img
                class="imgDouble paysage"
                src="02.jpg"
                alt=""
                />
                </div>
                </div>`;
const salleDeBainDescription = `<div class="salleDeBain">
                <div class="presentationOfThePlaceImg" id="img07">
                  <img
                    class="imgTriple paysage"
                    src="07.jpg"
                    alt=""
                  />
                </div>
                <div class="presentationOfThePlaceImg" id="img08">
                  <img
                    class="imgTriple paysage"
                    src="08.jpg"
                    alt=""
                  />
                </div>
                <div class="presentationOfThePlaceImg" id="img09">
                  <img
                    class="imgTriple portrait"
                    src="09.jpg"
                    alt=""
                  />
                </div>`;
const chambrePrincipaleDescription = `<div class="chambre">
                <div class="presentationOfThePlaceImg" id="img03">
                  <img
                    class="imgDouble paysage"
                    src="03.jpg"
                    alt=""
                  />
                </div>
                <div class="presentationOfThePlaceImg" id="img04">
                  <img
                    class="imgDouble paysage"
                    src="04.jpg"
                    alt=""
                  />
                </div>
              </div>`;
const chambreConvertibleDescription = `<div class="chambreConvertible">
                <div class="presentationOfThePlaceImg" id="img05">
                  <img
                    class="imgDouble paysage"
                    src="05.jpg"
                    alt=""
                  />
                </div>
                <div class="presentationOfThePlaceImg" id="img06">
                  <img
                    class="imgDouble paysage"
                    src="06.jpg"
                    alt=""
                  />
                </div>
              </div>`;

let imgContainerChildrensClassName = new Array();
imgContainerChildrensClassName.push(
  "terrasse",
  "cuisine",
  "salleDeBain",
  "chambre",
  "chambreConvertible"
);

let descriptionTextChildrens = new Array();
descriptionTextChildrens.push(
  descriptionTerrasse,
  descriptionCuisine,
  descriptionSalleDeBain,
  descriptionChambrePrincipale,
  descriptionChambreConvertible
);

let imgContainerChildrens = new Array();
imgContainerChildrens.push(
  terrasseDescription,
  cuisineDescription,
  salleDeBainDescription,
  chambrePrincipaleDescription,
  chambreConvertibleDescription
);

let showcaseVideoImgIndex = 0;

const setImgContainer = () => {
  imgContainer.innerHTML = imgContainerChildrens[showcaseVideoImgIndex];
  getAllImgElement();
};

const setDescriptionText = () => {
  setImgContainer();
  console.log(imgContainer.children);
  if (imgContainer.children.length >= 0) {
    for (i = 0; i < imgContainerChildrensClassName.length; i++) {
      if (
        imgContainerChildrensClassName[i] ==
        imgContainer.children[0].classList[0]
      ) {
        descriptionText.innerHTML = descriptionTextChildrens[i];
        break;
      }
    }
  }
};

// document.addEventListener("click", (e) => {
//   console.log(e);
// });

// presentationOfThePlaceImg.addEventListener("click", (e) => {
//   console.log(e);
//   console.log(e.target.parentNode.parentNode.classList[0]);
//   if (e.target.parentNode.classList == "presentationOfThePlaceImg") {
//     e.target.parentNode.classList.add("presentationOfThePlaceImgClicked");
//     e.target.parentNode.classList.remove("presentationOfThePlaceImg");
//   } else if (
//     e.target.parentNode.classList == "presentationOfThePlaceImgClicked"
//   ) {
//     e.target.parentNode.classList.add("presentationOfThePlaceImg");
//     e.target.parentNode.classList.remove("presentationOfThePlaceImgClicked");
//   }
// });

window.setDescriptionText = setDescriptionText;
window.showcaseVideoImgIndex = showcaseVideoImgIndex;
setDescriptionText();
