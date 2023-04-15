function login(){
    var user, pass
    user= document.getElementByimput("username").Value;
    pass= document.getElementByimput("password").Value;

    if (user=="yefell" && password == "12345")
    window.Location="page.html";
    else{
        alert("the username and/or password are incorrect")
    }
}