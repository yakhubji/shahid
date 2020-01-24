function sub()
{
var a=document.getElementById("name").value;
var b=document.getElementById("age").value;

var c=document.getElementById("gmail").value;
var d=document.getElementById("password").value;
var data=document.getElementsByName("gender");

for(var i=0;i<data.length;i++)
{
if(data[i].checked)
{
var f=data[i].value;
break;
}
}
var g=document.getElementsByName("banna");
for(var i=0;i<g.length;i++)
{
if(g[i].checked==true)
{
var p=g[i].value;
break;
}

}





console.log(a);

console.log(b);

console.log(c);
console.log(d);

console.log(f);
console.log(p);
}
