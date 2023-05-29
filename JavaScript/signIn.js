function init() {

    const newSignIn = new SignInForm()
    newSignIn.render();

  };
  
  function SignInForm() {
  
    this.render = function () {
  
      const login = document.getElementById("signIn");
      login.innerHTML = 
      `
      <label for="email"> Email
      <input type="email" name="email" id="email" placeholder="Email" required>
      </label> 
  
      <label for="password"> Password
      <input type="password" name="password" id="password" placeholder="Password" required>
      </label>

      <div>
  
      <button type="submit" id="signInButton">Iniciar Sesion</button>
      
      </div>`;

      const signInButton = document.getElementById("signInButton");
      signInButton.addEventListener("click", this.signInUser);
  
    };
  
    this.signInUser = function () {
  
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const error = document.getElementById("error");

        const database = window.localStorage;
        let usersDatabase = JSON.parse(database.getItem("users")) || [];
        console.log(usersDatabase);

        const checkEmail = usersDatabase.find((userEmail) => userEmail.email === email);
        const checkPassword = usersDatabase.find((userPassword) => userPassword.password === password);
       
        if (checkEmail && checkPassword) {
            window.location.href = "products.html";
        } else { 
          error.innerHTML = "<p>Please check your username, password and try again</p>";
          
        }; 
  
      };
    
    };

    const signInMessage = document.getElementById("signInMessage");
    signInMessage.innerHTML = `<p> Not a member? <a href="../HTML/signUp.html">Sign up now</a></p>`










