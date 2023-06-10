function addProduct() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    ResponseType: "json",
  });
  promise.then(function (res) {
    console.log(res);
    var arrProduct = res.data.content;
    var content = "";
    for (var i = 0; i < arrProduct.length; i++) {
      var product = arrProduct[i];
      console.log(product);
      content += `
            <div class="product_item col-xl-3 col-md-4 col-sm-6">
            <div class="boder">
            <div class="product_img">
                <img src="${product.image}" alt="">
                <img src="./img2/hinh 2.3.jpg" alt="" class="img-top">
            </div>
            <div class="product_overlay">
                <div class="overlay_content">
                <a href="./detail.html?productid=${product.id}"> <button class="btn btn-outline-dark" id=""> Add to
                cart</button></a> 
                </div>
            </div>
            <div class="item_title">
                <p>${product.name}</p>
                <h5>${product.price}$</h5>
                <span>${product.shortDescription}</span>
            </div>
            <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="" value="option1">
                    <label class="form-check-label" for="">SIZE ${product.size}</label>
            </div>
            </div>
        </div>
            `;
    }
    document.getElementById("idProduct").innerHTML = content;
  });
  promise.catch(function (err) {
    console.log(err);
  });
}
addProduct();


let getAllProductCategory = (categoryId) => {
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${categoryId}`,
    method: "GET",
  });
  promise.then(function (res) {
    console.log(res.data.content);
    renderProductCategory(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
};
let renderProductCategory = (arr) => {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    content += `
    <div class="product_item col-xl-3 col-md-4 col-sm-6">
             <div class="boder">
             <div class="product_img">
                 <img src="${arr[i].image}" alt="">
                 <img src="./img2/hinh 2.3.jpg" alt="" class="img-top">
             </div>
             <div class="product_overlay">
                 <div class="overlay_content">
                 <a href="./detail.html?productid=${arr[i].id}"> <button class="btn btn-outline-dark" id=""> Add to
                 cart</button></a> 
                 </div>
             </div>
             <div class="item_title">
                 <p>${arr[i].name}</p>
                 <h5>${arr[i].price}$</h5>
                 <span>${arr[i].shortDescription}</span>
             </div>
             <div class="form-check form-check-inline">
                     <input class="form-check-input" type="checkbox" id="" value="option1">
                     <label class="form-check-label" for="">SIZE ${arr[i].size}</label>
             </div>
             </div>
         </div>
             `;
    
  }
  document.getElementById("idProduct").innerHTML = content;
};