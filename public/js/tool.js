
$(function () {
    $.mobile.loading('show', {
        text: '',
        textVisible: false,
        theme: 'z',
        html: ""
    });
    var tag = true;
    var animateTime = 300;
    console.log("ready执行");
    console.log(window.screen.width)
    var screenWidth = window.screen.width;
    var singleIconWidth = (screenWidth * 70 / 100 - 20) / 3;
    var singleIconHeight = singleIconWidth * 66 / 225 + 1;
    console.log("计算宽度");
    console.log(singleIconWidth)
    $(".banner-img").width(singleIconWidth);
    $('.ul,.banner_left').height(singleIconHeight);
    $('.banner_left i').height(singleIconHeight);

    function moveLeft() {
        console.log("clo")
        // debugger
        var li_len = $('.ul ul li').length - 3;

        var left_width = $('.ul ul').css('left');
        if (tag) {
            if (Math.abs(parseInt(left_width)) < li_len * singleIconWidth) {
                left_width = parseInt(left_width) - singleIconWidth - 10;
                $(".ul ul").animate({
                    left: left_width + 'px'
                }, animateTime);
            }
            tag = false;
            setTimeout(function () {
                tag = true;
            }, animateTime);
        }
    }

    function moveRight() {
        var left_width = $('.ul ul').css('left');
        if (tag) {
            if (parseInt(left_width) < 0) {
                left_width = parseInt(left_width) + singleIconWidth + 10;
                $(".ul ul").animate({
                    left: left_width + 'px'
                }, animateTime);
            }
            tag = false;
            setTimeout(function () {
                tag = true;
            }, animateTime);
        }
    }
    // 点击右移动事件
    $('#move_right').click(function () {
        moveRight()
    })

    // 点击左边移动事件

    $('#move_left').click(function () {
        moveLeft();
    })

    // banner滑动切换图片
    $('.banner').on('swipeleft', function () {
        moveLeft();
    })
    $('.banner').on('swiperight', function () {
        moveRight();
    })

    // 手指touch 效果变化
    $('.ul img').on('touchstart', function () {
        var src = $(this).attr('src');
        $(this).attr('src', src.replace('/a', '/b'))
    })

    $('.ul img').on('touchend', function () {
        var src = $(this).attr('src');
        $(this).attr('src', src.replace('/b', '/a'))
    })

    // 点击事件
    $('.ul img').on('tap', function () {
        var src = $(this).attr('id');
        var targetBoxId = 'box_' + src.split('_')[1];
        console.log(targetBoxId)
        $("html, body").animate({
            scrollTop: $("#"+targetBoxId).offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
    })

    // 太古
    $('.toDetail_taigu1,.toDetail_taigu2,.toDetail_taigu3').click(function () {
        console.log($(this).attr('class'))
        window.location.href = "./detail_"+ $(this).attr('class').match(/taigu\d{1}/g)[0] +".html";
    })
    // 影儿集团
    $('.toDetail_yinger1,.toDetail_yinger2,.toDetail_yinger3').click(function () {
        console.log($(this).attr('class'))
        window.location.href = "./detail_"+ $(this).attr('class').match(/yinger\d{1}/g)[0] +".html";
    })
    // 长安
    $('.toDetail_changan1,.toDetail_changan2,.toDetail_changan3').click(function () {
        console.log($(this).attr('class'))
        window.location.href = "./detail_"+ $(this).attr('class').match(/changan\d{1}/g)[0] +".html";
    })
    // 玉才
    $('.toDetail_yucai1,.toDetail_yucai2,.toDetail_yucai3').click(function () {
        console.log($(this).attr('class'))
        window.location.href = "./detail_"+ $(this).attr('class').match(/yucai\d{1}/g)[0] +".html";
    })
    // 德邦
    $('.toDetail_debang1,.toDetail_debang2,.toDetail_debang3').click(function () {
        console.log($(this).attr('class'))
        window.location.href = "./detail_"+ $(this).attr('class').match(/debang\d{1}/g)[0] +".html";
    })
});