Page({
  data: {
    loading: true,
    canIUseAuthButton: true,
    userInfo: {
      avatar: "/images/index/avatar.jpg",
      nickName: ''
    }    
  },
  onReady() {
    // 页面加载完成
    setTimeout(() => {
      this.setData({
        loading: false
      })
    }, 1000)
  },
  // 获取会员信息
  onGetAuthorize(res) {
    my.getOpenUserInfo({
      fail: (res) => {

      },
      success: (res) => {        
        let userInfo = JSON.parse(res.response).response // 以下方的报文格式解析两层 response
        this.setData({userInfo, canIUseAuthButton: false})
      }
    });
   },
   // 授权取消或者异常情况
   onAuthError(res) {
    my.showToast({
      content: '您取消了授权',
      duration: 2000
    });
   },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '果果电影',
      desc: '果果电影',
      path: 'pages/index/index',
    };
  },
  // 进入找电影
  enterMovies () {
    my.navigateTo({
      url: '/pages/movies/list/list'
    });
  },
});
