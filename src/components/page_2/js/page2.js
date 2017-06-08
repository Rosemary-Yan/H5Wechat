/**
 * Created by 文利 on 2017/5/4.
 */
export default rotate;
function rotate() {
    const text = [
        "2015-2016赛季NBA总冠军1","2015-2016赛季NBA总冠军2","2015-2016赛季NBA总冠军3",
        "2015-2016赛季NBA总冠军4","2015-2016赛季NBA总冠军5","2015-2016赛季NBA总冠军6",
        "2015-2016赛季NBA总冠军7","2015-2016赛季NBA总冠军8","2015-2016赛季NBA总冠军9",
        "2015-2016赛季NBA总冠军10","2015-2016赛季NBA总冠军11","2015-2016赛季NBA总冠军12",
        "2015-2016赛季NBA总冠军13"
    ];
    const position = [];
    var page2_jiangbei = require('../img/jb_left1.png');
    var page2_jb_left1 = require('../img/jb_left1.png');
    var page2_jb_left2 = require('../img/jb_left1.png');
    var page2_jb_left3 = require('../img/jb_left1.png');
    var page2_jb_left4 = require('../img/jb_left1.png');
    var page2_jb_left5 = require('../img/jb_left1.png');
    var page2_jb_left6 = require('../img/jb_left1.png');
    var page2_jb_right6 = require('../img/jb_left1.png');
    var page2_jb_right5 = require('../img/jb_left1.png');
    var page2_jb_right4 = require('../img/jb_left1.png');
    var page2_jb_right3 = require('../img/jb_left1.png');
    var page2_jb_right2 = require('../img/jb_left1.png');
    var page2_jb_right1 = require('../img/jb_left1.png');
    const src = [
        [page2_jiangbei,"111","5555555"],
        [page2_jb_left1,222,"5555555"],
        [page2_jb_left2,333,"5555555"],
        [page2_jb_left3,444,"5555555"],
        [page2_jb_left4,555,"5555555"],
        [page2_jb_left5,666,"5555555"],
        [page2_jb_left6,777,"5555555"],
        [page2_jb_right6,888,"5555555"],
        [page2_jb_right5,999,"5555555"],
        [page2_jb_right4,100,"5555555"],
        [page2_jb_right3,200,"5555555"],
        [page2_jb_right2,300,"5555555"],
        [page2_jb_right1,400,"5555555"]
    ];
    let $aDiv = $('.h5_page_page2 .h5_component:lt(13)');
    $aDiv.each(function(i){
        position.push([$(this).width() , $(this).height() , $(this).css('left') , $(this).css('top'),$(this).css('zIndex')]);
        $(this).on('click',function () {
            jbDetailDisplay(src[i][0]);
            $("#desc .title:first").text(src[i][1]);
            $('#desc .content:first').text(src[i][2]);
        })
    });
    $("#back").on('click',function () {
        jbDetailClose();
    });
//    $('.h5_page_page2').click(anima);
    var dom = $('.h5_page_page2').get(0);
    mobilwmtouch(dom);
    dom.addEventListener('touright',function (e) {
        animaRight();
        return false;
    });
    dom.addEventListener('touleft',function (e) {
        animaLeft();
        return false;
    });

    function animaRight() {
        if($(".h5_page_page2 :animated").length <= 0) {
            let last = position.pop();
            position.unshift(last);

            let lastText = text.pop();
            text.unshift(lastText);
            $(".h5_page_page2 .h5_component_name_text:first").text(text[0]);
            // console.log($(".h5_page_page2 .h5_component_name_text:first").text);
            $aDiv.each(function (i) {
                $(this).animate({
                    width: position[i][0],
                    height: position[i][1],
                    left: position[i][2],
                    top: position[i][3],
                    zIndex: position[i][4]
                }, 600, 'linear')
            });
        }
    }
    function animaLeft() {
        if($(".h5_page_page2 :animated").length <= 0) {
            let first = position.shift();
            position.push(first);
            let firstText = text.shift();
            text.push(firstText);
            $(".h5_page_page2 .h5_component_name_text:first").text(text[0]);
            $aDiv.each(function (i) {
                $(this).animate({
                    width: position[i][0],
                    height: position[i][1],
                    left: position[i][2],
                    top: position[i][3],
                    zIndex: position[i][4]
                }, 600, 'linear')
            });
        }
    }
    function mobilwmtouch(obj) {
        var stoux, stouy;
        var etoux, etouy;
        var xdire, ydire;
        obj.addEventListener("touchstart", function (e) {
            stoux = e.targetTouches[0].clientX;
            stouy = e.targetTouches[0].clientY;
//console.log(stoux);
        }, false);
        obj.addEventListener("touchend", function (e) {
            etoux = e.changedTouches[0].clientX;
            etouy = e.changedTouches[0].clientY;
            xdire = etoux - stoux;
            ydire = etouy - stouy;
            var chazhi = Math.abs(xdire) - Math.abs(ydire);
            if (xdire > 0 && chazhi > 0) {
                obj.dispatchEvent(evenzc('touright'));
            } else if (ydire > 0 && chazhi < 0) {
                obj.dispatchEvent(evenzc('toudown'));
            } else if (xdire < 0 && chazhi > 0) {
                obj.dispatchEvent(evenzc('touleft'));
            } else if (ydire < 0 && chazhi < 0) {
                obj.dispatchEvent(evenzc('touup'));
            }
        }, false);

        function evenzc(eve) {
            // if (typeof document.CustomEvent === 'function') {
            //     this.event = new document.CustomEvent(eve, {//自定义事件名称
            //         bubbles: false,//是否冒泡
            //         cancelable: false//是否可以停止捕获
            //     });
            //     if (!document["evetself" + eve]) {
            //         document["evetself" + eve] = this.event;
            //     }
            // } else if (typeof document.createEvent === 'function') {
            //     this.event = document.createEvent('HTMLEvents');
            //     this.event.initEvent(eve, false, false);
            //     if (!document["evetself" + eve]) {
            //         document["evetself" + eve] = this.event;
            //     }
            // } else {
            //     return false;
            // }
            // return document["evetself" + eve];
            var event = document.createEvent( "CustomEvent");
            event.initCustomEvent( eve, false,false,1 );
            return event;
        };
    }
    function jbDetailDisplay(src){
//        var page2_jiangbei = require('../img/jb_left1.png');
        $("#jbdetail #jb").attr('src',src);
        $("#jbdetail").show();
    }
    function jbDetailClose(){
        $("#jbdetail").hide();
    }

}