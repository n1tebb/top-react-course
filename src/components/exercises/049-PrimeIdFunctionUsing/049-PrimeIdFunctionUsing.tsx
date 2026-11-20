function id(): string {
  return crypto.randomUUID();
}

const users = [
  { id: id(), name: 'user1', surn: 'surn1', age: 30 },
  { id: id(), name: 'user2', surn: 'surn2', age: 31 },
  { id: id(), name: 'user3', surn: 'surn3', age: 32 },
];

function PrimeIdFunctionUsing() {
  const rows = users.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.surn}</td>
        <td>{user.age}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <td>Имя</td>
          <td>Фамилия</td>
          <td>Возраст</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
export default PrimeIdFunctionUsing;
