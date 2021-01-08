## 请求数据靠的是谁

浏览器提供的 `XMLHttpRequest` 对象

## 请求方式有哪些

1\. GET，一般用来从服务器获取数据

2\. POST，一般用来向服务器提交数据

3\. DELETE

4\. PUT

## AJAX 概念

基于 `XMLHttpRequest` 对象实现客户端和服务器通信的一门技术就是 AJAX

应用场景：所有涉及到数据增、删、改、查的操作，都可以通过 AJAX 去完成

## $.get

GET 不带参数获取数据

```js
$.get('http://www.liulongbin.top:3006/api/getbooks', res => {
    console.log(res)
});
```

GET 带参数获取数据的 3 种方式

```js
// 参数：地址、数据、回调函数
// 传递参数的第一种方式，建议！
$.get('http://www.liulongbin.top:3006/api/getbooks', { id: 1 }, function (res) {
    console.log(res)
});
```

```js
// 传递参数的第二种方式，通过 ?key=value
$.get('http://www.liulongbin.top:3006/api/getbooks?id=1', function (res) {
    console.log(res)
});
```

```js
// 传递参数的第三种方式，第二个参数字符串 key=value
$.get('http://www.liulongbin.top:3006/api/getbooks', 'id=1', function (res) {
    console.log(res)
});
```

## $.post

```js
// 建议写法！
$.post('http://www.liulongbin.top:3006/api/addbook', {
    bookname: '水浒传11111111',
    author: '施耐庵',
    publisher: '天津图书出版社'
}, res => {
    console.log(res)
});
```

第二种写法，了解！

```js
// key=value&key=value
$.post('http://www.liulongbin.top:3006/api/addbook', 'bookname=ifer&author=xxx&publisher=jjjj', res => {
    console.log(res)
});
```

## $.ajax

GET

```js
$.ajax({
    type: 'GET', // 请求方式，默认就是 GET，新版的 jQuery type 可以换成 method
    url: 'http://www.liulongbin.top:3006/api/getbooks', // 请求地址
    data: { // 请求参数
        id: 1
    },
    success: function (res) { // 请求成功之后的回调函数
        console.log(res)
    }
});
```

POST

```js
$.ajax({
    type: 'POST',
    url: 'http://www.liulongbin.top:3006/api/addbook',
    data: {
        bookname: '史记112',
        author: '司马迁',
        publisher: '上海图书出版社'
    },
    success(res) { // 注意下 ES6 的写法
        console.log(res)
    }
});
```

## 接口

客户端和服务器进行通信的一个媒介（地址）

