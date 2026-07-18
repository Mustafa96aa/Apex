import ApexLayout from "@/components/layout/ApexLayout";

import {
  DashboardHeader,
  AdvisorCard,
  ProjectSummary,
  TaskSummary,
} from "@/components/dashboard";

import {
  ApexContainer,
  ApexSection,
  ApexText,
} from "@apex/ui";


export default function DashboardPage() {
  return (
    <ApexLayout>

      <ApexContainer>

        <ApexSection>

          <DashboardHeader />


          <ApexText variant="body">
            Your intelligent workspace and advisor.
          </ApexText>



          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, 1fr)",
              gap: "24px",
              marginTop: "32px",
            }}
          >

            <ProjectSummary />


            <AdvisorCard />


            <TaskSummary />

          </div>


        </ApexSection>

      </ApexContainer>

    </ApexLayout>
  );
}