function validate()
{
var x= document.getElementById('cno').value;
var reg=/^[0-9]{8}$/;
if(x.match(reg))
{
document.getElementById('cerror').innerHTML="";
} else{
 document.getElementById('cerror').innerHTML="<b style='color:red'>Invalid no</b>"; 
 }
 var y= document.getElementById('cname').value;
var reg2=/^[A-Z]+[a-zA-Z]{3,}$/;
if(y.match(reg2))
{
document.getElementById('cnerror').innerHTML="";
} else{
 document.getElementById('cnerror').innerHTML=
 "<b style='color:red'>Invalid name</b>"; 
 }
 
 var z=document.getElementById("mail").value;
 var reg1=/^[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z]+$/;
if(z.match(reg1))
{
document.getElementById('merror').innerHTML="";
} else{
 document.getElementById('merror').innerHTML="<b style='color:red'>Invalid email</b>"; 
 var b=document.getElementById("no").value;
 var reg3=/^[6-9][0-9]{9}$/;
 var result=parseInt(b)*02.96;
if(b.match(reg3))
{
document.getElementById('nerror').innerHTML="";
} else{
 document.getElementById('nerror').innerHTML="<b style='color:red'>Invalid units</b>"; 
 
document.write("charges are:"+(result));

 }
return false;
 
 }