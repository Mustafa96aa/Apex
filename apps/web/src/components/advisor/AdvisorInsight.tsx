type AdvisorInsightProps = {
  text: string;
};


export default function AdvisorInsight({
  text,
}: AdvisorInsightProps) {

  return (
    <div
      style={{
        padding: "20px",
        background: "#eff6ff",
        borderRadius: "16px",
      }}
    >

      <h3>
        🧠 Insight
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}