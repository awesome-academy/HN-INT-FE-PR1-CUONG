const baseUrl = "http://localhost:3000"

const filter = {
  type: null,
  price: null,
  color: null,
  renderType: "grid",
  number: 12,
  page: 1,
  query: "",
};

// number of products will render
filterNumberElement = document.getElementById("filter-number");
filterNumberElement.addEventListener("change", () => {
  filter.number = filterNumberElement.value;
  renderData(productListData);
});

// type rendering
const typeRender = document.querySelectorAll(".list-product-type span");
typeRender.forEach((typeList) => {
  typeList.addEventListener("click", () => {
    filter.renderType = typeList.dataset.value;
    typeRender.forEach((child) => child.classList.remove("list-type-active"));
    typeList.classList.add("list-type-active");
    renderData(productListData);
  });
});

// type category
const typeCategory = document.querySelectorAll(".section__category-list ul li");
typeCategory.forEach((typeList) => {
  typeList.addEventListener("click", () => {
    if (typeList.classList.contains("category-list-item-active")) {
      typeList.classList.remove("category-list-item-active");
      filter.type = null;
    } else {
      filter.type = typeList.dataset.value;
      typeCategory.forEach((child) =>
        child.classList.remove("category-list-item-active")
      );
      typeList.classList.add("category-list-item-active");
    }
    renderData(productListData);
  });
});

//filter price
const typePrice = document.querySelectorAll(".section__price-list ul li");
typePrice.forEach((typeList) => {
  typeList.addEventListener("click", () => {
    if (typeList.classList.contains("category-list-item-active")) {
      typeList.classList.remove("category-list-item-active");
      filter.price = null;
    } else {
      filter.price = typeList.dataset.value;
      typePrice.forEach((child) =>
        child.classList.remove("category-list-item-active")
      );
      typeList.classList.add("category-list-item-active");
    }
    renderData(productListData);
  });
});

//filter color
const colorChoose = document.querySelectorAll(".color-list-row > div");
colorChoose.forEach((typeList) => {
  typeList.addEventListener("click", () => {
    if (typeList.classList.contains("color-list-item-active")) {
      typeList.classList.remove("color-list-item-active");
      filter.color = null;
    } else {
      filter.color = typeList.dataset.value;
      colorChoose.forEach((child) =>
        child.classList.remove("color-list-item-active")
      );
      typeList.classList.add("color-list-item-active");
    }
    renderData(productListData);
  });
});

// page number
const paginationPage = document.querySelectorAll(".pagination-page");
paginationPage.forEach((page,index) => {
  page.addEventListener("click", () => {
    filter.page = index + 1
    renderData(productListData)
    paginationPage.forEach(child => child.classList.remove("pagination-active"))
    page.classList.add("pagination-active");
  })
})

// search query 
const query = document.querySelector(".search-field")
query.addEventListener("change", () => {
  filter.query = query.value
  renderData(productListData)
})

const xhttp = new XMLHttpRequest();
xhttp.open(`GET`, `${baseUrl}/product-list`);

let productListData;

xhttp.onload = () => {
  productListData = JSON.parse(xhttp.responseText);
  renderData(productListData);
};

const priceComapre = (price) => {
  const priceRange = filter.price.split(",");
  return (
    parseInt(priceRange[0], 10) <= price && parseInt(priceRange[1], 10) >= price
  );
};

const parent = document.querySelector(".list-product-card .container .row");

const renderData = (data) => {
  var dataFilter = [...data];
  let html = "";
  if (filter.color != null) {
    dataFilter = dataFilter.filter((product) => product.color == filter.color);
  }

  if (filter.type != null) {
    dataFilter = dataFilter.filter((product) => product.type == filter.type);
  }

  if (filter.price != null) {
    dataFilter = dataFilter.filter((product) =>
      priceComapre(product.salePrice)
    );
  }

  if(filter.query != "") {
    dataFilter = dataFilter.filter((product) => product.productName.includes(filter.query))
  }

  if (filter.renderType == "grid") {
    dataFilter.slice(0, filter.number).forEach((product) => {
      const child = `
    <div class = "col-md-4">
    <div class="product-area">
    <div class="product-action">
      <div class="product-action-buy" onclick="handleBuy(${product.id})">Mua ngay</div>
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
            </div>
        `;
      html += child;
    });
  } else {
    dataFilter.slice(5*(filter.page-1), 5*(filter.page)).forEach((product) => {
      const child = `
<div class="col-md-12">
<div class="product-area product-area-list" onclick="handleBuy(${product.id})")>
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
      <i class="fa fa-star" aria-hidden="true"></i>
    </p>
    <p class="product-description">
     ${product.description}
    </p>
    <p class="product-price">
      <span class="product-discount-price"
        >${product.salePrice}.000đ</span
      >
    </p>

    <div class="product-action">
      <div class="product-action-buy">Mua ngay</div>
      <div class="product-action-find">
        <i class="fas fa-search"></i>
      </div>
      <div class="product-action-find">
        <i class="fa-solid fa-heart"></i>
      </div>
    </div>
  </div>
</div>
</div>
`;
      html += child;
    });
  }
  parent.innerHTML = html;
};

xhttp.send();

const handleBuy = (id) => {
  window.location.href = `http://127.0.0.1:5500/product.html?productId=${id}`;
};


