
function check() {
  var val = $('input:radio[name="option"]:checked').val();
  if(val==null){
      alert("請作答 !");
      return false;
  };
};

// var userJsonStr = sessionStorage.getItem('arr');
// NewQue = JSON.parse(userJsonStr);
// console.log(NewQue.Ques);

var all = [0, 1, 2, 3, 4, 5];
var rQ = Math.floor(Math.random() * all.length);

all.splice(rQ, 1);

var Fp = 0;

var main = function() {
  var choice = $('input:radio[name="option"]:checked').val();

  var questions = [
    '過新年時你會選擇買下列哪一種主題的月曆掛在家裡陪你迎賓送客呢？',
    '去看電影買票之後，你是怎麼拿票的呢？',
    '每天出門你包包內一定會帶哪一樣物品呢？',
    '如果你突然有一個下午的空閒時間，你會選擇做什麼？',
    '你正在坐船，周遭是一望無際的海洋，遠方突然有東西出現，你想那會是什麼？',
    '你坐在鏡子前，正看著自己的時候，突然頭上出現天使般的光環，你覺得是什麼顏色的呢？',
  ];
  var options = [
    ['異國風景', '美女明星', '可愛動物', '大師明畫'],
    ['把票放進口袋', '把票捲起來', '把票放進錢包內', '緊捏在手上'],
    ['筆記本', '筆', '衛生紙', '水壺'],
    ['好好在家睡一覺', '到戶外走走', '約好友到咖啡廳喝茶聊天', '看一部有意義的電影'],
    ['陸地', '另一艘船', '朝陽', '鯨魚'],
    ['紅色', '橘色', '水藍色', '鯨魚']
  ];
  var Points = [
    ['3', '2', '1', '3'],
    ['4', '1', '3', '2'],
    ['2', '3', '1', '4'],
    ['1', '4', '3', '2'],
    ['1', '3', '2', '4'],
    ['4', '2', '3', '1']
  ];
  $(document).ready(function() {
    
    // $('#all').text(all[rQ]);
    $('#question').text(questions[rQ]);

    for(var i=0;i<=3;i++){
      $('#opt'+i).text(options[rQ][i]);
    };
    return false;

  });

  if(choice<=3){
    console.log[Points[rQ][choice][choice]]
  }

};

$(document).ready(main);


console.log(all);
console.log(Fp);

var Scd = {
  all
};
console.log(Scd);
sessionStorage.setItem('arr', JSON.stringify(Scd));
