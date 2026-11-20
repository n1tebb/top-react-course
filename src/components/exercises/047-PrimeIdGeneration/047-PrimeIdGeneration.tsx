function PrimeIdGeneration() {
  const id1 = crypto.randomUUID();
  const id2 = crypto.randomUUID();

  const users = [
    { id: crypto.randomUUID(), name: 'user1' },
    { id: crypto.randomUUID(), name: 'user2' },
    { id: crypto.randomUUID(), name: 'user3' },
  ];

  return (
    <div>
      <p>ID 1: {id1}</p>
      <p>ID 2: {id2}</p>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default PrimeIdGeneration;
