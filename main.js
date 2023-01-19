const zoomElement = document.querySelector(".university");
let zoom = 3;
const ZOOM_SPEED = 0.5;
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
function init(){
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  console.log(zoomElement.getBoundingClientRect().bottom)
  if(zoomElement.getBoundingClientRect().bottom>0){
      zoomElement.style.height = Math.min(780,Math.abs(zoomElement.getBoundingClientRect().top - viewHeight+  (0)))+"px";
  }
  if((document.querySelector(".findSection").getBoundingClientRect().top-Math.max(document.documentElement.clientHeight, window.innerHeight))>0){
    document.querySelector(".findSection").style.marginTop=Math.max(-168,Math.abs(document.querySelector(".findSection").getBoundingClientRect().top-Math.max(document.documentElement.clientHeight, window.innerHeight))*-1)+"px"
  }
}
init();
document.addEventListener("wheel", function(e) {  
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    if(zoomElement.getBoundingClientRect().bottom>130 &&checkVisible(zoomElement)&&(zoomElement.getBoundingClientRect().top - viewHeight)<-190){
        zoomElement.style.height = Math.min(680,Math.abs(zoomElement.getBoundingClientRect().top - viewHeight+  (e.deltaY)))+"px";
    }
    if(Math.max(document.documentElement.clientHeight, window.innerHeight)>0){
      document.querySelector(".findSection").style.marginTop=Math.max(-368,Math.abs(document.querySelector(".findSection").getBoundingClientRect().top-Math.max(document.documentElement.clientHeight, window.innerHeight))*-1)+"px"
    }
});