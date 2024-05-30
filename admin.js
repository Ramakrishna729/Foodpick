const PreFilledproducts = [
  // {
  //   id: "rec43w3ipXvP28vog",

  //   title: "Egg Recipes",
  //   item: "Break-Fast",
  //   image:
  //     "https://www.thespruceeats.com/thmb/JFS7y27Wr6QpgCScNroTe0y0jmo=/450x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SES-copycat-first-watch-million-dollar-harvest-hash-recipe-7853520-hero-01-5f90e986d2124132bee79a0466621a0b.jpg",
  //   price: 100,
  // },
  // {
  //   id: "rec4f2RIftFCb7aHh",

  //   title: "Pancake",
  //   item: "Break-fast",
  //   image:
  //     "https://www.thespruceeats.com/thmb/7VYBqe5J6iK7UjtWumccJzn8F0s=/450x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SES-uttapam-recipe-7559216-hero-01-d8e7d9ee2986484e81891415a0ba9677.jpg",
  //   price: 200,
  // },
  {
    id: "rec8kkCmSiMkbkiko",

    title: " FRENCH TOAST",
    item: "BREAK-FAST",
    image:
      "https://www.thespruceeats.com/thmb/_23_8p1ywoqf00WwFcr__xTE25I=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SES-cap-n-crunch-french-toast-recipe-7104864-hero-01-acc699ef537846d8a8c864e52f0080fd.jpg",
    price: 300,
  },
  {
    id: "recBohCqQsot4Q4II",

    title: "CLASSIC BANH",
    item: "LUNCH",
    image:
      "https://www.thespruceeats.com/thmb/WlY2q3hiZStxcnGeQBUPKy-vDqY=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-banh-mi-4844177-hero-01-236ece4af179446888909d052ef61016.jpg",

    price: 400,
  },
  {
    id: "recDG1JRZnbpRHpoy",

    title: "VEGAN LUNCH",
    item: "LUNCH",
    image:
      "https://www.thespruceeats.com/thmb/zd0vy8ZbHwG-YNvC02QBxVN5KVc=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fat-free-vegan-pasta-salad-recipe-3376793-hero-01-5c9420bd46e0fb0001c381b7-651ce9d9b7e74d8dbd6cfd3b3a78b1ee.jpg",

    price: 500,
  },
  {
    id: "recNWGyP7kjFhSqw3",

    title: "VEGAN LUNCH",
    item: "LUNCH",
    image:
      "https://www.thespruceeats.com/thmb/sn6QnoedNtkgZAB7H9otNw9rDM4=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/WhitefishSalad-5aa6be4aba617700377e5e9d.jpg",
    price: 600,
  },
  // {
  //   id: "recZEougL5bbY4AEx",

  //   title: "EASY MACARONI",
  //   item: "DINNER",
  //   image:
  //     "https://www.thespruceeats.com/thmb/jNI9BTAfxyEHoGAIrIGQkcJcJ2I=/300x225/filters:no_upscale():max_bytes(150000):strip_icc()/baked-macaroni-and-cheese-casserole-recipe-3058145-hero-03-e451743018ce4f4f8cfa0417bde0e3a3.jpg",
  //   price: 700,
  // },
  {
    id: "recjMK1jgTb2ld7sv",

    title: "MAIN DISTES",
    item: "DINNER",
    image:
      "https://www.thespruceeats.com/thmb/0_--jYqJlVjbcx88PFLfr2OFldc=/300x225/filters:no_upscale():max_bytes(150000):strip_icc()/Tuna-Alfredo-Casserole-58ade6605f9b58a3c9d5aeb1.jpg",
    price: 800,
  },
  {
    id: "recmg2a1ctaEJNZhu",

    title: "AFFERDO",
    item: "DINNER",
    image:
      "https://www.thespruceeats.com/thmb/VF_gqhHdC3YDqjwGXAv3bfepIwY=/300x225/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/calzones-hero-01-1e68df5418f646b18f41e813621486c1.jpg",
    price: 900,
  },
];

