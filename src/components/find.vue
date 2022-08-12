<template>
  <main>
    <div class="head">
      <van-tabs v-model="active">
        <van-tab title="推荐">
          <div class="main">
            <ul class="u1">
              <li v-for="(item, index) in list" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.title }}</p>
                <div class="d">
                  <img src="img/sx.png" alt="" />
                  三星网上商城
                  <span id="s1"
                    ><img src="img/y.png" alt="" /><span>{{
                      item.num
                    }}</span></span
                  >
                </div>
              </li>
            </ul>
            <ul class="u2">
              <li v-for="(item, index) in list1" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.title }}</p>
                <div class="d">
                  <img src="img/sx.png" alt="" />
                  三星网上商城
                  <span id="s1"
                    ><img src="img/y.png" alt="" /><span>{{
                      item.num
                    }}</span></span
                  >
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="视频">
          <div class="main">
            <ul class="u1">
              <li v-for="(item, index) in list" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.title }}</p>
                <div class="d">
                  <img src="img/sx.png" alt="" />
                  三星网上商城
                  <span id="s1"
                    ><img src="img/y.png" alt="" /><span>{{
                      item.num
                    }}</span></span
                  >
                </div>
              </li>
            </ul>
            <ul class="u2">
              <li v-for="(item, index) in list1" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.title }}</p>
                <div class="d">
                  <img src="img/sx.png" alt="" />
                  三星网上商城
                  <span id="s1"
                    ><img src="img/y.png" alt="" /><span>{{
                      item.num
                    }}</span></span
                  >
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="买家秀">
          <div class="main">
            <ul class="u1">
              <li v-for="(item, index) in list" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.title }}</p>
                <div class="d">
                  <img src="img/sx.png" alt="" />
                  三星网上商城
                  <span id="s1"
                    ><img src="img/y.png" alt="" /><span>{{
                      item.num
                    }}</span></span
                  >
                </div>
              </li>
            </ul>
            <ul class="u2">
              <li v-for="(item, index) in list1" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.title }}</p>
                <div class="d">
                  <img src="img/sx.png" alt="" />
                  三星网上商城
                  <span id="s1"
                    ><img src="img/y.png" alt="" /><span>{{
                      item.num
                    }}</span></span
                  >
                </div>
              </li>
            </ul>
          </div>  </van-tab
        >
      </van-tabs>
    </div>
  </main>
</template>
<style>
.head .van-tab--active {
  color: #228aff;
  font-size: 5.3vw;
  height: 42px;
  line-height: 30px;
}
.head .van-tab__text {
  font-weight: 500;
  font-size: 5.3vw;
  line-height: 50px;
  height: 63px;
}
.head .van-tabs__wrap {
  padding-top: 20px;
}
</style>
<style scoped>
main {
  background: #f2f2f2;
  overflow: hidden;
}
.head {
  background: white;
}
.main {
  background: #f2f2f2;
}
.main ul {
  width: 46%;
  margin-bottom: 50px;
}
.main ul p {
  font-size: 3.5vw;
  color: #313131;
  line-height: 5vw;
  font-weight: 700;
  margin: 0 15px;
}
.main > ul li {
  width: 100%;
  background: #fff;
  border: 2px solid #f0f0f0;
  border-radius: 1.5vw;

  overflow: hidden;
  margin-top: 2.7vw;
}
.main ul img {
  width: 100%;
}

.u1 {
  float: left;
  margin-left: 2.8%;
}
.u2 {
  float: right;
  margin-right: 2.8%;
}

.main .d > img {
  width: 22px;
  height: 22px;
  vertical-align: middle;
}
#s1 {
  line-height: 20px;
  position: absolute;
  right: 0;
}
.d {
  height: 20px;
  margin: 10px 12px;
  font-size: 12px;
  position: relative;
  padding-bottom: 10px;
}
#s1 img {
  height: 11px;
  width: 19px;
}
.one{
  position: fixed;
  bottom: 0px;
}
</style>
<script>
// import $ from 'jquery'

