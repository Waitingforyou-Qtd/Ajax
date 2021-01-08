$(function () {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui();

    // 为发送按钮绑定鼠标点击事件
    $('#btnSend').on('click', function () {
        let text = $('#ipt').val().trim();
        if (text.length <= 0) {
        return $('#ipt').val('');
        }
        // 如果用户输入了聊天内容，则将聊天内容追加到页面上显示
        $('#talk_list').append(
        '<li class="right_word"><img src="img/person02.png" /> <span>' +
            text +
            '</span></li>'
        );
        $('#ipt').val('');
        // 重置滚动条的位置
        resetui();

        // 根据当前的内容（text）获取服务器返回的数据（消息）
        getMsg(text)
    });

    function getMsg(text) {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success(res) {
                if (res.message !== 'success') return alert('请求数据失败');
                $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + res.data.info.text + '</span></li>')
                resetui();

                // TODO: 将后端返回的消息转成语音
            }
        });
    }
});
