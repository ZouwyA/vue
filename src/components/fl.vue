<template>
  <main>
    <van-tree-select
      height="100vh"
      :items="items"
      :main-active-index.sync="active"
      id="fl"
    >
      <template #content>
        <div v-if="active === 0" class="zn">
          <div v-for="(item, index) in list" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 0" class="zn">
          <div v-for="(item, index) in list1" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list1" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 0" class="zn">
          <div v-for="(item, index) in list2" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list2" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 0" class="zn">
          <div v-for="(item, index) in list3" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list3" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 0" class="zn">
          <div v-for="(item, index) in list4" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list4" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 0" class="zn">
          <div v-for="(item, index) in list5" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list5" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- ?????? -->
        <div v-if="active === 1" class="zn">
          <div v-for="(item, index) in list" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 1" class="zn">
          <div v-for="(item, index) in list1" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list1" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 1" class="zn">
          <div v-for="(item, index) in list2" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list2" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 1" class="zn">
          <div v-for="(item, index) in list3" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list3" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 1" class="zn">
          <div v-for="(item, index) in list4" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list4" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 1" class="zn">
          <div v-for="(item, index) in list5" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list5" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- ??????????????? -->
        <div v-if="active === 2" class="zn">
          <div v-for="(item, index) in list" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 2" class="zn">
          <div v-for="(item, index) in list1" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list1" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- ?????????????????? -->
        <div v-if="active === 3" class="zn">
          <div v-for="(item, index) in list" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 3" class="zn">
          <div v-for="(item, index) in list1" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list1" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 3" class="zn">
          <div v-for="(item, index) in list2" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list2" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 3" class="zn">
          <div v-for="(item, index) in list3" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list3" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 3" class="zn">
          <div v-for="(item, index) in list4" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list4" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 3" class="zn">
          <div v-for="(item, index) in list5" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list5" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- ?????? -->
        <div v-if="active === 4" class="zn">
          <div v-for="(item, index) in list" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 4" class="zn">
          <div v-for="(item, index) in list1" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list1" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 4" class="zn">
          <div v-for="(item, index) in list2" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list2" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 4" class="zn">
          <div v-for="(item, index) in list3" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list3" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 4" class="zn">
          <div v-for="(item, index) in list4" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list4" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 4" class="zn">
          <div v-for="(item, index) in list5" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list5" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- ???????????? -->
        <div v-if="active === 5" class="zn">
          <div v-for="(item, index) in list" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 5" class="zn">
          <div v-for="(item, index) in list1" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list1" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 5" class="zn">
          <div v-for="(item, index) in list2" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list2" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="active === 5" class="zn">
          <div v-for="(item, index) in list2" :key="index" class="zn1">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="zn2">
            <ul>
              <li v-for="(item, index) in list2" :key="index">
                <img :src="item.src" alt="" />
                <p>{{ item.model }}</p>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </van-tree-select>

    <div class="m-4">
      <div class="m4-1">
        <img src="img/kf.png" alt="" />
        <span>?????????????????? / ????????????????????????</span>
      </div>
      <div class="m4-1">
        <img src="img/77.png" alt="" />
        <span>7??????????????????15?????????(??????????????????)</span>
      </div>
      <div class="m4-1">
        <img src="img/zp.png" alt="" />
        <span>???????????????????????????</span>
      </div>

      <van-collapse v-model="activeNames" class="zd">
        <van-collapse-item title="??????" name="1"
          ><h3>????????????</h3>
          <h3>??????/??????</h3>
          <h3>???????????????</h3>
          <h3>??????????????????</h3>
          <h3>??????/??????/?????????</h3>
          <h3>????????????</h3></van-collapse-item
        >
        <van-collapse-item title="????????????" name="2"
          ><h3>????????????</h3>
          <h3>????????????</h3>
          <h3>?????????</h3>
          <h3>????????????</h3>
          <h3>????????????</h3></van-collapse-item
        >
        <van-collapse-item title="??????????????????" name="3"
          ><h3>????????????</h3>
          <h3>????????????????????????</h3>
          <h3>???????????????</h3>
          <h3>?????????????????????</h3>
          <h3>????????????????????????</h3>
          <h3>??????</h3>
          <h3>????????????</h3></van-collapse-item
        >
        <van-collapse-item title="????????????" name="4"
          ><h3>????????????</h3>
          <h3>????????????</h3>
          <h3>??????????????????</h3>
          <h3>????????????</h3>
          <h3>???????????????</h3></van-collapse-item
        >
      </van-collapse>
      <div class="m4-1">
        <img src="img/fw.png" alt="" />
        <span>????????????<span>400-011-8899 (09???00~22???00)</span></span>
      </div>
      <div class="m4-2">
        <span>????????????</span>
        <img src="img/wx.png" alt="" />
      </div>
    </div>
    <footer>
      <p>
        ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
      </p>
      <p>
        <img src="img/jc.png" alt="" /> ??????????????? 11010502037127??? &nbsp;&nbsp;
        ???ICP???18036817???-2/3 <br />
        <img src="img/jh.png" alt="" /> ????????????
      </p>

      <p class="sss">?? 1995-2022 ???????????????????????????????????? ????????????</p>
      <p><span>????????????</span>????????????</p>
    </footer>
  </main>