export default {
  data() {
    return {
      active: 2,

      list: [
        {
          src: "img/lb.jpg",
          title: "全新三星Galaxy系列 | 解锁无限可能 ",
          num: "2222",
        },
        {
          src: "img/list11.jpg",
          title: "开合之间依旧不凡 三星Galaxy Z Fold4 外观赏析",
          num: "333",
        },
        {
          src: "img/list12.jpg",
          title: "时尚小巧又有颜 三星Galaxy Z Flip4外观赏析",
        },
        {
          src: "img/lb.jpg",
          title: "智能配件",
          num: "3512",
        },
        {
          src: "img/list13.jpg",
          title: "三星缤色铂格之家 个性由你打造",
          num: "25424",
        },
        {
          src: "img/list22.jpg",
          title: "Galaxy Z Fold4全新发布 | 起始于此 岂止于此",
          num: "1325",
        },
        {
          src: "img/list23.jpg",
          title: "陈坤×Galaxy S22 系列 | 行走自然 追光而行",
          num: "45320",
        },
        {
          src: "img/list22.jpg",
          title: "百变拍摄时尚单品 三星Galaxy Z Flip4评测",
          num: "5625",
        },
                {
          src: "img/list1.jpg",
          title: "Galaxy Z Flip4 震撼来临",
          num: "2222",
        },
        {
          src: "img/list22.jpg",
          title: "Galaxy Z Fold4全新发布 | 起始于此 岂止于此",
          num: "1325",
        },
        {
          src: "img/list23.jpg",
          title: "陈坤×Galaxy S22 系列 | 行走自然 追光而行",
          num: "45320",
        },
        {
          src: "img/list22.jpg",
          title: "百变拍摄时尚单品 三星Galaxy Z Flip4评测",
          num: "5625",
        },
        {
          src: "img/list11.jpg",
          title: "开合之间依旧不凡 三星Galaxy Z Fold4 外观赏析",
          num: "333",
        },
      ],
      list1: [
        {
          src: "img/list1.jpg",
          title: "Galaxy Z Flip4 震撼来临",
          num: "2222",
        },
        {
          src: "img/list22.jpg",
          title: "Galaxy Z Fold4全新发布 | 起始于此 岂止于此",
          num: "1325",
        },
        {
          src: "img/list23.jpg",
          title: "陈坤×Galaxy S22 系列 | 行走自然 追光而行",
          num: "45320",
        },
        {
          src: "img/list22.jpg",
          title: "百变拍摄时尚单品 三星Galaxy Z Flip4评测",
          num: "5625",
        },
        {
          src: "img/list11.jpg",
          title: "开合之间依旧不凡 三星Galaxy Z Fold4 外观赏析",
          num: "333",
        },
        {
          src: "img/list12.jpg",
          title: "时尚小巧又有颜 三星Galaxy Z Flip4外观赏析",
          num: "4656",
        },
        {
          src: "img/lb.jpg",
          title: "全新三星Galaxy系列 | 解锁无限可能 ",
          num: "2222",
        },
        {
          src: "img/list11.jpg",
          title: "开合之间依旧不凡 三星Galaxy Z Fold4 外观赏析",
          num: "333",
        },
        {
          src: "img/list12.jpg",
          title: "时尚小巧又有颜 三星Galaxy Z Flip4外观赏析",
        },
        {
          src: "img/lb.jpg",
          title: "智能配件",
          num: "3512",
        },
        {
          src: "img/list13.jpg",
          title: "三星缤色铂格之家 个性由你打造",
          num: "25424",
        },
        {
          src: "img/list22.jpg",
          title: "Galaxy Z Fold4全新发布 | 起始于此 岂止于此",
          num: "1325",
        },
        {
          src: "img/list13.jpg",
          title: "三星缤色铂格之家 个性由你打造",
          num: "6451",
        },
      ],
    };
  },
  //   mounted(){
  //   $(window).scroll(function(){
  //               if($(window).scrollTop()>200){
  //                   $('.van-tabs').addClass('one')
  //               }else{
  //                   $('.van-tabs').removeClass('one')
  //               }
  //           })
  // }
};
</script>