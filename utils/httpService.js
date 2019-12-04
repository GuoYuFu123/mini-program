const baseUrl = 'https://movie.douban.com'

const httpService = function(url='', method='GET', data={}, dataType='json') {
    my.showLoading();
    return new Promise((resolve, reject) => {
        my.request({
            url: baseUrl + url,
            method: method,
            data: data,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            dataType: dataType,
            success: function(res) {
                resolve(res.data);
            },
            fail: function(res) {
                console.error(res);
                reject(res);
            },
            complete: function(res) {
              my.hideLoading();
            }
          });
    })
}
const getJson = function(url, data) {
    return httpService(url, "GET", data);
}
const postJson = function(url, data) {
    return httpService(url, "POST", data);
}
export { httpService, getJson, postJson}