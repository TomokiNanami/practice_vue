(function () {
    'use strict';
    // 双方向データバインディング(two way binding(to UI))


    // オブジェクトの作成
    let ob = new Object({
        // プロパティの作成(red, green, blue 1つ1つがプロパティ)
        red:255,
        green:125,
        blue:0,

        // メソッドの作成
        // function は省略できる
        total: function (){
            return this.red + this.green + this.blue
        }
        // function省略Ver.
        // total(){
        //     return this.red + this.green + this.blue
        // }


    })

    // オブジェクトから値を取り出す
    let red = ob.red

    // ポップアップで呼び出し
    alert(red)  // 変数に格納した値の呼び出し
    alert(ob.red)   // オブジェクトのプロパティの呼び出し
    alert(ob.red + ob.green + ob.blue)   // オブジェクトのプロパティの呼び出し
    alert(ob.total())   // メソッドの呼び出し

})();

