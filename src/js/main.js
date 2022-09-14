const buttonCounter = document.querySelector("#btn-counter");
const buttonClose = document.querySelector("#btn-close");
const buttonReset = document.querySelector("#btn-reset");
const popUp = document.querySelector(".layout");
const counterText = document.querySelector(".counter");

const state = {
  getCounter: () => sessionStorage.getItem("CLICKS") * 1,
  updateCounter: (value) => sessionStorage.setItem("CLICKS", value),
  isReset: () => {
    state.getCounter() >= 5
      ? (buttonReset.style.display = "block")
      : (buttonReset.style.display = "none");
  },
  isTimes: () => {
    counterText.innerText =
      state.getCounter() === 1
        ? `${state.getCounter()} time`
        : `${state.getCounter()} times`;
  },
};

buttonCounter.addEventListener("click", () => {
  popUp.style.display = "flex";
  state.updateCounter(state.getCounter() + 1);
  state.isTimes();
  state.isReset();
});

popUp.addEventListener("click", (e) => {
  if (e.currentTarget === e.target) popUp.style.display = "none";
});

buttonClose.addEventListener("click", () => {
  popUp.style.display = "none";
});

buttonReset.addEventListener("click", () => {
  state.updateCounter(0);
  state.isReset();
  state.isTimes();
});
