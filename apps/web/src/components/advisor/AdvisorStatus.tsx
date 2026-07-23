type AdvisorStatusProps = {
  status: string;
};


export default function AdvisorStatus({
  status,
}: AdvisorStatusProps) {

  return (
    <div
      style={{
        padding: "20px",
        background: "#f8fafc",
        borderRadius: "16px",
      }}
    >

      <h3>
        System Status
      </h3>

      <p>
        {status}
      </p>

    </div>
  );
}