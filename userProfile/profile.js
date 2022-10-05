let logout = document.getElementById("logout")
logout.addEventListener("click", () => {
  let logoutAlert = confirm("Do You want to logout")
  if (logoutAlert == true) {
    localStorage.setItem("userStatus", null)
    localStorage.setItem("currentUser", null)
    window.location.replace("../index.html")
  }
})

let name = localStorage.getItem("currentUser")
let nameSend = `Welcome ${name}`
document.getElementsByClassName("hello")[0].innerHTML = nameSend;



var outputBox = document.getElementById("output");




var genrateBtn = document.getElementById("Genrate");
genrateBtn.addEventListener(
  "click", () => {
    var upperCaseBox = document.getElementsByClassName("section1")[0];
    var lowerCaseBox = document.getElementsByClassName("section2")[0];
    var numberCaseBox = document.getElementsByClassName("section3")[0];
    var symbolCaseBox = document.getElementsByClassName("section4")[0];
    var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    var numberCaseSet = "1234567890";
    var symbolCaseSet = "!@#$%^&*()_+-=";
    var arraySet = [];
    var password = [];
    if (upperCaseBox.checked) {
      console.log("1");
      arraySet.push(upperCaseSet)
    }
    if (lowerCaseBox.checked) {
      console.log("2")
      arraySet.push(lowerCaseSet)
    }
    if (numberCaseBox.checked) {
      arraySet.push(numberCaseSet)
    }
    if (symbolCaseBox.checked) {
      arraySet.push(symbolCaseSet)
    }
    console.log(arraySet);
    if (arraySet.length == 0) {
      arraySet = [upperCaseSet, lowerCaseSet, numberCaseSet, symbolCaseSet]
    }

    function genrateRandom(dataset) {
      var mathRandom = Math.random();
      var rangeRandom = mathRandom * (dataset.length)
      var floorRandom = Math.floor(rangeRandom)
      var dataRetrn = dataset[floorRandom]
      return dataRetrn;
    }
    for (let i = 0; i < 10; i++) {
      // password.replace("0",`${caseTypeCorepondent}`)
      var caseType = genrateRandom(arraySet);
      var caseTypeCorepondent = genrateRandom(caseType)
      // console.log(caseType,caseTypeCorepondent,);
      password.push(caseTypeCorepondent)
    }
    var passwordToString = password.join("");
    console.log(passwordToString);
    outputBox.value = `${passwordToString}`;
  }

)