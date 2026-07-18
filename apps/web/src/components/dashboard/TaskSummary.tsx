import {
  ApexCard,
  ApexText,
} from "@apex/ui";


export default function TaskSummary() {
  return (
    <ApexCard>

      <ApexText variant="subtitle">
        Today's Tasks
      </ApexText>


      <div
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >

        <ApexText variant="body">
          ✓ Complete Dashboard Foundation
        </ApexText>


        <ApexText variant="body">
          ✓ Build Advisor Module
        </ApexText>


        <ApexText variant="body">
          ○ Connect Data Layer
        </ApexText>


      </div>


      <div
        style={{
          marginTop: "20px",
        }}
      >

        <ApexText variant="caption">
          3 active tasks
        </ApexText>

      </div>


    </ApexCard>
  );
}