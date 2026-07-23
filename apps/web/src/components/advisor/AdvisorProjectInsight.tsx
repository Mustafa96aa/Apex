type AdvisorProjectInsightProps = {
  project: {
    name: string;
    progress: number;
    priority: string;
    status: string;
  };
};


export default function AdvisorProjectInsight({
  project,
}: AdvisorProjectInsightProps) {

  return (
    <div
      style={{
        background: "#f8fafc",
        padding: "28px",
        borderRadius: "20px",
        border: "1px solid #e2e8f0",
      }}
    >

      <h2>
        📂 Project Intelligence
      </h2>


      <h3>
        {project.name}
      </h3>


      <p>
        Progress:
        {" "}
        {project.progress}%
      </p>


      <p>
        Priority:
        {" "}
        {project.priority}
      </p>


      <p>
        Status:
        {" "}
        {project.status}
      </p>


    </div>
  );
}