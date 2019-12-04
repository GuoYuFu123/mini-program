import { getJson } from  '../../../utils/httpService.js'
Page({
    data: {
      tags:[],
      checked: 0,
      subjects: [],
    },
    onReady() {
      // 页面加载完成
      this.getTags()
    },
    onShow() {
      // 页面显示
    },
    // 获取标签
    async getTags() {
      let params = {type: 'movie', souice: ''}
      let url = '/j/search_tags';
      let {tags} = await getJson(url,params)
      this.setData({ tags:tags,  checked: 0 })
      // 获取视频信息
      this.getSubjects(tags[0])
    },
    // 获取视频数据
    async getSubjects(tag='最新') {
      let url = '/j/search_subjects';
      let params = {
        type: "movie",
        tag:tag,
        sort:"recommend",
        page_limit:10,
        page_start:0
      }
      let {subjects} = await getJson(url,params);
      this.setData({ subjects:subjects })
    },
    // tag点击事件
    tagsClick(event) {
      let checked = this.data.checked;
      let {target} = event;
      let { index, name} = target.dataset;
      if (index == checked) {
        return;
      }
      this.setData({ checked: index });
      //查询数据
      this.getSubjects(name);
    },
    // 进入详情
    enterDetail(event) {
      let {target} = event;
      let {item} = target.dataset;
      let {cover, id, is_new, rate, title, url} = item;
      let toUrl = `/pages/movies/detail/detail?cover=${cover}&id=${id}&is_new=${is_new}&rate=${rate}&title=${title}&url=${url}`
      my.navigateTo({ url: toUrl })
    }
  });
  