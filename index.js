function showRegister() {
    document.getElementById("RegisterContainer").style.display = "block";
    document.getElementById("LoginContainer").style.display = "none";
  }

  function regClose() {
    document.getElementById("RegisterContainer").style.display = "none";
    document.getElementById("LoginContainer").style.display = "block";
  }


  function showErr(message, elemntID) {
    let elemnt = document.getElementById(elemntID);
    elemnt.textContent = message;
    elemnt.style.visibility = "visible";
  }
  
  function restErr(elemntID) {
    let elemnt = document.getElementById(elemntID);
    elemnt.innerHTML = "";
    elemnt.style.visibility = "hidden";
  }
  
  function registerBtn() {
    try {
      let reg_name = document.getElementById("RegName").value;
      let reg_email = document.getElementById("RegEmail").value;
      let reg_phoneNumber = document.getElementById("RegPhoneNumber").value;
      let reg_password = document.getElementById("RegPassword").value;
      let reg_crmPwd = document.getElementById("RegConfirmPassword").value;
  
      //Eelemtnts
      let reg_name_err = document.getElementById("RegName_err");
      let reg_email_err = document.getElementById("RegEmail_err");
      let reg_phoneNuber_err = document.getElementById("RegPhoneNumber_err");
      let reg_password_err = document.getElementById("RegPassword_err");
      let reg_crmPwd_err = document.getElementById("RegConfirmPassword_err");
      if (!validateName(reg_name)) {
      } else {
        restErr("RegName_err");
      }
  
      if (!validatePhoneNumber(reg_phoneNumber)) {
      } else {
        restErr("RegPhone_err");
      }
      if (!ValidateEmail(reg_email)) {
        // showErr("Invalid Email id", "RegEmai_err");
      } else {
        restErr("RegEmai_err");
      }
      if (!validatePassword(reg_password)) {
       
      } else {
        restErr("RegPwd_err");
      }
  
      if (!validateCormPassword(reg_crmPwd)) {
        
      } else {
        restErr("RegCrfmPwd_err");
      }
  
      if (
        validateName(reg_name) &&
        validatePhoneNumber(reg_phoneNumber) &&
        ValidateEmail(reg_email) &&
        validatePassword(reg_password) &&
        validatePassword(reg_crmPwd)
      ) {
        if (reg_password !== reg_crmPwd) {
          // console(reg_password, reg_crmPwd_err);
          showErr("Password did not match", "RegCrfmPwd_err");
          return;
        } else {
          restErr("RegCrfmPwd_err");
        }
  
        let regData = [];
  
        if (localStorage.getItem("reglist") !== null) {
          regData = JSON.parse(localStorage.getItem("reglist"));
          regData = [...regData];
          if (
            regData.filter((obj) => obj.mobileNumber === reg_phoneNumber)
              .length > 0
          ) {
            showErr("This phone Number is already registered", "RegPhone_err");
            return;
          }
        }
        regData.push({
          name: reg_name,
          mobileNumber: reg_phoneNumber,
          email: reg_email,
          password: reg_password,
        });
        localStorage.setItem("reglist", JSON.stringify(regData));
       
        location.reload();
        console.log("completed");
      }
    } catch (e) {
      console.log(e);
    }
  }
  
 
  
  function validateName(name) {
    if (!name) {
      showErr("Please enter your name.", "RegName_err");
      return false;
    }
    var regex = /^[a-zA-Z]+$/;
    if (!regex.test(name)) {
      showErr("Name can only contain letters (a-z, A-Z).", "RegName_err");
      return false;
    } else {
      return true;
    }
  }
  
  function validatePhoneNumber(reg_phoneNumber) {
    if (typeof reg_phoneNumber !== "string") {
      showErr("Invalid phone number format.", "RegPhone_err");
      return false;
    }
  
   
    if (reg_phoneNumber.length !== 10) {
      showErr("Phone number must be 10 digits.", "RegPhone_err");
      return false;
    }
  
   
    if (!/^[8-9]\d{9}$/.test(reg_phoneNumber)) {
      showErr(
        "Phone number must start with 8-9 and contain 10 digits.",
        "RegPhone_err"
      );
      return false;
    }
  
    return true;
  }
  
  function ValidateEmail(email) {
    if (!email) {
      showErr("Please enter your email address.", "RegEmai_err");
      return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      showErr(
        "Please enter a valid email address (e.g., username@gmail.com).",
        "RegEmai_err"
      );
      return false;
    }
  }
  
  function validatePassword(pwd) {
    if (pwd == "" || pwd == undefined || pwd == null) {
      showErr("Please enter a password.", "RegPwd_err");
      return false;
    }
    return true;
  }
  
  function validateCormPassword(pwd) {
    if (pwd == "" || pwd == undefined || pwd == null) {
      showErr("Please enter a password.", "RegCrfmPwd_err");
      return false;
    }
    return true;
  }

  
  
  
  function loginBtn() {
     alert("working")
     try {
        
      let login_phonenumber = document.getElementById("login_phonenumber").value;
      let login_password = document.getElementById("login_password").value;
  
      if (!LoginvalidatePhoneNumber(login_phonenumber)) {
        showErr("Invalid Phone Number", "phone_err");
      } else {
        restErr("phone_err");
      }
  
      if (!validatePassword(login_password)) {
        showErr("Invalid invalid password", "pwd_err");
      } else {
        restErr("pwd_err");
      }
  
      if (
        validatePhoneNumber(login_phonenumber) &&
        validatePassword(login_password)
      ) {
        let reg_list = [];
  
        console.log(login_phonenumber, login_password);
  
        if (login_phonenumber == "8639362024" && login_password === "0987") {
          console.log(" adminlogin");
          localStorage.setItem("isLogin", "0987");
          location.href = "./admin.html";
          return;
        }
  
        console.log("user seaarch starts");
  
        if (localStorage.getItem("reglist") !== null) {
          reg_list = JSON.parse(localStorage.getItem("reglist"));
          reg_list = [...reg_list];
          let res = reg_list.filter(
            (obj) => obj.mobileNumber === login_phonenumber
          );
          if (res.length == 0) {
            showErr("Invalid PhoneNumber", "phone_err");
            return;
          } else {
            if (res[0].password === login_password) {
              localStorage.setItem("isLogin", login_phonenumber);
              setTimeout(() => {
                location.href = "user.html";
              }, 1000);
            } else {
              showErr("Invalid password", "pwd_err");
            }
          }
        } else {
          alert("no localstorage");
        }
      }
      document.getElementById("login_phonenumber").value = "";
      document.getElementById("login_password").value = "";
} catch (e) {
      console.log(e);
    }
  }
  
  function LoginvalidatePhoneNumber(reg_phoneNumber) {
    if (typeof reg_phoneNumber !== "string") {
      showErr("Invalid phone number format.", "phone_err");
      return false;
    }
  
    
    if (reg_phoneNumber.length !== 10) {
      showErr("Phone number must be 10 digits.", "phone_err");
      return false;
    }
  
    
    if (!/^[6-9]\d{9}$/.test(reg_phoneNumber)) {
      showErr(
        "Phone number must start with 8-9 and contain 10 digits.",
        "phone_err"
      );
      return false;
    }
  
    return true;
  }

  
  function LoginvalidatePassword(pwd) {
    if (pwd == "" || pwd == undefined || pwd == null) {
      showErr("Please enter a password.", "pwd_err");
      return false;
    }
    return true;
  }
  