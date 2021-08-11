var carousel = function(dest, elem, rate){
  this.dest = dest;
  this.elem = elem;
  this.rate = parseInt(rate, 10) || 2000;
  this.loopNum = 0;
  this.auto();
};

carousel.prototype.auto = function() {
  var i = this.loopNum++ % this.elem.length;
  this.dest.innerHTML = '<img src="' +this.elem[i]+'">';
  var that = this;
  setTimeout(function() {
    that.auto();
  }, this.rate);
}

window.onload = function() {
  var element = document.getElementsByClassName('carousel')[0];
  var elem = element.getAttribute('data-type');
  var rate = element.getAttribute('data-rate');
  new carousel(element, JSON.parse(elem), rate);
}

/*
function carousel(){
    for(var i = 0; i < arr.length;i++){
      
    }
}
*/