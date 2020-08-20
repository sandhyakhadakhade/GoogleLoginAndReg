// Function called while clicking add button 
function onLogin() {
    let emailId = document.getElementById("InputEmail").value;
    let password = document.getElementById("InputPassword").value;
    if (emailId.length<1) {
        document.getElementById('error-email').innerHTML = "Enter an email or phone number";
    }          
	if (password.length<1) {
        document.getElementById('error-password').innerHTML = "Enter a password"
    }
    if(password.length<1 || emailId.length<1){
       	return false;
    } 
    let userLoginData = {
        email: emailId,
        password: password,
        cartID: ""
    };
    // this.userLogin(userLoginData)
}

function onCreateAccountClick() {
    location.replace("file:///E:/New%20BridgeLab%20data/LoginRegUsingHCB/Registration.html?")
}

function userLogin(data) {
    console.log("ïn api call");
    try {
        var login = axios.post("http://34.213.106.173/api/user/login", data); 
        // location.replace("https://keep.google.com/u/0/")           
        return login;
    } catch (err) {
        let error = { err: "Wrong username or password." }
        return error
    }
}
    