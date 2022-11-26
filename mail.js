/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


function sendmail(){
      
    var fullname = $('#FullName').val();
    var email = $('#Email').val();
    var phone = $('#Phone').val();
    var subject = $('#Subject').val();
    var message = $('#Message').val();


    // var body = $('#body').val();

    var Body='FullName: '+fullname+'<br>Email: '+email+' <br>Phone: '+phone+' <br>Subject: '+subject+'<br>Message: '+message;
    //console.log(name, phone, email, message);

    Email.send({
Host: "smtp.elasticemail.com",
Username: "creativityu33@gmail.com",
Password: "6E11C37475A4FC4AABF3CA18D29EDB48BCCD",
To: "companyampere@gmail.com",
        From: "creativityu33@gmail.com",
        Subject: "New message on contact"+fullname,
        Body: Body
    }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){
            alert('Your mail has been sent, Thank you for contacting us, we will contact you as soon as possible.');
            }
            else{
                console.error (message);
                alert('There was an error sending the message, Please verify that the data is correct.')
                
            }

        }
    );



}
