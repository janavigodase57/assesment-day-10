const foods = [

{
id:1,
name:"Burger",
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
description:"Cheesy Chicken Burger",
price:199,
rating:4.5
},

{
id:2,
name:"Pizza",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591",
description:"Loaded Cheese Pizza",
price:399,
rating:4.8
},

{
id:3,
name:"Pasta",
image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
description:"Italian White Sauce Pasta",
price:249,
rating:4.4
},

{
id:4,
name:"Sandwich",
image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
description:"Veg Club Sandwich",
price:149,
rating:4.2
},

{
id:5,
name:"French Fries",
image:"https://images.unsplash.com/photo-1576107232684-1279f390859f",
description:"Crispy Fries",
price:99,
rating:4.6
},

{
id:6,
name:"Biryani",
image:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
description:"Chicken Dum Biryani",
price:299,
rating:4.9
},

{
id:7,
name:"Momos",
image:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
description:"Steamed Momos",
price:120,
rating:4.3
},

{
id:8,
name:"Ice Cream",
image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb",
description:"Chocolate Ice Cream",
price:89,
rating:4.7
}

];

let cart=[];

const foodContainer=document.getElementById("foods");

foods.forEach(food=>{

foodContainer.innerHTML+=`

<div class="card">

<img src="${food.image}">

<div class="card-content">

<h3>${food.name}</h3>

<p>₹${food.price}</p>

<p>⭐ ${food.rating}</p>

<button onclick="viewFood(${food.id})">
View Details
</button>

<button onclick="addToCart(${food.id})">
Add To Cart
</button>

</div>

</div>

`;

});

function viewFood(id){

const food=foods.find(f=>f.id===id);

document.getElementById("foodModal").style.display="flex";

modalImg.src=food.image;
modalName.innerText=food.name;
modalDesc.innerText=food.description;
modalPrice.innerText="₹"+food.price;
modalRating.innerText="⭐ "+food.rating;
}

function closeModal(){
foodModal.style.display="none";
}

function addToCart(id){

const item=cart.find(i=>i.id===id);

if(item){
item.qty++;
}
else{
const food=foods.find(f=>f.id===id);
cart.push({...food,qty:1});
}

renderCart();
}

function renderCart(){

let total=0;

cartItems.innerHTML="";

cart.forEach(item=>{

total+=item.price*item.qty;

cartItems.innerHTML+=`

<div class="cart-item">

${item.name}

<div>

<button class="qty-btn"
onclick="changeQty(${item.id},-1)">-</button>

${item.qty}

<button class="qty-btn"
onclick="changeQty(${item.id},1)">+</button>

₹${item.price*item.qty}

</div>

</div>

`;

});

document.getElementById("total").innerText=total;
}

function changeQty(id,val){

const item=cart.find(i=>i.id===id);

item.qty+=val;

if(item.qty<=0){
cart=cart.filter(i=>i.id!==id);
}

renderCart();
}

function showSummary(){

const total=document.getElementById("total").innerText;

summary.innerHTML=`

<h2>Order Summary</h2>

<h3>Total Amount : ₹${total}</h3>

<button class="payment-btn"
onclick="makePayment()">
Place Order
</button>

`;
}

function fakePayment(){

return new Promise((resolve)=>{

setTimeout(()=>{

resolve();

},3000);

});
}

async function makePayment(){

summary.innerHTML="<h2>Processing Order...</h2>";

await fakePayment();

let orderId=Math.floor(Math.random()*100000);

summary.innerHTML=`

<h2 style="color:green;">
✅ Order Confirmed
</h2>

<h3>Order ID : ${orderId}</h3>

`;

}