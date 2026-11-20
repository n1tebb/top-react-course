function PrimeFunctionsEventObjectParams() {
  //заданиие н2
  function funcLast(
    arg1: string,
    arg2: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    console.log(arg1, arg2, event);
  }

  // Задание №3
  function funcFirst(
    event: React.MouseEvent<HTMLButtonElement>,
    arg1: string,
    arg2: string,
  ) {
    console.log(event, arg1, arg2);
  }

  // Задание №4
  function funcMiddle(
    arg1: string,
    event: React.MouseEvent<HTMLButtonElement>,
    arg2: string,
  ) {
    console.log(arg1, event, arg2);
  }

  return (
    <div>
      <button onClick={(event) => funcLast('eee', 'fff', event)}>
        №2 (event последний)
      </button>

      <button onClick={(event) => funcFirst(event, 'eee', 'fff')}>
        №3 (event первый)
      </button>

      <button onClick={(event) => funcMiddle('eee', event, 'fff')}>
        №4 (event второй)
      </button>
    </div>
  );
}
export default PrimeFunctionsEventObjectParams;
