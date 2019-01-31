<!--
function syuukei(){
	var point=0;	//　点数
	var max=110;	//　満点


	if(document.question.a[0].checked){point+=11;}//はいを選択した時、11をpointに加算
	if(document.question.a[1].checked){point+=10;}//いいえを選択した時、10をpointに加算　

	if(document.question.b[0].checked){point+=11;}
	if(document.question.b[1].checked){point+=10;}

	if(document.question.c[0].checked){point+=10;}
	if(document.question.c[1].checked){point+=11;}

	if(document.question.d[0].checked){point+=10;}
	if(document.question.d[1].checked){point+=11;}

	if(document.question.e[0].checked){point+=10;}
	if(document.question.e[1].checked){point+=11;}

	if(document.question.f[0].checked){point+=11;}
	if(document.question.f[1].checked){point+=10;}

	if(document.question.g[0].checked){point+=11;}
	if(document.question.g[1].checked){point+=10;}

	if(document.question.h[0].checked){point+=11;}
	if(document.question.h[1].checked){point+=10;}

	if(document.question.i[0].checked){point+=11;}
	if(document.question.i[1].checked){point+=10;}

	if(document.question.j[0].checked){point+=11;}
	if(document.question.j[1].checked){point+=10;}



	if(point==110){//pointが110だった時以下を実行
		alert("あなたの好きなゲームがわかりました。\nゲームNo.3。\n感覚ゲームにご招待。");//アラートであなたの好きなゲームがわかりました。ゲームNo.3。感覚ゲームにご招待。と表示する。
		location.href="TimingGame.html"; //game3.htmlへリンクを飛ばす
	}
	if(point==109){
		alert("あなたの好きなゲームがわかりました。\nゲームNo.3。\n感覚ゲームにご招待。");
		location.href="TimingGame.html";
	}
	if(point==108){
		alert("あなたの好きなゲームがわかりました。\nゲームNo.1。\n早押しゲームにご招待。");
		location.href="FastFushingGame.html";
	}
	if(point==107){
		alert("あなたの好きなゲームがわかりました。\nゲームNo.1。\n早押しゲームにご招待。");
		location.href="FastFushingGame.html";
	}
	if(point==106){
		alert("あなたの好きなゲームがわかりました。\nゲームNo.1。\n早押しゲームにご招待。");
		location.href="FastFushingGame.html";
	}
	if(point==105){
		alert("あなたの好きなゲームがわかりました。\nゲームNo.4。\nオセロゲームにご招待。");
		location.href="OseroGame.html";
	}
	if(point==104){
		alert("あなたの好きなゲームがわかりました。\nゲームNo.4。\nオセロゲームにご招待。");
		location.href="OseroGame.html";
	}
	if(point==103){
		alert("あなたの好きなゲームがわかりました。\nゲームNo.4。\nオセロゲームにご招待。");
		location.href="OseroGame.html";
	}
	if(point==102){
		alert("あなたの好きなゲームがわかりました。\nゲームNo.2。\nパズルゲームにご招待。");
		location.href="JigsawPuzzle.html";
	}
	if(point==101){
		alert("あなたの好きなゲームがわかりました。\nゲームNo.2。\nパズルゲームにご招待。");
		location.href="JigsawPuzzle.html";
	}
	if(point==100){
		alert("あなたの好きなゲームがわかりました。\nゲームNo.2。\nパズルゲームにご招待。");
		location.href="JigsawPuzzle.html";
	}

  if(point<99){alert("選択されていない項目があります。\n全ての項目に回答してください。");}//pointが99以下であった時、選択されていない項目があります。全ての項目に回答してください。とアラートで表示。
}
//-->
