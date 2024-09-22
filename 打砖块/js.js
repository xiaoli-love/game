function keyUp(e) {
  if (e.key === 'ArrowRight' || e.key === "Right" ||
      e.key === 'ArrowLeft' || e.key === "Left") {
      paddle.dx = 0
  } else if (e.key === 'ArrowLeft' || e.key === "Left" ||
      e.key === 'ArrowRight' || e.key === "Right") {
      paddle.dx = 0
  }
}

// 事件监听

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

rulesBtn.addEventListener('click', () => {
  rules.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  rules.classList.remove('show');
})
rules.addEventListener('click', () => {
  rules.classList.remove('show');
})