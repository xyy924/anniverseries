// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的宝贝",  // 同上...
        "今天是我们的纪念日",
        "这是我们在一起的",
        "第1个周年",
        "这一年来，我见过你",
        "奇怪的样子",
        "可爱的样子",
        "生气的样子",
        "都是我喜欢的样子",
        "这一年里，我们一起做过许多事",
        "我们一起去过世博园",
        "我们一起去过海洋馆",
        "我们一起去过博物院",
        "还一起去过大唐芙蓉园",
        "我们一起吃虾",
        "一起冒险",
        "一起滑滑板",
        "一起抓娃娃",
        "一起过生日",
        "一起买衣服",
        "一起看电视",
        "你送我开心",
        "我送你快乐",
        "幸福就在日常的点点滴滴",
        "明年要吃好好的",
        "喂饱饱的",
        "然后才有力气干活",
        "和想我！",
        "周年快乐~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/songxinxin.jpeg",
        "心爱的宝贝": "./imgs/baby.jpg",
        "今天是我们的纪念日": "./imgs/zhounian.jpg",
        "这是我们在一起的": "./imgs/zaiyiqi.jpg",
        "第1个周年": "./imgs/zhounian.jpg",
        "这一年来，我见过你": "./imgs/yangzi.jpeg",
        "奇怪的样子": "./imgs/qiguai.jpg",
        "可爱的样子": "./imgs/ka.jpg",
        "生气的样子": "./imgs/nothing.jpg",
        //"都是我喜欢的样子": "./imgs/nothing.jpg",
        "我们一起去过世博园":"./imgs/sby.jpg",
        "我们一起去过海洋馆":"./imgs/hyg.jpg",
        "我们一起去过博物院":"./imgs/bwy.jpg",
        "还一起去过大唐芙蓉园":"./imgs/dtfry.jpg",
        "我们一起吃虾":"./imgs/xia.jpg",
        "一起冒险":"./imgs/mx.jpg",
        "一起滑滑板":"./imgs/hb.jpg",
        "一起抓娃娃":"./imgs/zww.jpg",
        "一起过生日":"./imgs/gsr.jpg",
        "一起买衣服":"./imgs/myf.jpg",
        "一起看电视":"./imgs/nothing.jpg",
        "你送我开心":"./imgs/kx.jpg",
        "我送你快乐":"./imgs/kl.jpg",
        "明年要吃好好的": "./imgs/chuo.jpeg",
        //"喂饱饱的": "./imgs/weibao.jpeg",
        //"然后才有力气干活": "./imgs/nothing.jpg",
        "和想我！": "./imgs/w.jpg",
        "周年快乐~~": "./imgs/jnkl.jpg"
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