let products = localStorage.getItem("allProducts")
  ? JSON.parse(localStorage.getItem("allProducts"))
  : [...PreFilledproducts];

console.log(products);



// function adminInfo(){
//   document.getElementById("admin-name").innerHTML = "Admin" 
//   document.getElementById("admin-email").innerHTML= "Admin@gmail.com"
//   document.getElementById("admin-phone").innerHTML = "8639362024"
// }
// document.getElementById('admin-icon').addEventListener("click",adminInfo)


let rupeeSymbol = "&#8377"

function showRecipe() {
  document.getElementById("recipeContainer").style.display = "";
  document.getElementById("aboutContainer").style.display = "block ";
}

document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("product-container");
  const aboutContainer = document.getElementById("about-container");
  const adminBtnContainer = document.getElementById("admin-btn-container");
  const filterLinks = document.querySelectorAll(".dropdown-content a");

  
  // envelope Message

 

  function displayProducts(filteredProducts) {
    // let rupeeSymbol = "&#8377"
    productContainer.innerHTML = "";
    filteredProducts.forEach((product, index) => {
      const productElement = document.createElement("div");
      productElement.className = "product";
      productElement.dataset.itemid = product.id;
     
      productElement.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h3 style = "color:black">${product.item}</h3>
          <h3 style = "color:orange">${product.title}</h3>
          <h3 style = "color:red">PRICE:₹ ${product.price}.00</h3>
        `;
      productContainer.appendChild(productElement);
      productElement.addEventListener("click", (event) => {
        event.preventDefault();
        te(product, index);
      });
    });
  }

  function filterProducts(filter) {
    productContainer.style.display = "flex";
    productContainer.style.marginTop = "0px;";
    aboutContainer.style.display = "none";
    adminBtnContainer.style.display = "none";
  

    if (filter === "all") {
      displayProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.item === filter.toUpperCase()
      );
      displayProducts(filteredProducts);
    }
  }

  filterLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const filter = event.target.getAttribute("data-filter");
      filterProducts(filter);
    });
  });

  // Initially display all products
  displayProducts(products);

  document.getElementById("aboutus").addEventListener("click", function () {
    productContainer.style.display = "none";
    aboutContainer.style.display = "block";
  });

  // document.getElementById("productPopup").addEventListener("click",function(){
  //   document.getElementById("product-item").style.display = ""

  // })
  document
    .getElementById("addProductBtn")
    .addEventListener("click", function () {
      productContainer.style.display = "none";
      aboutContainer.style.display = "none";
      adminBtnContainer.style.display = "block";
    });

    document.getElementById("addProductBtn").addEventListener("click",function(){
      document.getElementsById("productPopup").style.display = "block "
      document.getElementsById("footer").style.visibility =  "hidden"
    })
});

// add btn information

const addproducts = [];

document.getElementById("addProductBtn").addEventListener("click", () => {
  showPopup();
});

document.getElementById("closePopupBtn").addEventListener("click", () => {
  closePopup();
});

document.getElementById("saveProductBtn").addEventListener("click", () => {
  saveProduct();
});

let currentEditingProductIndex = null;

// both add and edit popup
function showPopup(product = null, index = null) {
  const popup = document.getElementById("productPopup");
  popup.classList.add("active");
  popup.classList.add("close")

  document.getElementsByClassName("close").value = "X";
  document.getElementById("productTitle").value = product ? product.title : "";
  document.getElementById("productImage").value = "";
  const categorySel = document.getElementById("productItem");

  // update selected index according category of the product
  Array.from(categorySel.options).forEach((option, index) => {
    if (option.value.toUpperCase() === product?.item) {
      categorySel.selectedIndex = index;
    }
  });

  document.getElementById("productPrice").value = product ? product.price : "";

  currentEditingProductIndex = index;

  document.getElementById("popupTitle").innerText = product
    ? "Update Product"
    : "Add New Product";
}
function closeEditDeletePopup() {
  const popup = document.getElementById("edit-delete-modal");
  if (popup) {
    popup.remove();
  }
}

function closePopup() {
  const popup = document.getElementById("productPopup");
  popup.classList.remove("active");
}

function isValidProductDetails({ item, title, imageInput, price }) {
  let isValid = true;

  let res=products.filter(item=>item.title.toUpperCase()===title.toUpperCase())
  if(res.length>=1){
    document.getElementById("titleValidation").innerText = "item alredy exits";
      document.getElementById("titleValidation").style.display = "block";
    return false;
  }


  if (!title) {
    isValid = false;
      document.getElementById("titleValidation").innerText = "Title is required";
      document.getElementById("titleValidation").style.display = "block";
  } else {
    document.getElementById("titleValidation").style.display = "none";
  }

  if (!imageInput.files.length) {
    isValid = false;
    document.getElementById("imageValidation").innerText = "Image is required";
    document.getElementById("imageValidation").style.display = "block";
  } else {
    document.getElementById("imageValidation").style.display = "none";
  }

  if (!item) {
    isValid = false;
    document.getElementById("itemValidation").innerText =
      "Category is required";
    document.getElementById("itemValidation").style.display = "block";
  } else {
    document.getElementById("itemValidation").style.display = "none";
  }

  if (!price || isNaN(price) || price <= 0) {
    isValid = false;
    document.getElementById("priceValidation").innerText =
      "Valid price is required";
    document.getElementById("priceValidation").style.display = "block";
  } else {
    document.getElementById("priceValidation").style.display = "none";
  }
  return isValid;
}

function saveProduct() {
  debugger
  const title = document.getElementById("productTitle").value.toUpperCase()
  const imageInput = document.getElementById("productImage");
  const item = document.getElementById("productItem").value.toUpperCase()
  const price = document.getElementById("productPrice").value.toUpperCase();

  const isValid = isValidProductDetails({ title, imageInput, item, price });

  if (isValid) {
    let image = "";
    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        image = e.target.result;
        const newProduct = {
          id: `rec${Math.random().toString(36).substr(2, 9)}`,
          title,
          item,
          image,
          price: parseFloat(price),
        };

        if (currentEditingProductIndex !== null) {
          products[currentEditingProductIndex] = newProduct;
          localStorage.setItem("allProducts", JSON.stringify(products));
          currentEditingProductIndex = null;
        } else {
          products.push(newProduct);
          localStorage.setItem("allProducts", JSON.stringify(products));
        }
        closePopup();
        closeEditDeletePopup();
        window.location.reload();
        // renderProducts();
      };
      reader.readAsDataURL(imageInput.files[0]);
    }
  }
}

function renderProducts(itemid) {
  // alert("working")
  console.log(itemid);
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  addproducts.forEach((product, index) => {
    const productItem = document.createElement("div");

    productItem.style.position = "absolute";
    productItem.display = "none";
    productItem.classList.add("product-item");
    productItem.innerHTML = `
        
            <div>
                <img src="${product.image}" alt="${product.title}">
                
                <div>
                <p style = "text-transform:uppercase;font-weight:bold;color:block">${product.item}</p>
                <p style = "text-transform:uppercase;font-weight:bold;color:orange">${product.title}</p>
                <p style = "text-transform:uppercase;font-weight:bold;color:red">Price:₹ ${product.price}</p>
                </div>   
                
            
        </div>    
            <div class="edit-delete" style = "display:flex;flex-direction:row;justify-content:end;align-items:end;">
                <button  style = "color:white;background-color:black;" onclick="editProduct(${index})" >Edit</button>
                <button style = "color:white;background-color:black;" onclick="deleteProduct(${index})">Delete</button>

            </div>
        `;
      
    productList.appendChild(productItem);
  });
 
}

function editProduct(index) {
  // const editingProduct = products.find((obj) => obj.id === id);
  showPopup(products[index], index);
}

function deleteProduct(id) {
  // products.splice(index, 1);
  products = products.filter((obj) => obj.id !== id);
  localStorage.setItem("allProducts", JSON.stringify(products));
  renderProducts();
  location.reload();
}

renderProducts();

function adminLogout() {
  let adminLogo = document.getElementById("adminLogout");
  adminLogo.addEventListener("click", () => {
    location.href = "index.html";
  });
}

// function showProfile() {
//   document.getElementById("displayprofile").style.display = "block";
//   document.getElementById("displayprofile").style.zIndex = 10;
// }

// function closeProfile() {
//   document.getElementById("displayprofile").style.display = "none";
// }

// document.getElementById("admin-icon").addEventListener("click",mouseOver)

// function mouseOver(){
//   document.getElementById("admin-icon").innerHTML = "Ramu"+"<br>"+"8639362024"
//   // document.getElementById("admin-icon").innerHTML = "8639362024"
//   document.getElementById("admin-icon").style.color = "red"

// }

function te(obj, index) {
  console.log(obj);
  let product = obj;
  let body = document.getElementsByTagName("body")[0];
  const productItem = document.createElement("div");
  productItem.id = "edit-delete-modal";
  productItem.classList.add("testingPopup");
  productItem.style.position = "fixed";
  productItem.display = "block";
  productItem.top = 10;
  productItem.left = 10;

  productItem.innerHTML = `
        
            <div class= edit-delete-container id = "edit-delete-container" style = "background-color:;">
            <h3 onclick = "editDeleteContainer()" style = "color:red;margin-left:100%";margin-top:2px;>X</h3>
            <div>
                <img src="${product.image}" alt="${product.title}" style = "width:200px;">
            </div>
            <div>
                <p style = "text-transform:uppercase;font-weight:bold;color:block">${product.item}</p>
                <p style = "text-transform:uppercase;font-weight:bold;color:orange">${product.title}</p>
                <p style = "text-transform:uppercase;font-weight:bold;color:red">Price:₹ ${product.price}</p>
                </div>   
            <div class="edit-delete"  onclick = "editBtnPopup()">
                <button onclick="editProduct('${index}')" style = "background-color:orange;color:white;font-weight:bold;font-size:20px;font-weight:bold;border:none;outline:none;padding:5px 20px;border-radius:5px;" id = "editBtnPopup" >Edit</button>
                <button onclick="deleteProduct('${product.id}')" style = "background-color:orange;color:white;font-weight:bold;font-size:20px;font-weight:bold;border:none;outline:none;padding:5px 20px;border-radius:5px;">Delete</button>
            </div>
            </div> 
        `;
  // productList.appendChild(productItem);

  body.appendChild(productItem);
  
}


document.addEventListener('DOMContentLoaded', function() {
  const envelope = document.getElementById('envelope');
  const message = localStorage.getItem('paymentConfirmationMessage');

  if (message) {
      envelope.textContent = message;
      //  Optionally, remove the message from localStorage after displaying it
       localStorage.removeItem('paymentConfirmationMessage');
  } 
  // else {
  //     envelope.textContent = '0';
  // }
});


function showProfile() {
  document.getElementById("displayprofile").style.display = "block";
  document.getElementById("displayprofile").style.zIndex = 10;
}

function closeProfile() {
  document.getElementById("displayprofile").style.display = "none";
}

function editDeleteContainer(){
 let editDelete =  document.getElementById("edit-delete-container")
 editDelete.addEventListener("click",function(){
  document.getElementById("edit-delete-container").style.display = "none"
 })
}

function editBtnPopup(){
  let editBtnPopup = document.getElementById("editBtnPopup")
  editBtnPopup.addEventListener("click",function(){
    document.getElementById("edit-delete-container").style.display = "none"
    document.getElementById("productPopup").style.display = "block"
  })

}