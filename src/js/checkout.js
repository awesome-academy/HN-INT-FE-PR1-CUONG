const cart = JSON.parse(localStorage.getItem("cart") || "[]");
const quantityItem = cart.length
const quantityitem = document.querySelector('.order-wrap-header p')
quantityitem.innerHTML = "Bạn có " + quantityItem + " sản phẩm trong giỏ hàng"
const listProduct = document.querySelector('.order-product-wrap')
let html = ''
let subTotal = 0

cart.forEach((product) => {
    const child = `
    <div class="product-area">
    <img src=${product.img} alt="">
    <div class="product-content">
        <p class="product-name">${product.name}</p>
        <p class="product-quantity">Số lượng: ${product.quantity}</p>
        <p class="product-price">${product.price*product.quantity}.000đ</p>
    </div>
    </div>
    `
    html += child
    subTotal += product.price*product.quantity
})

listProduct.innerHTML = html


const stepCheckOut = document.querySelectorAll(".checkout-step-item")
const connectStep = document.querySelectorAll(".connecting-step")
const stepContent = document.querySelectorAll(".checkout-step-content")
const stepButton = document.querySelectorAll(".next-step")

stepButton.forEach((step,index) => {
    step.addEventListener("click",() => {
        connectStep[index].classList.add("connecting-step-active")
        stepCheckOut[index].classList.remove("checkout-step-item-now")
        stepCheckOut[index].classList.add("checkout-step-item-active")
        stepCheckOut[index+1].classList.add("checkout-step-item-now")
        stepContent[index].classList.remove("checkout-step-content-active")
        stepContent[index+1].classList.add("checkout-step-content-active")
    })
})

stepCheckOut.forEach((step, index) => {
    step.addEventListener("click",() => {
        stepCheckOut.forEach(child => child.classList.remove("checkout-step-item-active"))
        stepCheckOut.forEach(child => child.classList.remove("checkout-step-item-now"))
        connectStep.forEach(child => child.classList.remove("connecting-step-active"))
        stepContent.forEach(child => child.classList.remove("checkout-step-content-active"))
        for(let i = 0; i < index; i++) {
            stepCheckOut[i].classList.add("checkout-step-item-active")
            connectStep[i].classList.add("connecting-step-active")
        }
        step.classList.add("checkout-step-item-now")
        stepContent[index].classList.add("checkout-step-content-active")
    })
})

let information = {
    shippingMethod : "Vận chuyển thường",
    contact: {
        name: "",
        address: "",
        phone: "",
        note: "",
    },
    payment: {
        type: "",
        cardName: "",
        cardNumber: "",
    },
    item: cart
}

console.log(information)

// shiping-method
const shippingMethod = document.querySelectorAll(".shipping-method")
const inputMethod = document.querySelectorAll(".shipping-method input")
inputMethod.forEach((method, index) => {
    method.addEventListener('change', () => {
        information.shippingMethod = method.value
        shippingMethod.forEach(method => method.classList.remove("shipping-method-active"))
        shippingMethod[index].classList.add("shipping-method-active")
    })
})

// contact infor
const nameInput = document.getElementById('name')
const address = document.getElementById('address')
const phone = document.getElementById('phone')
const note = document.getElementById('note')

nameInput.addEventListener("change", () => {
    information.contact.name = nameInput.value
})
address.addEventListener("change", () => {
    information.contact.address = address.value
})
phone.addEventListener("change", () => {
    information.contact.phone = phone.value
})
note.addEventListener("change", () => {
    information.contact.note = note.value
})

// payment method
const paymentMethod = document.querySelectorAll(".payment-method")
const inputChange = document.querySelectorAll(".payment-method input")
const cardName = document.getElementById("card-name")
const cardNumber = document.getElementById("card-number")

cardName.addEventListener("change", () => {
    information.payment.cardName = cardName.value
})

cardNumber.addEventListener("change", () => {
    information.payment.cardNumber = cardNumber.value
    document.getElementById("ship-method").innerHTML = information.shippingMethod
    document.getElementById("infor-method").innerHTML = information.contact.name + " - " + information.contact.address + " - " + information.contact.phone + " - " + information.contact.note
    document.getElementById("payment-method").innerHTML = information.payment.type + " - " + information.payment.cardName + " - " + information.payment.cardNumber
    document.getElementById("price").innerHTML = subTotal + 27 + "000đ"
})

document.querySelector(".subtotal").innerHTML = subTotal + ".000đ"
document.querySelector(".grandtotal").innerHTML = subTotal + 27 + ".000đ"

inputChange.forEach((method, index) => {
    method.addEventListener('change', () => {
        information.payment.type = method.value
        paymentMethod.forEach(method => method.classList.remove("payment-method-active"))
        paymentMethod[index].classList.add("payment-method-active")
    })
})

const handleOrder = () => {

    const url = "http://localhost:3000/cart"
    const xhttp = new XMLHttpRequest()
    xhttp.open("POST", url, true)
    xhttp.setRequestHeader("Content-Type", "application/json")
    xhttp.onload = () => {
        if (xhttp.status === 201) {
            console.log('Dữ liệu đã được thêm thành công');
          } else {
            console.error('Đã xảy ra lỗi khi thêm dữ liệu:', xhr.status);
          }
    }
    xhttp.onerror = () => {
        console.error('Có lỗi xảy ra khi gửi request')
    }
    xhttp.send(JSON.stringify(information))

    alert("Bạn đã tạo thành công đơn hàng!")
    localStorage.removeItem("cart")
    window.location.href = "http://127.0.0.1:5500/cart.html"
}