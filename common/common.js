function set_default_fontsize() {
  document.documentElement.style.fontSize = (window.innerWidth + window.innerHeight) / 150  + 'px'; 
  // if (window.innerWidth < 900) {
  //   alert("建议使用电脑访问本站，以获得最佳阅读体验")
  // }
}
set_default_fontsize();//调用函数，初始化字体大小
window.addEventListener('resize', set_default_fontsize);//监听窗口大小变化，重新设置字体大小


