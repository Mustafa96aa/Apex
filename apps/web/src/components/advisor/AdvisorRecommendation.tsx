type AdvisorRecommendationProps = {
  title: string;
  description: string;
};

export default function AdvisorRecommendation({
  title,
  description,
}: AdvisorRecommendationProps) {
  return (
    <div>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 600,
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#64748b",
        }}
      >
        {description}
      </p>
    </div>
  );
}