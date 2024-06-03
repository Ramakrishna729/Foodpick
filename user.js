
// const PreFilledproducts = [
//     {
//       id: "rec43w3ipXvP28vog",
  
//       title: "Egg Recipes",
//       item: "Break-Fast",
//       image:
//         "https://www.thespruceeats.com/thmb/JFS7y27Wr6QpgCScNroTe0y0jmo=/450x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SES-copycat-first-watch-million-dollar-harvest-hash-recipe-7853520-hero-01-5f90e986d2124132bee79a0466621a0b.jpg",
//       price: 100,
//     },
//     {
//       id: "rec4f2RIftFCb7aHh",
  
//       title: "Pancake",
//       item: "Break-fast",
//       image:
//         "https://www.thespruceeats.com/thmb/7VYBqe5J6iK7UjtWumccJzn8F0s=/450x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SES-uttapam-recipe-7559216-hero-01-d8e7d9ee2986484e81891415a0ba9677.jpg",
//       price: 200,
//     },
//     {
//       id: "rec8kkCmSiMkbkiko",
  
//       title: " FRENCH TOAST",
//       item: "BREAK-FAST",
//       image:
//         "https://www.thespruceeats.com/thmb/_23_8p1ywoqf00WwFcr__xTE25I=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SES-cap-n-crunch-french-toast-recipe-7104864-hero-01-acc699ef537846d8a8c864e52f0080fd.jpg",
//       price: 300,
//     },
//     {
//       id: "recBohCqQsot4Q4II",
  
//       title: "CLASSIC BANH",
//       item: "LUNCH",
//       image:
//         "https://www.thespruceeats.com/thmb/WlY2q3hiZStxcnGeQBUPKy-vDqY=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-banh-mi-4844177-hero-01-236ece4af179446888909d052ef61016.jpg",
  
//       price: 400,
//     },
//     {
//       id: "recDG1JRZnbpRHpoy",
  
//       title: "VEGAN LUNCH",
//       item: "LUNCH",
//       image:
//         "https://www.thespruceeats.com/thmb/zd0vy8ZbHwG-YNvC02QBxVN5KVc=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fat-free-vegan-pasta-salad-recipe-3376793-hero-01-5c9420bd46e0fb0001c381b7-651ce9d9b7e74d8dbd6cfd3b3a78b1ee.jpg",
  
//       price: 500,
//     },
//     {
//       id: "recNWGyP7kjFhSqw3",
  
//       title: "VEGAN LUNCH",
//       item: "LUNCH",
//       image:
//         "https://www.thespruceeats.com/thmb/sn6QnoedNtkgZAB7H9otNw9rDM4=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/WhitefishSalad-5aa6be4aba617700377e5e9d.jpg",
//       price: 600,
//     },
//     {
//       id: "recZEougL5bbY4AEx",
  
//       title: "EASY MACARONI",
//       item: "DINNER",
//       image:
//         "https://www.thespruceeats.com/thmb/jNI9BTAfxyEHoGAIrIGQkcJcJ2I=/300x225/filters:no_upscale():max_bytes(150000):strip_icc()/baked-macaroni-and-cheese-casserole-recipe-3058145-hero-03-e451743018ce4f4f8cfa0417bde0e3a3.jpg",
//       price: 700,
//     },
//     {
//       id: "recjMK1jgTb2ld7sv",
  
//       title: "MAIN DISTES",
//       item: "DINNER",
//       image:
//         "https://www.thespruceeats.com/thmb/0_--jYqJlVjbcx88PFLfr2OFldc=/300x225/filters:no_upscale():max_bytes(150000):strip_icc()/Tuna-Alfredo-Casserole-58ade6605f9b58a3c9d5aeb1.jpg",
//       price: 800,
//     },
//     {
//       id: "recmg2a1ctaEJNZhu",
  
//       title: "AFFERDO",
//       item: "DINNER",
//       image:
//         "https://www.thespruceeats.com/thmb/VF_gqhHdC3YDqjwGXAv3bfepIwY=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/calzones-hero-01-1e68df5418f646b18f41e813621486c1.jpg",
//       price: 900,
//     },
//   ];







let products = localStorage.getItem("allProducts")? JSON.parse(localStorage.getItem("allProducts")):[]

const categories = [...new Set(products.map((items)=>
    {return items}))]
    console.log(categories)
    let i=0;
