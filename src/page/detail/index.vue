<template>
  <!-- 详情页 -->
  <div class="detail">
    <banner></banner>
    <video-info></video-info>
    <div class="detail-bottom">
      <roll-pic :roll="roll_pic"></roll-pic>
      <intro></intro>
      <album-list :album_list="album_list"></album-list>
      <top-menu :bomb="recommend"></top-menu>
      <child :children_data=" teaser"></child>
      <comment :comment_data="comment_list"></comment>
      <child :children_data=" welfare"></child>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/detial-module/banner";
import Intro from "../../components/detial-module/intro";
import VideoInfo from "../../components/detial-module/video-info";
import RollPic from "../../components/detial-module/roll-pic";
import AlbumList from "../../components/detial-module/album-list";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import TopMenu from "../../components/home-module/top-menu";
import Child from "../../components/home-module/child";
import Comment from "../../components/detial-module/comment";
import Privilege from "../../components/detial-module/privilege";
// import AJAX from "../../config/ajax";

export default {
  name: "detail",
  components: {
    Banner,
    Intro,
    VideoInfo,
    RollPic,
    AlbumList,
    swiper,
    swiperSlide,
    TopMenu,
    Child,
    Comment,
    Privilege
  },

  data() {
    return {
      roll_pic: [
        {
          img: "https://i.gtimg.cn/qqlive/images/20190710/i1562744530_1.jpg",
          title: "看高清完整版",
          type: 0
        },
        {
          img: "https://puui.qpic.cn/vpic/0/y0843xla02v_160_90_3.jpg/0",
          title: "盘点《绿皮书》那些发人深省的经典台词，每一句都可当做人生哲理"
        },
        {
          img: "https://puui.qpic.cn/vpic/0/f0861jc7x5a_160_90_3.jpg/0",
          title: "《绿皮书》：世界上最好的炸鸡广告，奥斯卡大奖拿到手软！"
        },
        {
          img: "https://puui.qpic.cn/vpic/0/d3041i212vc_160_90_3.jpg/0",
          title: "有望最快连获奥斯卡的神人！马赫沙拉·阿里，为绿皮书狂练肖邦"
        },
        {
          img: "https://puui.qpic.cn/vpic/0/f0861jc7x5a_160_90_3.jpg/0",
          title: "绿皮书：谢利的一句台词走红网络，观众纷纷落泪，不愧是高票房！"
        }
      ],
      album_list: {
        album_title: "专辑列表",
        list: [
          {
            title: "绿皮书(原声版)",
            vip: 10
          },
          {
            title: "绿皮书(普通话版)",
            vip: 10
          },
          {
            title:
              "《绿皮书》初次见面看呆了！富丽堂皇的屋子里，穿着长袍的黑人坐在王座上",
            vip: 0
          },
          {
            title: "《绿皮书》好听哭了！雪莉博士酒吧演奏，托尼变迷弟狂打Call！",
            vip: 10
          },
          {
            title: "《绿皮书》糙汉子在钢琴家指导下，第一次给妻子写情书，感人！",
            vip: 10
          },
          {
            title: "《绿皮书》精致的钢琴家在糙汉子怂恿下第一次吃炸鸡，真香！",
            vip: 0
          }
        ]
      },
      recommend: {
        title: "为你推荐",
        list: [
          {
            img:
              "https://puui.qpic.cn/vcover_hz_pic/0/1c15yz83pu07jzu1530520276/0?max_age=7776000",
            name: "阿帕鲁萨镇",
            summary: "重现蛮荒西部",
            app: "APP",
            vip: 1
          },
          {
            img:
              "https://puui.qpic.cn/vcover_hz_pic/0/51oxk7mxtk80lug1524886022/0?max_age=7776000",
            name: "妙手情真",
            summary: " 小丑医生传奇",
            app: "APP",
            vip: 1
          },
          {
            img:
              "https://puui.qpic.cn/vcover_hz_pic/0/52enc9q0mbqr01mt1472513418.jpg/0?max_age=7776000",
            name: "枪声俱乐部",
            summary: "快门记录秃鹫与饥饿的孩子 ",
            app: "APP",

            vip: 1
          },
          {
            img:
              "https://puui.qpic.cn/vcover_hz_pic/0/v3wef8icpiwxnxk1519887757/0?max_age=7776000",
            name: "失孤",
            summary: "刘德华井柏然“父子”情深",
            app: "APP",
            vip: 1
          }
        ]
      },
      teaser: {
        title: "片花资讯",
        list: [
          {
            img:
              "//puui.qpic.cn/vpic/0/d0030b818bi_160_90_3.jpg/0?max_age=7776000",
            name:
              "《绿皮书》初次见面看呆了！富丽堂皇的屋子里，穿着长袍的黑人坐在王座上",
            summary: "重现蛮荒西部",
            time: "03:21",
            vip: 10
          },
          {
            img:
              "https://puui.qpic.cn/vpic/0/u00308kas06_160_90_3.jpg/0?max_age=7776000",
            name: "《绿皮书》好听哭了！雪莉博士酒吧演奏，托尼变迷弟狂打Call！",
            summary: "重现蛮荒西部",
            time: "03:08"
          },
          {
            img:
              "https://puui.qpic.cn/vpic/0/t083306tjpj_160_90_3.jpg/0?max_age=7776000",
            name: "《绿皮书》五提奥斯卡 男主维果演哭原型人物家人",
            summary: "重现蛮荒西部",
            time: "03:06"
          },
          {
            img:
              "https://puui.qpic.cn/vpic/0/v08305pahsd_160_90_3.jpg/0?max_age=7776000",
            name: "《绿皮书》获奥斯卡5项提名 曝预告定档3月1日",
            summary: "重现蛮荒西部",
            time: "02:01"
          },
          {
            img:
              "https://puui.qpic.cn/vpic/0/t0831cxk4xf_160_90_3.jpg/0?max_age=7776000",
            name: "《绿皮书》是本什么书？1分钟了解这部奥斯卡提名最佳影片",
            summary: "重现蛮荒西部",
            time: "01:03"
          }
        ]
      },
      welfare: {
        title: "会员福利",
        list: [
          {
            img: "https://puui.qpic.cn/tv/0/816644203_460220/0?max_age=7776000",
            name: "23元享VIP+音乐双会员 品质音乐&热播好剧双享",
            summary: "",
            time: "03:21",
            vip: 10
          },
          {
            img: "https://puui.qpic.cn/tv/0/797416005_460220/0?max_age=7776000",
            name: "《妖神记》燃情回归   VIP赢硬核周边！ ",
            summary: "重现蛮荒西部",
            time: "03:08"
          },
          {
            img: "https://puui.qpic.cn/tv/0/250160522_460220/0?max_age=7776000",
            name: "30元享VIP+svip双会员      热播好剧等你解锁",
            summary: "重现蛮荒西部",
            time: "03:06"
          }
        ]
      },
      comment_list: {
        title: "评论",
        list: [
          {
            img:
              "https://thirdqq.qlogo.cn/g?b=sdk&k=zVVesSVgahJw0Rms1mOOjw&s=40&t=1567790239?max_age=7776000",
            name: "小怪兽",
            vip: 10,
            summary:
              "看完真的感觉心情很愉悦，中间有几次感动的要哭，托尼是一个很棒的朋友"
          },
          {
            img:
              "https://thirdwx.qlogo.cn/mmopen/vi_32/dVwbLjns1yf5iaMluXAMAjXJ2RxDAYPDic4FrDgKn0gQDaQSB1Ul3wQjoxTmP4nvhq1W9ks33licUxlA71C8MSrKA/132?max_age=7776000",
            name: "韩",
            vip: 10,
            summary:
              "电影与真实事件相似度90%，在现实生活中，谢利确实是当时司法部长罗伯特·肯尼迪的朋友，两人在一次单独旅行中拓你打了侮辱他的警察，两人的旅行并不是电影里的2个月，而是一年。托尼在旅行前也的确是种族歧视者，夜总会工作前在美军服役，驻扎在战后德国，也的确去一口气吃过26哥热狗。托尼被警察叫到州基督教青年会看到了那一幕并不完全真实，托尼从未对外说过看到了什么，谢利一生没宣布出柜，同意托尼儿子说的将两人故事拍成电影前提也是要等自己死后，托尼儿子猜测谢利可能怕看到世人对自己出柜的反应接受不了。谢利并不是家族中唯一的成功人士；他的兄弟凯文和爱德华都是医生，爱德华与美国民权运动领袖马丁·路德·金关系非常友好。谢利语言能力很强，会说八种语言；还是一位有才华的画家。"
          },
            {
            img:
              "https://thirdqq.qlogo.cn/g?b=sdk&k=htZVHb6ycbekoAPWkHZicHA&s=40&t=1487039292?max_age=7776000",
            name: " ❦张小强 ❦",
            vip: 10,
            summary:
              "一个非常不错的片子，太棒了！还好我没错过！"
          },

        ]
      }
    };
  },
  methods: {}
};
</script>

<style less="lang" scoped>
.detail-bottom {
  padding: 0 15px;
}
</style>
