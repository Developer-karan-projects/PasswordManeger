console.log('Hello World!');
if (localStorage.getItem("userObject") == null) {
     console.log("adding demo")
     let demo = "demo"
     localStorage.setItem("userObject", JSON.stringify([{
          name: demo,
          password: demo,
          userName: demo
     }]))
} else {
     let userStatus = window.localStorage.getItem("userStatus")
     if (userStatus == "success") {
          // window.location.replace("./Authentication/login.html")
          window.location.replace("./userProfile/Profile.html")
     } else {
          // console.log("go to user profile")
          console.log("go to login page ")
          window.location.replace("./Authentication/signup.html")
     }
}