document.getElementById('root').innerHTML = categories.map((items)=>
{
    var {image, title, price,item} = items;
    // let rupeeSymbol = "&#8377"
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p style = "margin-top:1px;">${item}</p>
        <p style = "color:orange">${title}</p>
        <h2>PRICE:₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];


function addtocart(a){
    let found=false
    let tempobj={...categories[a]}
    cart.forEach(element => {
       if(element.id===tempobj.id){
        element.qty +=1
        found=true
       }
    });

    if(!found){
        tempobj.qty=1
        cart.push(tempobj) 
    }
   
    displaycart();
    // console.log(cart)
}

// increment and decrement qty

// function incrementValue(a){
//     let found=false
//     let tempobj={...categories[a]}
//     cart.forEach(element => {
//        if(element.id===tempobj.id){
//         element.decrement -=1
//         found=true
//        }
//     });

//     if(!found){
//         tempobj.qty=0
//         cart.push(tempobj) 
//     }
   
//     displaycart();
//     // console.log(cart)
// }

// function decementValue(a){
//     let found=false
//     let tempobj={...categories[a]}
//     cart.forEach(element => {
//        if(element.id===tempobj.id){
//         element.qty +=1
//         found=true
//        }
//     });

//     if(!found){
//         tempobj.qty=0
//         cart.push(tempobj) 
//     }
   
//     displaycart();
//     // console.log(cart)
// }



function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;

    if(cart.length == ""){
      let buyBtn = document.getElementById("buyButton")
      buyBtn.addEventListener("click",function(){
       document.getElementById("buyButton").style.display = "none"

      })}
    
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
         let buyBtn = document.getElementById("buyButton")
         buyBtn.addEventListener("click",function(){
          document.getElementById("buyButton").style.display = "none"
         })
        
        
        
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price,item,qty,id} = items;
            total=total+(price*qty);
            document.getElementById("total").innerHTML = "₹ "+total+".00";
            console.log(items)
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${item}</p>

                <p style='font-size:12px;color:orange;'>${title}</p>
                <p style='font-size:12px;color:red;cursor:pointer;font-size:20px;' onclick ="decreaseQty('${id}')" >-</p>
                <p style='font-size:12px;color:green;' >Qty:${qty}</p>
                <p style='font-size:12px;color:green;cursor:pointer;font-size:20px;'  onclick ="increaseQty('${id}')">+</p>
                <h2 style='font-size: 15px;'>₹ ${price*qty}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

function userLogout(){
    document.getElementById("userLogout").addEventListener("click",function(){
        location.href = "index.html"

    })
}

// document.getElementById("popupContainerside").addEventListener("click",function(){
   
// })

function popupContainerside(){
   
    document.getElementById("popupContainerside").style.display = "none"
}

// function confirmationPopup(){
//     document.getElementById("confirmationPopup").style.display = "none"
    
// }

document.addEventListener('DOMContentLoaded', () => {
    let rootItem = document.getElementById("root")
     document.getElementById("aboutus").addEventListener("click",()=>{
        rootItem.innerHTML = ""
        document.getElementById("about-container").style.display = "block"
     })
    document.getElementById('count').addEventListener("click",()=>{
        
        document.getElementById("popupContainerside").style.display="block"
        

    })

    document.getElementById("buyButton").addEventListener("click",showPayment)

    document.getElementById('downloadButton').addEventListener('click', downloadpdf)
     

 })

// document.getElementById("root").addEventListener("click",function(){
//     rootItem.style.display = "block";
//     aboutContainer.style.display = "none"
// })



document.getElementById("about-container").addEventListener("click",function(){
    rootItem.style.display = "none";
    aboutContainer.style.display = "block";
})

document.getElementById("recipes").addEventListener("click",function(){
    location.reload();
})

// document.getElementById("proceedButton").addEventListener("click",confirmationPopup)


 function confirmationPopup(){
    document.getElementById("paymentPopup").style.display = "none"
    document.getElementById("confirmationPopup").style.display = "block"
 }

//  let confirmationPopup = document.getElementById("closeConfirmationPopup")

// confirmationPopup.addEventListener("click",function(){
//   document.getElementById("confirmationPopup").style.display = "none"
// })





// document.getElementById('showPopup').addEventListener('click', function() {
//     document.getElementById('popupContainer').classList.add('active');
    
// });


// buy button information

// document.getElementById('buyButton').addEventListener('click', function() {
//     document.getElementById('paymentPopup').style.display = 'flex';
// });

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('paymentPopup').style.display = 'none';
});

document.getElementById('proceedButton').addEventListener('click', function() {
    const cardNumber = document.getElementById('cardNumber').value;
    const cvv = document.getElementById('cvv').value;
    const expiryDate = document.getElementById('expiryDate').value;

    const cardNumberPattern = /^\d{16}$/;
    const cvvPattern = /^\d{3,4}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;

    let isValid = true;

    if (!cardNumberPattern.test(cardNumber)) {
        document.getElementById('cardNumberError').textContent = 'Please enter a valid 16-digit card number.';
        isValid = false;
    } else {
        document.getElementById('cardNumberError').textContent = '';
    }

    if (!cvvPattern.test(cvv)) {
        document.getElementById('cvvError').textContent = 'Please enter a valid 3 or 4-digit CVV.';
        isValid = false;
    } else {
        document.getElementById('cvvError').textContent = '';
    }

    if (!expiryDatePattern.test(expiryDate)) {
        document.getElementById('expiryDateError').textContent = 'Please enter a valid expiry date (MM/YY).';
        isValid = false;
    } else {
        document.getElementById('expiryDateError').textContent = '';
    }

    if (isValid) {
        const paymentDetails = {
            cardNumber: cardNumber,
            cvv: cvv,
            expiryDate: expiryDate
        };

        localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));

        document.getElementById('paymentPopup').style.display = 'none';

        // Retrieve and log the payment details
        const storedPaymentDetails = JSON.parse(localStorage.getItem('paymentDetails'));
        console.log('Stored Payment Details:', storedPaymentDetails);

        // Assuming products data is already set in local storage
        const products = JSON.parse(localStorage.getItem('products'));
        console.log('Products:', products);
    }

    if(isValid){
        confirmationPopup(); 
    }
    
});

