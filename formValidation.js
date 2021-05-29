Boolean = true;
Boolean2 = true;
Boolean3 = true;

const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    const firstNameField = document.getElementById("name");
    let valid = true;

    if (!firstNameField.value) {
        const nameError = document.getElementById("nameError");
        nameError.classList.add("visible");
        firstNameField.classList.add("invalid");
        nameError.setAttribute("aria-hidden", false);
        nameError.setAttribute("aria-invalid", true);
    }
    return valid;
}
function onClickHandler() {


    Boolean = !Boolean;
    var value6 = document.getElementById("demo3").value;


    if (Boolean == true) {
        document.getElementById("price").innerHTML = "$00.00";
        document.getElementById("total_price").innerHTML = "Total:$00.00";
    }
    else {
        var value2 = document.getElementById("dept").value;
        var val3 = value2 * 30

        document.getElementById("price").innerHTML = "$30.00";

        document.getElementById("total_price").innerHTML = " Total:$" + val3 + ".00";

    }
}

function onClickHandler2() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function onClickHandler3() {
    var x = document.getElementById("hide");



    x.style.display = "block";



}
function onClickHandler4() {
    var x = document.getElementById("hide");



    x.style.display = "none";



}

function ValidateEmail(mail) {
    var email = document.getElementById('mail');
    if (/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(mail)) {
        return (true)
    }
    // window.alert("You have entered an invalid email address!")
    document.getElementById('mailerror').style.visibility = "visible";
    document.getElementById('mailerror').style.color = 'red';
    document.getElementById('mailerror').innerHTML = '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Enter Valid email address';
    //email.focus();
    return (false)
}
function validd() {
    CredN();
    sc();
    expireDate();
    ClickHandler5();
    // var fnamecheck = new Boolean(false);
    // var lnamecheck = new Boolean(false);
    // var ccncheck = new Boolean(false);
    // var sccheck = new Boolean(false);
    // var postalcheck = new Boolean(false);
    // var emailcheck = new Boolean(false);



    var fname = document.getElementById('fname');
    var fnamecheck = firstname();

    var lname = document.getElementById('lname');
    var lnamecheck = lastname();



    var postal = document.getElementById('Postal');
    var postalcheck = Postal();

    var postal1 = document.getElementById('PC');
    var postalcheck1 = Postal1();


    /*var scc = document.getElementById('SC');
    var sccheck = sc();*/

    // var ccns = document.getElementById('CCN');
    //var ccncheck = CCN();


    var cncheck = contactnumber();
    var pncheck = phonenumber();
    var postalcheck3 = Postal2();
    var ccncheck = CCN();

    var email = document.getElementById('mail');
    var emailcheck = ValidateEmail(email.value);


    /* if (fnamecheck === true)
    return true;
    return false;
    */

}
function ClickHandler5() {
    //Boolean2 = !Boolean2;
    var ab = document.getElementById("newsame").value;
    if (ab) {
        document.getElementById("hide").innerHTML = "";

    }
}

function CredN() {
    var regName = /^\d+$/;
    var name = document.getElementById('CCN');

    if (regName.test(name.value)) {
        document.getElementById('crediterror2').style.visibility = "none";

        return true;

    }
    else {
        document.getElementById('crediterror2').style.visibility = "visible";
        document.getElementById('crediterror2').style.color = 'red';
        document.getElementById('crediterror2').innerHTML = '&emsp;&emsp;Required Valid Credit Card Number';
        // name.focus();
        return false;
    }
}
function sc() {
    var regName = /^\d+$/;
    //var regName = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    var name = document.getElementById('SC');
    if (regName.test(name.value)) {
        document.getElementById('securityerror').style.visibility = "none";

        return true;

    }
    else {
        document.getElementById('securityerror').style.visibility = "visible";
        document.getElementById('securityerror').style.color = 'red';
        document.getElementById('securityerror').innerHTML = '&emsp;&emsp;*Required valid Code';
        // name.focus();
        return false;
    }
}

