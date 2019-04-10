// pages/homePage/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://www.77dodo.com/Upload/banner/ABFB4DE9C81A30BE1F1179EB927B13CE.jpg',
      'http://www.77dodo.com/Upload/banner/EEB9A689C4069834C6269D83DA746CFF.jpg',
      'http://www.77dodo.com/Upload/banner/3DB81980872A8DAD08785409913CEF08.jpg',
      'http://www.77dodo.com/Upload/banner/1E64BB87A0F8B00EC5DFE071DE1A8831.jpg',
      'http://www.77dodo.com/Upload/banner/6AE2BA98B41A79694F88F1DD0CF10204.jpg',
      'http://www.77dodo.com/Upload/banner/63FAD2505DCF357DBD078B8B21AF0F88.jpg'
    ],
    bodys: [{
        biaoti: '《云梦瑶》',
        neirong: '云正做她的梦，赶在雨落前；你正捂嘴地笑，犹如我初见。在《前任3》的拍摄地，有着濛濛细雨打湿草地带来的别样梦幻，也有快艇和沙滩派对的狂欢。雨湿了我的脸，可看见你在笑，一切也都变得美好。',
        dizhi: '成都麓湖',
        yusuan: '户外草坪婚礼 较高预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/59BE68D9CA0CB5091AAD3C7F02BCD43F.jpg'
      },
      {
        biaoti: '《执念和漩涡》',
        neirong: '时间的桨搅动这河，陷入我的执念，你的漩涡。漩涡的精妙在于，它一笔呵成，便有世上最简约的美感。笔直的表达或许清晰、明了，而爱情的蜿蜒、婉约，只需一个执念，就将你深陷。',
        dizhi: '成都麓山国际',
        yusuan: '户外草坪婚礼 较高预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/7522FFF1C0F8EE8A9F6A8CDFF807AE3C.jpg'
      },
      {
        biaoti: '《等圆的梦》',
        neirong: '他们和DoDo主创坐在一起，除了梳理时光的记忆，谈论最多的是身处“四季如夏，一雨成秋”的异乡，关于梦想不灭与执着坚持，还有对未来的畅想，那些一直以来都在发烫的东西。',
        dizhi: '成都环球洲际大酒店',
        yusuan: '大型婚宴场地  较高预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/5DCC6FA4A1DDCD217018C0B2F8AF58B6.jpg'
      },
      {
        biaoti: '《不忘，不负》',
        neirong: '生从无知来，离随未知去。唯有生活，一路万水千山，了然于心。既是来路，亦是归途，不忘初衷，不负归处。',
        dizhi: '青海西宁时代大厦',
        yusuan: '中型婚宴场地 中等预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/0C6305950FE755E5ED350AFC3C667CB9.jpg'
      },
      {
        biaoti: '《寻个有爱的地方》',
        neirong: '一对坚定了自己选择的爱人，拥有了一场用自己的爱情故事而来的创意婚礼，他又简洁又浪漫。',
        dizhi: '成都金河宾馆',
        yusuan: '小型婚宴场地 中等预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/F809596C9D78A3303E5837F036DB273D.jpg'
      },
      {
        biaoti: '《比喜欢更喜欢的》',
        neirong: '我喜欢海，海是一面镜子，可以看见自己的灵魂。比喜欢海更喜欢的，是喜欢你。你拥有海的平和，却没有海的暴躁，你拥有的勇敢和顽皮，海却没有。——DoDo原创婚礼诗',
        dizhi: '郫县汇鑫苑',
        yusuan: '大型婚宴场地 中等预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/D020CBE7D4B87E39518A4D12CB3657C9.jpg'
      },
      {
        biaoti: '《关于爱的命题》',
        neirong: '我花光所有的运气，遇见你，我刻下共同的足迹，记录你。一切关于爱的命题，我将用一生的时间，回答你。辗转追寻，山东、攀枝花、成都、凉山…遇见、记录、回答“一切关于爱的命题”。​​​​',
        dizhi: '成都礼遇天下酒店 ',
        yusuan: '大型婚宴场地 中等预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/90E671388D8984501E8EA498E0241D26.jpg'
      },
      {
        biaoti: '《大声说的秘密》',
        neirong: '她害怕眼前的幸福美好终究又是虚无的泡沫，心里盼着：你只要许我一个未来，我就是你的，我会放弃一切。为了给她足够的安全感，男生大声的对她说：那就结婚吧，给你一个真真实实的、温暖的家。',
        dizhi: '成都欢乐谷老房子',
        yusuan: '户外草坪婚礼 中等预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/A39649F08BC41CF7783BF747C5FF0331.jpg'
      },
      {
        biaoti: '《家·囍》',
        neirong: '《家囍》顾名思义，自然是家有喜事，“囍”有两个喜，必然是有双喜临门。世间最艳羡的事，是有一个舒适的家，还有最爱的人陪伴着，数一数人生的忧愁和快乐。岁月如梭，美人如斯，生活的平与仄，起承转合，其实美妙如诗。',
        dizhi: '成都保利皇冠假日',
        yusuan: '大型婚宴场地 较高预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/454E3B02D59076AB237AA5A6C7B6DB32.jpg'
      },
      {
        biaoti: '《七年付给你》',
        neirong: '做了一个粉红色的梦，昨天的身影在眼前，我将七年的温柔付给你，你是现在，是未来，是故乡。七年的点点滴滴汇成爱的抒情诗，新娘三次换装，热情舞姿与柔美婉约，必将一笔一划写入新的回忆。',
        dizhi: '成都仁和春天酒店',
        yusuan: '中型婚宴场地 中等预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/2EFB928B140FC16FEC2596DC0EC7806D.jpg'
      },
      {
        biaoti: '《简单的美好》',
        neirong: '在未来，触摸着牵着我的手的你的手，只需回忆每一个美妙的往昔。一如顾城的诗：“草，在结它的种子，风，在摇它的叶子，我们俩站着不说话。”就是这样的简单而美好。',
        dizhi: '成都中粮御岭湾',
        yusuan: '户外湖畔场地 较低预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/82596CB385E7010A6E7D4830BB194DA2.jpg'
      },
      {
        biaoti: '《启程》',
        neirong: '万水和千山，繁花似锦，星空和皓月，云淡风轻；曲折和坦途，不忘初心，深刻与平凡，致远宁静。这是DoDo提出的“轻婚礼”概念的又一场户外草坪婚庆案例，小预算，小清新，小美好。',
        dizhi: '成都某售楼部草坪',
        yusuan: '户外草坪 较低预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/E0A0DB9F06F96C10094EF044ED0CB25F.jpg'
      },
      {
        biaoti: '《今天以前和今天以后》（教堂）',
        neirong: '成都能办教堂婚礼仅有的两处场地之一，森系已不能形容，是多肉、仙人掌系。 “你喜欢我，我喜欢你，谈天和说地，对看两欢喜。我送你月亮，你送我星光，贫瘠的沙粒，也坚韧生长。”',
        dizhi: '成都保利皇冠教堂',
        yusuan: '教堂婚礼 较低预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/2412C9709C1A60D96F580759CEBB5AF6.jpg'
      },
      {
        biaoti: '《梦游十七岁》',
        neirong: '每一个人的青春年少时都让人魂牵梦绕，他们没有在那最美好的年华相遇，却好奇和幻想那个时候的对方会是什么模样。“十七岁的长椅和一棵开花的树，于我人生睡梦中，静静安放。如果青春能倒回，那个追风的少年，你在哪里？””',
        dizhi: '成都安泰安蓉酒店',
        yusuan: '中型婚宴场地 较低预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/9343547B59D24F952D5DA821C4F867BE.jpg'
      },
      {
        biaoti: '《轻声念》',
        neirong: '“雨停留过的秋千，摇晃青春的笑脸，唯有平淡的故事，你陪我轻声的念。”在成都的城市中心，闹中取静的户外平台婚礼，可以轻声念，那平淡却美好的故事。 ',
        dizhi: '成都群光君悦酒店',
        yusuan: '户外平台婚礼 较低预算婚礼',
        imgs: 'http://www.77dodo.com/Upload/works/61DE2DA3057C6C3B1321B6E664209535.jpg'
      },
      // {
      //   biaoti: '《我的陶醉》',
      //   neirong: '成都一场ins风，小而精致的户外平台婚礼。远方的诗很美，却美不过一处精致的家；浓烈的酒易醉，更醉我的是你泛红脸颊。有家，有你，有故事，已足够一生陶醉。  ',
      //   dizhi: '成都丹桂轩酒楼',
      //   yusuan: '户外平台婚礼 较低预算婚礼',
      //   imgs: 'http://www.77dodo.com/Upload/works/78E9F7E19D139C6DDB8F1B99B87240FD.jpg'
      // },
    ]
  },
  onClick: function() {
    var that = this;
    var obj = {};
    obj.biaoti = '《我的陶醉》';
    obj.neirong = '成都一场ins风，小而精致的户外平台婚礼。远方的诗很美，却美不过一处精致的家；浓烈的酒易醉，更醉我的是你泛红脸颊。有家，有你，有故事，已足够一生陶醉。  ';
    obj.dizhi = '成都丹桂轩酒楼';
    obj.yusuan = '户外平台婚礼 较低预算婚礼';
    obj.imgs = 'http://www.77dodo.com/Upload/works/78E9F7E19D139C6DDB8F1B99B87240FD.jpg'


    var bodys = that.data.bodys;
    bodys.push(obj);
    that.setData({
      bodys
    })
    console.log(bodys)
  },
  jump: function() {
    wx.navigateTo({
      url: '../yun/yun',
      success: function(res) {

      },
      fail: function(res) {

      },
      complete: function(res) {

      },
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})