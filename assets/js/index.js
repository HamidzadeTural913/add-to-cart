let params = (new URL(document.location).searchParams)
let id = params.get("dataId");



fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
.then((res)=>res.json())
.then((datas)=>{
    console.log(datas.id);
    let row = document.querySelector(".row")
    row.innerHTML=`<div class="container mt-5">
    <div class="row">
        <div class="col-lg-6 active mt-4">
            <img src="${datas.url}" alt="">
        </div>
        <div class="col-lg-6 active-two">
            <div class="writing">
                <p>Common Good</p>
                <h1>Long-Sleeve Double Crew Shirt</h1>
            </div>
            <div class="info">
                <div class="icons">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
                
                    <p>(No Rewievs Yet)</p>
                    <p>Write a Review</p>
                
            </div>
            <div class="price">
                <span>$${datas.id}30.00</span>
            </div>
            <div class="image">
                <i class="fa-regular fa-image"></i><p>Size Chart</p>
            </div>
            <div class="product">
                <div class="left">
                    <ul>
                    <li>Brand</li>
                    <li>SKU</li>
                    <li>Weight</li>
                    <li>Shopping</li>
                </ul>
            </div>
                <div class="right"><ul>
                    <li>Common Goad</li>
                    <li>CGLD</li>
                    <li>1.00 KGS</li>
                    <li>Calculated at Check out</li>
                </ul>
            </div>
               
            </div>
            <hr>
            <div class="quantity">
                <p>Quantity:</p>
                <input type="number" value="1">
            </div>
            <div class="buttons">
                <button class="one">Add to Cart</button>
                <button class="two">Add to Wish List</button>
            </div>
        </div>      
    </div>
</div>`
})

// document.body.append(row);