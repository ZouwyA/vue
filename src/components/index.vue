<template>
  <main>
    <div class="lb">
      <van-swipe class="lblb" :autoplay="3000">
        <van-swipe-item><img src="img/lb1.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="img/lb2.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="img/lb3.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="img/lb4.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="img/lb5.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="img/lb6.jpg" alt="" /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="photo">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <a href="">
            <img :src="item.src" alt="" />
            <span>{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="m-1">
    <router-link to="/xq">
      <div class="m-left">
        <img src="img/chaozhi.png" alt="" />
      </div>
      </router-link>
      <div class="m-right">
        <div class="r-top">
          <img src="img/youhui.png" alt="" />
        </div>
        <div class="r-top">
          <img src="img/youhui1.png" alt="" />
        </div>
      </div>
    </div>

    <div class="lunbo">
      <van-swipe class="lunb" :autoplay="3000">
        <van-swipe-item><img src="img/lunbo1.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="img/lunbo2.jpg" alt="" /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="m-center">
      <div class="mmm">
      <div class="c-top">
        <span class="t1">秒杀专区</span>
        <span class="t2">距离秒杀结束还剩</span>
        <div class="t3">
          <van-count-down :time="time" />
          时 分 秒
        </div>
      </div>
      <span class="t4">了解更多 ></span>
      </div>

      <div class="c-bot">
        <div class="bt-left">
          <img src="img/twj.png" alt="" />
          <br />
          <span class="c1">限定便携式移动电源套装</span>
          <span class="c2">限时立省1030元</span>
          <br />
          <span class="c3">￥3969</span>
          <br />
          <span class="c4">￥4999</span>
        </div>
        <div class="bt-right">
          <img src="img/twj1.jpg" alt="" />
          <br />
          <span class="c1">限定便携式移动电源套装</span>
          <span class="c2">限时立省1030元</span>
          <br />
          <span class="c3">￥3969</span>
          <br />
          <span class="c4">￥4999</span>
        </div>
      </div>
    </div>
    <div class="m-2">
      <span>热销推荐</span>
      <img src="img/rexiao.png" alt="" class="rx" />
      <div class="m2-t">
        <ul>
          <li v-for="(item, index) in list1" :key="index">
            <img :src="item.src" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div class="m-3">
      <span id="left">新品区</span> <span id="right">了解更多 ></span>

      <img src="img/xp.jpg" alt="" class="xp" />
      <p class="x4">Galaxy S22 Ultra 曜夜黑</p>
      <p class="x5">购机享多重好礼</p>
      <p class="x6">¥9,699.00</p>

      <div class="m3-t">
        <ul>
          <li v-for="(item, index) in list3" :key="index">
            <img :src="item.src" alt="" />
            <p class="x1">{{ item.title }}</p>
            <p class="x2">{{ item.ls }}</p>
            <p class="x3">{{ item.val }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="m-3">
      <span id="left">智能手机</span><span id="right">了解更多 ></span>
      <img src="img/zn.png" alt="" class="pbcc" />
      <div class="m3-t">
        <ul>
          <li v-for="(item, index) in list5" :key="index">
            <img :src="item.src" alt="" />
            <p class="x1">{{ item.title }}</p>
            <p class="x2">{{ item.ls }}</p>
            <p class="x3">{{ item.val }}<span id="xx3">¥1,399.00</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="m-3">
      <span id="left">平板/存储</span><span id="right">了解更多 ></span>
      <img src="img/pbcc.jpg" alt="" class="pbcc" />
      <div class="m3-t">
        <ul>
          <li v-for="(item, index) in list4" :key="index">
            <img :src="item.src" alt="" />
            <p class="x1">{{ item.title }}</p>
            <p class="x2">{{ item.ls }}</p>
            <p class="x3">{{ item.val }}<span id="xx3">¥1,399.00</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="m-3">
      <span id="left">可穿戴设备</span><span id="right">了解更多 ></span>
      <img src="img/erji.png" alt="" class="pbcc" />
      <div class="m3-t">
        <ul>
          <li v-for="(item, index) in list8" :key="index">
            <img :src="item.src" alt="" />
            <p class="x1">{{ item.title }}</p>
            <p class="x2">{{ item.ls }}</p>
            <p class="x3">{{ item.val }}<span id="xx3">¥1,399.00</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="m-3">
      <span id="left">智能产品配件</span><span id="right">了解更多 ></span>
      <img src="img/peijian.png" alt="" class="pbcc" />
      <div class="m3-t">
        <ul>
          <li v-for="(item, index) in list6" :key="index">
            <img :src="item.src" alt="" />
            <p class="x1">{{ item.title }}</p>
            <p class="x2">{{ item.ls }}</p>
            <p class="x3">{{ item.val }}<span id="xx3">¥1,399.00</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="m-3">
      <span id="left">电视/影音/显示器</span><span id="right">了解更多 ></span>
      <img src="img/dianshi.png" alt="" class="pbcc" />
      <div class="m3-t">
        <ul>
          <li v-for="(item, index) in list7" :key="index">
            <img :src="item.src" alt="" />
            <p class="x1">{{ item.title }}</p>
            <p class="x2">{{ item.ls }}</p>
            <p class="x3">{{ item.val }}<span id="xx3">¥1,399.00</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="m-3">
      <span id="left">生活家电</span><span id="right">了解更多 ></span>
      <img src="img/shenghuo.png" alt="" class="pbcc" />
      <div class="m3-t">
        <ul>
          <li v-for="(item, index) in list9" :key="index">
            <img :src="item.src" alt="" />
            <p class="x1">{{ item.title }}</p>
            <p class="x2">{{ item.ls }}</p>
            <p class="x3">{{ item.val }}<span id="xx3">¥1,399.00</span></p>
          </li>
        </ul>
      </div>
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
.zd .van-cell {
  font-size: 16px;
  color: #000;
  font-weight: 700;
  padding-top: 20px;
}
.zd h3 {
  padding: 10px 10px;
  font-weight: 400;
  font-size: 14px;
  color: #000;
}
.lblb .van-swipe__indicator {
  margin-left: 15px;
  height: 8px;
  width: 8px;
}
.c-top .van-count-down {
  margin-left: 2vw;
}
</style>
<style scoped>
* {
  list-style: none;
}
#left {
  float: left;
}
#right {
  float: right;
  font-size: 12px;
}
.mmm{
  overflow: hidden;
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
  margin: 0px 10px;
    background: white;
  padding-left: 10px;

  border-bottom: 1px solid rgb(200, 198, 198);
}
.pbcc {
  width: 100%;
}
#xx3 {
  text-decoration: line-through;
  color: #aaa;
  font-size: 12px;
  float: right;

  margin: -6px 15px 0 0px;
}
.x6 {
  width: 90%;
  color: #2189ff;
  font-size: 4vw;
  font-weight: 700;
  margin-left: 15px;
  float: left;
  padding-bottom: 20px;
}
.x4 {
  font-size: 4vw;
  margin: 0 0 0.93vw;
  font-weight: 700;
}
.x5 {
  font-size: 12px;
  margin-bottom: 5px;
}
.x1 {
  line-height: 4.6vw;
  height: 9vw;
  font-size: 3.5vw;
  font-weight: 700;
  padding: 0 4vw;
}
.x2 {
  font-size: 2.9vw;
  height: 8.5vw;
}
.x3 {
  color: #2189ff;
  font-size: 4vw;
  font-weight: 700;
}
.m-3 span,
.m-2 span {
  display: block;
  line-height: 7.7vw;
  text-align: left;
  font-size: 5.3vw;
}
.m2-t li {
  width: 48%;
  float: left;
  margin-right: 2%;
  margin-bottom: 20px;
}
.m3-t li {
  width: 48%;
  float: left;
  margin-right: 2%;
  padding-bottom: 16px;
  margin-bottom: 5px;
  background: white;
}
.m2-t li img {
  width: 100%;
  line-height: 0;
  border-bottom-right-radius: 6vw;
  border-bottom-left-radius: 6vw;
  border-radius: 5vw;
}
.m3-t li img {
  width: 60%;
  line-height: 0;
  border-bottom-right-radius: 6vw;
  border-bottom-left-radius: 6vw;
  border-radius: 5vw;
  background: white;
}
.m-2,
.m-3 {
  margin: 0 auto;
  padding: 6vw 4vw 0 4vw;
  text-align: center;
  overflow: hidden;
  background: #f7f7f7;
}
.rx {
  width: 100%;
  border-bottom-right-radius: 6vw;
  border-bottom-left-radius: 6vw;
  border-radius: 5vw;
  text-align: center;
  margin-bottom: 20px;
}
.xp {
  width: 70%;
  line-height: 0;
  border-bottom-right-radius: 6vw;
  border-bottom-left-radius: 6vw;
  border-radius: 5vw;
}

