// アロー関数
function hello(aisatu){
    return aisatu() + "ございます";
}

// hello(() => {return "おはよう"})

// 確認
console.log(hello(() => {return "おはよう"}))