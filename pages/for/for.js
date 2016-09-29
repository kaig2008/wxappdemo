Page( {
    data: {
        links: [
            { text: '猫的图片', 'url': '../cat/cat' },
            { text: 'ICO DEMO', 'url': '../ico/ico' },
            { text: '模板DEMO', 'url': '../template/template' },
            { text: '查看日志', 'url': '../logs/logs' }]
    },
    go: function( event ) {
        var _url = event.currentTarget.dataset.url;
        wx.navigateTo( {
            url: _url
        });
    }
});