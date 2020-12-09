// alert('測驗結果');


var main = function() {
    var ResultPhotos = [
      '../img/R_Music.png',
      '../img/R_Old.png',
      '../img/R_Pop.png',
      '../img/R_Rock.png',
    ];
    $(document).ready(function() {
        var rP = Math.floor(Math.random() * ResultPhotos.length);
        $("<img src=" + ResultPhotos[rP] + ">").appendTo('#rPhoto');
        console.log(ResultPhotos[rP]);
      // return false;
      
    });
  }
  
  $(document).ready(main);
