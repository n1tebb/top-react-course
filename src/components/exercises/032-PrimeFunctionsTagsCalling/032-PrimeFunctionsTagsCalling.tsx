function PrimeFunctionsTagsCalling() {
  function getDigitsSum(num: number) {
    const str = String(num);
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }

    return sum;
  }

  return <p>{getDigitsSum(12345)}</p>;
}
export default PrimeFunctionsTagsCalling;
