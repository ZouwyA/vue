<template>
  <main>
    <div class="gr">
      <div class="g1">
        <img src="img/sz.png" alt="" />
        <br /><span>设置</span>
      </div>

      <div class="gr-l">
        <img src="img/gr.png" alt="" />
      </div>
      <div class="gr-r">
        <p>s***************</p>
        <button>设置个人信息</button>
        <button>绑定三星账号</button>
      </div>
      <div class="g2">
        <ul>
          <li>
            <span>0</span>
            <p>优惠券</p>
          </li>
          <li>
            <span>0</span>
            <p>收藏</p>
          </li>

          <li>
            <span>1</span>
            <p>购物车</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="my1" v-for="(item, index) in list" :key="index">
      <h2>{{ item.title }}</h2>
      <ul>
        <li v-for="(item, index) in item.lis" :key="index">
          <img :src="item.src" alt="" />
          <br />
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </div>

    <div class="my1" v-for="(item, index) in list1" :key="index" id="my2">
      <h2>{{ item.title }}</h2>
      <ul>
        <li v-for="(item, index) in item.lis" :key="index" id="wd">
          <img :src="item.src" alt="" />
          <br />
          <span id="s1">{{ item.title }}</span>
          <div class="money">
            {{ item.val }}<span>{{ item.val }}</span>
          </div>
          <button>立即购买</button>
        </li>
      </ul>
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

<style scoped>
main {
  margin: 0 10px;
  background-color: rgb(247, 247, 247);
  height: 1890px;
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

#s1 {
  min-height: 40px;
  width: 43vw;
  font-size: 4vw;
  font-weight: 700;
  color: #000;
}
.gr {
  width: 86%;
  height: 37.6vw;
  margin-top: 3.33333vw;
  border-radius: 2.66667vw;
  padding-top: 6.53333vw;
  margin-left: 4vw;
  background-color: #fff;
  position: relative;
  padding-left: 5.33333vw;
}
.gr-l {
  float: left;
  overflow: hidden;
}
.g2 {
  width: 100%;
  margin-top: 6.26667vw;
}
.g2 ul {
  display: flex;
  flex-wrap: wrap;
}
.g2 li {
  text-align: center;
  width: 30%;
}
.g2 li span {
  margin-bottom: 2vw;
  font-size: 3.73333vw;
  font-weight: 400;
  color: #2189ff;
  display: inline-block;
}
.g2 p {
  font-weight: 22px;
}
.gr-l img {
  width: 11.73333vw;
  height: 11.73333vw;
  margin-right: 2.66667vw;
  border-radius: 50%;
  vertical-align: middle;
}
.g1 span {
  margin-left: 1vw;
}
.g1 {
  float: right;
  margin: -50px 5px 0px 0px;
}
.g1 > img {
  width: 6.66667vw;
  height: 6.66667vw;
  vertical-align: middle;
}
.gr-r p {
  width: 30vw;
  line-height: 1.4;
  overflow: hidden;
}
.gr-r button {
  margin-top: 1.33333vw;
  margin-right: 4vw;
  height: 6.53333vw;
  background-color: #000;
  color: #fff;
  padding: 0 3.33333vw;
  border-radius: 4vw;
  font-size: 3.46667vw;
}
.my1 {
  margin: 0 4vw;
  margin-top: 4vw;
}
.my1 h2 {
  font-size: 5.33333vw;
  font-weight: 400;
  color: #000;
  margin-bottom: 2vw;
}
.my1 li {
  width: 25%;
  text-align: center;
  padding-bottom: 10px;
}
.my1 img {
  width: 40%;
}
.my1 ul {
  display: flex;
  flex-wrap: wrap;
  background: white;
  overflow: hidden;
  border-radius: 2.66667vw;
  font-size: 2.93333vw;
  padding: 2vw 0;
}
.my1 span {
  font-size: 12px;
}
#wd {
  width: 48%;
  border-radius: 2.66667vw;
  background: white;
  margin: 1%;
}
#wd img {
  width: 60%;
  margin-top: 20px;
}
#my2 ul {
  background-color: rgb(247, 247, 247);
}
#wd button {
  width: 24.4vw;
  height: 8vw;
  color: #000;
  font-size: 4vw;
  margin-top: 2vw;
  border: 1px solid #000;
  text-align: center;
  line-height: 8vw;
  border-radius: 4.66667vw;
  background-color: #fff;
  margin-bottom: 10px;
}
.money {
  font-weight: 500;
  color: #2189ff;
  line-height: 2.66667vw;
  margin-top: 1.33333vw;
  font-size: 4vw;
}
.money span {
  font-size: 3.46667vw;
  color: #aaa;
  margin-left: 2.66667vw;
  text-decoration: line-through;
}
</style>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: "我的订单",
          lis: [
            {
              title: "待付款",
              src: "img/my1.png",
            },
            {
              title: "待收货",
              src: "img/my11.png",
            },
            {
              title: "待评价",
              src: "img/my12.png",
            },
            {
              title: "全部订单",
              src: "img/my13.png",
            },
          ],
        },
        {
          title: "我的服务",
          lis: [
            {
              title: "售后服务",
              src: "img/my2.png",
            },
            {
              title: "企业购",
              src: "img/my22.png",
            },
            {
              title: "学生购",
              src: "img/my23.png",
            },
            {
              title: "我的定制",
              src: "img/my24.png",
            },
            {
              title: "支持服务",
              src: "img/my25.png",
            },
          ],
        },
        {
          title: "信息管理",
          lis: [
            {
              title: "地址管理",
              src: "img/my3.png",
            },
            {
              title: "中奖记录",
              src: "img/my32.png",
            },
            {
              title: "消息",
              src: "img/my33.png",
            },
            {
              title: "评价晒单",
              src: "img/my34.png",
            },
          ],
        },
      ],
      list1: [
        {
          title: "猜你喜欢",
          lis: [
            {
              title: "Galaxy Z Fold4 空山绿 12GB+256GB",
              src: "img/wd1.jpg",
              val: "￥13999.00",
            },
            {
              title: "Galaxy Z Flip4 幽紫秘境 8GB+256GB",
              src: "img/zn11.jpg",
              val: "￥8499.00",
            },
            {
              title: "Galaxy Watch5 蓝牙版 44mm 晴空海岸",
              src: "img/zn22.jpg",
              val: "￥13999.00",
            },
            {
              title: "Galaxy Buds2 Pro 冰雪浮绘         ",
              src: "img/zn55.jpg",
              val: "￥2099.00",
            },
          ],
        },
      ],
    };
  },
};
</script>