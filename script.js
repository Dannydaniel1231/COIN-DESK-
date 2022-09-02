const container=document.querySelector("body")
const pragraphy=document.getElementsByClassName("top")
const cont =document.getElementsByClassName("container")
const mid =document.getElementsByClassName("middle")
const card = document.getElementsByClassName("cards")
const year= new Date();
const date=year.toGMTString();
console.log(date);

const timer= (code,date,rate,description)=>{
    const card =`<div class="card">
    <div class="GMT">${date}
    </div>
    <div class="dollar">code:Bitcoin to ${code}<br>rate:${rate}<br>description:${description}
    </div>
     </div>
     `


     card.innerHTML+=card;
}

const fetchData=async()=>{


const fetch = await(await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")).json();
const currency=fetch.currency;
console.log(currency.EUR);
timer(date,currency.USD.code,currency.USD.rate,currency.USD.description);
timer(date,currency.GBP.code,currency.GBP.rate,currency.GBP.description);
timer(date,currency.EUR.code,currency.EUR.rate,currency.EUR.description);

pragraphy.innerHTML=`Disclaimer:${fetch.disclaimer}`+`<br>chartName:${fetch.chartName}`

}

fetchData();