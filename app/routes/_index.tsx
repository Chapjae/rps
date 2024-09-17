import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <>
      <h1>Riposte, Parry, Strike</h1>
      <Link to={'/instructions'}>How to Play</Link>
      <Link to={'/game'}>Start Game!</Link>
    </>
  );
}
