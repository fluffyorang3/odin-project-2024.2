const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");



button.addEventListener("click", ()) => {
  let inputValue = document.querySelector("input").value;
  input = '';
};

const li = document.createElement("li");
const span = document.createElement("span");
const buttonDelete = document.createElement("button");

li.appendChild(span);
li.appendChild(buttonDelete);

span.textContent = inputValue;
buttonDelete.textContent = 'Delete';

ul.appendChild(li);

buttonDelete.addEventListener("click", () => {
  li.remove();
})

