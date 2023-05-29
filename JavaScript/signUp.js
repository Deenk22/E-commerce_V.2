function init() {

    const applicationFrom = new SignupForm();
    applicationFrom.render();
  
  };
  
  function SignupForm() {
  
    this.render = function () {
  
      const signUp = document.getElementById("userSignUp");
      signUp.innerHTML = 
      `
        <label for="name"> Name
                <input type="text" name="name" id="name" placeholder="Name">
        </label>
  
        <label for="lastName"> Last name
                <input type="text" name="lastName" id="lastName" placeholder="Last name">
        </label>
        
        <label for="email"> Email
                <input type="email" name="email" id="email" placeholder="Email">            
        </label>
  
        <label for="password"> Password
                <input type="password" name="password" id="password" placeholder="Password">
        </label>
  
        <label for="repeatPassword"> Repeat Password
                <input type="password" name="repeatPassword" id="repeatPassword" placeholder="Repeat Password">
        </label>
  
        <div>

            <button type="submit" id="signUpButton">Create Account</button>

        </div>`;
  
      const registerButton = document.getElementById("signUpButton");
      registerButton.addEventListener("click", this.registro);
  
    };
  
    this.registro = function () {
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const password2 = document.getElementById("repeatPassword").value;
      const error = document.getElementById("error");
            
      const database = window.localStorage;
      let usersDatabase = JSON.parse(database.getItem("users")) || [];


      function checkEmail (email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      if (password !== "" && email !== "" && password === password2) {

        if (checkEmail(email)) {
          const Check = usersDatabase.find((newUsers) => newUsers.email === email);

          if (Check) {
            error.innerHTML = "<p>The email already exists in our database</p>";
          } else {
            usersDatabase.push({email, password});
            database.setItem("users", JSON.stringify(usersDatabase));
            window.location.href = "products.html";
          };

        } else {
          error.innerHTML = "<p>Please enter a valid email address</p>";
        }; // Aqui termina la sentencia IF de "checkEmail".

      } else { 
        error.innerHTML = "<p>Please check your username, password and try again</p>";
      }; // // Aqui termina la sentencia IF principal.

    };
  
  };

  const signUpMessage = document.getElementById("signUpMessage");
  signUpMessage.innerHTML = `<p>Already a member? <a href="../HTML/signIn.html">Sign in</a></p>`;
  
  
  
  
  
  
  
  
  
  
  
  
  
  























