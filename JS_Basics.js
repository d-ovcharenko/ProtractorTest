/**
 * 
 */

//print numbers from 1 to 100

for(var i=0;i<=100;i=i+5)
{
console.log(i);
}
----------------------------
var j=1;
while (j<5)
{

console.log(j)
j++;
}
----------------------------
var k =10;

do
{
console.log(k)
k++;

}while(k<6)

----------------------------
/**
 * http://usejsdoc.org/
 */
function add(a,b)
{
return a+b;
}

console.log(add(2,3));
console.log(add(5,3));
console.log(add(2,12));
----------------------------
var a=4;
var b= ["hello","world","4","goodbye"];

console.log(b.length+ "is the size of the array");
for(var i=0;i<b.length;i++)
{
console.log(b[i]);
}
----------------------------
var c= new Array();

c[0]= "goodbye";
c[1]="4";
c[2]="world";
c[3]="hello";
c[4]="bad";
//length - 1 will be the maximum index
console.log(c.length+ "is the size of the array called C");
----------------------------
for(var i=0;i<c.length;i++)
{
console.log(c[i]);
}
console.log("Print the array numbers in reverse");
for(var j=c.length-1;j>=0;j--)
{
console.log(c[j]);
}
----------------------------
var name ="Rahul"; // String literal declaration

console.log(name.charAt(3));
----------------------------
var newname=name.concat("Shetty");
console.log(newname);

console.log(name.indexOf("u"));

console.log(name.slice(1, 4));
//starting index is inclusive - ending index is exclusive

console.log(name.toUpperCase());
----------------------------
var name ="Rahul ";

console.log(name.trim());

var name2=new String("Rahul");  // string object declaration
