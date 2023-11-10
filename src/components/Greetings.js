import React from 'react';
import { useSelector } from 'react-redux';

function Greetings() {
  const randomGreeting = useSelector((state) => state.greetings.greetings);
  console.log(randomGreeting)

  return (
    <>
      <p>{randomGreeting.message}</p>
    </>
  );
}

export default Greetings;