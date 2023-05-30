import { sum, subtract, multiply, divide } from "../myFunctions/do-some-math";

test('math functions test', () => {
  it('두 가지 값을 더합니다.', () => {
    expect(sum(1, 1)).toBe(2);
  })
})