function validateForm() {
    var fName = document.getElementById("name").value;
    var lName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (!fName) {
      alert("First Name cannot be empty");
      return false;
    }
    if (!lName) {
        alert("Last Name cannot be empty");
        return false;
      }
      if (!email) {
        alert("Email cannot be empty");
        return false;
      }
      if (!password) {
        alert("Password cannot be empty");
        return false;
      }
      if(password.length <= 6) {
        alert("Password must be more than 6 characters")
        return;
        }
    alert(`Form submitted successfully ${fName} ${lName} ${email} ${password}`);
  }