







function login(){
    let emailsuccess=false;
    let passwordsuccess=false; 
    let username1 = document.getElementById('username').value;
    let password1 = document.getElementById('password').value;
    
    if (username1==predefinedData.username){
        alert("correct email");
        emailsuccess=true;
    }
    if (username1!=predefinedData.username){
        alert("incorrect email");
    }
    if (password1==predefinedData.password){
        console.log("correct pw");
        passwordsuccess=true;
    }
    

    if (password1!=predefinedData.password){
        console.log("incorrect password");
        alert("incorrect password");
    }

   
    
    if (emailsuccess&&passwordsuccess){
        
        
        window.localStorage.setItem('username',JSON.stringify(username1));
        window.localStorage.setItem('password',JSON.stringify(password1));
        window.location.reload(true);
        
        window.location.replace("file:///C:/Users/Hnin%20Yadanar%20Lwin/Documents/final-proj/adminPanel.html");
        alert("hi");
    }

    else{
        console.log("username or email incorrect");
    }
}