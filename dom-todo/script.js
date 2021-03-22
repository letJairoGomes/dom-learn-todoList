const inputElement = document.querySelector("input");
const buttonElement = document.querySelector(".form button");
const ulElement = document.querySelector("ul");

buttonElement.onclick = (e) => {
  e.preventDefault();

  if (inputElement.value) {
    const textElement = document.createElement("span");
    const btnElement = document.createElement("button");
    const liElement = document.createElement("li");

    textElement.innerHTML = inputElement.value;
    btnElement.innerHTML = "Remover";
    liElement.appendChild(textElement);
    liElement.appendChild(btnElement);
    ulElement.appendChild(liElement);
    inputElement.value = "";

    btnElement.onclick = () => {
      ulElement.removeChild(liElement);
    };
  }
};