</template>
<style>
#fl .van-tree-select__nav {
  width: 20%;
  margin-right: 1.5vw;
  background-color: #fff;
}
#fl .van-tree-select__nav-item {
  width: 100%;
  background-color: #fff;
  text-align: center;
  padding: 5.2vw 0 5.3vw 0;
  margin-top: 1px;
  position: relative;
  font-size: 3.8vw;
  font-weight: 500;
  color: #000;
}
#fl .van-tree-select__content {
  background: #f7f7f7;
}
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
</style>
<style scoped>
main {
  height: 100%;
  background: #f7f7f7;
  padding: 2vw 1.5vw 4vw 1.5vw;
}
.zn2 li {
  width: 48%;
  text-align: center;
  padding: 8px 0px;
  margin-top: 2vw;
  margin-right: 1vw;
}
.zn2 p {
  font-size: 2.9vw;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.85);
  margin-top: 2.7vw;
  width: 31vw;
  min-height: 2.4vw;
}
h3 {
  text-align: center;
  font-size: 5.3vw;
  font-weight: 700;
  color: #000;
}

.zn2 li > img {
  width: 60%;
}

.zn {
  width: 100%;
  border-radius: 2.7vw;
  background-color: #fff;
  padding-top: 6vw;
  margin-bottom: 5vw;
  overflow: hidden;
  padding-bottom: 3vw;
}
.zn2 ul {
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  margin-top: 27px;
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
  border-bottom: 1px solid rgb(200, 198, 198);
}
</style>
<script>
export default {
  data() {
    return {
      active: 0,
      items: [
        { text: "????????????" },
        { text: "????????????" },
        { text: "???????????????" },
        { text: "??????????????????" },
        { text: "?????????????????????" },
        { text: "????????????" },
      ],
      activeNames: ["1"],
      list: [
        {
          src: "img/zn11.jpg",
          title: "Galaxy Z",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/zn22.jpg",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/zn33.jpg",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/zn44.jpg",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/zn55.jpg",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/zn66.jpg",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/zn11.jpg",
          model: "Galaxy Z Fold3 5G",
        },
      ],
      list1: [
        {
          src: "img/zn22.jpg",
          title: "Galaxy S",
          model: "Galaxy S22 Ultra",
        },
        {
          src: "img/xpsj.jpg",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/wd1.jpg",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/zn44.jpg",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/zn33.jpg",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/zn11.jpg",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/zn22.jpg",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/xpsj.jpg",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/zn11.jpg",
          model: "Galaxy Z Fold3 5G",
        },

      ],
      list2: [
        {
          src: "img/zn33.jpg",
          title: "Galaxy Note",
          model: "Galaxy Note20 Ultra 5G",
        },
      ],
      list3: [
        {
          src: "img/zn44.jpg",
          title: "Galaxy A",
          model: "Galaxy Z Fold3 5G",
        },
        {
          src: "img/zn11.jpg",
          model: "Galaxy Z Fold3 5G",
        },
      ],
      list4: [
        {
          src: "img/zn55.jpg",
          title: "?????? W",
          model: "??????W22 5G",
        },
        {
          src: "img/xpsj1.jpg",
          model: "??????W21 5G",
        },
      ],
      list5: [
        {
          src: "img/zn66.jpg",
          title: "Galaxy F",
          model: "Galaxy F52 5G",
        },
      ],
    };
  },
};
</script>