// PROGRAMMA CHE  GENERI E STAMPI IN CONSOLE I NUMERI DA 1 A 100
// IL PROGRAMMA RICONOSCERA' I MULTIPLI DI 3, 5 E 3 & 5
// UNA VOLTA INSIVIDUATI, AL POSTO DI QUESTI NUMERI VERRA STAMPATA UNA SCRITTA IN PASE AL MODULO IMPOSTATO IN JS

const newDiv = document.getElementById("box-target");

// CREAIMAO UN CICLO FOR PER GENERAZIONE NUMERI DA 1 A 100

for (let i = 1; i <= 100; i++) {
  let output = i;
  let myClass = "number";
  const myDiv = document.createElement("div");

  if (i % 3 == 0 && i % 5 == 0) {
    myClass = "fizzbuzz";
    output = "FizzBuzz";
  } else if (i % 3 == 0) {
    myClass = "fizz";
    output = "Fizz";
  } else if (i % 5 == 0) {
    myClass = "buzz";
    output = "Buzz";
  }

  myDiv.innerHTML = output;
  myDiv.classList.add("classic__box");
  myDiv.classList.add(myClass);
  newDiv.append(myDiv);
}
