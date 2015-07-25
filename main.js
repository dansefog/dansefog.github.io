$(function(){

  //ページ内リンクを指定
  $('a[href^=#]').click(function(){
    //ページ内リンクを押すとスクロールする処理
    //速度(ms)
    var speed = 400;
    //クリックした値取得
    var href = $(this).attr("href");
    //異動先取得
    var target = $(href == "#" || "" ? 'html' : href);
    //異動先取得（数値）
    var position = target.offset().top;
    //スクロール（IEではスクロールしない）
        $('body,html').animate({scrollTop:position}, speed, 'swing');
    //アニメーションでスクロールするので、リンクそのものはオフに
    return false;
  });
});
