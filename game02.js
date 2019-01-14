var number=1;
var game = new Array(//配列を構成
"早押しゲーム",
"パズルゲーム",
"感覚ゲーム",
"オセロゲーム"
);

document.write('<table border="3">');//documentに文字列を書き出す

for (var i=0 ; i<=3 ; i++){//iが3になるまで繰り返す
  document.write('<tr>');//表の行を定義
  document.write('<td>No,'+number+'</td>');//表のセルを定義
  document.write('<td>'+game[i]+'</td>');//表のセルを定義
  document.write('</tr>');
  number++;
}

document.write('</table>');
