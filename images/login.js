

let emailsuccess=false;
let passwordsuccess=false;





function login(){
    let username1 = document.getElementById('username').value;
    let password1 = document.getElementById('password').value;
    
    if (username1==predefinedData.username){
        alert("correct email");
        emailsuccess=true;
    }
    if (password1==predefinedData.password){
        console.log("correct pw");
        passwordsuccess=true;
    }
    
    if (emailsuccess&&passwordsuccess){
        
        
        window.localStorage.setItem('username',JSON.stringify(username1));
        window.localStorage.setItem('password',JSON.stringify(password1));
        
        window.location="";
        alert("hi");
    }
    else if(emailsuccess==fales){
        

    }
    else{
        console.log("username or email incorrect");
    }
}