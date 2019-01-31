$(function() {
  $('a').click(function() {
    var NUM = 3;                    // チェックボックス数
    var SIZE = 750;                 // ステージの大きさ
    var count = 0;                  // 現在チェックされている数
    var st = new Date().getTime();  // 開始時間
    $('body').empty();
//引用　http://ponk.jp/jquery/basic/を参考に作成
    // チェックボックスの新しい位置を返す。
    function newPos() {
      return {
        left: Math.floor(Math.random() * SIZE),//0以上SIZE未満の整数を得る
        top: Math.floor(Math.random() * SIZE)//0以上SIZE未満の整数を得る
      };
    }

    // チェックボックスの生成・アニメーションの設定
    for (var i = 0; i < NUM; i++) { //HTML文字列からDOMエレメントを生成
      $('<input type="checkbox">')//HTML文字列からDOMエレメントを生成
      .appendTo('body')//body要素に追加
      .css('position', 'absolute')//CSSの設定
      .css(newPos())//CSSの設定
      .each(function() {//jQueryオブジェクトにそれぞれに対して、順番に関数を実行する
        $(this).animate(newPos(), 3000, arguments.callee);
      });
    }

    // チェックボックスが押されたときの処理
    $('input').click(function() {
      $(this).stop().attr('disabled', 'disabled');//チェックボックスのアニメーションを止める　チェックをできなくする
      var t = (new Date().getTime() - st) / 1000;//現在時刻からゲーム開始時刻を引いて所要時間を割り出す
      if (++count >= NUM) alert('クリア！所要時間：' + t + '秒');//所要時間をアラートで表示
    });

    return false;　//aタグのデフォルトの動作（href="#" にジャンプ）を無効にする
  });
});//引用