function expireDate() {
    var regName = /^\d+$/;
    //var regName = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    var name = document.getElementById('ED');
    if (regName.test(name.value)) {
        document.getElementById('ederror').style.visibility = "none";

        return true;

    }
    else {
        document.getElementById('ederror').style.visibility = "visible";
        document.getElementById('ederror').style.color = 'red';
        document.getElementById('ederror').innerHTML = '&emsp;&emsp;Required expire Date';
        // name.focus();
        return false;
    }
}


function firstname() {
    var regName = /^[a-zA-Z ]+$/;
    var name = document.getElementById('fname');

    if (regName.test(name.value)) {
        document.getElementById('firstnameerror').style.visibility = "none";
        return true;

    }
    else {
        // document.getElementById('firstnameerror').style.visibility="visible";
        document.getElementById('firstnameerror').style.display = "inline";
        document.getElementById('firstnameerror').style.color = 'red';
        document.getElementById('firstnameerror').innerHTML = '&emsp;&emsp;Enter valid First Name';
        name.focus();

        return false;
    }
}
function firstname2() {
    var regName = /^[a-zA-Z ]+$/;
    var name = document.getElementById('fname2');

    if (regName.test(name.value)) {
        document.getElementById('firstnameerror2').style.visibility = "none";
        return true;

    }
    else {
        // document.getElementById('firstnameerror').style.visibility="visible";
        document.getElementById('firstnameerror2').style.display = "inline";
        document.getElementById('firstnameerror2').style.color = 'red';
        document.getElementById('firstnameerror2').innerHTML = '&emsp;&emsp;Enter valid Last Name';
        name.focus();

        return false;
    }
}

function firstname3() {
    var regName = /^[a-zA-Z ]+$/;
    var name = document.getElementById('fname3');

    if (regName.test(name.value)) {
        document.getElementById('firstnameerror3').style.visibility = "none";
        return true;

    }
    else {
        // document.getElementById('firstnameerror').style.visibility="visible";
        document.getElementById('firstnameerror3').style.display = "inline";
        document.getElementById('firstnameerror3').style.color = 'red';
        document.getElementById('firstnameerror3').innerHTML = '&emsp;&emsp;Enter valid First Name';
        name.focus();
        return false;
    }
}
function lastname() {
    var regName = /^[a-zA-Z ]+$/;
    var name = document.getElementById('lname');
    if (regName.test(name.value)) {
        document.getElementById('lastnameerror').style.visibility = "none";
        return true;

    }
    else {
        document.getElementById('lastnameerror').style.visibility = "visible";
        document.getElementById('lastnameerror').style.color = 'red';
        document.getElementById('lastnameerror').innerHTML = '&emsp;&emsp;Enter valid Last Name';
        // name.focus();
        return false;
    }
}
function lastname2() {
    var regName = /^[a-zA-Z ]+$/;
    var name = document.getElementById('lname2');
    if (regName.test(name.value)) {
        document.getElementById('lastnameerror2').style.visibility = "none";
        return true;

    }
    else {
        document.getElementById('lastnameerror2').style.visibility = "visible";
        document.getElementById('lastnameerror2').style.color = 'red';
        document.getElementById('lastnameerror2').innerHTML = '&emsp;&emsp; Enter valid Last Name';
        // name.focus();
        return false;
    }
}

