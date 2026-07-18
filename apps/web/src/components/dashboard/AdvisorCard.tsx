import {
  ApexCard,
  ApexText,
} from "@apex/ui";


export default function AdvisorCard() {
  return (
    <ApexCard>

      <ApexText variant="subtitle">
        Apex Advisor
      </ApexText>


      <div
        style={{
          marginTop: "16px",
        }}
      >

        <ApexText variant="body">
          Current Focus
        </ApexText>

        <ApexText variant="caption">
          Building the foundation of Apex Dashboard.
        </ApexText>

      </div>


      <div
        style={{
          marginTop: "16px",
        }}
      >

        <ApexText variant="body">
          Recommendation
        </ApexText>

        <ApexText variant="caption">
          Continue building core product modules.
        </ApexText>

      </div>


      <div
        style={{
          marginTop: "20px",
          padding: "12px",
          borderRadius: "12px",
          background: "#DBEAFE",
        }}
      >

        <ApexText variant="caption">
          Status: Ready
        </ApexText>

      </div>


    </ApexCard>
  );
}