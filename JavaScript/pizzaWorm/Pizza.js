class Pizza {
  constructor() {
    this.pos = new Tile(10, 20);
  }

  renderPizza() {
    this.pos.renderImg();
  }

  movePizza() {

    const col = Math.floor(random() * (tileWidth - 2)) + 1;
    const row = Math.floor(random() * (tileHeight - 2)) + 1;
    this.pos = new Tile(col, row);
  }
}