// let products=localStorage.getItem("allProducts")? JSON.parse(localStorage.getItem("allProducts")):[]

// Example of setting product data in local storage
localStorage.setItem('products', JSON.stringify("products"
));



function showPayment(){

  document.getElementById("popupContainerside").style.display = "none"
  document.getElementById("paymentPopup").style.display = "block"
  document.getElementById("count").style.display = "none"
  

   if(localStorage.getItem('paymentConfirmationMessage' ) !== null ){
   
   let storePayment = JSON.parse(localStorage.getItem('paymentConfirmationMessage' ))    
    let res = storePayment.concat(cart) 
     localStorage.setItem('paymentConfirmationMessage',JSON.stringify(res))
    //  localStorage.removeItem("paymentConfirmationMessage",res)
   
   }
   else{localStorage.setItem('paymentConfirmationMessage',JSON.stringify(cart))

   }
   

  //   document.getElementById("popupContainerside").style.display = "none"
  //   document.getElementById("paymentPopup").style.display = "block"
  //   document.getElementById("cartItems").style.visibility = "hidden"
  //   let bookedCart=document.getElementById("cartItems")
    
  //   console.log(cart)
  //   cart.forEach(obj=>{
  //       bookedCart.insertAdjacentHTML("beforeend",`
  //       <li>${obj.title}</li>`) 
  //   })



}


var pdfGrandPrice = document.getElementById("pdfGrandTotal")
function downloadpdf (){
    
    let pdfTable = document.getElementById("pdfTable")
    let grandTotal = 0;
    pdfTable.innerHTML=""
    pdfTable.insertAdjacentHTML("beforeend",`
    <tr style = "border:1px solid black;border-collapse:collapse;width:80%">
    <th>Item</th>
    <th>Qty</th>
    <th>Price</th>
</tr>`)
    cart.forEach(item =>{pdfTable.insertAdjacentHTML("beforeend",`<tr>
    <td>${item.title}</td>
    <td>${item.qty}</td>
    <td>${item.price* item.qty}</td>
</tr>`
)

grandTotal = grandTotal +(item.price* item.qty)
 

    })

    pdfGrandPrice.innerHTML = grandTotal
    document.getElementById("pdfDiv").style.display = "block"

    finalDownload()
    document.getElementById("pdfDiv").style.display = "block"
   
        //  location.reload()

}


//  Notification  Popup










// Example of setting product data in local storage
// localStorage.setItem('products', JSON.stringify([
// { id: 1, name: 'Product 1', price: 100 },
// { id: 2, name: 'Product 2', price: 200 }
// ]));

function  increaseQty(id){
    console.log(cart)
    cart.map(item =>{
        if(item.id === id){
            item.qty += 1;
        }
    })
    displaycart()
}

function  decreaseQty(id){
    console.log(cart)
    cart.map(item =>{
        if(item.id === id && item.qty>1){
            item.qty -= 1;   
        }
    })
    displaycart()

}


function finalDownload() {

    var ele = document.getElementById("sts");
    const opt = {
      filename: "bill.pdf",
      margin: 2,
      image: { type: "png", quality: 0.9 },
      jsPDF: { format: "A4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(ele).save();
  }


  function closeProfile() {
    document.getElementById("displayprofile").style.display = "none";
    
  }
  function ShowProfile() {
    document.getElementById("displayprofile").style.display = "block";
  }

  function logout() {
    localStorage.setItem("isLogin", "");
    location.href = "index.html";
  }

  document.getElementById("count").addEventListener("click",function(){
    document.getElementById("count").style.display = "block"
    document.getElementById("root").style.display = "none"
    document.getElementById("footer-container").style.display = "none"
   
   
  })

 

  // if(cartItem.length === 0){

  //   document.getElementById("buyButton").addEventListener("click",function(){
  //     document.getElementById("paymentPopup").style.visibility = "hidden"
  //   })
  // }
document.getElementById("downloadButton").addEventListener("click",function(){
  document.getElementById("confirmationPopup").style.display = "none"
  document.getElementById("sts").location.href = "./user.html"
  // document.getElementById("sts").style.display = "none"
  // location.href = "./user.html"
})

document.getElementById("closePdf").addEventListener("click",function(){
  document.getElementById("sts").style.display = "none"
})



  

  


 








    







