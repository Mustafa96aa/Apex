import {
  ApexText,
  ApexButton,
} from "@apex/ui";


export default function DashboardHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "32px",
      }}
    >

      <div>
        <ApexText variant="title">
          Good morning, Mustafa
        </ApexText>

        <ApexText variant="body">
          Here is your current overview and focus for today.
        </ApexText>
      </div>


      <ApexButton>
        New Project
      </ApexButton>

    </div>
  );
}