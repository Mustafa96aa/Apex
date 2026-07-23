type AdvisorMessageProps = {
  children: React.ReactNode;
};

export default function AdvisorMessage({
  children,
}: AdvisorMessageProps) {
  return (
    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#334155",
      }}
    >
      {children}
    </p>
  );
}