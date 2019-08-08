/*--------------------------------------

INTERNET PROGRAMMING - FIRST ASSIGNMENT
TEAM MEMBERS: EMMA, CARLO AND DIEGO
GRADUATE DIPLOMA IN  IT - LEVEL 7
ASPIRE 2 INTERNATIONAL 

WEB SITE MAIN JS FILE 
web-site/js/main.js

---------------------------------------*/

/*----- MENU MANAGER -----*/

//Change the color of the menu options when mouseover

$("#button1").mouseover(function () {

    $(this).css("color", "grey");
});
$("#button2").mouseover(function () {

    $(this).css("color", "grey");
});
$("#button3").mouseover(function () {

    $(this).css("color", "grey");
});
$("#button4").mouseover(function () {

    $(this).css("color", "grey");
});
$("#menu1").mouseover(function () {

    $(this).css("color", "grey");
});
$("#menu2").mouseover(function () {

    $(this).css("color", "grey");
});
$("#menu3").mouseover(function () {

    $(this).css("color", "grey");
});
$("#menu4").mouseover(function () {

    $(this).css("color", "grey");
});

//Change the color of the menu options when mouseout
//(return to original color)

$("#menu-landing").mouseout(function () {

    $(this).children().css("color", "black");
});

$("#menu-page2").mouseout(function () {
  
    $(this).children().css("color", "black");
});


//function to manage the menu options in landing page
$("#menu1").on("click", function () {

    document.getElementById("home-index").scrollIntoView();
});
$("#menu2").on("click", function () {

    document.getElementById("courses").scrollIntoView();
});
$("#menu3").on("click", function () {

    document.getElementById("contact-us").scrollIntoView();
});

//Go to second page
$("#menu4").on("click", function () {

    window.location.href = 'page2.html';
});


//Function to manage the menu options in the menu in second page
$("#button1").on("click", function () {

    document.getElementById("home-page2").scrollIntoView();
});
$("#button2").on("click", function () {

    document.getElementById("more-courses").scrollIntoView();
});
$("#button3").on("click", function () {

    document.getElementById("apply-now").scrollIntoView();
});

//Go to index page
$("#button4").on("click", function () {

    window.location.href = 'Index.html';
});



/*----- FORM MANAGER - INDEX PAGE -----*/

function messageIndex() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var submitOK = "true";

    if (fname.length < 1 || fname.length > 30) {
        alert("The first name must have at least 2 characters but no more than 30 characters");
        submitOK = "false";
    }
    if (lname.length < 1 || lname.length > 30) {
        alert("The last name must have at least 2 characters but no more than 30 characters");
        submitOK = "false";
    }
    if (email.length < 1 || email.length > 40) {
        alert("Your email must have at least 2 characters but no more than 40 characters");
        submitOK = "false";
    }
    if (message.length < 1) {
        alert("Please leave us a message");
        submitOK = "false";
    }
    if (submitOK == "false") {
        return false;
    } else {
        alert("Yor message has been sent");
        return true;
    }
}


/*----- FORM MANAGER - SECOND PAGE -----*/

function messagePage2() {

    var fname2 = document.getElementById("fname2").value;
    var lname2 = document.getElementById("lname2").value;
    var email2 = document.getElementById("email2").value;
    var address = document.getElementById("address").value;
    var CC = document.getElementById("CC").value;
    var terms = document.getElementById("terms").checked;
    var whichCC = document.getElementsByName("CC");
    var submitOK = "true";
    terms.checked = false;

    //to check which credit card was selected (visa, mastercard or amex)
    for (i = 0; i < whichCC.length; i++) {
        if (whichCC[i].checked) {
            var card = whichCC[i].value;
        }
    }
    if (fname2.length < 1 || fname2.length > 30) {
        alert("The first name must have at least 2 characters but no more than 30 characters");
        //if the First name is empty or incomplete, background changes to red
        $("#fname2").css("background", "#bc3b27");
        submitOK = "false";
    }
    if (lname2.length < 1 || lname2.length > 30) {
        alert("The last name must have at least 2 characters but no more than 30 characters");
        //if the Last name is empty or incomplete, background changes to red
        $("#lname2").css("background", "#bc3b27");
        submitOK = "false";
    }
    if (address.length < 1 || address.length > 40) {
        alert("Your address must have at least 2 characters but no more than 40 characters");
        //if the Address is empty or incomplete, background changes to red
        $("#address").css("background", "#bc3b27");
        submitOK = "false";
    }
    if (email2.length < 1 || email2.length > 40) {
        alert("Your email must have at least 2 characters but no more than 40 characters");
        //if the email is empty or incomplete, background changes to red
        $("#email2").css("background", "#bc3b27");
        submitOK = "false";
    }
    if (CC.length != 12) {
        alert("The credit card number may contain 12 digits");
        //if the Credit card number is empty or incomplete, background changes to red
        $("#CC").css("background", "#bc3b27");
        submitOK = "false";
    }
    if (terms == false) {
        alert("Plase check the terms and conditions");
        submitOK = "false";
    }
    if (submitOK == "false") {
        return false;
    } else {
        alert("Hi " + fname2 + " " + lname2 + ", thank you for purchasing our product using your " +card+ " credit card, number: XXXX XXXX " + CC[8] + CC[9] + CC[10] + CC[11] + ". We will email your receipt on " +email2+ ", and send the product to " + address);
        return true;
    }
}

//Changes the input background to color white when Reset button is pressed
$("#reset2").click(function () {

    $("#fname2").css("background", "white");
    $("#lname2").css("background", "white");
    $("#address").css("background", "white");
    $("#email2").css("background", "white");
    $("#CC").css("background", "white");

});