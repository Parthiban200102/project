var a = document.getElementById("newrels")
var b = document.getElementById("topp")

var c = 0

var d = document.getElementById("coms")

// game details //
var gov = document.getElementById("gover")
var oro = document.getElementById("orow")

var pde = document.getElementById("pdet")
var dro = document.getElementById("drow")

var sre = document.getElementById("sreq")
var fsro = document.getElementById("srow")
var adc1 = document.getElementById("getname")


var emor = document.getElementById("emore")

var cartCount = document.getElementById('ccou')






// index //
function likebtn(event) {

    c = c + 1
    if (c % 2 != 0) {
        event.target.innerHTML = `<button type="button" class="lbtn" ><i class="fa-solid fa-heart sheart"></i></button>`
        console.log(document.getElementById);

    } else {
        event.target.innerHTML = `<button type="button" class="lbtn" ><i class="fa-regular fa-heart heart"></i></button>`
    }
    console.log(c);
    
}



function addtocart(gamen, gimage, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemExists = cart.some(item => item.gamen === gamen);

    if (itemExists) {//if already in cart
        //console.error("Item with id found in cart.");
        alert(gamen + " is already in Cart")
        return;
    }

    cart.push({ gamen, price, gimage });
    localStorage.setItem('cart', JSON.stringify(cart));
    cartCount.innerText = cart.length;      //cart item count
}

//cart item count
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cartCount.innerText = cart.length;



fetch("index.json")
    .then(res => res.json())
    .then(item => item.newr.map((itms) => {
        a.innerHTML += `<div class="col-lg-2 col-md-3 col-5 me-4 mt-4">
                <div class="card" >
                    <a href="game details.html?id=${itms.id}"><img id="cimg" src="${itms.gimg}" alt="watch dogs" style="height: 299px; width: 100%; border-top-left-radius : 5px; border-top-right-radius: 5px;"></a>
                    <div class="gname"><a href="game details.html?id=${itms.id}" style="text-decoration: none; color: black;">${itms.gname}</a></div><hr>
                    <div class="row p-1" style="display: flex; justify-content: center; margin-top: -10px;">
                        <div class="col-lg-3 col-md-5 dis" id="disc">${itms.disc}</div>
                        <div class="col-lg-4 col-md-6 apri" id="aprice">₹${itms.apri}</div>
                        <div class="col-lg-4 fpri" id="fprice">₹${itms.fpri}</div>
                    </div>
                    <div class="row ms-2 mb-2">
                        <div class="col-lg-10 col-md-9" onclick="addtocart('${itms.gname}','${itms.gimg}','${itms.fpri}')"><button type="button" class="atc"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button></div>
                        <div class="col-lg-2 col-md-3" onclick="likebtn(event)"><button type="button"  class="lbtn" ><i class="fa-regular fa-heart heart"></i></button></div>
                    </div>
                </div>
            </div>`
    }))



fetch("index.json")
    .then(res => res.json())
    .then(item => item.top.map((itms) => {
        b.innerHTML += `<div class="col-lg-2 col-md-3 col-5 me-4 mt-4">
                <div class="card" id="${itms.id}">
                    <a href="game details.html?id=${itms.id}"><img id="cimg" src="${itms.gimg}" alt="watch dogs" style="height: 299px; width: 100%; border-top-left-radius : 5px; border-top-right-radius: 5px;"></a>
                    <div class="gname"><a href="game details.html?id=${itms.id}" style="text-decoration: none; color: black;">${itms.gname}</a></div><hr>
                    <div class="row p-1" style="display: flex; justify-content: center; margin-top: -10px;">
                        <div class="col-lg-3 col-md-5 dis" id="disc">${itms.disc}</div>
                        <div class="col-lg-4 col-md-6 apri" id="aprice">₹${itms.apri}</div>
                        <div class="col-lg-4 fpri" id="fprice">₹${itms.fpri}</div>
                    </div>
                    <div class="row ms-2 mb-2">
                        <div class="col-lg-10 col-md-9" onclick="addtocart('${itms.gname}','${itms.gimg}','${itms.fpri}')"><button type="button" class="atc"><i class="fa-solid fa-cart-shopping" onclick='Addtocart()'></i> Add To Cart</button></div>
                        <div class="col-lg-2 col-md-3" onclick="likebtn(event)"><button type="button"  class="lbtn" id="but" ><i class="fa-regular fa-heart heart"></i></button></div>
                    </div>
                </div>
            </div>`
    }))


fetch("index.json")
    .then(res => res.json())
    .then(item => item.cson.map((itms) => {
        d.innerHTML += `<div class="col-lg-2 me-4 col-md-3 col-5">
                <div class="card">
                    <img id="cimg" src="${itms.gimg}" alt="watch dogs" style="height: 299px; width: 100%; border-top-left-radius : 5px; border-top-right-radius: 5px;">
                    <div class="gname">${itms.gname}</div><hr>  
                    <!-- <div class="rdate">Releasing on:<span>${itms.date}</span></div> -->
                    <div class="rdate d-flex" style="justify-content: center;">Releasing on:</div><div style="display: flex; justify-content: center;">10/09/2024</div>
                </div>
            </div>`
    }))



