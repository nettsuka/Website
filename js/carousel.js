var carousel = function(dest, elem, rate, href){
  this.dest = dest;
  this.elem = elem;
  this.rate = parseInt(rate, 10) || 2000;
  this.href = href;
  this.loopNum = 0;
  this.auto();
};

carousel.prototype.auto = function() {
  var i = this.loopNum++ % this.elem.length;
  this.dest.innerHTML = '<a href= '+ this.href[i] +'><img src="' +this.elem[i]+'"><a/>';
  var that = this;
  setTimeout(function() {
    that.auto();
  }, this.rate);
}

window.onload = function() {
  var element = document.getElementsByClassName('carousel')[0];
  var elem = element.getAttribute('data-type');
  var rate = element.getAttribute('data-rate');
  var href = element.getAttribute('href-type');
  new carousel(element, JSON.parse(elem), rate, JSON.parse(href));
}

/*
function carousel(){
    for(var i = 0; i < arr.length;i++){
      
    }
}
*/