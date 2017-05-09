var Mock = require('mockjs'),
    Random = Mock.Random;

var getChartData = function() {
    return Mock.mock({
        'list|1-10': [{
            'id|+1': 1,
            createTime: function() {
                return Random.date('yyyy-MM-dd HH:mm:ss');
            }
        }]
    });
};

var getUserInfo = function() {
    return Mock.mock({
        'id|+1': 1,
        name: function() {
            return Random.cname()
        },
        'age|1-100': 1
    });
};


module.exports = {
    getChartData,
    getUserInfo
};
