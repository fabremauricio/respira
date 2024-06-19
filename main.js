window.onload = () => {
  const MIN_VALUE = 3;
  const MAX_VALUE = 20;

  const leftButton = document.querySelector("#left");
  const rightButton = document.querySelector("#right");
  const footer = document.querySelector("footer");

  let number = localStorage.getItem("number") ?? 6;
  let timeout = null;

  const showNumber = () => {
    footer.innerText = number + " segundos";
    footer.style.opacity = 1;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      footer.style.opacity = 0;
    }, 2000);
  };

  const applyAnimation = () => {
    const main = document.querySelector("main");
    main.style.animation = "none";
    void main.offsetWidth;
    main.style.animation = `grow ${number}s infinite`;
  };

  rightButton.onclick = () => {
    number++;
    if (number > MAX_VALUE) number = MAX_VALUE;
    localStorage.setItem("number", number);
    showNumber();
    applyAnimation();
  };

  leftButton.onclick = () => {
    number--;
    if (number < MIN_VALUE) number = MIN_VALUE;
    localStorage.setItem("number", number);
    showNumber();
    applyAnimation();
  };

  showNumber();
};

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/sw.js")
//       .then((registration) => {
//         console.log(
//           "ServiceWorker registration successful with scope: ",
//           registration.scope
//         );
//       })
//       .catch((error) => {
//         console.log("ServiceWorker registration failed: ", error);
//       });
//   });
// }
