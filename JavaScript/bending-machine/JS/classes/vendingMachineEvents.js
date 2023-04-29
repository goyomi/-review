class VendingMachineEvents {
  constructor() {
    const vMachine = document.querySelector('.section1');
    this.balance = vMachine.querySelector('.bg-box p');
    this.itemList = vMachine.querySelector('.cola-list');
    this.inputCostEl = vMachine.querySelector('#input-money');
    this.btnPut = vMachine.querySelector('#input-money+.btn');
    this.btnReturn = vMachine.querySelector('.bg-box+.btn');
    this.btnGet = vMachine.querySelector('.btn-get');
    this.stagedList = vMachine.querySelector('.get-list');


    const myinfo = document.querySelector('.section2');
    this.myMoney = myinfo.querySelector('.bg-box strong');

    const getInfo = document.querySelector('.section3');
    this.getList = getInfo.querySelector('.get-list');
    this.txtTotal = getInfo.querySelector('.total-price');
  }

  bindEvent() {
    /** 만들기 순서
  * 1. 입금 버튼 기능 
  * 입금 버튼을 누르면
  * 1) 일단 소지금 === 소지금 - 입금액
  * 2) 잔액 === 기존잔액 + 입금액
  * 3) 입금액이 소지금보다 많으면 경고창 출력
  * 4) 입금액을 입력하고 입금 버튼을 눌렀을 때 입금창은 초기화 되어야 한다 
  */
    this.btnPut.addEventListener('click', () => {
      const inputCost = parseInt(this.inputCostEl.value);
      // 입력값
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));
      // 소지금 (소지금이 25,000되어있는데 정수로 변환하면 25만 반환됨)
      // Number는 어떨까? => NaN이됨
      // 쉼표 지워주는 메소드 => replaceAll로 처리 근데 원이라는 글자도 날아감 +'원'
      // 숫자에 쉼표붙여주는건 어떻게함? intl 객체 사용 
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
      // 잔액 

      if (inputCost) {
        // 입금액이 소지금 보다 적다면 
        if (inputCost <= myMoneyVal && inputCost > 0) {
          myMoneyVal = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';
          // 입금액이 소지금 보다 많다면

          this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + '원'

        } else {
          alert('소지금이 부족합니다ㅠㅠ');
        }

        this.inputCostEl.value = null
        // 입금액 초기화 

      }
    })

    /** 두 번째 기능
     * 2. 거스름돈 반환 버튼 
     * 1) 반환버튼을 누르면 소지금 === 잔액 + 소지금
     * 2) 반환버튼을 누르면 잔액창이 초기화 됩니다 
     */

    this.btnReturn.addEventListener('click', () => {
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
      // 잔액 
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));
      // 소지금

      if (balanceVal) {
        this.myMoney.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + '원';
        this.balance.textContent = null;
      }
    });

    /** 세 번째 기능
     * 3. 자판기 장바구니 채우기
     * 1) 아이템을 누르면 잔액 === 잔액 - 아이템 가격
     * 2) 아이템 가격이 잔액보다 크다면 경고메세지를 준다
     * 3) 아이템이 장바구니에 들어갑니다
     * 4) 아이템이 count가 -1이 된다 아이템의 카운트가 0이 되면 품절표시를 한다
     */
    this.btnsCola = document.querySelectorAll('.section1 .btn-cola');

    this.btnsCola.forEach((item) => {
      item.addEventListener('click', (event) => {
        const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
        const targetElPrice = parseInt(event.currentTarget.dataset.price);

        if (balanceVal >= targetElPrice) {
          this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + '원';

          //장바구니 콜라 생성
          this.stagedItemGenerator(event.currentTarget);

        } else {
          alert('입금한 금액이 부족합니다.');
        }
      })
    })
  }
}

export default VendingMachineEvents