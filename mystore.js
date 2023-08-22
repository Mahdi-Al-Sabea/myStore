

//function searchProduct(products,query){}

let searchBar1 = document.querySelector(".search-large");
let searchBar2 = document.querySelector(".search-mid-small");

searchBar1.addEventListener("input", Handle_SearchInput);
searchBar2.addEventListener("input", Handle_SearchInput);

function Handle_SearchInput(e) {
  let searchParentBox = document.querySelector(".search-container");

  if (e.target.value.length > 3) {
    searchParentBox.style.display = "inline";
    document.body.style.overflow = "hidden";
  } else {
    searchParentBox.style.display = "none";
    document.body.style.overflow = "scroll";
  }

  searchParentBox.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target === searchParentBox) {
      // Your click event code here

      searchParentBox.style.display = "none";
      document.body.style.overflow = "scroll";
    }
  });

  let searchResult = products.filter((product) => {
    return product.name.toLowerCase().includes(e.target.value.toLowerCase());
  });

  console.log(searchResult + "3alawi");

  let resultHtml = "";

  searchResult.forEach((ResultItem) => {
    resultHtml += `<div class="search-item">

                    <div><img src="${ResultItem.image}" alt=""></div>
                    <div><p class="search-inputText">${ResultItem.name}</p></div>
                    <div><p></p></div>
                  </div>`;
  });

  document.querySelector(".search-window").innerHTML = resultHtml;
}










let productHtml = "";

initialLoad(products);

let select = document.querySelector(".filter-select");
select.addEventListener("change", (e) => {
  if (select.value === "lower-20") {
    productHtml = "";

    products.forEach((product) => {
      if (product.priceCents < 2000) {
        console.log("lower");

        fillProductsHtml(product);
      }
    });

    document.querySelector(".products").innerHTML = productHtml;
  } else if (select.value === "higher-20") {
    productHtml = "";

    products.forEach((product) => {
      if (product.priceCents > 2000) {
        console.log("higher");
        fillProductsHtml(product);
      }
    });

    document.querySelector(".products").innerHTML = productHtml;
  } else if (select.value === "all") {
    productHtml = "";

    products.forEach((product) => {
      console.log("all");
      fillProductsHtml(product);
    });

    document.querySelector(".products").innerHTML = productHtml;
  }
});

function fillProductsHtml(product) {
  productHtml += `
  <div class="col-6 col-sm-3 d-flex justify-content-center align-items-center" >
  <div class="card" style="width: 20rem; " >
    <img src="${product.image}">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.priceCents / 100}$</p>
    </div>
  </div>
  </div>
  `;
}
//increment html function

function initialLoad(products) {
  productHtml = "";

  products.forEach((product) => {
    fillProductsHtml(product);
  });

  console.log(productHtml);
  document.querySelector(".products").innerHTML = productHtml;
}




let name=document.querySelector('.name');
let email=document.querySelector('.email');
let password=document.querySelector('.password');
let submit=document.querySelector('.submit');

let signInParentBox = document.querySelector(".sign-in-container");

document.querySelector(".sign-in").addEventListener("click", (e) => {

  signInParentBox.style.display = "inline";
  document.body.style.scroll = "hidden";



submit.addEventListener('submit1',(e)=>{
  e.preventDefault();

console.log('salam');

  
});




  signInParentBox.addEventListener("click", (e) => {
    if (e.target === signInParentBox) {
      // Your click event code here

      signInParentBox.style.display = "none";
      document.body.style.overflow = "scroll";
    }
  });



});
