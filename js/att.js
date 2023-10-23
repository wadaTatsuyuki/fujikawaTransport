//アコーディオンをクリックした時の動作
$('.att-title').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box-att");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close2')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close2');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close2');//クラス名closeを付与
    }
  });
  
  $(function(){
    //ボタンのイベント
    $(".att-title").click(function() {
      //h2要素のsampleクラスを追加する
      $(".main1").addClass("main2");      
    });
  });
  $(function(){
    //ボタンのイベント
    $(".att-title").click(function() {
      //h2要素のsampleクラスを追加する
      $(".safety-con3-img").addClass("img2_hight");      
    });
  });
  //ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
  