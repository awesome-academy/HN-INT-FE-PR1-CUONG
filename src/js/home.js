const baseUrl = "http://localhost:3000"

const xhttp = new XMLHttpRequest();
xhttp.open(`GET`, `${baseUrl}/special-products`);
const specialBigProduct = document.querySelectorAll(".product-area-big");
const specialSmallProduct = document.querySelectorAll(".product-area-small");
xhttp.onload = () => {
  const data = JSON.parse(xhttp.responseText);
  const bigAreaProduct = data.filter((item) => item.id == 1 || item.id == 6);
  const smallAreaProduct = data.filter((item) => item.id != 1 && item.id != 6);

  specialSmallProduct.forEach((parent, index) => {
    const product = smallAreaProduct[index];
    const child =
      product.percentSale != 0
        ? `
        <div class="product-area">
        <div class="discount-title">
            <p>-${product.percentSale}%</p>
        </div>
        <div class="product-action">
          <div class="product-action-buy">Mua ngay</div>
          <div class="product-action-find">
            <i class="fas fa-search"></i>
          </div>
        </div>

        <img
          class="product-img"
          src="${product.img}"
          alt=""
        />
        <div class="product-content">
          <p class="product-name">${product.productName}</p>

          <p class="product-review">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half" aria-hidden="true"></i>
          </p>

          <p class="product-price">
            <span class="product-discount-price"
              >${product.salePrice}.000 đ</span
            >
            <span class="product-original-price"
              >${product.originalPrice}.000 đ</span
            >
          </p>
        </div>
      </div>
        `
        : product.newProduct == true
        ? `
        <div class="product-area">
        <div class="new-title">
          <p>New</p>
        </div>
        <div class="product-action">
          <div class="product-action-buy">Mua ngay</div>
          <div class="product-action-find">
            <i class="fas fa-search"></i>
          </div>
        </div>

        <img
          class="product-img"
          src="${product.img}"
          alt=""
        />
        <div class="product-content">
          <p class="product-name">${product.productName}</p>

          <p class="product-review">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half" aria-hidden="true"></i>
          </p>

          <p class="product-price">
            <span class="product-discount-price"
              >${product.salePrice}.000 đ</span
            >
            <span class="product-original-price"
              >${product.originalPrice}.000 đ</span
            >
          </p>
        </div>
      </div>
        `
        : `
        <div class="product-area">
        <div class="product-action">
          <div class="product-action-buy">Mua ngay</div>
          <div class="product-action-find">
            <i class="fas fa-search"></i>
          </div>
        </div>

        <img
          class="product-img"
          src="${product.img}"
          alt=""
        />
        <div class="product-content">
          <p class="product-name">${product.productName}</p>

          <p class="product-review">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half" aria-hidden="true"></i>
          </p>

          <p class="product-price">
            <span class="product-discount-price"
              >${product.salePrice}.000 đ</span
            >
            <span class="product-original-price"
              >${product.originalPrice}.000 đ</span
            >
          </p>
        </div>
      </div>
        `;
    parent.innerHTML = child;
  });

  specialBigProduct.forEach((parent, index) => {
    const product = bigAreaProduct[index];
    const child =
      product.percentSale != 0
        ? `
        <div class="product-area">
        <div class="discount-title">
            <p>-${product.percentSale}%</p>
        </div>
        <div class="product-action">
          <div class="product-action-buy">Mua ngay</div>
          <div class="product-action-find">
            <i class="fas fa-search"></i>
          </div>
        </div>

        <img
          class="product-img"
          src="${product.img}"
          alt=""
        />
        <div class="product-content">
          <p class="product-name">${product.productName}</p>

          <p class="product-review">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half" aria-hidden="true"></i>
          </p>

          <p class="product-price">
            <span class="product-discount-price"
              >${product.salePrice}.000 đ</span
            >
            <span class="product-original-price"
              >${product.originalPrice}.000 đ</span
            >
          </p>
        </div>
      </div>
        `
        : `
        <div class="product-area">
        <div class="new-title">
          <p>New</p>
        </div>
        <div class="product-action">
          <div class="product-action-buy">Mua ngay</div>
          <div class="product-action-find">
            <i class="fas fa-search"></i>
          </div>
        </div>

        <img
          class="product-img"
          src="${product.img}"
          alt=""
        />
        <div class="product-content">
          <p class="product-name">${product.productName}</p>

          <p class="product-review">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half" aria-hidden="true"></i>
          </p>

          <p class="product-price">
            <span class="product-discount-price"
              >${product.salePrice}.000 đ</span
            >
            <span class="product-original-price"
              >${product.originalPrice}.000 đ</span
            >
          </p>
        </div>
      </div>
        `;
    parent.innerHTML = child;
  });
};

