document.getElementById("btn").addEventListener("click", () => {
  if (
    document.getElementById("i1").value === "" ||
    document.getElementById("i2").value === ""
  ) {
    alert("Yaar!! Enter your name properly!!!");
  } else {
    document.getElementById("name").innerHTML =
      document.getElementById("i1").value +
      " ❤ " +
      document.getElementById("i2").value;
    let x = Math.ceil(Math.random() * (100 - 60 + 1)) + 60;
    let y = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
    document.getElementById("answer").innerText = Math.ceil((x + y) / 2) + " %";
  }
});
