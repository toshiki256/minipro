//引用http://ponk.jp/jquery/basic/を参考に作成
$(function() {
  $('#start').click(function() {//startリンクを押した時{}を実行する
    $(this).hide();
//引用

    // 変数初期化
    var FLEN =12;                  // フィールドの大きさ
    var px = 0, py = 1;             // プレイヤー座標
    var pd = 1;                     // プレイヤー方向(0:上 1:右 2:下 3:左)
    var score = 0;                  // 得点

//引用http://ponk.jp/jquery/basic/を参考に作成
    // フィールドを表示する。
    var field = '';
    for (var y = 0; y < FLEN; y++) {
      for (var x = 0; x < FLEN; x++) {
        field += '<span id="field_' + x + '_' + y + '">';//フィールドの要素をspanタグで囲み、idとしてそれぞれのx,y座標をくっつける
        if (x == 0 || x == FLEN - 1 || y == 0 || y == FLEN - 1) field += '■';//
        else field += '□';
        field += '</span>';
      }
      field += '<br>';
    }
    $('#field').html(field);

    $(document).mousedown(function() {
      pd = (pd + 1) % 4;    // マウス押下時に移動方向を時計回りに90度動かす。
      return false;//デフォルトのイベントを無効にする
    })

    // 100ms毎に繰り返し
    var id = setInterval(function() {
      // 移動と当たり判定
      if (pd == 0) py--;//進行方向の変数pdが0の時座標pxを減らす
      else if (pd == 1) px++;//進行方向の変数pdが1の時座標pxを増やす
      else if (pd == 2) py++;//進行方向の変数pdが2の時座標pyを増やす
      else px--;//それ以外の時座標pxを減らす
      var item = $('#field_' + px + '_' + py);
      if (item.html() == '□') {
        score++;//□の時scoreを増やす
        $('#score').html(score);//得点を表示
      } else {
        clearInterval(id);//壁ならばタイマーイベントを消去する
        $('#start').show();//startを表示する
      }
      item.html('●');//itemには、プレイヤーの現在位置から、その場所のspanタグのidを作成して格納

    }, 100);
  });
});
//引用
