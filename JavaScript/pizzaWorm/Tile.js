class Tile {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.posX = this.col * tileSize;
    this.posY = this.row * tileSize;
    // X,Y => 바둑판의 위치를 말함
  }

  renderTile(bg = 'yellowGreen') {
    ctx.fillStyle = bg;
    ctx.fillRect(this.posX, this.posY, tileSize, tileSize);
  }

  renderImg(bg = './pizza.png') {
    const image = new Image(tileSize, tileSize);
    // 이미지를 만들어주는 생성자 함수
    image.src = bg;
    image.addEventListener('load', () => {
      ctxBg.drawImage(image, this.posX, this.posY, tileSize, tileSize);
    });
  }

  // 파일의 충돌을 체크하는 함수
  collisionCheck(target) {
    return this.col === target.col && this.row === target.row;
  }

}