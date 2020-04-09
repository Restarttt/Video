<template>
  <div class="overall">
    <big-logo></big-logo>
    <top-nav :arr="arr"></top-nav>
    <roll :swiper_data="swiper_data"></roll>
    <top-menu :data="n"></top-menu>
    <top-menu :data="high"></top-menu>
    <child :children_data="children"></child>
    <middle-menu :sync_data="sync_data"></middle-menu>
    <top-menu :data="eight"></top-menu>
    <middle-menu :sync_data="hot"></middle-menu>
  </div>
</template>
<script>
import BigLogo from "../../components/home-module/big-logo";
import TopNav from "../../components/home-module/top-nav";
import TopMenu from "../../components/home-module/top-menu";
import Child from "../../components/home-module/child";
import MiddleMenu from "../../components/home-module/middle-menu";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Roll from "../../components/home-module/roll";

export default {
  components: {
    BigLogo,
    TopNav,
    TopMenu,
    Child,
    MiddleMenu,
    swiper,
    swiperSlide,
    Roll,

  },

  data() {
    return {
      swiper_data: {
        list: [
          {
            img: "http://puui.qpic.cn/tv/0/778742216_1080607/0",
            title: "【龙岭迷窟·热播】真香！胡八一发现地下秘宝",
            time: "更新至06集",
            member: "会员",
            vip: true
          },
          {
            img: "http://puui.qpic.cn/tv/0/778224481_1080607/0",
            title: "【歌手】赛制升级→华晨宇唱哭，周深绝美中国风",
            time: "更新至06集",
            member: "自制",
            vip: false
          },
          {
            img: "http://puui.qpic.cn/tv/0/782800003_1080607/0",
            title: "【王牌】沈腾再唱《小白杨》回忆军艺生涯",
            time: "2020-04-03",
            member: "会员",
            vip: false
          }
        ]
      },
      arr: [
        {
           name: "精选",
           type: -1 
        },
        { 
          name: "电视剧", 
          type: 0  
        },
        { 
          name: "VIP", 
          type: 1 
          },
        {
          name: "电影", 
          type: 2 
        },
        { 
          name: "综艺",
          type: 3 
        },
        {
           name: "动漫",
            type: 4
        },
        { 
          name: "少儿", 
          type: 5 
        },
        { 
          name: "娱乐", 
          type: 6 
         },
        { 
          name: "潮音", 
          type: 7 
         },
        { 
          name: "游戏", 
          type: 8 
        },
        { 
          name: "纪录片", 
          type: 9 
        }
      ],
      sync_data: {
        sync: "同步剧场",
        sync_message: [
          {
            img: "http://puui.qpic.cn/tv/0/791838701_1080607/0",
            name: "清平乐[22点独播]",
            title: "王凯江疏影还原大宋前朝后殿",
            time: "03:48",
            member: "会员",
            vip: false
          },
          {
            img: "http://puui.qpic.cn/tv/0/784202092_498280/0",
            name: "龙岭迷窟[会员爽看6集]",
            title: " 香！胡八一发现地下秘宝",
            time: "更新至06集",
            member: "会员",
            vip: true
          },
          {
            img: "http://puui.qpic.cn/tv/0/784186820_498280/0",
            name: "不完美的她[点播结局]",
            title: "赵雅芝哭诉陈年旧案",
            time: "全22集",
            member: "超前点播",
            vip: true
          },
          {
            img: "http://puui.qpic.cn/tv/0/778457849_498280/0",
            name: " 无心法师3[会员抢先看]",
            title: " 蓝教授和晓鸥甜蜜在一起",
            time: "更新至27集",
            member: "VIP",
            vip: true
          },
          {
            img: "http://puui.qpic.cn/tv/0/778746589_498280/0",
            name: "如果岁月可回头·更新",
            title: "韩东君陈瑶续写前传情缘",
            time: "更新至20集",
            member: "超前点播",
            vip: false
          },
          {
            img: "http://puui.qpic.cn/tv/0/777319668_498280/0",
            name: "清平乐[即将独播]",
            title: " 好听！主题曲《寻光》上线",
            time: "04:10",
            member: "VIP",
            vip: false
          },
          {
            img: "http://puui.qpic.cn/tv/0/447495812_498280/0",
            name: "  第二次也很美",
            title: " 许朗带女友参加前任婚礼",
            time: "全57集",
            member: "VIP",
            vip: true
          }
        ]
      },
      hot: {
        sync: "热门综艺",
        sync_message: [
          {
            img: "http://puui.qpic.cn/tv/0/792365520_1080607/0",
            name: "欢乐喜剧人·孟鹤堂悲催恋爱史",
            title: "孟鹤堂和奇葩富二代谈网恋，比郭德纲还惨",
            time: "2020-04-02",
            member: "会员",
            vip: false
          },
          {
            img: "http://puui.qpic.cn/tv/0/792384794_498280/0",
            name: "拜托了冰箱·特别版",
            title: " 陈瑶为无心法师一天吃7顿",
            time: "更新至06集",
            member: "会员",
            vip: false
          },
          {
            img: "http://puui.qpic.cn/tv/0/793924797_498280/0",
            name: "《跑男8》 新阵容曝光",
            title: "首位飞行嘉宾是他？",
            time: "2020-04-07",
            member: "自制",
            vip: true
          },
          {
            img: "http://puui.qpic.cn/tv/0/790357414_498280/0",
            name: " 极限挑战6·最新路透",
            title: " 张艺兴吃糖果 热巴卷发抢镜",
            time: "2020-04-04",
            member: "VIP",
            vip: true
          },
          {
            img: "http://puui.qpic.cn/tv/0/786215218_498280/0",
            name: "歌手·绝美中国风",
            title: "周深唱《西游记后传》听醉",
            time: "2020-04-03",
            member: "超前点播",
            vip: false
          }
        ]
      },
      n: {
        title: "重磅☑《我是余欢水》4.6首播",
        type: 1,
        list: [
          {
            img: "http://puui.qpic.cn/tv/0/766593796_498280/0",
            name: "如果岁月可回头·更新",
            title: "积蓄见底？老白靠要债度日",
            time: "更新至21集",
            member: "会员",
            vip: false
          },
          {
            img: "http://puui.qpic.cn/tv/0/769411457_498280/0",
            name: "王牌对王牌·抢先看",
            title: "关晓彤再唱你XX沈腾伴舞",
            time: "2020-03-30",
            member: "会员",
            vip: true
          },
          {
            img: "http://puui.qpic.cn/tv/0/766921546_498280/0",
            name: "龙岭迷窟·20点独播",
            title: "高能！潘粤明陕囧探险",
            time: "2020-04-01",
            member: "会员",
            vip: true
          },
          {
            img: "http://puui.qpic.cn/tv/0/742999698_498280/0",
            name: "陈情令",
            title: "肖战王一博共闯狭义江湖",
            time: "全50集",
            member: "会员",
            vip: false
          }
        ]
      },
      high: {
        title: "高分推荐",
        list: [
          {
            img:
              "http://puui.qpic.cn/vcover_hz_pic/0/e3pdjwjjbbcmsow1559288569/0",
            name: " 唐伯虎点秋香",
            title: "经典才子佳人爱情故事",
            time: "9.1",
            member: "会员",
            vip: false
          },
          {
            img:
              "http://puui.qpic.cn/vcover_hz_pic/0/e5ccu4n46f7gb751559729506/0",
            name: "天若有情",
            title: " 回忆杀！刘德华极速赛车",
            time: "8.8",
            member: "会员",
            vip: false
          },
          {
            img:
              "http://puui.qpic.cn/vcover_hz_pic/0/tg12lsdj2lzgptvt1444754487.jpg/0",
            name: "X战警：逆转未来",
            title: "金刚狼穿越修复基友情",
            time: "8.9",
            member: "VIP",
            vip: true
          },
          {
            img:
              "http://puui.qpic.cn/vcover_hz_pic/0/wtr1lrmk9w72j6x1509949814/0",
            name: " 巴霍巴利王：开端",
            title: "印度版冰与火之歌",
            time: "8.5",
            member: "会员",
            vip: false
          }
        ]
      },
      eight: {
        title: "动漫·二次元",
        list: [
          {
            img: "http://puui.qpic.cn/tv/0/784325866_498280/0",
            name: " 奥特英雄传 赛罗与捷德",
            title: "细数赛罗客串的片场们",
            time: "更新至13集",
            member: "VIP",
            vip: true
          },
          {
            img: "http://puui.qpic.cn/tv/0/500254463_498280/0",
            name: "名侦探柯南",
            title: " 毛利小五郎的盛大演讲会",
            time: "更新至1031集",
            member: "VIP",
            vip: true
          },
          {
            img: "http://puui.qpic.cn/tv/0/788163934_498280/0",
            name: "择天记",
            title: "大破星域！长生一剑制敌",
            time: "更新至54集",
            member: "VIP",
            vip: true
          },
          {
            img: "http://puui.qpic.cn/tv/0/772432288_498280/0",
            name: " 从零开始的异世界生活",
            title: "这次，我终于救到你了",
            time: "全13集",
            member: "会员",
            vip: true
          }
        ]
      },
      children: {
        child: "少儿精选剧场",
        theatre: [
          {
            img: "http://puui.qpic.cn/tv/0/727258780_498280/0",
            name: "精灵梦叶罗丽",
            title: "魔法世界的冒险之旅"
          },
          {
            img: "http://puui.qpic.cn/tv/0/727265177_498280/0",
            name: "神奇的朋友_咖宝车神",
            title: "咖宝车神炫酷变形！"
          },
          {
            img: "http://puui.qpic.cn/tv/0/727365128_498280/0",
            name: "超级宝贝JOJO",
            title: "解决家长带娃的各种烦恼"
          },
          {
            img: "http://puui.qpic.cn/tv/0/727258741_498280/0",
            name: "超级飞侠 第七季",
            title: "全国小朋友都在看"
          }
        ]
      }
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.overall {
  padding: 5px 15px;
}

// // 左上角的图标
.member-center {
  width: 32px;
  height: 18px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 4px;
}
.triangle {
  width: 0;
  height: 0;
  border: 6px solid #ff6002;
  border-right: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-top: 6px solid transparent;
}

.member-center span {
  font-size: 10px;
  color: #fff;
  text-shadow: 0 1px 2px #555;
  font-weight: 400;
  position: relative;
  left: -3px;
}
</style>  

