type AdvisorDecisionProps = {
  decision: {
    title: string;
    situation: string;
    action: string;
    reason: string;
    impact: string;
  };
};


export default function AdvisorDecision({
  decision,
}: AdvisorDecisionProps) {

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "32px",
        borderRadius: "24px",
        border: "1px solid #e2e8f0",
      }}
    >

      <h2>
        🧠 {decision.title}
      </h2>


      <p>
        <strong>Situation</strong>
      </p>

      <p>
        {decision.situation}
      </p>


      <p>
        <strong>Recommended Action</strong>
      </p>

      <p>
        {decision.action}
      </p>


      <p>
        <strong>Why</strong>
      </p>

      <p>
        {decision.reason}
      </p>


      <p>
        <strong>Impact</strong>
      </p>

      <p>
        {decision.impact}
      </p>
<p>
<strong>Memory</strong>
</p>

<p>
Apex remembers:
<br />
{decision.reason}
</p>

    </div>
  );
}