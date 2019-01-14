//引用 http://ponk.jp/jquery/basic/　を参考に作成
var sel = -1;    // 現在選択されているピース番号
var pos = [];    // 各ピースの現在位置

$(function() {
  for (var i = 0; i < 16; i++) pos[i] = i;//初期値として、完成形で配列posを作る　

  for (var i = 16; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    swap(i - 1, j);  // シャッフルする。
  }

  // ピースを配置する。
  for (var i = 0; i < 16; i++) {
    $('<div id="piece' + i + '" class="piece"></div>').css({//「piece + ピース番号」というidを付けたdiv要素にCSSを設定しbodyに追加
      backgroundPosition: '-' + getx(i) + 'px -' + gety(i) + 'px',//画像の左端から0ピクセル、上端から0ピクセルの位置から画像を表示させる
      left: getx(pos[i]), top: gety(pos[i])//シャッフルされた位置にピースを持ってくる
    }).appendTo($('body'));
  }

  // ピースをクリックしたとき
  $('.piece').click(function() {
    var no = this.id.substring(5);//それぞれのピースのidは「piece + ピース番号」であり、変数noには「piece」という文字をスキップしたピース番号が入る。
    if (sel == no) {
      // 自分自身が選択されているときは選択をキャンセルする。
      $(this).fadeTo(100, 1);//100msかけて透明度1にする
      sel = -1;
    } else if (sel == -1) {
      // 何も選択されていないときは選択する。
      $(this).fadeTo(100, 0.5);//100msかけて透明度0.5（半分透けている状態）にする
      sel = no;
    } else {
      // 他のピースが選択されているときは入れ替える。
      swap(no, sel);//pos配列の中のクリックされたピース番号と選択されているピース番号を入れ替える
      $('#piece' + sel).fadeTo(100, 1).animate({left: getx(pos[sel]), top: gety(pos[sel])});//選択されているピースの透明度を元に戻し、クリックされたピースの位置へ移動するアニメーションを行なう。
      $(this).animate({left: getx(pos[no]), top: gety(pos[no])}, function() {
        // アニメーション終了時にクリア判定する。
        var clear = true;
        for (var i = 0; i < 16; i++) if (pos[i] != i) clear = false;
        if (clear) alert("クリア！");//クリア判定の時クリアとアラートで表示する　クリア条件は、pos配列全ての要素の添え字がその要素の値と等しい時である
      });
      sel = -1;
    }
  });
});

// ピースの番号から座標を得る。
function getx(n) {return (n % 4) * 80;}
function gety(n) {return Math.floor(n / 4) * 80;}

// ピースの配列を入れ替える。
function swap(i, j) {
  var tmp = pos[i];
  pos[i] = pos[j];
  pos[j] = tmp;
}
//引用
