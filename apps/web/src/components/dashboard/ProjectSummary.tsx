import {
  ApexCard,
  ApexText,
} from "@apex/ui";


export default function ProjectSummary() {
  return (
    <ApexCard>

      <ApexText variant="subtitle">
        Projects
      </ApexText>


      <div
        style={{
          marginTop: "16px",
        }}
      >

        <ApexText variant="body">
          Active Projects
        </ApexText>


        <ApexText variant="caption">
          3 projects currently in progress.
        </ApexText>

      </div>


      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >

        <div>
          <ApexText variant="body">
            Apex Platform
          </ApexText>

          <ApexText variant="caption">
            Building the intelligent workspace.
          </ApexText>
        </div>


        <div>
          <ApexText variant="body">
            Knowledge System
          </ApexText>

          <ApexText variant="caption">
            Organizing ideas and information.
          </ApexText>
        </div>


      </div>


    </ApexCard>
  );
}