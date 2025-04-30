var cartCount = document.getElementById('ccou');
var cobox = document.getElementById("cbox")
var cobtn=document.getElementById("cbtn")
var ccode=""


//cart item count
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cartCount.innerText = cart.length;

function loadcartitems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('ccon');
    let subtotal = 0;
    let gtot = 0

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = `<p style="font-size: 30px; font-weight: 600;">Your cart is empty.</p>`;
        document.getElementById("gtot").innerText = "₹0"
        document.getElementById("stot").innerText = "₹0"

    } else {
        cart.forEach((item) => {
            console.log(item.gamen);

            cartItemsDiv.innerHTML += `<div class="row mb-3" style="display: flex; justify-content: center; border: 1px solid; border-radius: 4px;">
                <div class="col-lg-3" style="height: 200px;"><img src="${item.gimage}" alt="gpic" width="100%" height="100%"></div>
                <div class="col-lg-8">
                    <h3 class="ms-3">${item.gamen}</h3>
                    <div class="row mt-5">
                        <div class="col-lg-8 ps-3"><div style="font-size: 28px; font-weight: 500;">₹${item.price}</div></div>
                        <div class="col-lg-4" style="display: flex; justify-content: center; align-items: center;">
                            <span class="min"><i class="fa-solid fa-minus"></i></span>
                            <span class="num">1</span>
                            <span class="plus"><i class="fa-solid fa-plus"></i></span>
                            <span class="del" onclick="clos('${item.gamen}')"><i class="fa-solid fa-trash-can"></i></span></div>
                    </div>
                </div>
            </div>`;
            var addprice = parseInt(item.price);
            subtotal += addprice;
        });
        document.getElementById('gtot').innerText = "₹" + subtotal;
        document.getElementById('stot').innerText = "₹" + subtotal;
        
        //coupon code check
        cobtn.addEventListener("click",()=>{
            ccode=cobox.value
            
            if (ccode=="PAN20") {
                gtot=subtotal-(subtotal*0.20)
                
                document.getElementById("csux").style.display="flex"
                document.getElementById("cusx").style.display="none"                
                document.getElementById('gtot').innerText = "₹" + gtot;

            } else {
                document.getElementById("csux").style.display="none"
                document.getElementById("cusx").style.display="flex"
                document.getElementById('gtot').innerText = "₹" + subtotal;
            }
        })
    }
}

function clos(gamn) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.gamen !== gamn);
    localStorage.setItem('cart', JSON.stringify(cart));
    //loadcartitems();
    cartCount.innerText = cart.length;
    location.reload(); //to refresh the page
}


window.onload = loadcartitems();