.c1 {
  margin: 0px 3px 3px 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  width: 94%;
  font-size: 14px;
  font-weight: 600;
}
.c2,
.c4 {
  font-size: 12px;
  line-height: 26px;
}
.c3 {
  font-size: 14px;
  line-height: 25px;
}
.c4 {
  text-decoration: line-through;
  color: #aaa;
}
.c-bot {
  height: 80%;
  width: 92%;
}
.bt-left {
  width: 49%;
  height: 90%;
  background: rgb(255, 255, 255);
  float: left;
  border-radius: 2.7vw;
}
.bt-right {
  width: 49%;
  height: 90%;
  background: rgb(255, 255, 255);
  float: right;
  border-radius: 2.7vw;
}
.c-bot img {
  width: 50%;
  vertical-align: middle;
  padding: 6vw 0 5vw 0;
}
.c-top {
  overflow: hidden;
  padding-bottom: 3.9vw;
  display: flex;
  float: left;
}
.t1 {
  font-size: 5.3vw;
  line-height: 8.8vw;
}
.t2 {
  font-size: 3vw;
  margin-left: 2vw;
  line-height: 8.8vw;
}
.t3 {
  font-size: 3vw;
  margin-top: 2vw;
}
.t4 {
  font-size: 1vw;
  line-height: 8.8vw;
  margin-right: 10%;
  float: right;
}
.m-center {
  width: 100%;
  background-color: #dae8ef;
  margin: 0 auto;
  padding: 6vw 4vw 0 4vw;
  text-align: center;
  overflow: hidden;
  padding-bottom: 40px;
}
.lunbo {
  margin: 0px 10px;
  height: 86px;
  margin-bottom: 4vw;
}
.lunbo img {
  height: 86px;
  width: 100%;
}
.r-top {
  width: 100%;
}
.m-left {
  width: 44vw;
  float: left;
}
.m-left img {
  width: 100%;
  height: 324px;
}
.m-right img {
  width: 100%;
  height: 159.7px;
}
.m-right {
  text-align: center;
  width: 50%;
  margin-bottom: 1.33333vw;
  float: right;
}

