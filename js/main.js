// set the initial total price
let total=0;
let prices=document.querySelectorAll(".div-price p");
for(let i of prices){
        i=Number(i.textContent.replace(" TN",""));
        total+=i;
    }
let totalPrice=document.querySelector("#first-section").getElementsByTagName('p')[0];
totalPrice.textContent=total+" TN";

// heart click event
let arrHeart=document.getElementsByClassName("fa-heart");
for(let i=1; i<arrHeart.length;i++){
    arrHeart[i].addEventListener("click",function(event){
        if (event.target.className==="far fa-heart"){
            event.target.className="fas fa-heart red";
        }else {event.target.className="far fa-heart";}
    }) 
}
// "+" and "-" buttons click events
let arrButton=document.getElementsByClassName("btn btn-primary btn-sm");
for (let i of arrButton){
    i.addEventListener("click", function(event){
        let x=event.target.parentElement.children[1].value; 
        let total=Number(totalPrice.textContent.replace(" TN",""));
        let price=Number(event.target.parentElement.parentElement.getElementsByTagName("p")[1].textContent.replace(" TN",""));
    if(i.textContent.trim()==="-" && x>0){
        event.target.parentElement.children[1].value=Number(x)-1;
        total-=price;
    }
     if(i.textContent.trim()==="+") {event.target.parentElement.children[1].value=Number(x)+1;
        total+=price;}
        totalPrice.textContent=total.toFixed(3)+" TN";
    })
}
//Total Price- input event
let inputs=document.getElementsByTagName("input");
for(let i of inputs){
    i.addEventListener('input', e=> {
      total=0;
      let priceUnit=0;
      for(let j=0;j<prices.length;j++){
        priceUnit=Number(prices[j].textContent.replace(" TN","")).toFixed(3);
        let quantity=Number(inputs[j].value)
        total+=(priceUnit*quantity);
      
    }totalPrice.textContent=total.toFixed(3)+" TN";
})}
 
// Cross Section
let arrCross=document.getElementsByClassName("fas fa-times");
for(let i=0; i<arrCross.length; i++){
    arrCross.item(i).addEventListener("click",function(event){
        event.target.parentElement.parentElement.remove(); /* To delete section*/
        let total=Number(totalPrice.textContent.replace(" TN","")); /* To subtract the value of removed section */
        let quantity=Number(event.target.parentElement.parentElement.getElementsByTagName("input")[0].value);
        let minusPrice=Number(event.target.parentElement.parentElement.getElementsByTagName("p")[1].textContent.replace(" TN",""))*quantity;
        total-=minusPrice;
        totalPrice.textContent=total.toFixed(3)+" TN";
    })
}