import { useState } from 'react';

function PrimeStatesUsing() {
  const [name] = useState('Иван');
  const [surname] = useState('Иванов');
  const [age] = useState(25);

  return (
    <div>
      <p>
        Имя: <span>{name}</span>
      </p>
      <p>
        Фамилия: <span>{surname}</span>
      </p>
      <p>
        Возраст: <span>{age}</span>
      </p>
    </div>
  );
}
export default PrimeStatesUsing;
