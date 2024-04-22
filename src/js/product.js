const baseUrl = "http://localhost:3000"
let quantityNumber = 1
const quantityNumberDisplay = document.querySelector('.quantity-number');
const quantityMinus = () => {
    if(quantityNumber > 1){
        quantityNumber--
        quantityNumberDisplay.innerHTML = quantityNumber
    }
}

const quantityAdd = () => {
    quantityNumber++
    quantityNumberDisplay.innerHTML = quantityNumber
}
// get Id product
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('productId')

const xhttp = new XMLHttpRequest();
xhttp.open(`GET`, `${baseUrl}/product-list`);

xhttp.onload = () => {
    productListData = JSON.parse(xhttp.responseText)
    renderProduct(productListData)
}

let product;
const productName = document.querySelector('.product-detail-item h6')
const productImg = document.querySelector('.product-image')
const productSalePrice = document.querySelector('.product-sale-price')
const productOriginalPrice = document.querySelector('.product-original-price')

const renderProduct = (data) => {
    product = data.filter((item) => item.id === productId)[0]
    productName.innerHTML = product.productName
    productSalePrice.innerHTML = product.salePrice + ".000đ"
    productOriginalPrice.innerHTML = product.originalPrice + ".000đ"
    productImg.setAttribute('src', product.img)
}

xhttp.send()


let cart = JSON.parse(localStorage.getItem("cart") || "[]")

const handleAddtoCart = () => {
    const cartProduct = {
        img: product.img,
        name: product.productName,
        price: product.salePrice,
        quantity: quantityNumber
    }
    cart = [...cart, cartProduct]
    const jsonCart = JSON.stringify(cart)
    localStorage.setItem("cart", jsonCart)
    alert("Thêm sản phẩm thành công")
}




const navItem = document.querySelectorAll('.product-information-nav-item')
const contentItem = document.querySelectorAll('.product-information-content-item')

const handleChangeContent = (index) => {
    contentItem.forEach(item =>{
        item.classList.remove("product-information-content-item-active")
    })
    contentItem[index].classList.add("product-information-content-item-active")
}

navItem.forEach((item,index) =>{
    item.addEventListener('click',() => {
        navItem.forEach(child => {
            child.classList.remove("product-information-nav-item-active")
        })
        item.classList.add("product-information-nav-item-active")
        handleChangeContent(index)
    })
})


