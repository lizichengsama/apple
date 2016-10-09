$(function(){
    moves=$('.gallery-slide-wrapper a')
    dots=$('.tab-list .dot')
    var flag=true;

    moveTo=function(eve,dir){
        if(flag) {
            flag=false;
            if (dir == 'right') {

                moves.filter('.active').removeClass('active')
                    .addClass('leave').delay(1000)
                    .queue(function () {
                        $(this).removeClass('leave').dequeue()
                        flag=true;
                    });

                dots.removeClass('active')
                dots.eq(moves.index(eve)).addClass('active')

                $(eve).addClass('right');
                $(eve).get(0).offsetWidth;
                $(eve).removeClass('right').addClass('active');

            } else if (dir == 'left') {

                moves.filter('.active').removeClass('active')
                    .addClass('enter').delay(1000)
                    .queue(function () {
                        $(this).removeClass('enter').dequeue()
                        flag=true;
                    });

                dots.removeClass('active')
                dots.eq(moves.index(eve)).addClass('active')

                $(eve).addClass('leave');
                $(eve).get(0).offsetWidth;
                $(eve).removeClass('leave').addClass('active');
            }
        }
    }

    moveRight=function(){
        if(flag){
            var actives=moves.filter('.active')
            var el=actives.next().length?actives.next():moves.eq(0);
            moveTo(el,'right');
        }
    }
    moveLeft=function(){
        if(flag){
            var actives=moves.filter('.active')
            var el=actives.pre().length?actives.pre():moves.eq(-1);
            moveTo(el,'left');
        }
    }
    dots.on('click',function(){
        var m=moves.index(moves.filter('.active'));
        var n=$(this).index();
        if(m==n){
            return;
        }
        if(m>n){
            moveTo(moves.eq(n),'left')
        }else{
            moveTo(moves.eq(n),'right')
        }
    })
    setInterval(moveRight,2000)

    var lists=$('.footer .foot-content .lists')
    var lefts=$('.header .phone-cont .lefts')
    console.log(lefts)
    // lists.on('click',function () {
    //     $(this).find('li').toggleClass('alists')
    // })

    lists.on('click',function () {
        $(this).find('li').slideToggle()
    })

    lefts.on('click',function () {
        $('.header .phone-cont .alists').slideToggle()
    })

})