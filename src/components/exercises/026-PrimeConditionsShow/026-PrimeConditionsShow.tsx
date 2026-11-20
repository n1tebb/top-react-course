function PrimeConditionsShow() {
  let text;
  const isAdult = true;

  if (isAdult) {
    text = <p>18 есть?</p>;
  } else {
    text = <p>вам нет 4 лет</p>;
  }

  return <div>{text}</div>;
}
export default PrimeConditionsShow;
