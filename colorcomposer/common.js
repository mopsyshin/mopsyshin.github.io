document.addEventListener("DOMContentLoaded", function(){
  randomize();
});

var target = document.getElementById('refresh');
target.onclick = function(e){
  history.go(0);
};

function randomize() {
  var blockSize = 10;
  var screenH = window.innerHeight;
  var screenW = window.innerWidth / blockSize;
  var count = screenH / screenW;
  var rotaNum = Math.floor(count) * blockSize + blockSize;

  function addBlock(callback) {
    for ( var i=0; i<rotaNum; i++) {
      (function(index) {
        var tagType = document.createElement('button');
        var place = document.getElementById('wrapper');
        var setNumber = i;
        setTimeout(function() { 
          place.appendChild(tagType).className = "active"+" item"+setNumber;
          var itemEle = document.getElementsByClassName("item"+setNumber);
          var colorCodeRgb = window.getComputedStyle( itemEle[0] ,null).getPropertyValue('background-color');
          itemEle[0].addEventListener('click' , function () {
            alert(colorCodeRgb);
           } , false ) ;  

        }, i * 10);
    })(i);
    }
    callback();
  }
  
  function makeRandom(min, max){
    var RandVal = Math.random() * (max - min) + min;
    return Math.floor(RandVal);
  }
  
  function addColor() {
      var setNumber = 0;
      var rValue = makeRandom(0, 255);
      var gValue = makeRandom(0, 255);
      var bValue = makeRandom(0, 255);
      var para = " #wrapper { background-color: rgba("+ rValue + "," + gValue + "," + bValue + ",1); }" + " .item" + setNumber + "{ background-color: rgba("+ rValue + "," + gValue + "," + bValue + ",1); }";
      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';
      if (style.styleSheet){
      style.styleSheet.cssText = para;
      } else {
      style.appendChild(document.createTextNode(para));
      }
      head.appendChild(style);
  
    for ( var i=1; i<rotaNum; i++) {
        var setNumber = i;
        var rValueN = rValue + makeRandom(-30,30);
        var gValueN = gValue + makeRandom(-30,30);
        var bValueN = bValue + makeRandom(-30,30);
        var para = " .item" + setNumber + "{ background-color: rgba("+ rValueN + "," + gValueN + "," + bValueN + ",1); }";
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet){
        style.styleSheet.cssText = para;
        } else {
        style.appendChild(document.createTextNode(para));
        }
        head.appendChild(style);

      }
  }
  addBlock(addColor);
}