function lastname3() {
    var regName = /^[a-zA-Z ]+$/;
    var name = document.getElementById('lname3');
    if (regName.test(name.value)) {
        document.getElementById('lastnameerror3').style.visibility = "none";
        return true;

    }
    else {
        document.getElementById('lastnameerror3').style.visibility = "visible";
        document.getElementById('lastnameerror3').style.color = 'red';
        document.getElementById('lastnameerror3').innerHTML = '&emsp;&emsp;Enter valid Last Name';
        // name.focus();
        return false;
    }
}
function Postal() {
    //var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var regName = /^\d{4}$/;
    var name = document.getElementById('Postal');
    if (regName.test(name.value)) {
        document.getElementById('postcodeerror').style.visibility = "none";
        return true;

    }
    else {
        document.getElementById('postcodeerror').style.visibility = "visible";
        document.getElementById('postcodeerror').style.color = 'red';
        document.getElementById('postcodeerror').innerHTML = '&emsp;&emsp;Enter valid Postal Code ';
        // name.focus();
        return false;
    }



}
function Postal1() {
    //var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var regName = /^\d{4}$/;
    var name = document.getElementById('PC');
    if (regName.test(name.value)) {
        document.getElementById('postcodeerror1').style.visibility = "none";
        return true;

    }
    else {
        document.getElementById('postcodeerror1').style.visibility = "visible";
        document.getElementById('postcodeerror1').style.display = "inline";
        document.getElementById('postcodeerror1').style.color = 'red';
        document.getElementById('postcodeerror1').innerHTML = '&emsp;&emsp;Enter valid postal';
        // name.focus();
        return false;
    }
}

function Postal2() {
    //var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var regName = /^\d{4}$/;
    var name = document.getElementById('PC');
    if (regName.test(name.value)) {
        document.getElementById('postcodeerror2').style.visibility = "none";
        return true;

    }
    else {
        document.getElementById('postcodeerror2').style.visibility = "visible";
        document.getElementById('postcodeerror2').style.color = 'red';
        document.getElementById('postcodeerror2').innerHTML = '&emsp;&emsp;Enter valid postal';
        // name.focus();
        return false;
    }
}


function phonenumber() {
    var regName = /^\d{7}$/;
    // var regName = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // if(document.getElementById('securityerror')=='Aus'){
    // var regName=/^\d{7}$/;
    // }
    // else{
    // var regName=/^\d{7}$/;
    // }
    var name = document.getElementById('PN');
    if (regName.test(name.value)) {
        document.getElementById('phoneerror').style.visibility = "none";
        return true;

    }
    else {
        document.getElementById('phoneerror').style.visibility = "visible";
        document.getElementById('phoneerror').style.color = 'red';
        document.getElementById('phoneerror').innerHTML = '&emsp;&emsp;Enter valid phone number';
        // name.focus();
        return false;
    }
}

function contactnumber() {
    var regName = /^\d{7}$/;
    // var regName = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // if(document.getElementById('securityerror')=='Aus'){
    // var regName=/^\d{7}$/;
    // }
    // else{
    // var regName=/^\d{7}$/;
    // }
    var name = document.getElementById('CN');
    if (regName.test(name.value)) {
        document.getElementById('contacterror').style.visibility = "none";
        return true;

    }
    else {
        document.getElementById('contacterror').style.visibility = "visible";
        document.getElementById('contacterror').style.color = 'red';
        document.getElementById('contacterror').innerHTML = '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Enter Valid Contact number';
        // name.focus();
        return false;
    }
}

/*
function CCN() {
var regName = /^\d+$/;
//var regName = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
var name = document.getElementById('CCN');
if (regName.test(name.value)) {
document.getElementById('credit').style.visibility = "none";

return true;

}
else {
document.getElementById('credit').style.visibility = "visible";
document.getElementById('credit').style.color = 'red';
document.getElementById('credit').innerHTML = '&emsp;&emsp;*Required valid Contact Number';
// name.focus();
return false;
}
}*/



function FillBilling(f) {
    if (f.billingtoo.checked == true) {
        f.billingname.value = f.shippingname.value;
        f.billingcity.value = f.shippingcity.value;
        f.billingname2.value = f.shippingname2.value;
        f.billingcity2.value = f.shippingcity2.value;
        f.billingname3.value = f.shippingname3.value;
        f.billingcity3.value = f.shippingcity3.value;
    }
}