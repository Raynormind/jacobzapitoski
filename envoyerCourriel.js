function envoyerCourriel(){
    const serviceID = "service_1nc13wg";
    const templateID = "template_qvhmpi5";
    
    var param = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };

    if(param.email === "" || param.name === "" || param.message === ""){
        
    }else{
        emailjs.send(serviceID,templateID,param).then(res)
        .then((res) => {
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("message sent successfully");
        })
        .catch((err) => {
            
            alert("Une erreur est survenu.");
            console.log(err);
        });
    }

}



