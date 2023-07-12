class Worm {
  constructor() {
    this.wormBody = [new Tile(13, 10), new Tile(13, 11), new Tile(13, 12)];
    // 현재 지렁이의 방향
    this.dir = 'ArrowUp';
    this.dirNext = 'ArrowUp';

  }
  renderWorm() {
    this.wormBody.forEach((item) => {
      item.renderTile();
    });
  }

  // 지렁이의 몸통, 게임 테두리 충돌 체크
  collisionCheck(wormHead) {
    // 테두리에 충돌했는지 체크
    const leftEdge = (wormHead.col === 0);
    const topEdge = (wormHead.row === 0);
    // 타일의 위치 기준점이 왼쪽 상단이기 때문
    const rightEdge = (wormHead.col === tileWidth - 1);
    const bottomEdge = (wormHead.row === tileHeight - 1);

    const collisionEdge = leftEdge || topEdge || rightEdge || bottomEdge;

    // 몸과 충돌했는지 체크
    let collisionBody = false;
    this.wormBody.forEach((item) => {
      if (wormHead.collisionCheck(item)) {
        collisionBody = true;
      }
    })

    return collisionEdge || collisionBody
  }


  // 지렁이를 움직이는 함수
  moveWorm() {
    // 지렁이의 현재 머리
    const head = this.wormBody[0];

    // 이동에 따른 지렁이의 새로운 머리
    let newHead;

    // 다음 방향으로 지렁이를 이동시킨다
    this.dir = this.dirNext;

    // 머리를 생성하고 꼬리를 자르는 방식으로 진행됨
    // 이동 방향에 따른 머리 랜더링 위치 설정
    if (this.dir === 'ArrowRight') {
      newHead = new Tile(head.col + 1, head.row);
    } else if (this.dir === 'ArrowDown') {
      newHead = new Tile(head.col, head.row + 1);
    } else if (this.dir === 'ArrowLeft') {
      newHead = new Tile(head.col - 1, head.row);
    } else if (this.dir === 'ArrowUp') {
      newHead = new Tile(head.col, head.row - 1);
    }

    // 머리와 테두리 혹은 몸통이 부딪히면 게임오버
    if (this.collisionCheck(newHead)) {
      renderGameOver();
    }

    // 머리추가
    this.wormBody.unshift(newHead);

    // 지렁이가 피자를 먹었다면
    if (newHead.collisionCheck(pizza.pos)) {
      ctxBg.clearRect(0, 0, cWidth, cHeight);
      pizza.moveWorm();
      // 지렁이가 피자를 안 먹었다면
    } else {
      // 꼬리자름
      this.wormBody.pop();
    }



  }

  checkDirection(dirKey) {
    if (this.dir === 'ArrowRight' && dirKey === 'ArrowLeft') {
      return;
    } else if (this.dir === 'ArrowDown' && dirKey === 'ArrowUp') {
      return;
    } else if (this.dir === 'ArrowLeft' && dirKey === 'ArrowRight') {
      return;
    } else if (this.dir === 'ArrowUp' && dirKey === 'ArrowDown') {
      return;
    }
    this.dirNext === dirKey;
  }


}