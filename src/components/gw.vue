<template>
  <main>
    <div class="top">
      <p><span id="s2">购物车</span><span id="s3">编辑</span></p>
    </div>
    <div class="nav" v-for="(item, index) in list" :key="index">
      <div class="n1">
        <input type="radio" />
      </div>
      <div class="n2">
        <img :src="item.src" alt="" />
      </div>
      <div class="n3">
        <p id="p1">{{ item.title }}</p>
        <span id="ss">{{ item.xh }}</span>
        <br />
        <span id="ss1">{{ item.val }}</span>
        <span id="ss2"> {{ item.val1 }}</span>
        <p>{{ item.jj }}</p>
        <p>{{ item.fw }}</p>
      </div>
      <diiv class="n4">
        <van-stepper v-model="value" input-width="20px" step="1"/>
      </diiv>
      <p>
        <van-collapse v-model="activeNames">
          <van-collapse-item title="查看更多信息" name="1">
            <div class="xx">
              <span class="x1">分期0利率</span>
              <span class="x2">您可以选择分期0利率</span>
              <span class="x3">></span>
            </div>
            <div class="xx">
              <span class="x1">购机好礼</span>
              <span class="x2">回收补贴至高享200元 </span>
              <span class="x3">></span>
            </div>
          </van-collapse-item>
        </van-collapse>
      </p>
      <span id="x4">开启优惠提醒</span>
    </div>
    <div class="main">
      <h2>猜你喜欢</h2>
      <ul>
        <li v-for="(item, index) in list1" :key="index">
          <img :src="item.src" alt="" />
          <p>{{ item.title }}</p>
          <span id="v1">{{ item.val }} </span>
          <s> {{ item.val }}</s>
          <div>立即购买</div>
        </li>
      </ul>
    </div>

    <div class="xz" id="xz">
      <input type="checkbox" />
      <span>全选</span>
      <span>应付总额 </span>
      <div><button>去结算({{}})</button></div>
    </div>

    <div class="m-4">
      <div class="m4-1">
        <img src="img/kf.png" alt="" />
        <span>专业客服团队 / 提供当季优惠信息</span>
      </div>
      <div class="m4-1">
        <img src="img/77.png" alt="" />
        <span>7天无理由退货15天换货(定制商品除外)</span>
      </div>
      <div class="m4-1">
        <img src="img/zp.png" alt="" />
        <span>官方正品请安心购买</span>
      </div>

      <van-collapse v-model="activeNames" class="zd">
        <van-collapse-item title="产品" name="1"
          ><h3>智能手机</h3>
          <h3>平板/储存</h3>
          <h3>可佩戴设备</h3>
          <h3>智能产品配件</h3>
          <h3>电视/影音/显示器</h3>
          <h3>生活家电</h3></van-collapse-item
        >
        <van-collapse-item title="我的三星" name="2"
          ><h3>我的订单</h3>
          <h3>我的积分</h3>
          <h3>优惠券</h3>
          <h3>个人资料</h3>
          <h3>收货地址</h3></van-collapse-item
        >
        <van-collapse-item title="网上商城指南" name="3"
          ><h3>常见问题</h3>
          <h3>三星网上商城账号</h3>
          <h3>产品和订单</h3>
          <h3>商城支付及发票</h3>
          <h3>三星专属管家服务</h3>
          <h3>物流</h3>
          <h3>售后服务</h3></van-collapse-item
        >
        <van-collapse-item title="服务支持" name="4"
          ><h3>关于商城</h3>
          <h3>关于三星</h3>
          <h3>售后网点查询</h3>
          <h3>联系我们</h3>
          <h3>体验反馈↗</h3></van-collapse-item
        >
      </van-collapse>
      <div class="m4-1">
        <img src="img/fw.png" alt="" />
        <span>服务中心<span>400-011-8899 (09：00~22：00)</span></span>
      </div>
      <div class="m4-2">
        <span>关注我们</span>
        <img src="img/wx.png" alt="" />
      </div>
    </div>
    <footer>
      <p>
        三星（中国）投资有限公司授权北京鹏泰宝尊电子商务有限公司运营三星网上商城并销售产品
      </p>
      <p>
        <img src="img/jc.png" alt="" /> 京公网安备 11010502037127号 &nbsp;&nbsp;
        京ICP备18036817号-2/3 <br />
        <img src="img/jh.png" alt="" /> 营业执照
      </p>

      <p class="sss">© 1995-2022 三星（中国）投资有限公司 版权所有</p>
      <p><span>隐私政策</span>用户协议</p>
    </footer>
  </main>
