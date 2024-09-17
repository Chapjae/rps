export default function Instructions() {
  return (
    <>
      <h1>Objective: Defeat your opponent in a duel to the death!</h1>

      <h2>Mechanics:</h2>
      <ul>
        <li>
          Timer: The amount of seconds you have left to make a decision. If you
          do not make a choice within the allotted time, you will lose 1 point
          in your initiative and your status will be changed to Fearful
        </li>
        <li>
          Status: The buff or debuff currently affecting your duelist. Only one
          can be applied at a time and receiving a new status effect will
          overwrite the previous one.
        </li>
        <li>
          Distance: This number represents the distance you are from your
          opponent. Certain attacks can't be used if the opponent is too far
          away.
        </li>
        <li>
          Initiative: When you and your opponent attack each other with the same
          attack strength, the one with higher initiative will land their attack
          first.
        </li>
        <li>
          Health: This number represents your health. First one to lose all
          theirs dies.
        </li>
        <li>
          Phases: Each round is divided into two phase, a movement phase and an
          action phase. Initiative and Status are determined during the Movement
          phase while Status and Damage are determined in the Attack phase.
        </li>
      </ul>

      <h2>The Movement Phase</h2>
      <p>
        The Movement Phase is when you and your opponent both vie for
        positioning before striking. Each of you will choose a movement option
        and the winner will gain Initiative, implying an advantage once combat
        begins. Keep an eye on the Distance display, Advancing movements will
        lower it and a Retreating movements will raise it. If you select a
        movement option that beats your opponent you will gain Initiative and
        vice versa. Once the Distance between you and your opponent reaches 0,
        the Attack Phase begins.
      </p>

      <ul>
        Movement options:
        <li>
          Approach (Advancing Movement): You take one step towards your
          opponent. Distance counter is reduced by 1. Beats Sidestep. Loses to
          Measure-up.
        </li>
        <li>
          Backstep (Retreating Movement): You take one step away from your
          opponent. Distance counter is increased by 1. Loses to Lunge and Rush. If your
          opponent chose Rush, you will be in the Vulnerable status.
        </li>
        <li>
          Measure-up: Halt your opponents advance with your weapon range. Loses
          to Side Step and Back Step
        </li>
        <li>
          Lunge (Advancing Movement): You take a large step forward your
          opponent. Distance counter is reduced by 2. Beats Backstep
        </li>
      </ul>
    </>
  );
}
