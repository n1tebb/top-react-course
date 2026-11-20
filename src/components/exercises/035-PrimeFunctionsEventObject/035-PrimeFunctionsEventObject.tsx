function PrimeFunctionsEventObject() {
  function showEvent(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event);
  }

  function showTarget(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event.target);
  }

  return (
    <div>
      <button onClick={showEvent}>Получить event</button>
      <button onClick={showTarget}>Получить event.target</button>
    </div>
  );
}
export default PrimeFunctionsEventObject;
