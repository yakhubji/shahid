function cost()
{
var a=document.getElementById("pup").value;
var b=document.getElementById("dp").value;
km=b-a;
var data=document.getElementByName("cab");
for(i=0;i<data.length;i++)
{
if(data[i].checked)
{
var amount=data[i].value;
break;
}
}
var res=km*amount;

document.getElementById("res").innerHTML=res;
}
 