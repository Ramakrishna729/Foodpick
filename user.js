let products = localStorage.getItem("allProducts")? JSON.parse(localStorage.getItem("allProducts")):[]

const categories = [...new Set(products.map((items)=>
    {return items}))]
    console.log(categories)
    let i=0;
document.getElementById('root').innerHTML = categories.map((items)=>
{
    var {image, title, price,item} = items;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p style = "margin-top:1px;">${item}</p>
        <p style = "color:orange">${title}</p>
        <h2>Price:$ ${price}.00</h2>`+
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

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
        
        
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price,item,qty} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${item}</p>
                <p style='font-size:12px;color:orange;'>${title}</p>
                <p style='font-size:12px;color:green;'>Qty:${qty}</p>
                <h2 style='font-size: 15px;'>$ ${price*qty}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

function userIcon(){
    document.getElementById("userIcon").addEventListener("click",function(){
        location.href = "index.html"

    })
}


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
    debugger
    document.getElementById("popupContainerside").style.display = "none"
    document.getElementById("paymentPopup").style.display = "block"
    let bookedCart=document.getElementById("cartItems")
    
    console.log(cart)
    cart.forEach(obj=>{
        bookedCart.insertAdjacentHTML("beforeend",`
        <li>${obj.title}</li>`) 
    })

}



function downloadpdf (){
    const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.text('Order Confirmation', 10, 10);
        doc.text('Name: Ramakrishna', 10, 20);
        doc.text('Address: ',10,40);
        doc.text('7/72 Foodpick(street)',10,50);
        doc.text('Rajajinagar',10,60);
        doc.text('Bangalore',10,70)
        doc.text("515305",10,80);
        

        let yPosition = 90;
        cart.forEach(product => {

        doc.text(`${product.item}:  ${product.title}:  Price:${product.price}:  Qty:${product.qty}`, 70, yPosition);
        yPosition += 10;
        });

        
        doc.text("Thank you for visiting ",10,100)

        
        doc.save('order_confirmation.pdf');
        location.reload()

}


//  confirmation popup


document.getElementById('proceedButton').addEventListener('click', function() {
    localStorage.setItem('paymentConfirmationMessage', 1);
    // alert('Payment confirmation sent.');
});







// Example of setting product data in local storage
// localStorage.setItem('products', JSON.stringify([
// { id: 1, name: 'Product 1', price: 100 },
// { id: 2, name: 'Product 2', price: 200 }
// ]));





 








    







