function PrimeConditionsTernary() {
  const age = 19;

  return (
    <div>
      {age > 18 ? <p>Вам больше 18 лет</p> : <p>Вам 18 лет или меньше</p>}
    </div>
  );
}
export default PrimeConditionsTernary;
