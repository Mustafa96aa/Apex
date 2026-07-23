import { useAdvisor } from "@/lib/advisor/useAdvisor";

import AdvisorMessage from "./AdvisorMessage";
import AdvisorRecommendation from "./AdvisorRecommendation";
import AdvisorAction from "./AdvisorAction";
import AdvisorInsight from "./AdvisorInsight";
import AdvisorPriority from "./AdvisorPriority";
import AdvisorStatus from "./AdvisorStatus";
import AdvisorDecision from "./AdvisorDecision";
import AdvisorProjectInsight from "./AdvisorProjectInsight";


export default function AdvisorPanel() {

  const advisor = useAdvisor();


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        background: "white",
        padding: "32px",
        borderRadius: "24px",
        border: "1px solid #e2e8f0",
      }}
    >

      <AdvisorStatus
        status={advisor.status}
      />


      <AdvisorMessage>
        {advisor.focus}
      </AdvisorMessage>


      <AdvisorInsight
        text={advisor.insight}
      />

     <AdvisorDecision
        decision={advisor.decision}
      />
{
  advisor.decision.project && (

    <AdvisorProjectInsight
      project={
        advisor.decision.project
      }
    />

  )
}
      <AdvisorPriority
        priority={advisor.priority}
      />


      <AdvisorRecommendation
        title="Recommendation"
        description={
          advisor.recommendation
        }
      />


      <AdvisorAction
        label={advisor.action}
      />

    </div>
  );
}