</template>
<style>
.nav .van-collapse{
  margin-top: 31%;
}
</style>
<style scoped>
main {
  background: #f2f2f2;
}
.xz span:first-of-type {
  line-height: 60px;
  margin-right: 10px;
}
/* .xz span:nth-of-type(2){
  mal
} */
.xz div{
  width: 40%;
  float: right;

}
.xz button {
  border: none;
  background: #2189ff;
  border-radius: 30px;
  height: 30px;
  font-size: 12px;
  padding: 0 10px;
  color: white;
  margin-top: 15px;
}
.xz {
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  border-bottom: 1px solid rgb(200, 198, 198);
}
.xz input {
  width: 20px;
  height: 20px;
  margin: 5px 10px 0 13px;
}
#v1 {
  font-size: 4vw;
  font-weight: 500;
  color: #2189ff;
  margin-top: 1.8vw;
}
.main {
  padding-left: 3vw;
  padding-top: 6vw;
}
.main li > div {
  padding-bottom: 100px;
}
.main ul {
  display: flex;
  flex-wrap: wrap;
}
.main ul li {
  width: 46%;
  margin: 0 3vw 3vw 0;
  text-align: center;
  background: #fff;
  border-radius: 3vw;
  display: inline-block;
}
.main h2 {
  margin-bottom: 20px;
}
.main li img {
  padding-top: 20px;
  width: 60%;
}
.x1 {
  flex: 0.3;
  font-size: 3.46vw;
  font-weight: 500;
  color: #666;
  margin-right: 1.8vw;
}
.x2 {
  display: inline-block;
  font-size: 3.46vw;
  font-weight: 400;
  color: #000;
}
.x3 {
  position: absolute;
  top: 21%;
  right: 4%;
  font-size: 24px;
  color: black;
}
#x4 {
  border-radius: 45px;
  padding: 0px 20px;
  line-height: 30px;
  float: right;
  width: 18%;
  background: black;
  color: white;
  display: block;
  font-size: 12px;
  height: 30px;
  margin-bottom: 20px;
}
.xx {
  padding: 2.66vw 0 2.66vw 0.93vw;
  border-top: 1px dashed #6d7278;
  display: flex;
  position: relative;
}
#ss2 {
  color: #666;
  font-size: 3.64vw;
  text-decoration: line-through;
}
.n4 {
  width: 25%;
}
.n4 .van-stepper {
  margin-top: 18vw;
  float: right;
}
.n2 {
  margin-right: 5px;
}
.n3 p {
  color: #2189ff;
  font-size: 3.38vw;
  max-width: 37.2vw;
}
#ss1 {
  font-size: 3.73333vw;
  font-weight: 500;
  color: #2189ff;
}
#ss {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid #000;
  border-radius: 2vw;
  width: 28.26vw;
  height: 4.8vw;
  line-height: 4.8vw;
  padding-left: 2.53vw;
  margin-top: 1.33vw;
  margin-bottom: 1.33vw;
  font-size: 3.46vw;
  padding-right: 10vw;
}
#p1 {
  width: 41vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 3.73vw;
  color: #000;
  font-weight: 600;
  padding: 0.5vw 0.5vw 0.5vw 0;
}
.nav {
  overflow: hidden;
  margin: 0 2.66vw 2.66vw 2.66vw;
  padding-right: 2.66vw;
  padding-left: 2.66vw;
  background-color: #fff;
  border-radius: 2.66vw;
}
.n1 {
  margin-top: 8.93vw;
  display: block;
  float: left;
  margin-right: 1vw;
}
.n3 {
  width: 45%;
  overflow: hidden;
}
.n2 img {
  width: 20vw;
}
.nav > div {
  float: left;
}
.top {
  overflow: hidden;
  padding: 20px;
}
#s3 {
  float: right;
  width: 10%;
}
#s2 {
  display: inline-block;
  text-align: center;
  margin-left: 45%;
}
.top span {
  color: #323233;
  font-weight: 500;
  font-size: 16px;
}
footer {
  background: black;
  padding: 7.72222222vw 6.66666667vw 6.11111111vw 6.66666667vw;
  padding-bottom: 50px;
  overflow: hidden;
}
footer p {
  color: white;
  font-size: 12px;
  text-align: left;
  padding-bottom: 15px;
  line-height: 20px;
}
.sss {
  border-bottom: 1px solid #888;
  margin-bottom: 20px;
}
footer img {
  width: 16px;
}
footer span {
  display: block;
  color: white;
  font-size: 12px;
  float: left;
  margin-left: 40%;
}
footer p:last-of-type {
  text-align: center;
  margin-right: 30%;
}

.m4-2 {
  margin: 0px 30px;
  margin-top: 35px;
  overflow: hidden;
  margin-bottom: 31px;
}
.m4-2 span {
  float: left;
  font-size: 5.2vw;
  font-weight: bold;
  line-height: 20vw;
}
.m4-2 img {
  width: 50%;
  float: right;
}

.m4-1 span > span {
  margin-left: 10px;
  font-weight: 600;
}
.m4-1 img {
  width: 40px;
  height: 40px;
  margin-right: 20px;
  margin: 16px 13px;
  vertical-align: middle;
}
.m4-1 span {
  font-size: 12px;
}
.m4-1 {
  height: 72px;
  background: white;
  padding-left: 10px;
  border-bottom: 1px solid rgb(200, 198, 198);
}
.one{
  position: fixed;
  bottom: 0px;
}
</style>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      value: 1,
      activeNames: ["1"],
      list: [
        {
          src: "img/erj.png",
          title: "Samsung Galaxy Watch4 Classic LTE版 46mm 陨石黑",
          xh: "陨石黑",
          val: "¥2249",
          val1: "¥2899.00",
          jj: "比加入时降50元",
          fw: "比加入时新增以旧换新服务",
        },
      ],
      list1: [
        {
          src: "img/xh.jpg",
          title: "Galaxy Z Fold4 空山绿 12GB+256GB",
          val: "¥13,999.00",
        },
        {
          src: "img/xh.jpg",
          title: "Galaxy Z Fold4 空山绿 12GB+256GB",
          val: "¥13,999.00",
        },
        {
          src: "img/xh.jpg",
          title: "Galaxy Z Fold4 空山绿 12GB+256GB",
          val: "¥13,999.00",
        },

        {
          src: "img/xh.jpg",
          title: "Galaxy Z Fold4 空山绿 12GB+256GB",
          val: "¥13,999.00",
        },
      ],
    };
  },
  mounted(){
    $(window).scroll(function(){
                if($(window).scrollTop()<500){
                    $('#xz').addClass('one')
                }else{
                    $('#xz').removeClass('one')
                }
            })
  }
};

</script>