<template >
  <main>
    <header>
      <a href="" class="logo"></a>
      <div class="h-r">
        <img src="img/ss.png" alt="" id="h1" />
        <router-link to="/gw">
          <img src="img/gwc.png" alt="" id="h2" />
        </router-link>
        <router-link to="/list">
          <img src="img/fl.png" alt="" id="h3" />
        </router-link>
      </div>
    </header>
    <router-view></router-view>
    <ul class="bot">
      <li>
        <router-link to="/index">
          <img
            src="img/f1.png"
            alt=""
          />
          <br />
          首页
        </router-link>
      </li>
      <li>
        <router-link to="/fl">
          <img
            src="img/f2.png"
            alt=""
          />
          <br />
          分类</router-link
        >
      </li>
      <li>
        <router-link to="/find">
          <img
            src="img/f3.png"
            alt=""
          />
          <br />
          发现</router-link
        >
      </li>
      <li>
        <router-link to="/kf">
          <img
            src="img/f4.png"
            alt=""
          />
          <br />
          客服</router-link
        >
      </li>
      <li>
        <router-link to="/my">
          <img
            src="img/f5.png"
            alt=""
          />
          <br />
          我的</router-link
        >
      </li>
    </ul>
  </main>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
</style>

<style scoped>
.bot {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background: rgb(255, 255, 255);
  border-top: 1px solid #666;
  height: 17.2vw;
    border-top-left-radius: 2.6vw;
    border-top-right-radius: 2.6vw;
}
.bot li {
  width: 20%;
  float: left;
  text-align: center;
  margin-top: 10px;
}
.bot a {
  text-decoration: none;
  color: black;
  font-size: 16px;
}
.bot .router-link-active {
  color: red;
}
.bot img {
width: 8vw;
    height: auto;
}

header {
  background: #ffffff;
  /* width: 100%; */
  padding: 8px 16px;
  position: relative;
}
header img {
  height: 22px;
  width: 22px;
  position: absolute;
}
#h1 {
  right: 110px;
  top: 17px;
}
#h2 {
  right: 68px;
  height: 28px;
  width: 28px;
  top: 14px;
}
#h3 {
  right: 25px;
  top: 18px;
}
.logo {
  display: block;
  width: 150px;
  height: 35px;
  margin-top: 4px;
  background: url(../assets/img/logo.png) no-repeat 50% 50%;
  background-size: 100% auto;
}
</style>
