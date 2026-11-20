function id(): string {
  return crypto.randomUUID();
}

function PrimeIdFunction() {
  const users = [
    { id: id(), name: 'user1' },
    { id: id(), name: 'user2' },
    { id: id(), name: 'user3' },
  ];
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default PrimeIdFunction;
