alert('測驗開始');


var all = [0, 1, 2, 3, 4, 5];
var Ques = [];

$(function(){
    for(var i=0;i<3;i++){
        var Choose = Math.floor(Math.random() * all.length);
        
        
        Ques.push(all[Choose]);
        all.splice(Choose, 1);
        console.log(all);
}


    // Mix = all[i];
    // all[i] = all[Choose];
    // all[Choose] = all[i];

// var arr = [4,1,67,12,45,121,3];
// function Mix(num) {
//     for (var i = 0; i < num; i++) {
//         var iMix = parseInt(num * Math.random());
//         var temp = all[i];
//         all[i] = all[iMix];
//         all[iMix] = temp;
//     }
//     return all;
// }
});

$(document).ready();

var NewQue = {
    Ques
  };
  console.log(NewQue);
  localStorage.setItem('arr', JSON.stringify(NewQue));