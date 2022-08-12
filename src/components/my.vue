<template>
  <main>
    <div class="nav">
      <div class="z">手机号快捷登录</div>
      <div class="sj">
        <input type="text" placeholder="请输入手机号" id="sjh" />
        <img src="img/sjh.png" alt="" id="sjh1" />
      </div>
      <div class="yz">
        <input type="password" placeholder="请输入验证码" id="psw" />
        <img src="img/mim.png" alt="" id="mim" />
        <span class="password-btn">获取验证码</span>
      </div>
    </div>
    <router-link to="/my1">
    <button class="login">登录</button>
    </router-link>
    <div class="xy">
      <input type="radio" class="d" />
      为了更好的为您提供服务，在使用我们的产品前请您阅读完整版
      <a href="">《隐私政策》</a>和<a href="">《用户协议》</a>的所有条款。
    </div>
    <div class="qt"><span class="txt">—————— 其他方式登录 ——————</span></div>
    <div class="tu">
      <img src="img/tu.png" alt="" />
      <br />
      三星账号登录
    </div>
  </main>
</template>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
.yz {
  width: 82%;
  height: 50px;
  margin: 26px 32px;
  position: relative;
}
.sj {
  height: 50px;
    width: 75%;
    margin: 30px 32px;
  position: relative;
}
.sj img,
.yz img {
  width: 20px;
  height: 20px;
}
#mim {
  position: absolute;
  left: 3%;
  top: 32%;
}

#sjh1 {
  position: absolute;
  left:  3%;
  top: 32%;
}
.nav {
  width: 100%;
  height: 200px;
  margin-top: 55px;
}
input {
  border: 1px solid #f0f0f0;
  padding-left: 46px;
  height: 50px;
  font-size: 14px;
  border-radius: 5px;
}
#sjh {
  width: 95%;
  border: 1px solid #f0f0f0;
  line-height: 50px;
  margin-bottom: 0;
}

#psw {
  border: 1px solid #f0f0f0;
  line-height: 50px;
  width: 43%;
  float: left;
}
.password-btn {
  width: 35%;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  border-radius: 36px;
  background: #228aff;
  color: #fff;
  text-align: center;
  font-size: 14px;
  
  float: right;
}
.login {
  width: 82%;
  height: 50px;
  margin: 36px 34px;

  background: rgb(0, 0, 0);
  margin-bottom: 40px;
  color: white;
  border-radius: 30px;
  border: none;
}
.sign {
  width: 90%;
  height: 40px;
  margin: 0px auto;
  border: none;
  border-radius: 1%;
}

.z {
  text-align: center;
  font-weight: 700;
  font-size: 30px;
}
.xy {
  width: 88%;
  margin: 0px auto;
  font-size: 12px;
  margin-bottom: 10px;
}
.d {
  float: left;
  height: 20px;
  margin-bottom: 10px;
  margin-right: 10px;
}
.qt {
  width: 88%;
  margin: 0px auto;
  color: #888;
  text-align: center;
}
.tu {
  font-size: 12px;
  color: #333;
  margin: 29px auto;
  text-align: center;
}
.tu img {
  width: 15%;
}
</style>