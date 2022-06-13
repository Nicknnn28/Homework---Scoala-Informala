"use strict";

const obj = {
  dog: "https://random.dog/woof.json",
  cat: "https://api.thecatapi.com/v1/images/search",
  fox: "https://randomfox.ca/floof/",
};

const body = document.querySelector("body");
const select = document.querySelector("#choose");
const form = document.querySelector("form");
const imgContainer = document.querySelector(".img_cont");
const button = document.createElement("button");
const img = document.createElement("img");
button.innerText = "Display Photo";
button.classList = "btn btn__value";

window.addEventListener("load", displayEL);

function displayEL() {
  form.append(button);
  Object.keys(obj).forEach((option) => {
    insertOptions(option);
  });
}

function insertOptions(el) {
  let option = document.createElement("option");
  option.value = el;
  option.innerText = el;
  option.classList.add("option");
  select.append(option);
}

const getData = function (e) {
  e.preventDefault();
  fetch(obj[select.value])
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      handleData(data);
    });
};

const handleData = function (data) {
  if (select.value === "dog") {
    img.src = data.url;
  }
  if (select.value === "fox") {
    img.src = data.image;
  }
  if (select.value === "cat") {
    const [source] = data;
    img.src = source.url;
  }
  imgContainer.appendChild(img);
};

button.addEventListener("click", getData);
