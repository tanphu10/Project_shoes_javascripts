window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
    method: "GET",
    respontype: "json",
  });
  promise.then(function (res) {
    console.log(res);
    renderProductRelateTo(res.data.content.relatedProducts);
    var product = res.data.content;
    var content = "";
    content += `
            <div class="detail_img_desc  col-lg-8 pr-lg-4 pl-lg-4">
                <div class="detail_path">
                    <ul>
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="#">All</a></li>
                        <li><a href="./basic.html">Collections</a></li>
                        <li><a href="./basic.html">Festival</a></li>
                        <li><a href="./basic.html">Festival Collection</a></li>
                        <li><a href="./basic.html">${product.content}</a></li>
                    </ul>
                </div>
                <div class="mobile_product_infor">
                    <div class="row">
                        <span class="col-md-6">Run Star Legacy CX Platform DIY Beads</span>
                        <span class="col-md-6">$ ${product.price}</span>
                    </div>
                    <p class="product_cat">WOMEN'S HIGH TOP SHOE</p>
                </div>
                <div class="detail_img">
                    <img class="main_img"
                        src="${product.image}"
                        alt="product1">
                    <div class="sub_img">
                        <img src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw6dc9bd26/images/j_08/A06836C_J_08X1.jpg?sw=406"
                            alt="">
                        <img src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwbba96807/images/c_08/A06836C_C_08X1.jpg?sw=406"
                            alt="">
                        <img src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw61c05c9a/images/e_08/A06836C_E_08X1.jpg?sw=406"
                            alt="">
                        <img src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw3fc3188f/images/d_08/A06836C_D_08X1.jpg?sw=406"
                            alt="">
                        <img src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwb1d6b07d/images/g_08/A06836C_G_08X1.jpg?sw=406"
                            alt="">
                        <img src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw1b21cb76/images/b_08/A06836C_B_08X1.jpg?sw=406"
                            alt="">
                    </div>
                </div>
                <div class="desc">
                    <h2 class="desc_title">BE YOUR OWN BFF</h2>
                    <p class="desc_subtitle">
                       ${product.description}
                    </p>
                </div>
                <div class="detail_ratings">
                    <h2 class="rating_title">The people have spoken</h2>
                    <p class="rating_subtitle">
                        Ratings and reviews from the Converse community.
                    </p>
    
                    <div class="review_container">
                        <div class="review">
                            <div class="review_rate">
                                <h1>4</h1>
                                <div class="review_star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                                <p>Overall rating based on 1 reviews</p>
                            </div>
                            <div class="review_fit">
                                <p>Average Fit</p>
                                <div class="review-bar__range">
                                    <span class="review-bar__range-puck"></span>
                                </div>
    
                                <div class="range_scale">
                                    <span>Runs Small</span>
                                    <span>Runs Big</span>
                                </div>
    
                                <button class="review_btn">Leave Your Own</button>
                            </div>
                        </div>
                        <div class="review">
                            <p class="user_comment">WELL DONE</p>
                            <div class="user_review">
                                <a href="">
                                    <div class="user_star">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <p class="user_name">Patrick H.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class=" col-lg-4">
                <div class="detail_product">
                    <div class="product_content">
                        <h3>Run Star Legacy CX Platform DIY Beads</h3>
                        <p class="product_price">$ ${product.price}</p>
                        <p class="product_cat">WOMEN'S HIGH TOP SHOE</p>
                        <div class="product_rate">
                            <div class="rate_star">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <a href="">4 Stars</a>
                        </div>
                        <p class="product_desc">The always-bold and comfortable platform gets a nostalgic update with
                            embroidered butterflies and DIY alphabet beads to dress up your laces.
                            <a href="#">More Info</a>
                        </p>
                    </div>
    
                    <div class="product_color">
                        <div class="color_container">
                            <span>Light Field Surplus/Utility</span>
                            <span class="color_code">A06836C</span>
                        </div>
                        <div class="color_img">
                            <img src="${product.image}">
                        </div>
                    </div>
    
                    <div class="product_size">
                        <div class="size_guide">
                            <p>This style runs true to size.</p>
                            <a href="#">Size Guide</a>
                        </div>
                        <select name="size_options" id="size_options">
                            <option value="" selected disabled>
                                Pick a Size
                            </option>
                           
                        </select>
                    </div>
    
                    <div class="product_buy_like">
                        <div class="cart_like">
                            <button class="cart">Add to cart</button>
                            <div class="product_like">
                                <div class="like_position">
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="product_share">
                        <p>Share</p>
                        <ul>
                            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                        </ul>
                    </div>
    
                    <div class="product_signup">
                        Be the first to hear about product launches, collaborations, and more.
                        <a href="#">Sign up</a>
                    </div>
                </div>
            </div>
            `;
    document.getElementById("idDetail").innerHTML = content;
    var sizes = res.data.content.size;
    var sizeHtml=""
    // Product Size
    sizes.forEach((size) => {
      sizeHtml += `<option value="${size}">EU ${size}</option>`;
    });

    document.querySelector(
      ".detail_product .product_size #size_options"
    ).innerHTML += sizeHtml;
  });
  promise.catch(function (err) {
    console.log(err);
  });
};
let renderProductRelateTo = (arr) => {
  var relatedTo = "";
  for (var i = 0; i < arr.length; i++) {
    var title = arr[i];
    relatedTo += `
    <div class="rec_item">
    <div class="rec_img">
        <img src="${title.image}" alt="">
    </div>
    <div class="rec_text">
        <a href="">${title.name}</a>
        <p class="category">${title.description}</p>
        <p class="price">$ ${title.price}</p>
        <p class="category">UNISEX HIGH TOP SHOE</p>
    </div>
    </div>  
    `;
  }
  document.getElementById("relateID").innerHTML = relatedTo;
};
