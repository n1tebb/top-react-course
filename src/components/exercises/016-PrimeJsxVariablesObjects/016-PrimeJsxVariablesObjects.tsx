function PrimeJsxVariablesObjects() {
  const obj = { name: 'Vlad', surname: 'Kutep' };

  return (
    <p>
      name: <span>{obj.name}</span> <br />
      surname: <span>{obj.surname}</span>
    </p>
  );
}
export default PrimeJsxVariablesObjects;
