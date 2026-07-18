import ApexLayout from "@/components/layout/ApexLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import {
  ApexCard,
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


          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, 1fr)",
              gap: "24px",
              marginTop: "32px",
            }}
          >

            <ApexCard>
              <ApexText variant="subtitle">
                Projects
              </ApexText>

              <ApexText variant="body">
                Manage your active projects.
              </ApexText>
            </ApexCard>


            <ApexCard>
              <ApexText variant="subtitle">
                Advisor
              </ApexText>

              <ApexText variant="body">
                Your AI decision partner.
              </ApexText>
            </ApexCard>


            <ApexCard>
              <ApexText variant="subtitle">
                Tasks
              </ApexText>

              <ApexText variant="body">
                Stay focused and organized.
              </ApexText>
            </ApexCard>


          </div>

        </ApexSection>
      </ApexContainer>
    </ApexLayout>
  );
}