
const stock = [
    {id:'1' , name:'T-shirt' , price:19.99 , image:'../Images/t-shirt.jpg'},
    {id:'2' , name:'Pants' , price:14.99 , image:'../Images/pants.webp'},
    {id:'3' , name:'Shoes' , price:39.99 , image:'../Images/shoes.jpg'},
    {id:'4' , name:'Hat' , price:5.99 , image:'../Images/hat.jpg'},
    {id:'5' , name:'Belt' , price:3.99 , image:'../Images/belt.webp'},
    {id:'6' , name:'Socks' , price:2.99 , image:'../Images/socks.webp'},
    {id:'7' , name:'Hoody' , price:49.99 , image:'../Images/hoody.webp'},
    {id:'8' , name:'Jacket' , price:15.99 , image:'../Images/jacket.jpg'},
    {id:'9' , name:'Shorts' , price:8.99 , image:'../Images/shorts.webp'},
]

stock.forEach((product) => {
    const row = document.getElementById(`row`)
    row.innerHTML += `
        <div class="col">
            <div class="card" style="width: 18rem;" id="shirtCard">
                <img src="${product.image}" class="card-img-top">
                <div class="card-body border-top">
                    <h5 class="card-title fs-4">${product.name}</h5>
                    <p class="card-text fs-4">$${product.price}</p>
                    <button id="btn-${product.id}>
                        <a href="#" class="btn btn-primary">Buy</a>
                    </button>
                </div>
            </div>
        </div>
    `
    
})

const btnBuy = document.querySelectorAll(`btn-${stock.id}`)
        btnBuy.forEach((btn) =>{
        console.log(btn)
    }
)
btnBuy.addEventListener("click", addProduct)

function addProduct(){
    const containerProd = document.querySelector(`#containerProd`)
    const containerImg = document.querySelector(`#containerImg`)
    const containerPrice = document.querySelector(`#containerPrice`)
    containerProd.innerHTML = `
        <h2 class="fs-3 text-black fw-lighter" id="colProduct">${stock.name}</h2>
    `
    containerImg.innerHTML = `
        <img src="${stock.image}" class="prodImg">
    `
    containerPrice.innerHTML = `
        <h2 class="fs-3 text-black fw-lighter" id="colProduct">${stock.price}</h2>
    `
}

