function PrimeFormingTagsArrayData() {
  const arr = ['a', 'b', 'c', 'd', 'e'];

  const res = arr.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    <ul>
      {res}
    </ul>
  );
}
export default PrimeFormingTagsArrayData;