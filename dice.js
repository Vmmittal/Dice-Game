var randomnumber=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomnumber+".png";
var randomimgsource="img/"+randomdiceimage;
var image1=document.querySelectorAll("img")[2];
image1.setAttribute("src",randomimgsource);


var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="dice"+randomnumber2+".png";
var randomimgsource2="img/"+randomdiceimage2;
var image2=document.querySelectorAll("img")[3];
image2.setAttribute("src",randomimgsource2);


if(randomnumber>randomnumber2)
{
    document.querySelector("h3").innerHTML="PLAYER 1 Won";
}
else if (randomnumber<randomnumber2){
    document.querySelector("h3").innerHTML="PLAYER 2 Won";
}
else
{
    document.querySelector("h3").innerHTML="DRAW !";

}
