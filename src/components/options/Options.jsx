export default function Options({ onUpdate, totalFeedback, reset }) {
  return (
    <>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={() => reset()}>Reset</button>}
    </>
  );
}
