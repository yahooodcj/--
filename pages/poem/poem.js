//demo.js

Page({
  data: {
    list: []
  },
  onLoad: function() {
    
  },
  //第二步
  onShow: function () {

  },
  //第三步
  onReady: function () {
    this.setData({
      list: getApp().globalData.list
    })
  }
})
   /* this.setData({
    list: [
      {
        id: 1,
        title: "衣带渐宽终不悔，为伊消得人憔悴。",
        author: "柳永《凤栖梧》",
        img_url: "../../static/images/1.jpg"
      },
      {
        id: 2,
        title: "死生契阔，与子成说。执子之手，与子偕老。",
        author: "佚名《诗经邶风击鼓》",
        img_url: "../../static/images/2.jpg"
      },
      {
        id: 3,
        title: "两情若是久长时，又岂在朝朝暮暮。",
        author: "秦观《鹊桥仙》",
        img_url: "../../static/images/3.jpg"
      },
      {
        id: 4,
        title: "相思相见知何日？此时此夜难为情。",
        author: "李白《三五七言》",
        img_url: "../../static/images/4.jpg"
      }
    ]
  }); 
  }
});*/
