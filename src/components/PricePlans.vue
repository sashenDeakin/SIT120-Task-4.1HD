<script setup></script>

<template>
  <section id="price">
    <div class="container">
      <h1>Price Plan</h1>
      <div class="row">
        <div class="col-md-3">
          <div class="single-price">
            <div class="price-head">
              <h2>Free</h2>
              <p>$0<span>month</span></p>
            </div>
            <div class="price-content">
              <ul>
                <li><i class="fa fa-check-circle"></i>5GB Space</li>
                <li><i class="fa fa-check-circle"></i>10GB Bandwidth</li>
                <li><i class="fa fa-times-circle"></i>15 Email Account</li>
                <li><i class="fa fa-times-circle"></i>Unlimited Domain</li>
                <li><i class="fa fa-times-circle"></i>Unlimited Support</li>
              </ul>
            </div>
            <div class="price-button">
              <a class="buy-btn" href="#">Join Free</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="single-price">
            <div class="price-head">
              <h2>Start Up</h2>
              <p>$10<span>month</span></p>
            </div>
            <div class="price-content">
              <ul>
                <li><i class="fa fa-check-circle"></i>10GB Space</li>
                <li><i class="fa fa-check-circle"></i>100GB Bandwidth</li>
                <li><i class="fa fa-check-circle"></i>15 Email Account</li>
                <li><i class="fa fa-times-circle"></i>Unlimited Domain</li>
                <li><i class="fa fa-times-circle"></i>Unlimited Support</li>
              </ul>
            </div>
            <div class="price-button">
              <a class="buy-btn" href="#">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="single-price">
            <div class="price-head">
              <h2>Business</h2>
              <p>$40<span>month</span></p>
            </div>
            <div class="price-content">
              <ul>
                <li><i class="fa fa-check-circle"></i>20GB Space</li>
                <li><i class="fa fa-check-circle"></i>200GB Bandwidth</li>
                <li><i class="fa fa-check-circle"></i>50 Email Account</li>
                <li><i class="fa fa-check-circle"></i>Unlimited Domain</li>
                <li><i class="fa fa-times-circle"></i>Unlimited Support</li>
              </ul>
            </div>
            <div class="price-button">
              <a class="buy-btn" href="#">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="single-price">
            <div class="price-head">
              <h2>Advanced</h2>
              <p>$100<span>month</span></p>
            </div>
            <div class="price-content">
              <ul>
                <li><i class="fa fa-check-circle"></i>50GB Space</li>
                <li><i class="fa fa-check-circle"></i>Unlimited Bandwidth</li>
                <li>
                  <i class="fa fa-check-circle"></i>Unlimated Email Account
                </li>
                <li><i class="fa fa-check-circle"></i>Unlimited Domain</li>
                <li><i class="fa fa-check-circle"></i>Unlimited Support</li>
              </ul>
            </div>
            <div class="price-button">
              <a class="buy-btn" href="#">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#price {
  padding: 40px 0;
  background: #efefef;
}

.single-price {
  margin: 10px auto;
  display: inline;
  float: left;
  width: 100%;
  background-color: #fff;
  transition: 0.5s;
}

.single-price:hover {
  box-shadow: 0 2px 20px #333;
}

.price-head {
  background-color: #2196f3;
  display: inline;
  float: left;
  padding: 10px 5px;
  text-align: center;
  width: 100%;
}

.price-head h2 {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
  padding: 5px;
  text-transform: uppercase;
}

.price-head h3 {
  font-size: 25px;
  color: #ccc;
  font-weight: bold;
  line-height: 30px;
}

#price span {
  font-size: 15px;
}

.price-content {
  display: inline;
  float: left;
  width: 100%;
  padding: 0 15px;
}

.price-content ul li {
  border-bottom: 1px solid #efefef;
  padding: 15px 10px;
  list-style: none;
}

ul li:last-child {
  border: none;
}

.fa-check-circle {
  color: green;
  margin-right: 10px;
  font-size: 20px;
}

.fa-times-circle {
  color: red;
  margin-right: 10px;
  font-size: 20px;
}

.price-button {
  display: inline;
  float: left;
  padding: 15px 15px 30px;
  text-align: center;
  width: 100%;
}

.buy-btn {
  background-color: #2196f3;
  border-radius: 3px;
  display: inline-block;
  font-size: 18px;
  padding: 15px 50px;
  transition: 0.5s;
}

.buy-btn:hover {
  border-color: 1px solid #fff;
  background-color: #3f51b5;
}

a {
  text-decoration: none !important;
  color: #fff !important;
}
</style>
