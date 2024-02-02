import colors from "../colors.json";
import colorPicerCard from "../template/color-picker.hbs";
import "../style.css";

const palette = document.querySelector(".palette");

function createCardMarkUp(colors) {
  return colors.map((color) => {
    return colorPicerCard(color);
  }).join("");
};
const cardsMarkUp = createCardMarkUp(colors);
palette.insertAdjacentHTML("afterbegin", cardsMarkUp);

palette.addEventListener("click", onPaletteClick);


let currentCard = "";
function onPaletteClick(e) {
  const activeCard = e.target;
  if (activeCard.closest("color-card")) {
    if (currentCard !== "") {
      currentCard.classList.remove("is-active");
    };
    activeCard.closest("color-card").classList.add("is-active");
    currentCard = activeCard.closest("color-card");
  } else {
    return;
  };
};