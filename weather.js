const apikey="13c2e812c4984ef6d7ac75bc954ac43b";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".card1 .searchcard .search");
const btn=document.querySelector(".card1 .button1");

async function checkwheather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();
   if(data.name==undefined){
    document.querySelector(".city").innerHTML="enter valid city name";
    document.querySelector(".temp").innerHTML="--";
   }
   else{
    document.querySelector(".card1 .city").innerHTML=data.name;
    document.querySelector(".card1 .temp").innerHTML=Math.round(data.main.temp)+"°Celcius";
   }
}
btn.onclick=function(){
    checkwheather(searchbox.value);
}