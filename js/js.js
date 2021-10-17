
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
    current = start,
    range   = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
        }
    }, step);
  }
  counter("count1", 0, 1236, 3000);
  counter("count2", 100, 256, 2500);
  counter("count3", 700, 1743, 500);
  counter("count4", 0, 17, 3000);
});

// Start button page-up
let btn = document.getElementById('page-up')
window.onscroll = function (){
  if(window.scrollY >= 200){
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
btn.onclick = function (){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
// End button page-up
