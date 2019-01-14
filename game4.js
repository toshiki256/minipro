$(function() {
  var round = 0;//現在の面数
  var remain;//残り手数 れが０になるとゲームオーバー
  var field = [
    [1, "●○●○○○○"],//オセロの駒の各面の配置データ配列
    [1, "●○○○○○●○○○●"],//オセロの駒の各面の配置データ配列
    [2, "●○●○●○●○○○○●"],//オセロの駒の各面の配置データ配列
    [2, "●○●●○●●●○"],//オセロの駒の各面の配置データ配列
    [2, "●●○●●○○●●●○●○●●"]//オセロの駒の各面の配置データ配列
  ];
//引用http://ponk.jp/jquery/basic/を参考に作成
  // 面の開始
  function start() {
    remain = field[round][0];
    $('#field')
    .html($.map(field[round][1].split(''), function(i) {
      return '<div>' + i + '</div>';
    }).join(''));//配列fieldから画面にコマを書き出す

    $('#round').text(round + 1);
    $('#remain').text(remain);
  }
  start();

  $('#field').sortable({//要素の並び替えを設定
    axis: 'x',//ドラッグを横方向のみに制限
    update: function(e, u) {//ドラッグが完了して、実際に要素が並び替えられたときに呼ばれる関数を設定
      // 裏返す
      var color = u.item.text();//ドラッグされた要素のテキスト(●か○)を保存
      $.each(['prev', 'next'], function(i, dir) {//第１引数で指定したオブジェクトや配列のそれぞれの要素に対して関数を実行
        var rev = false;
        (function (item) {
          if (item.length < 1) return;
          if (item.text() == color) rev = true;//先頭か最後にたどり着く前に、置いたコマと同じ色のコマが現れたときは、挟める状態となるためフラグを立てる
          else arguments.callee(item[dir]());//置いたコマと違う色のコマが現れたときは、裏返される可能性のあるコマだが、とりあえず置いておき次の兄弟要素のコマを再帰によって辿る
          if (rev) item.text(color);//フラグが立っていたならば、さきほどとりあえず置いておいたコマを裏返す
        })(u.item[dir]());//実引数「u.item[dir]()」を「item」に代入し実行
      });

      // クリアチェック
      $('#remain').text(--remain);
      if (!$('#field div').is(':contains("○")')) {//白丸がひとつも含まれていない場合、ifの条件が満たされ、クリアとなる
        if (++round >= field.length) {
          alert("オールクリア！");//オールクリアとアラートを表示
        } else {
          alert("クリア！");//クリアとアラートを表示
          start();//スタートを表示
        }
      }

      // ゲームオーバーチェック
      if (remain <= 0) {
        $('#field').sortable('destroy');//ゲームオーバーのとき、並び替えを無効にする
        alert("ゲームオーバー");// ゲームオーバーとアラートを表示
      }
    }
  });
});
//引用
