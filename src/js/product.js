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

let cart = JSON.parse(localStorage.getItem("cart") || "[]")

const handleAddtoCart = () => {
    const cartProduct = {
        img: "./src/images/products/dua_nho_1.png",
        name: "CÂY VĂN PHÒNG",
        price: 270,
        quantity: quantityNumber
    }
    cart = [...cart, cartProduct]
    const jsonCart = JSON.stringify(cart)
    localStorage.setItem("cart", jsonCart)
    alert("Thêm sản phẩm thành công")
}