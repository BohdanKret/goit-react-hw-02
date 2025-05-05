export default function Feedback({ feedbackData, onPositiveFeedback }) {
  return (
    <>
      <p>Good: {feedbackData.good}</p>
      <p>Neutral: {feedbackData.neutral}</p>
      <p>Bad: {feedbackData.bad}</p>
      <p>Positive: {onPositiveFeedback()}%</p>
    </>
  );
}
