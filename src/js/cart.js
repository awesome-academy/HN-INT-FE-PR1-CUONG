const cart = JSON.parse(localStorage.getItem("cart") || "[]");

const tableData = document.querySelector(".table-body")
const subTotal = document.querySelector('.total-no-tax')
const grandTotal = document.querySelector(".total-amount")

const fetchData = () => {
let data = ""
let price = 0

cart.forEach((product, index) => {
  const child = `
    <tr>
    <td class="table-body-img">
        <img src=${product.img} alt="">
    </td>
    <td class="table-body-data table-body-name">
        ${product.name}
    </td>
    <td class="table-body-data table-body-price">
        ${product.price}.000 đ
    </td>
    <td class="table-body-data table-body-quantity">
        <span>${product.quantity}</span>
    </td>
    <td class="table-body-data table-body-price">
        ${product.price*product.quantity}.000 đ
    </td>
    <td class="table-body-data table-body-delete" onclick="handleDelete(${index})">
        <i class="fa-solid fa-trash"></i>
    </td>
</tr> 
    `;
    data += child
    price += product.price*product.quantity
});

tableData.innerHTML = data
subTotal.innerHTML = price.toString() + '.000đ'
grandTotal.innerHTML = (price+27).toString() + '.000đ'
}

fetchData()

const handleDelete = (index) => {
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart));
    fetchData()
}


