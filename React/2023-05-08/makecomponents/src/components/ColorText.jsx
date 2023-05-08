function ColorText(color) {
  // const texColor = {color: color}
  return (
    <>
    <p style={{color: color, fontWeight: 'bolder'}}>색이 바뀌어요!</p>
    {/* css 속성값도 꼭 "" 안에넣기 */}
    </>
  );
}

export default ColorText;