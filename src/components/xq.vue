<template>
  <main>
    <van-tabs v-model="active" scrollspy sticky id="xz">
      <van-tab title="商品">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="企业员工验证享优惠" :name="0" class="yg">
            <img src="img/spp.jpg" alt="" />
          </van-collapse-item>
        </van-collapse>

        <div class="sp">
          <span>新品</span>
          <span>人气推荐</span>
          <img src="img/sc.png" alt="" />
        </div>
        <h1 class="tt">Galaxy S22 Ultra</h1>

        <van-swipe class="xq" :autoplay="3000" indicator-color="white">
          <van-swipe-item><img src="img/xqlb.jpg" alt="" /></van-swipe-item>
          <van-swipe-item><img src="img/xqlb.jpg" alt="" /></van-swipe-item>
          <van-swipe-item><img src="img/xqlb.jpg" alt="" /></van-swipe-item>
          <van-swipe-item><img src="img/xqlb.jpg" alt="" /></van-swipe-item>
        </van-swipe>
        <div class="val">
          <h1>￥9,699.00</h1>
          <div class="v1">
            <span>领券</span>
            <div class="v2">
              <span> 99元限量早鸟券 </span>
              <span> 199元限量早鸟券 </span>
              <span> 299元限量早鸟券 </span>
            </div>
            <span class="lq"> 领取 > </span>
          </div>
          <div class="v1">
            <span>商城优势</span>
            <div class="v2">
              <span class="scys"><img src="img/✔.png" alt="" />晒单好品</span>
              <span class="scys"><img src="img/✔.png" alt="" />管家服务</span>
            </div>
            <span class="lq"> 详情 ></span>
          </div>
          <div class="v1">
            <span>商城优势</span>
            <div class="v2">
              <span class="scys" id="dw"
                ><img src="img/dw.png" alt="" />广东省</span
              >
            </div>
          </div>
        </div>
        <div class="xh">
          <h1>选择机型</h1>
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <p>{{ item.title }}</p>
              <p>{{ item.val }}</p>
            </li>
          </ul>
        </div>
        <div class="xh">
          <h1>选择内存</h1>
          <ul>
            <li v-for="(item, index) in list1" :key="index">
              <p>{{ item.title }}</p>
              <p>{{ item.val }}</p>
            </li>
          </ul>
        </div>
        <div class="ys">
          <h1>选择颜色</h1>
          <ul>
            <li v-for="(item, index) in list2" :key="index">
              <img :src="item.src" alt="" />
            </li>
          </ul>
          <div class="col">
            <ul>
              <li>
                <div class="c1"></div>
                <br />
                <div class="c2">绯影红</div>
              </li>
              <li>
                <div class="c1"></div>
                <br />
                <div class="c2">曜夜黑</div>
              </li>
              <li>
                <div class="c1"></div>
                <br />
                <div class="c2">羽梦白</div>
              </li>
              <li>
                <div class="c1"></div>
                <br />
                <div class="c2">雾松绿</div>
              </li>
            </ul>
          </div>
          <div class="col">
            <p id="p1">三星网上商城专属颜色</p>
            <p>(仅在三星网上商城可享，无需额外费用)</p>
            <ul>
              <li>
                <div class="c1" id="c1"></div>
                <br />
                <div class="c2">远山灰</div>
              </li>
              <li>
                <div class="c1" id="c2"></div>
                <br />
                <div class="c2">湖屿蓝</div>
              </li>
              <li>
                <div class="c1" id="c3"></div>
                <br />
                <div class="c2">蔷薇红</div>
              </li>
            </ul>
          </div>
          <div class="wl-txt">
            广州市 2022-08-10 18:00:00 &nbsp;前下单<br />
            预计 2022-08-11 19:00&nbsp;前送达(预售等特殊情况除外)<br />
            受疫情防控举措影响，部分地区订单可能会延迟配送，请您耐心等待，
            <span>详情→</span>
          </div>
        </div>

        <div class="xh">
          <h1>管家服务 <span class="t2"> 一产品一服务，非叠加 ❓</span></h1>

          <ul>
            <li v-for="(item, index) in list3" :key="index" id="fw">
              <p>{{ item.title }}</p>
              <p>{{ item.val }}</p>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <li>
              <img src="img/ys.png" alt="" />
              <br />
              <div class="c2">以旧换新</div>
            </li>
            <li>
              <img src="img/ys.png" alt="" />
              <br />
              <div class="c2">分期0利率</div>
            </li>
            <li>
              <img src="img/ys.png" alt="" />
              <br />
              <div class="c2">管家服务</div>
            </li>
            <li>
              <img src="img/ys.png" alt="" />
              <br />
              <div class="c2">免费包邮</div>
            </li>
          </ul>
        </div>
        <div class="icons-txt">*以上权益仅限部分商品可享</div>
      </van-tab>
      <van-tab title="详情">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="商品详情" :name="1" class="xqm">
            <img src="img/xq1.jpg" alt="" />
            <img src="img/xq2.jpg" alt="" />
            <img src="img/xq2.jpg" alt="" />
            <img src="img/xq2.jpg" alt="" />
            <img src="img/xq2.jpg" alt="" />
            <img src="img/xq2.jpg" alt="" />
            <img src="img/xq2.jpg" alt="" />
            <img src="img/xq2.jpg" alt="" />
            <img src="img/xq2.jpg" alt="" />
            <img src="img/xq2.jpg" alt="" />
            <img src="img/xq2.jpg" alt="" />
            <img src="img/xq2.jpg" alt="" />
            <img src="img/xq2.jpg" alt="" />
          </van-collapse-item> </van-collapse
      ></van-tab>
      <van-tab title="参数">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="规格参数" :name="2">
            <div class="xh">
              <h1>处理器</h1>
              <ul>
                <li v-for="(item, index) in list4" :key="index" id="fw">
                  <p>{{ item.title }}</p>
                  <p>{{ item.val }}</p>
                </li>
              </ul>
            </div>
          </van-collapse-item>
        </van-collapse>
      </van-tab>
      <van-tab title="推荐">
        <van-collapse v-model="activeNames" id="tj">
          <van-collapse-item title="商品推荐" :name="3">
            <ul>
              <li v-for="(item, index) in list5" :key="index">
                <img :src="item.src" alt="" />
                <p class="x1">{{ item.title }}</p>
                <p class="x2">{{ item.ls }}</p>
                <p class="x3">{{ item.val }}</p>
                <div class="btn">立即购买</div>
              </li>
            </ul>
          </van-collapse-item>
        </van-collapse>
      </van-tab>
      <van-tab title="评价">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="商品评价" :name="4" id="pj">
            <div class="p-top">
              <span>全部评价 (798)</span
              ><van-rate v-model="value" color="yellow" size="15px" readonly />
              <br />
              <p>
                <span><input type="radio" /> 全部评价 </span>
                <span><input type="radio" /> 带图评价</span>
              </p>
            </div>
            <div class="pj">
              <ul>
                <li v-for="(item, index) in list6" :key="index">
                  <div class="pj1">
                    <img :src="item.src" alt="" />
                    <h3>{{ item.title }}</h3>
                    <van-rate
                      v-model="value"
                      color="yellow"
                      size="15px"
                      readonly
                    />
                  </div>
                  <p>{{ item.xh }}</p>
                  <p>{{ item.py }}</p>
                  <p>{{ item.time }}</p>
                  <div class="pj2">
                    <div class="pj-l">
                      <img :src="item.src1" alt="" />
                    </div>
                    <div class="pj-r">
                      {{ item.txt }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </van-collapse-item>
        </van-collapse>
      </van-tab>
    </van-tabs>
    <div class="gwc" v-for="(item, index) in list7" :key="index">
      <div class="g1">
        <span>{{ item.val }}</span>
        <button>加入购物车</button>
        <van-button round type="info">立即购买</van-button>
      </div>
      <div class="g2">
        <span>{{ item.title }}</span>
        <van-stepper v-model="value" />
        <br />
        <span id="s1">{{ item.xh }}</span>
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
.g2 .van-stepper {
  float: right;
  margin-right: 10%;
}
#xz .van-collapse-item__title {
  text-align: center;
  height: 60px;
  line-height: 38px;
  font-size: 17px;
    background-color: #ddd;
   border: 1px solid #d5d5d5;
}
#xz .van-cell__right-icon {
  line-height: 38px;
}
#tj .van-collapse-item__content {
  background: #f7f7f7;
  overflow: hidden;
}
.xq .van-swipe-item img {
  width: 100%;
}
.xq .van-swipe__indicators {
  padding-top: 7px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 30px;
  border: 1px solid #ccc;
  height: 15px;
}
.xq .van-swipe__indicator {
  background: rgb(67, 67, 155);
  width: 10px;
  height: 10px;
}
</style>
<style scoped>
main {
  background: #f7f7f7;
  overflow: hidden;
  margin-bottom: 100px;
}
.yg img {
  width: 100%;
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

.g2 span {
  font-size: 18px;
  font-weight: 700;
  min-height: 30px;
  line-height: 30px;
}
#s1 {
  font-size: 14px;
  font-weight: 300;
}
.g2 {
  width: 100%;
  padding-left: 15px;
  padding-top: 5px;
}
.gwc {
  padding-top: 20px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0;
  background: white;
  overflow: hidden;
  z-index: 100;
}
button {
  width: 25%;
  height: 8vw;
  line-height: 8vw;
  border-radius: 15vw;
  font-size: 3.5vw;
  font-weight: 700;
  text-align: center;
  margin-right: 4%;
}
.g1 {
  padding-left: 15px;
  display: flex;
  flex-wrap: wrap;
}
.g1 > span {
  color: #2189ff;
  font-size: 5.5vw;
  width: 34%;
  display: block;
}
.pj2 {
  margin-top: 20px;
  padding-bottom: 10px;
  overflow: hidden;
  border-bottom: 1px solid #777;
  display: flex;
  flex-wrap: wrap;
}
.pj li {
  margin-top: 40px;
}
.pj p {
  color: #000;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
}
.pj1 {
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  color: #000;
}
.pj1 h3 {
  margin-right: 10px;
}
#pj {
  background: white;
  overflow: hidden;
}
.p-top p {
  margin-top: 16px;
  text-align: right;
  padding-right: 5%;
  width: 100%;
  color: black;
}
.pj-l {
  height: 100%;
}
.pj-r {
  height: 100%;
  width: 80%;
  float: right;
}
.pj img {
  height: 50px;
  width: 50px;
  margin-right: 5px;
}
.p-top span {
  margin-left: 15px;
  margin-right: 10px;
}
.x1 {
  font-size: 15px;
  font-weight: 700;
  overflow: hidden;
  /* height: 20px; */
}
.x2 {
  font-size: 13px;
  font-weight: 600;
  height: 20px;
  overflow: hidden;
}
.x3 {
  color: #2189ff;
  font-size: 14px;
  height: 20px;

  font-weight: 700;
  overflow: hidden;
}
.btn {
  margin-bottom: 20px;
  width: 50%;
  border-radius: 30px;
  height: 34px;
  line-height: 32px;
  border: 1px solid #ddd;
  margin: 10px auto;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
#tj ul {
  display: flex;
  flex-wrap: wrap;
}

