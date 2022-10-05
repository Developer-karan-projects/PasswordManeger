  // let userArray = localStorage.getItem("UserNamesArray")
  // let userObject = localStorage.getItem("userObject")

  let signupBtn = document.getElementById("signupBtn")
  signupBtn.addEventListener("click", () => {
       let signupUserName = document.getElementById("signupUserName").value
       let signupName = document.getElementById("signupName").value
       let singupUserPassword = document.getElementById("singupUserPassword").value
       let singupUserPasswordConfirm = document.getElementById("singupUserPasswordConfirm").value

       if (
            signupUserName != "" &&
            signupUserName.length >= 3  &&
            signupName != "" &&
            signupName.length > 4 &&
            singupUserPassword == singupUserPasswordConfirm &&
            singupUserPassword.length > 4
       ) {
       let userObject = JSON.parse(localStorage.getItem("userObject"))
       let userArray = []
       for (let i = 0; i < userObject.length; i++) {
            userArray.push(userObject[i].userName)
       }
       let userNameNormal = signupUserName
       if (userArray.includes(userNameNormal)) {
            document.getElementById("signupUserName").value = signupUserName;
            alert("Other details are correct but Change your userName its already exist")
       } else {
            alert("Usre Added")
            userObject.push({
                 name: signupName,
                 userName: signupUserName,
                 password: singupUserPassword
            })
            localStorage.setItem("userObject",JSON.stringify(userObject))
            alert("Login to see your account")

          

            // location replace 
            window.location.replace("./login.html")
            document.getElementById("signupUserName").value = "";
            document.getElementById("signupName").value = "";
            document.getElementById("singupUserPassword").value = "";
            document.getElementById("singupUserPasswordConfirm").value = "";
            console.log(userObject)
            console.log(userArray)
       }
  } // if statement end (control if everything correct)
  else {
       console.log("entered")
       let elementUserName = document.getElementById("signupUserName")
       let elementName = document.getElementById("signupName")
       let elementUserPass = document.getElementById("singupUserPassword")
       let elementUserPassConf = document.getElementById("singupUserPasswordConfirm")
       let popUp;

       function form() {
            /// name of the user verification
            if (elementName.value == "") {
                 elementName.style.borderColor = "red";
            }
            if (elementName.value.length <= 2) {
                 elementName.style.borderColor = "red";
            } else {
                 elementName.style.borderColor = "green";
            }
            /// user name of the user verification
            if (elementUserName.value == "") {
                 elementUserName.style.borderColor = "red";
            }
            if (elementUserName.value.length <= 4) {
                 elementUserName.style.borderColor = "red";
            } else {
                 elementUserName.style.borderColor = "green";
            }
            /// password of the user verification
            if (elementUserPass.value = "") {
                 elementUserPass.style.borderColor = "red";
            }
            if (elementUserPass.value.length < 5) {
                 elementUserPass.style.borderColor = "red";
            } else {
                 elementUserPass.style.borderColor = "green";
            }
            // passwordConfirm of the user verification
            if (elementUserPassConf.value == "") {
                 elementUserPassConf.style.borderColor = "red";
            }
            if (elementUserPassConf.value.length < 5) {
                 elementUserPassConf.style.borderColor = "red";
            } else {
                 elementUserPassConf.style.borderColor = "green";
            }
            // passwrd matching
            if (elementUserPassConf.value != elementUserPass.value) {
                 elementUserPass.style.borderColor = "yellow";
                 elementUserPassConf.style.borderColor = "yellow";
            }
            elementUserPass.value = singupUserPassword

       }
       form()
       // elementName.addEventListener("change", () => {

       // }
       // )
  } //else statement (problem in forms)

  } //event listner function{} bracesends
  ) //evemt listner() parenthesid ends









  //   function checkName(){

  //   }
  // master if ends if vontrol if frorm is valid
  // else started if form is not valid
  // else {

  // function checkName(){

  // }
  // let textName;
  // let textUserName;
  // let textPassword;
  // let textPasswordConfirm;
  // if (signupName == "") {
  //   textName = "Your Name is empty"
  // } else { textName = "" }
  // if (signupUserName == "") {
  //   textUserName = "Your UserName is empty"
  // } else { textUserName = "" }
  // if (singupUserPassword == "") {
  //   textPassword = "Your Password is empty"
  // } else {textPassword = ""}
  // if(singupUserPasswordConfirm == ""){
  //   textPasswordConfirm = "Your confirm password is empty"
  // }
  // if(textName && textPassword && textPasswordConfirm && textUserName){
  //   alert("looking good")
  // }else{alert(`${textName} , ${textUserName} , ${textPassword} , ${textPasswordConfirm}`)}
  // alert(`${textName} , ${textUserName} , ${textPassword} , ${textPasswordConfirm}`)
  // }