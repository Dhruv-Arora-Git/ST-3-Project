(function () {
  const starFieldWidth = 1260;
  const starFieldHeight = 1260;

  addStars(starFieldWidth, starFieldHeight, 250);
  animateStars(starFieldWidth, 1);
})();

const audio = document.getElementById("space");
const jadooAudio = document.getElementById("jadoo-audio");
// audio.play();
let flag = false;

function addStars(starFieldWidth, starFieldHeight, noOfStars) {
  const starField = document.getElementById("star-field");
  const numberOfStars = noOfStars;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const topOffset = Math.floor(Math.random() * starFieldHeight + 1);
    const leftOffset = Math.floor(Math.random() * starFieldWidth + 1);
    star.style.top = topOffset + "px";
    star.style.left = leftOffset + "px";
    star.style.position = "absolute";
    starField.appendChild(star);
  }
}

function animateStars(starFieldWidth, speed) {
  const starField = document.getElementById("star-field");
  const stars = starField.childNodes;

  function getStarColor(index) {
    if (index % 8 == 0) return "red";
    else if (index % 10 == 0) return "rgb(245, 238, 238)";
    else if (index % 17 == 0) return "blue";
    else return "white";
  }

  function getStarDistance(index) {
    if (index % 6 == 0) return "";
    else if (index % 9 == 0) return "near";
    else if (index % 2 == 0) return "far";
    else return 0;
  }

  function getStarRelativeSpeed(index) {
    if (index % 6 == 0) return 1;
    else if (index % 9 == 0) return 2;
    else if (index % 2 == 0) return -1;
    else return 0;
  }

  setInterval(function () {
    for (var i = 1; i < stars.length; i++) {
      stars[i].className = `star ${getStarColor(i)} ${getStarDistance(i)}`;

      const currentLeft = parseInt(stars[i].style.left, 10);
      const leftChangeAmount = speed + getStarRelativeSpeed(i);
      let leftDiff;
      if (currentLeft - leftChangeAmount < 0) {
        leftDiff = currentLeft - leftChangeAmount + starFieldWidth;
      } else {
        leftDiff = currentLeft - leftChangeAmount;
      }
      stars[i].style.left = leftDiff + "px";
    }
  }, 80);
}

const planets = document.querySelectorAll(".planet");
const planetRadii = [22, 33, 50, 70, 112, 138, 165, 190];
const planetRadians = [0, 0, 0, 0, 0, 0, 0, 0];
const planetVelocities = [1.607, 1.174, 1, 0.802, 0.434, 0.323, 0.228, 0.182];

setInterval(() => {
  planets.forEach((planet, index) => {
    planet.style.left = `${
      Math.cos(planetRadians[index]) * planetRadii[index]
    }vh`;
    planet.style.top = `${
      Math.sin(planetRadians[index]) * planetRadii[index]
    }vh`;
    planetRadians[index] += planetVelocities[index] / 1000;
  });
}, 1);

const inputBox = document.getElementById("input-box");
const resultText = document.querySelector(".result");
const planetNames = document.querySelector(".text");

const weightsOnPlanets = {
  Sun: 27.01,
  Mercury: 0.38,
  Venus: 0.91,
  Earth: 1,
  Mars: 0.38,
  Jupiter: 2.34,
  Saturn: 1.06,
  Uranus: 0.92,
  Neptune: 1.19,
};

inputBox.addEventListener("click", () => {
  console.log("plsdafls");
  if (flag === false) {
    audio.play();
    flag = true;
  }
});

const jadoo = document.getElementById("jadoo");

const updateWeight = (planetName, gradient) => {
  jadooAudio.play();
  planetNames.style.backgroundImage = gradient;
  resultText.style.backgroundImage = gradient;
  planetNames.style.animation = "opaqueText 2s";
  resultText.style.animation = "opaqueText 2s";
  jadoo.style.display = "block";
  jadoo.style.animation = "rotate 2s, opaque 1s";
  planetNames.innerHTML = planetName;
  setTimeout(() => {
    jadoo.style.animation = "rotate2 2s, opaque 1s";
    planetNames.style.animation = "";
    resultText.style.animation = "";
  }, 2200);
  setTimeout(() => {
    jadoo.style.animation = "";
  }, 4000);
  // console.log(gradient);
  if (
    inputBox.value === "" ||
    inputBox.value === null ||
    isNaN(inputBox.value)
  ) {
    resultText.innerHTML = "Please Enter a number";
    return;
  }
  const weight = inputBox.value;
  resultText.innerHTML = weight * weightsOnPlanets[planetName];
};

const sun = document.getElementById("sun");
sun.addEventListener("click", () => {
  updateWeight(
    "Sun",
    "linear-gradient(235deg, #ffdc16 0%, #f99b04 29%,#fb9700 67%,#f8c009  100%)"
  );
});

const mercury = document.getElementById("mercury");
mercury.addEventListener("click", () => {
  updateWeight(
    "Mercury",
    "linear-gradient(-235deg, #f8e2b0 0%,#f8e2b8 29%,#eecb8b 67%,#e3bb76 100%)"
  );
});

const venus = document.getElementById("venus");
venus.addEventListener("click", () => {
  updateWeight(
    "Venus",
    "linear-gradient(-235deg, #e5e5e5 0%,#c0a7a7 29%,#eb8f8f 67%,#a8a8a8 100%)"
  );
});

const earth = document.getElementById("earth");
earth.addEventListener("click", () => {
  updateWeight(
    "Earth",
    "linear-gradient(-235deg, #22e456 0%, #1bd789 29%, #14c2cb 67%, #0f66d8 100%)"
  );
});

const mars = document.getElementById("mars");
mars.addEventListener("click", () => {
  updateWeight(
    "Mars",
    "linear-gradient(-235deg, #a84803 0%, #e77d11 29%, #c1440e 67%, #c1650e 100%)"
  );
});

const jupiter = document.getElementById("jupiter");
jupiter.addEventListener("click", () => {
  updateWeight(
    "Jupiter",
    "linear-gradient(-235deg, #f4f1f2 0%, #3a221d 29%, #211f20 67%, #968e90 100%)"
  );
});

const saturn = document.getElementById("saturn");
saturn.addEventListener("click", () => {
  updateWeight(
    "Saturn",
    "linear-gradient(-235deg, #c5ab6e 0%, #7b7869 29%, #343e47 67%, #c3a171 100%)"
  );
});

const uranus = document.getElementById("uranus");
uranus.addEventListener("click", () => {
  updateWeight(
    "Uranus",
    "linear-gradient(-235deg, #bbe1e4 0%, #93b8be 29%, #578a91 67%, #d5fbfc 100%)"
  );
});

const neptune = document.getElementById("neptune");
neptune.addEventListener("click", () => {
  updateWeight(
    "Neptune",
    "linear-gradient(-235deg, #2151fd 0%, #4368fb 29%, #89a1ff 67%, #3e54e8 100%)"
  );
});
