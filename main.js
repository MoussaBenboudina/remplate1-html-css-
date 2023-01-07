

function icon(){
document.getElementById("liste").style.right="0";
document.getElementById("icon").style.display="none";
}
function closee(){
    document.getElementById("icon").style.display="block";
    document.getElementById("liste").style.right="-80%";
}
  window.onscroll = function(){
    console.log("scroll");
}

window.onscroll = function (){
  console.log(this.scrollY);

  if(this.scrollY < 540 || this.scrollY == 0){
    document.getElementById("icon").style.color="#fff";
    document.getElementById("up").style.bottom="-40px";

  }else if(this.scrollY >= 540) {
    document.getElementById("icon").style.color="var(--main-color)";
    document.getElementById("up").style.bottom="30px";
  }


}