#tj li {
  color: #000;

  width: 48%;
  margin: 1%;
  text-align: center;
  background: white;
  border-bottom-right-radius: 6vw;
  border-bottom-left-radius: 6vw;
  border-radius: 5vw;
}

#tj li img {
  width: 30%;
}

.xqm img {
  width: 100%;
}
.icons-txt {
  text-align: left;
  font-weight: 700;
  line-height: 1.4;
  width: 100%;
  padding-left: 20px;
}
.col img {
  width: 60%;
}
.t2 {
  font-size: 14px;
  color: #555;
  padding-top: 10px;
  display: inline-block;
  font-weight: 600;
  margin-left: 5px;
}
#fw {
  border: 1px solid #7f8285;
}
#c1 {
  background: #757575;
}
#c2 {
  background: skyblue;
}
#c3 {
  background: rgb(195, 60, 60);
}
.wl-txt {
  font-weight: 700;
  font-size: 15px;
  margin-top: 15px;
}
.wl-txt span {
  color: #228aff;
}
.col p {
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
}
.c2 {
  font-size: 13px;
  font-weight: 600;
}
.col {
  margin: 40px 0 10px;
}
#p1 {
  margin-bottom: 0px;
  margin-top: 40px;
  font-size: 24px;
}
.col ul {
  overflow: hidden;
  margin-top: 20px;
}
.col ul li {
  width: 24%;
  float: left;
  text-align: center;
}
.c1 {
  height: 31px;
  width: 31px;
  border-radius: 50%;
  text-align: center;
  margin: 0px auto;
  border: 1px solid black;
  background: purple;
}
.col li:nth-of-type(2) > .c1 {
  background: black;
}
.col li:nth-of-type(3) > .c1 {
  background: rgb(255, 255, 255);
}
.col li:nth-of-type(4) > .c1 {
  background: rgb(52, 77, 73);
}
.ys img {
  width: 100%;
}
.xh li {
  padding: 15px 5px;
  margin-top: 0;
  margin-bottom: 10px;
  width: 45%;
  text-align: center;
  border: 1px solid #2189ff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-left: 1%;
  margin-right: 1%;
}
.xh h1,
.ys h1 {
  font-size: 24px;
  margin-top: 8px;
  margin-bottom: 10px;
  font-weight: 700;
  margin-left: 1%;
}
.xh ul {
  display: flex;
  flex-wrap: wrap;
}
.v2 .scys {
  border: none;
  line-height: 30px;
  color: blue;
  font-size: 13px;
  margin-right: 5px;
  padding: 0px;
}
#dw {
  color: #000;
}
.v2 .scys img {
  vertical-align: middle;
  margin-right: 5px;
  width: 19px;
  height: 19px;
}
.v2 span {
  height: 26px;
  line-height: 26px;
  display: inline-block;
  border-radius: 3px;
  padding: 0 12px;
  font-size: 3vw;
  color: #ef3434;
  font-size: 12px;
  font-weight: 600;

  margin-right: 10px;
  margin-bottom: 2px;
  border: 1px solid #ef3434;
}
.v1 .lq {
  border: none;
  color: #000;
  font-size: 12px;
  font-weight: 600;
  width: 10%;
  float: right;
}
.v1 {
  overflow: hidden;
  padding: 9px 0;
  border-bottom: 1px solid #f0f0f0;
}
.v1 > span {
  width: 20%;
  font-size: 3.6vw;
  float: left;
  color: #757575;
}
.v2 {
  width: 70%;
  float: left;
  position: relative;
}
.val,
.xh,
.ys {
  background: #fff;
  margin: 0px 10px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
}
.val h1 {
  margin-top: 10px;
  font-size: 6vw;
  font-weight: 700;
  color: #2189ff;
  vertical-align: bottom;
}
.sp span {
  height: 28px;
  line-height: 30px;
  margin-right: 5px;
  color: #fff;
  background: #228aff;
  font-weight: 700;
  border-radius: 30px;
  font-size: 15px;
  padding: 0 15px;
  display: inline-block;
}
.sp img {
  position: absolute;
  top: 20px;
  right: 30px;
  width: 35px;
  height: 35px;
  z-index: 3;
}
.tt {
  max-width: 92%;
  margin: 0 auto;
  font-size: 7vw;
  font-weight: 700;
  margin-top: 20px;
  text-align: center;
}
.sp {
  position: relative;
  text-align: center;
  padding-top: 35px;
}
</style>
<script>
export default {
  data() {
    return {
      active: 2,
      activeNames: ["1"],
      value: 4,

      list: [
        {
          title: "Galaxy S22 Ultra",
          val: "￥9,699.00",
        },
        {
          title: "Galaxy S22",
          val: "￥9,699.00",
        },
        {
          title: "Galaxy S22+",
          val: "￥9,699.00",
        },
      ],
      list1: [
        {
          title: "12GB RAM",
          val: "256GB ROM",
        },
        {
          title: "12GB RAM",
          val: "512GB ROM",
        },
        {
          title: "12GB RAM",
          val: "1TB ROM",
        },
      ],
      list2: [
        {
          src: "img/ys.jpg",
        },
      ],
      list3: [
        {
          title: "12个月优惠换屏/后壳服务",
          val: "￥349",
        },
        {
          title: "24个月优惠换屏/后壳服务",
          val: "￥899",
        },
        {
          title: "不需要商家服务",
          val: " ·",
        },
      ],
      list4: [
        {
          title: "12个月优惠换屏/后壳服务",
          val: "￥349",
        },
        {
          title: "24个月优惠换屏/后壳服务",
          val: "￥899",
        },
      ],
      list5: [
        {
          src: "/img/erji1.jpg",
          title: "Galaxy Z Flip4 幽紫秘境 8GB+256GB",
          ls: "8GB RAM256GB ROM",
          val: "¥3,969.00",
        },
        {
          src: "/img/erji1.jpg",
          title: "Galaxy Z Flip4 幽紫秘境 8GB+256GB",
          ls: "8GB RAM256GB ROM",
          val: "¥3,969.00",
        },
        {
          src: "/img/erji1.jpg",
          title: "Galaxy Z Flip4 幽紫秘境 8GB+256GB",
          ls: "8GB RAM256GB ROM",
          val: "¥3,969.00",
        },
        {
          src: "/img/erji1.jpg",
          title: "Galaxy Z Flip4 幽紫秘境 8GB+256GB",
          ls: "8GB RAM256GB ROM",
          val: "¥3,969.00",
        },
      ],
      list6: [
        {
          src: "img/gr.png",
          title: "匿名用户",
          xh: "Galaxy S22+ 羽梦白 8GB+128GB",
          py: "很好",
          src1: "img/tu.png",
          txt: "非常感谢您的评价，使用6400万像素的分辨率进行拍摄，您就可以拉近画面，从中截取到宛如艺术真品般清晰度的照片。人工智能会分析面部特征和自然光照，角度和方向，从而确保您的拍摄对象处于焦点位置并始终光彩耀人。后续有任何疑问可以联系客服咨询哦~",
          time: "2022-08-11 08:55:28",
        },
        {
          src: "img/gr.png",
          title: "匿名用户",
          xh: "Galaxy S22+ 羽梦白 8GB+128GB",
          py: "很好",
          src1: "img/tu.png",
          txt: "非常感谢您的评价，使用6400万像素的分辨率进行拍摄，您就可以拉近画面，从中截取到宛如艺术真品般清晰度的照片。人工智能会分析面部特征和自然光照，角度和方向，从而确保您的拍摄对象处于焦点位置并始终光彩耀人。后续有任何疑问可以联系客服咨询哦~",
          time: "2022-08-11 08:55:28",
        },
        {
          src: "img/gr.png",
          title: "匿名用户",
          xh: "Galaxy S22+ 羽梦白 8GB+128GB",
          py: "很好",
          src1: "img/tu.png",
          txt: "非常感谢您的评价，使用6400万像素的分辨率进行拍摄，您就可以拉近画面，从中截取到宛如艺术真品般清晰度的照片。人工智能会分析面部特征和自然光照，角度和方向，从而确保您的拍摄对象处于焦点位置并始终光彩耀人。后续有任何疑问可以联系客服咨询哦~",
          time: "2022-08-11 08:55:28",
        },
      ],
      list7: [
        {
          val: "￥2999.00",
          title: "Galaxy S22+ 挂绳式硅胶保护壳",
          xh: "深蓝色",
        },
      ],
    };
  },
};
</script>


