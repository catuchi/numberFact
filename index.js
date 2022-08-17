let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");

let numberInput = document.querySelector("#numberInput");
let h4 = document.querySelector(".card-title");

//listen for event input
numberInput.addEventListener("input", getFact);

function getFact() {
  let number = numberInput.value;
  const url = `http://numbersapi.com/${number}`;

  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      if (number) {
        fact.style.display = "block";
        fact.innerText = data;
        h4.style.display = "block";
      }
    })
    .catch((err) => console.log(err));
}
