function PrimeFormingLoopTagsArray() {
  const arr: React.ReactElement[] = [];

  for (let i = 1; i <= 5; i++) {
    arr.push(<li key={i}>{i}</li>);
  }

  return <ul>{arr}</ul>;
}
export default PrimeFormingLoopTagsArray;