xhttp.send();

// Hot-product
const xhttp1 = new XMLHttpRequest();
xhttp1.open("GET", `${baseUrl}/hot-products`);
const hotProduct = document.querySelectorAll(".hot-product-wrap");

xhttp1.onload = () => {
  const data = JSON.parse(xhttp1.responseText);
  hotProduct.forEach((parent, index) => {
    const child = `
        <img src="${data[index].img}" alt="">
        <div class="product-content">
          <p class="product-name">${data[index].productName}</p>
          <p class="product-review">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half" aria-hidden="true"></i>
          </p>

          <p class="product-price">
            <span class="product-discount-price"
              >${data[index].price}.000đ</span
            >
          </p>
        </div>
        `;
    parent.innerHTML = child;
  });
};
xhttp1.send();

//Sale Product

const xhttp2 = new XMLHttpRequest();
xhttp2.open(`GET`, `${baseUrl}/sale-products`);
const saleProduct = document.querySelectorAll(".sale-product-card");

xhttp2.onload = () => {
  const data = JSON.parse(xhttp2.responseText)
  saleProduct.forEach((parent, index) => {
    const product = data[index]
    const child =
      product.percentSale != 0
        ? `
        <div class="product-area">
        <div class="discount-title">
            <p>-${product.percentSale}%</p>
        </div>
        <div class="product-action">
          <div class="product-action-buy">Mua ngay</div>
          <div class="product-action-find">
            <i class="fas fa-search"></i>
          </div>
        </div>

        <img
          class="product-img"
          src="${product.img}"
          alt=""
        />
        <div class="product-content">
          <p class="product-name">${product.productName}</p>

          <p class="product-review">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half" aria-hidden="true"></i>
          </p>

          <p class="product-price">
            <span class="product-discount-price"
              >${product.salePrice}.000 đ</span
            >
            <span class="product-original-price"
              >${product.originalPrice}.000 đ</span
            >
          </p>
        </div>
      </div>
        `
        : `
        <div class="product-area">
        <div class="product-action">
          <div class="product-action-buy">Mua ngay</div>
          <div class="product-action-find">
            <i class="fas fa-search"></i>
          </div>
        </div>

        <img
          class="product-img"
          src="${product.img}"
          alt=""
        />
        <div class="product-content">
          <p class="product-name">${product.productName}</p>

          <p class="product-review">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half" aria-hidden="true"></i>
          </p>

          <p class="product-price">
            <span class="product-discount-price"
              >${product.salePrice}.000 đ</span
            >
            <span class="product-original-price"
              >${product.originalPrice}.000 đ</span
            >
          </p>
        </div>
      </div>
        `
    parent.innerHTML = child
  })
}
xhttp2.send()


const xhttp3 = new XMLHttpRequest();
xhttp3.open(`GET`, `http://localhost:3000/new-products`)
const newProduct = document.querySelectorAll(".new-product-card")

xhttp3.onload = () =>{
    const data = JSON.parse(xhttp3.responseText)
    newProduct.forEach((parent, index) => {
        const product = data[index]
        const child = product.newProduct ?
    `
    <div class="product-area">
    <div class="new-title">
      <p>New</p>
    </div>
    <div class="product-action">
      <div class="product-action-buy">Mua ngay</div>
      <div class="product-action-find">
        <i class="fas fa-search"></i>
      </div>
    </div>

    <img
      class="product-img"
      src="${product.img}"
      alt=""
    />
    <div class="product-content">
      <p class="product-name">${product.productName}</p>

      <p class="product-review">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-half" aria-hidden="true"></i>
      </p>

      <p class="product-price">
        <span class="product-discount-price"
          >${product.salePrice}.000 đ</span
        >
        <span class="product-original-price"
          >${product.originalPrice}.000 đ</span
        >
      </p>
    </div>
  </div>
    `
    :
    `
    <div class="product-area">
    <div class="product-action">
      <div class="product-action-buy">Mua ngay</div>
      <div class="product-action-find">
        <i class="fas fa-search"></i>
      </div>
    </div>

    <img
      class="product-img"
      src="${product.img}"
      alt=""
    />
    <div class="product-content">
      <p class="product-name">${product.productName}</p>

      <p class="product-review">
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-half" aria-hidden="true"></i>
      </p>

      <p class="product-price">
        <span class="product-discount-price"
          >${product.salePrice}.000 đ</span
        >
        <span class="product-original-price"
          >${product.originalPrice}.000 đ</span
        >
      </p>
    </div>
  </div>
    `
    parent.innerHTML = child
    })
}

xhttp3.send()





