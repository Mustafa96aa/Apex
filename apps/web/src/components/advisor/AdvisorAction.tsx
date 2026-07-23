type AdvisorActionProps = {
  label: string;
};

export default function AdvisorAction({
  label,
}: AdvisorActionProps) {
  return (
    <button
      style={{
        marginTop: "24px",
        padding: "14px 28px",
        borderRadius: "999px",
        background: "#2563eb",
        color: "white",
        border: "none",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}