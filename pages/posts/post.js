let postsData = require('../../data/posts-data.js');
Page({
  onDetail(event){
    let postId=event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail'
    })
  },
  onLoad: function (options) {
    this.setData(
        {
        poss_key: postsData.postList
        }
      );
  },
  data: {
    imgUrls: [
      '../../images/post/bl.png',
      '../../images/post/cat.png',
      '../../images/post/crab.png'
    ],
    poss_key: []
  }
})