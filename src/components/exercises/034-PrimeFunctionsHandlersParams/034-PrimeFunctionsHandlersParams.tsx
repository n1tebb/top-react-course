function PrimeFunctionsHandlersParams() {
  function show(num: number) {
    alert(num);
  }

  return (
    <div>
      <button onClick={() => show(1)}>act1</button>
      <button onClick={() => show(2)}>act2</button>
      <button onClick={() => show(3)}>act3</button>
    </div>
  );
}
export default PrimeFunctionsHandlersParams;