// game details //
gov.addEventListener("click", () => {
    oro.style.display = "block"
    dro.style.display = "none"
    fsro.style.display = "none"
    oro.style.display = "flex"
    oro.style.alignItems = "center"
    oro.style.justifyContent = "center"


    gov.style.border = "2px solid white"
    pde.style.border = "none"
    sre.style.border = "none"
})

pde.addEventListener("click", () => {
    oro.style.display = "none"
    dro.style.display = "block"
    fsro.style.display = "none"
    dro.style.display = "flex"
    dro.style.alignItems = "center"
    dro.style.justifyContent = "center"


    pde.style.border = "2px solid white"
    gov.style.border = "none"
    sre.style.border = "none"

})

sre.addEventListener("click", () => {
    oro.style.display = "none"
    dro.style.display = "none"
    fsro.style.display = "block"
    fsro.style.display = "flex"
    fsro.style.alignItems = "center"
    fsro.style.justifyContent = "center"


    gov.style.border = "none"
    pde.style.border = "none"
    sre.style.border = "2px solid white"

})



function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    var id1 = params.get('id');
    console.log(id1);

    var gamenm;
    var gamep;
    var gameimg;


    fetch("index.json")
        .then(res => res.json())
        .then(item => {
            var gamedet = item.newr.filter(items => items.id == id1);

            gamedet.forEach(items => {
                document.getElementById("gamen").innerText = items.gname;
                document.getElementById("gimg1").src = items.img1;
                document.getElementById("gimg2").src = items.img2;
                document.getElementById("gimg3").src = items.img3;
                document.getElementById("finalp").innerText = "₹" + items.fpri;
                document.getElementById("actp").innerText = "₹" + items.apri;
                document.getElementById("edi").innerText = items.edi;
                document.getElementById("plat").innerText = items.plat;
                document.getElementById("gdesc").innerText = items.gname;
                document.getElementById("gspc").innerText = items.space;
                document.getElementById("gspac").innerText = items.space;

                gamenm = items.gname;
                gamep = items.fpri;
                gameimg = items.gimg;

            })
        })

    fetch("index.json")
        .then(res => res.json())
        .then(item => {
            var gamedet1 = item.top.filter(items => items.id == id1);

            gamedet1.forEach(items => {
                document.getElementById("gamen").innerText = items.gname;
                document.getElementById("gimg1").src = items.img1;
                document.getElementById("gimg2").src = items.img2;
                document.getElementById("gimg3").src = items.img3;
                document.getElementById("finalp").innerText = "₹" + items.fpri;
                document.getElementById("actp").innerText = "₹" + items.apri;
                document.getElementById("edi").innerText = items.edi;
                document.getElementById("plat").innerText = items.plat;
                document.getElementById("gdesc").innerText = items.gname;
                document.getElementById("gspc").innerText = items.space;
                document.getElementById("gspac").innerText = items.space;

                gamenm = items.gname;
                gamep = items.fpri;
                gameimg = items.gimg;

            })
        })

    document.getElementById("gdatc").addEventListener("click", () => {
        addtocart(gamenm, gameimg, gamep);
    })
    document.getElementById("buyn").addEventListener("click", () => {
        addtocart(gamenm, gameimg, gamep);
    })
}








// game det / explore more //
fetch("index.json")
    .then(res => res.json())
    .then(item => item.newr.map((itms) => {
        emor.innerHTML += `<div class="col-lg-2 col-md-3 col-5 me-4 mt-4">
                <div class="card" >
                    <a href="game details.html?id=${itms.id}"><img id="cimg" src="${itms.gimg}" alt="watch dogs" style="height: 299px; width: 100%; border-top-left-radius : 5px; border-top-right-radius: 5px;"></a>
                    <div class="gname"><a href="game details.html?id=${itms.id}" style="text-decoration: none; color: black;">${itms.gname}</a></div><hr>
                    <div class="row p-1" style="display: flex; justify-content: center; margin-top: -10px;">
                        <div class="col-lg-3 col-md-5 dis" id="disc">${itms.disc}</div>
                        <div class="col-lg-4 col-md-6 apri1" id="aprice">₹${itms.apri}</div>
                        <div class="col-lg-4 fpri1" id="fprice">₹${itms.fpri}</div>
                    </div>
                    <div class="row ms-2 mb-2">
                        <div class="col-lg-10 col-md-9" onclick="addtocart('${itms.gname}','${itms.gimg}','${itms.fpri}')"><button type="button" class="atc"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</button></div>
                        <div class="col-lg-2 col-md-3" onclick="likebtn(event)"><button type="button"  class="lbtn" ><i class="fa-regular fa-heart heart"></i></button></div>
                    </div>
                </div>
            </div>`
    }))

