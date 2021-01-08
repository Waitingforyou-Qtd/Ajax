$(function () {
    // 初始化滚动条
    resetui()
    //为发送按钮注册点击事件
    $('#btm').on('click', function () {
        // 去除两端空格
        let text = $('#ipt').val().trim()
        // 判断内容是否为空
        if (text.length <= 0) {
            // 清空文本框
            return $('#ipt').val('')
        }
        //  内容渲染到页面
        $('#talk_list').append(
            '<li class="right_word"><img src="img/person02.png" /> <span>' +
            text +
            '</span></li>'
        )
        // 清空文本框
        $('#ipt').val('')
        // 重置滚动条位置
        resetui()
        // 发起请求  获取聊天内容
        getMsg(text)

    })
    // 获取聊天机器人发送回来的消息 text用户输入的内容
    function getMsg(text) {
        $.ajax({
            method: 'GET',//请求方式
            // url地址
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                // 请求数据
                spoken: text
            },
            success: function (res) {
                // console.log(res)
                if (res.message === 'success') {
                    // 接收聊天消息
                    var msg = res.data.info.text
                    $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')
                    // 重置滚动条的位置
                    resetui()
                    // 调用 getVoice 函数，把文本转化为语音
                    getVoice(msg)
                }
            }
        })
    }
    // 把文字转化为语音进行播放
    function getVoice(text) {
        $.ajax({
            method: 'GET', //请求方式为get
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text //请求数据
            },
            success: function (res) {
                // console.log(res)
                if (res.status === 200) {
                    // Url服务器返回的音频      播放语音
                    $('#voice').attr('src', res.voiceUrl)
                }
            }
        })
    }
    // 当按钮被松开时，发生 keyup 事件
    // 为文本框绑定 keyup 事件
    $('#ipt').on('keyup', function (e) {
        // console.log(e.keyCode)
        // 是否弹起回车键
        if (e.keyCode === 13) {
            // console.log('用户弹起了回车键')
            // 给按钮绑定点击事件
            $('#btm').click()
        }
    })
})



