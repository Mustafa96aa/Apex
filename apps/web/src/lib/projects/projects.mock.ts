export type Project = {
  id: string;
  name: string;
  status: "active" | "paused" | "completed";
  progress: number;
  priority: "high" | "medium" | "low";
};


export const projectsMock: Project[] = [

  {
    id: "apex-core",
    name: "Apex Core Platform",
    status: "active",
    progress: 35,
    priority: "high",
  },


  {
    id: "knowledge",
    name: "Knowledge System",
    status: "active",
    progress: 20,
    priority: "medium",
  },


  {
    id: "marketing",
    name: "Marketing Engine",
    status: "paused",
    progress: 10,
    priority: "low",
  },

];