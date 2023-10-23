function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var email = document.forms["myForm"]["email"].value;
    var question = document.forms["myForm"]["question"].value;
  
    if (name == "" || phone == "" || email == "") {
      alert("正しい名前、電話番号、メールアドレスを入力してください。");
      return false;
    } else {
      if (phone.length < 10) {
        alert("電話番号は10桁以上で入力してください。");
        return false;
      }
      if (email.indexOf("@") == -1) {
        alert("有効なメールアドレスを入力してください。");
        return false;
      }
      return true;
    }
  }
  


  var emailField = document.getElementById("email");
  emailField.addEventListener("blur", function() {
    if (validateForm()) {
      document.getElementById("question").style.display = "block";
    }
  });