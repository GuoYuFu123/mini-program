Page({
  data: {},
  onLoad(query) {
    // 页面加载
    console.log(query)
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    this.setData({
      ...query
    })
  }
});
