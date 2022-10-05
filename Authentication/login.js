// let userLSArray = [{
//           name: "karan",
//           password: "84471",
//           userName: "karan"
//      },
//      {
//           name: "yash",
//           password: "84477",
//           userName: "yash123"
//      },
//      {
//           name: "shrikant123",
//           password: "85878",
//           userName: "shrikant123"
//      },
//      {
//           name: "mohit",
//           password: "12345",
//           userName: "mohit123"
//      }
// ]

// localStorage.setItem("userObject",JSON.stringify(userLSArray))
let userLS = JSON.parse(localStorage.getItem("userObject"))

console.log("I am a login Page")
let login = document.getElementById("loginKaro")
let loginUserName = document.getElementById("loginUserName")
let loginUserPass = document.getElementById("loginUserPass")
login.addEventListener("click", () => {
     // console.log("hi")
     // console.log(loginUserName.value, typeof(loginUserName.value))
     for (let i = 0; i < userLS.length; i++) {
          // console.log("trial",i)
          if (userLS[i].userName == loginUserName.value && userLS[i].password == loginUserPass.value) {
               console.log("userName found")
               alert("Moving to your profile page")
               localStorage.setItem("userStatus", "success")
               // current user 
               localStorage.setItem("currentUser", `${loginUserName.value}`)
               window.location.replace("../userProfile/profile.html")
               document.getElementById("loginUserName").value = "XXXXX"
               document.getElementById("loginUserPass").value = "XXXXX"
          }
     }
     if (localStorage.getItem("userStatus") != "success") {
          let stateRed = "#ff837f"
          if (loginUserName.value.length >= 5 && loginUserPass.value.length >= 5) {
               alert("No user Found Recheck Your Credentaials")
          } else {
               if (loginUserName.value == "" && loginUserPass.value == "") {
                    alert("Password and UserName is empty")
               } else if (loginUserName.value == "") {
                    alert("UserName is empty")
               } else if (loginUserPass.value == "") {
                    alert("Your Password is empty")
               } else if (loginUserName.value != "" && loginUserPass.value != "") {
                    alert("Password or UserName length is less then 5 char")
               }
          }
     }

     // if(loginUserName == "" && loginUserPass == ""){
     // loginUserName.style.borderColor = stateRed
     // loginUserName.style.backgroundColor = stateRed
     // loginUserPass.style.borderColor = stateRed
     // loginUserPass.style.backgroundColor = stateRed
     // alert("USer not found")
     // }
})
// let loginUserName = document.getElementById("loginUserName")
// login.addEventListener("click" , ()=>{
//      // for(let i = 0 ; i < userLS.length ; i++){
//      //      if (userLS[i].userName == loginUserName.value) {
//      //           console.log("user found")
//      //      }
//      // }
// })
// if (loginUserName.value != "") {
//      loginUserName.style.borderColor = stateRed
//      loginUserName.style.backgroundColor = stateRed
//      alert("Enter Password")
// }
// if (loginUserPass.value != "") {
//      loginUserPass.style.borderColor = stateRed
//      loginUserPass.style.backgroundColor = stateRed
//      alert("Enter UserName")
// }