function PrimeConditionsReturn() {
  let content;
  const isAdmin = true;

  if (isAdmin) {
    content = (
      <div>
        <p>первый абз</p>
        <p>второй абз</p>
      </div>
    );
  }
  return content;
}
export default PrimeConditionsReturn;
