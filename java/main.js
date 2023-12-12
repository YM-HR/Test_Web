$(function() {
    // コンテンツの近くにスクロールされたら、ふんわり表示する
    $(window).scroll(function() {
        const $winHeight = $(window).height(); // ウィンドウ画面の高さを取得
        $(".contents, .content_intro, .content_close, .content_1, .content_2, .content_3").each(function() {
            const $scrollTop = $(window).scrollTop(); // スクロールした現在のtopの位置を取得
            const $scrollBottom = $scrollTop + $winHeight; // スクロールした現在のtopの位置にウィンドウ画面の高さを加算してbottomの位置を算出
            const $offsetTop = $(this).offset().top; // コンテンツの位置を取得
            if ( $scrollBottom > $offsetTop + 150) { // ふんわり表示させたいコンテンツにスクロールが及べば表示する
                $(this).addClass("visible");
            }
        });
        $('.slidein').each(function(){
            var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();

                if (scroll > elemPos - windowHeight + 100){
                    $(this).addClass('scrollin');
                }
        });
    });
    $(window).scroll(); // 中途半端な位置でリロードされたときも、ふんわり表示する
});
