const container = document.querySelector(".container");

const p = document.createElement("p");
p.style["color"] = "red";
p.textContent = "Hey I'm red";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.style["color"] = "blue";
h3.textContent = "I'm a blue h3";
container.appendChild(h3);

const divMain = document.createElement("div");
divMain.style["border-color"] = "black";
divMain.style["border-style"] = "solid";
divMain.style["background-color"] = "pink";
container.appendChild(divMain);

const h1_inDiv = document.createElement("h1");
h1_inDiv.textContent = "I'm in a div";
divMain.appendChild(h1_inDiv);

const p_inDiv = document.createElement("h1");
p_inDiv.textContent = "ME TOO!";
divMain.appendChild(p_inDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
})