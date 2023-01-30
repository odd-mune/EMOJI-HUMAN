function createRipple(y, x) {
  const ripple = `<div class="circle" style="top:${y}px;left:${x}px;"></div>`;
  console.log(x);
  const _ripple = $(ripple);
  $('.ripple').append(_ripple);
  setTimeout(() => _ripple.remove(), 900);
}
