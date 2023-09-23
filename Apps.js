Function getRandomColor() {
  Const letters = ‘0123456789ABCDEF’;
  Let color = ‘#’;
  For (let I = 0; I < 6; i++) {
    Color += letters[Math.floor(Math.random() * 16)];
  }
  Return color;
}
Function changeBackgroundColor() {
  Document.body.style.backgroundColor = getRandomColor();
}
setInterval(changeBackgroundColor, 3000)
