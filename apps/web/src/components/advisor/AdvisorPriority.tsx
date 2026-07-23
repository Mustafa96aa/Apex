type AdvisorPriorityProps = {
  priority: string;
};

export default function AdvisorPriority({
  priority,
}: AdvisorPriorityProps) {
  return (
    <span>
      Priority: {priority}
    </span>
  );
}