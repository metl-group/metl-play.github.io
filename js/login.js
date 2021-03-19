function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="metl_play" && password=="Qwert123" || username=="paul" && password=="betatest") {
    alert("login succesfully");
    return false;

}
else {
    alert("login failed");
}

}