main {
  overflow: hidden;
}

.lb img {
  width: 100%;
  height: auto;
}
.lb {
  margin-bottom: 6px;
}

.photo {
  width: 100%;
  overflow: hidden;
}
.photo ul li {
  width: 20%;
  float: left;
  text-align: center;
  cursor: pointer;
  margin-bottom: 4vw;
}
.photo img {
  width: 8vw;
  height: 8vw;
  vertical-align: middle;
}

.photo ul a {
  text-decoration: none;
  color: black;
}

.photo span {
  display: block;
  margin-top: 2px;
  font-size: 12px;
}
.photo span:nth-last-of-type(2) {
  margin-top: 2px;
}
.m-1 {
  margin: 0px 10px;
  height: 324px;
  margin-bottom: 4vw;
}
</style>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: "img/sj.png",
          title: "智能手机",
        },
        {
          src: "img/pb.png",
          title: "智能平板",
        },
        {
          src: "img/erj.png",
          title: "可穿戴设备",
        },
        {
          src: "img/pj.png",
          title: "智能配件",
        },
        {
          src: "img/ds.png",
          title: "电视",
        },
        {
          src: "img/cc.png",
          title: "存储产品",
        },
        {
          src: "img/xsp.png",
          title: "显示器",
        },
        {
          src: "img/yx.png",
          title: "影音产品",
        },
        {
          src: "img/bx.png",
          title: "冰箱",
        },
        {
          src: "img/xyj.png",
          title: "洗衣机/干衣机",
        },
      ],
      activeNames: ["1"],
      time: 30 * 60 * 60 * 1000,
      list1: [
        {
          src: "img/rx1.jpg",
        },
        {
          src: "img/rx2.png",
        },
      ],
      list3: [
        {
          src: "img/xpsj.jpg",
          title: "Galaxy S22 远山灰",
          ls: "限时立省1030元",
          val: "¥3,969.00",
        },
        {
          src: "img/xpsj1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "限时立省1030元",
          val: "¥3,969.00",
        },
        {
          src: "img/xpsj2.jpg",
          title: "Galaxy S22 远山灰",
          ls: "限时立省1030元",
          val: "¥3,969.00",
        },
        {
          src: "img/xpsj3.jpg",
          title: "Galaxy S22 远山灰",
          ls: "限时立省1030元",
          val: "¥3,969.00",
        },
      ],
      list4: [
        {
          src: "img/pbcc1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "限时立省1030元",
          val: "¥3,969.00",
        },
        {
          src: "img/pbcc2.jpg",
          title: "Galaxy S22 远山灰",
          ls: "限时立省1030元",
          val: "¥3,969.00",
        },
        {
          src: "img/pbcc3.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/pbcc4.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/pbcc1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/pbcc5.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
      ],
      list5: [
        {
          src: "img/zn1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "限时立省1030元",
          val: "¥3,969.00",
        },
        {
          src: "img/pdcc2.jpg",
          title: "Galaxy S22 远山灰",
          ls: "限时立省1030元",
          val: "¥3,969.00",
        },
        {
          src: "img/zn22.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/zn33.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/zn1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/zn55.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
      ],
      list6: [
        {
          src: "img/pj1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/pj2.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/pj4.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/pj1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/pj3.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/pj4.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
      ],
      list7: [
        {
          src: "img/ds1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/ds1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/ds1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/ds1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/ds1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/ds1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
      ],
      list8: [
        {
          src: "img/erji1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/erji2.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/xpsj1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/erji2.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/erji1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
        {
          src: "img/xpsj1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "",
          val: "¥3,969.00",
        },
      ],
      list9: [
        {
          src: "img/sh1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "券后至高立省2000元",
          val: "¥3,969.00",
        },
        {
          src: "img/sh1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "券后至高立省2000元",
          val: "¥3,969.00",
        },
        {
          src: "img/sh1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "券后至高立省2000元",
          val: "¥3,969.00",
        },
        {
          src: "img/sh1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "券后至高立省2000元",
          val: "¥3,969.00",
        },
        {
          src: "img/sh1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "券后至高立省2000元",
          val: "¥3,969.00",
        },
        {
          src: "img/sh1.jpg",
          title: "Galaxy S22 远山灰",
          ls: "券后至高立省2000元",
          val: "¥3,969.00",
        },
      ],
    };
  },
};
</script>