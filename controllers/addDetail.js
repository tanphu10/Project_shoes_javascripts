let getIdProduct = (idProduct) => {
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}`,
    method: "GET",
  });
  promise.then(function (res) {
    console.log(res.data.content);
    renderProduct(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
};
// function () || () =>
window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productId");

  getIdProduct(myParam);
};
let renderProduct = (arr) => {
  var content = "";
  content += `
    <div class="d-flex">
              <div class="product__img w-50 d-flex justify-content-center">
                <img
                  src=${arr.image}
                  style="height: 400px; width: 400px"
                />
              </div>
              <div class="product__content w-50">
                <h1>${arr.name}</h1>
                <p>${arr.alias}</p>
                <p>${arr.price}$</p>
                <p>Select size</p>
                <div class="product__content--size w-25">
                  <div class="row">
                    <div class="col-4 mb-3">
                      <button style="width: 50px; height: 50px">${arr.size[0]}</button>
                    </div>
                    <div class="col-4">
                      <button style="width: 50px; height: 50px">${arr.size[1]}</button>
                    </div>
                    <div class="col-4">
                      <button style="width: 50px; height: 50px">${arr.size[2]}</button>
                    </div>
                    <div class="col-4 mb-3">
                      <button style="width: 50px; height: 50px">${arr.size[3]}</button>
                    </div>
                    <div class="col-4">
                      <button style="width: 50px; height: 50px">${arr.size[4]}</button>
                    </div>
                    <div class="col-4">
                      <button style="width: 50px; height: 50px">${arr.size[5]}</button>
                    </div>
                    <div class="col-4">
                      <button style="width: 50px; height: 50px">${arr.size[6]}</button>
                    </div>
                  </div>
                </div>
                <p class="w-50">
                ${arr.description}
                </p>
              </div>
            </div>
    `;
  document.getElementById("detailId").innerHTML = content;
};
let renderProduct = (arr) => {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
      content += `
      <div class="col-12 col-md-6 col-xl-4 mb-4">
      <div class="card">
        <img
          src=https://shop.cyberlearn.vn/images/${arr[i].image}
          class="card-img-top"
          alt="shoe1"
          id="shoe1"
        />
        <div class="card-body">
          <h5 class="card-title">${arr[i].name}</h5>
          <p>${arr[i].shortDescription}</p>
          <p>Price: ${arr[i].price}$</p>
          <div class="d-flex">
          <a
          href="./detail.html?productId=${arr[i].id}"
          class="btn btn-danger w-50 me-1"
        >Buy now</a>
                <button class="btn btn-danger w-50 ms-1">Add cart</button>
              </div>
        </div>
      </div>
    </div>`;
    }
    document.getElementById("product").innerHTML = content;
  };