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


const fetchCoin= await(await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")).json();
console.log(fetchCoin.bpi);
const bpi=fetchCoin.bpi;
console.log(bpi)
timer(date,bpi.USD.code,bpi.USD.rate,bpi.USD.description);
timer(date,bpi.GBP.code,bpi.GBP.rate,bpi.GBP.description);
timer(date,bpi.EUR.code,bpi.EUR.rate,bpi.EUR.description);

card.innerHTML=`Disclaimer:${fetchCoin.disclaimer}`+`<br>chartName:${fetchCoin.chartName}`

}

fetchData()