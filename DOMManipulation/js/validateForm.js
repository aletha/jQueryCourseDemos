$(document).ready(function(){

$('.submit').click(function(){
    validateForm();   
});





$(":input").on("keydown", function(){

    $(this).parent().find(".error").remove()
})

function validateForm(){


    var nameReg = /^[A-Za-z]+$/;
    var numberReg =  /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var names = $('#nameInput').val();
    // var names = document.getElementById('nameInput').value;
    var company = $('#companyInput').val();
    var email = $('#emailInput').val();
    var telephone = $('#telInput').val();
    var message = $('#messageInput').val();

    


     $('.error').hide();

        if(names == ""){
            $('#nameLabel').append('<span class="error"> Please enter your name </span>');
        } 
        else if(!nameReg.test(names)){
            $('#nameLabel').append('<span class="error"> Letters only</span>');
        }

        if(company == ""){
            $('#companyLabel').append('<span class="error"> Please enter your company</span>');
        }

        if(email == ""){
            $('#emailLabel').append('<span class="error"> Please enter your email</span>');
        } 
        else if(!emailReg.test(email)){
            $('#emailLabel').append('<span class="error"> Please enter a valid email address</span>');
        }

        if(telephone == ""){
            $('#telephoneLabel').append('<span class="error"> Please enter your telephone</span>');
        } 
        else if(!numberReg.test(telephone)){
            $('#telephoneLabel').append('<span class="error"> Numbers only</span>');
        }

        if(message == ""){
            $('#messageLabel').append('<span class="error"> Please enter your message</span>');
        }       
}   

});
