"use client";

import { useState } from "react";
import { Check, Circle, Plus, Sparkles } from "lucide-react";
import { ApexButton, ApexCard, ApexInput, ApexText, colors } from "@apex/ui";

type Section = "projects" | "tasks" | "knowledge" | "advisor" | "settings";
type Task = { id: number; title: string; done: boolean; project: string };

const initialTasks: Task[] = [
  { id: 1, title: "Complete dashboard foundation", done: true, project: "Apex Platform" },
  { id: 2, title: "Connect the data layer", done: false, project: "Apex Platform" },
  { id: 3, title: "Organize product notes", done: false, project: "Knowledge System" },
];

export default function WorkspacePage({ section }: { section: Section }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [message, setMessage] = useState("");

  const addTask = () => {
    const title = newTask.trim();
    if (!title) return;
    setTasks((current) => [...current, { id: Date.now(), title, done: false, project: "Inbox" }]);
    setNewTask("");
  };

  const toggleTask = (id: number) =>
    setTasks((current) => current.map((task) => task.id === id ? { ...task, done: !task.done } : task));

  const title = { projects: "Projects", tasks: "Tasks", knowledge: "Knowledge", advisor: "Apex Advisor", settings: "Settings" }[section];
  const subtitle = { projects: "Keep your active work moving forward.", tasks: "Choose the next small step and stay in flow.", knowledge: "A focused home for your ideas and reference material.", advisor: "A practical daily recommendation based on your workspace.", settings: "Personalize the way Apex supports your work." }[section];

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto" }}>
      <header style={{ marginBottom: 28 }}>
        <ApexText variant="title">{title}</ApexText>
        <ApexText variant="body" style={{ color: colors.muted, marginTop: 8 }}>{subtitle}</ApexText>
      </header>

      {section === "projects" && <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {["Apex Platform", "Knowledge System", "Personal Growth"].map((project, index) => <ApexCard key={project}>
          <ApexText variant="subtitle">{project}</ApexText>
          <ApexText variant="caption" style={{ marginTop: 10, minHeight: 38 }}>{["Building an intelligent workspace.", "Organizing ideas and information.", "A clear plan for the next quarter."][index]}</ApexText>
          <div style={{ height: 7, borderRadius: 99, background: colors.backgroundSecondary, marginTop: 22, overflow: "hidden" }}><div style={{ width: `${[68, 42, 25][index]}%`, height: "100%", background: colors.primary }} /></div>
          <ApexText variant="caption" style={{ marginTop: 8 }}>{[68, 42, 25][index]}% complete</ApexText>
        </ApexCard>)}</div>}

      {section === "tasks" && <ApexCard>
        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}><ApexInput value={newTask} onChange={(event) => setNewTask(event.target.value)} onKeyDown={(event) => event.key === "Enter" && addTask()} placeholder="Add a task for today" aria-label="New task" /><ApexButton onClick={addTask}><Plus size={17} /> Add</ApexButton></div>
        <div style={{ display: "grid", gap: 4 }}>{tasks.map((task) => <button key={task.id} onClick={() => toggleTask(task.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 4px", background: "transparent", border: 0, borderBottom: `1px solid ${colors.border}`, cursor: "pointer", textAlign: "left", color: colors.text }}>
          {task.done ? <Check size={19} color={colors.success} /> : <Circle size={19} color={colors.muted} />}<span style={{ flex: 1, textDecoration: task.done ? "line-through" : "none", color: task.done ? colors.muted : colors.text }}>{task.title}</span><span style={{ fontSize: 13, color: colors.muted }}>{task.project}</span>
        </button>)}</div>
      </ApexCard>}

      {section === "knowledge" && <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>{["Product vision", "Meeting notes", "Useful references"].map((note, index) => <ApexCard key={note}><ApexText variant="subtitle">{note}</ApexText><ApexText variant="caption" style={{ marginTop: 10 }}>Updated {index + 1} day{index ? "s" : ""} ago · {6 + index * 3} notes</ApexText><ApexText variant="body" style={{ marginTop: 18, color: colors.textSecondary }}>Capture context once, then find it exactly when you need it.</ApexText></ApexCard>)}</div>}

      {section === "advisor" && <ApexCard style={{ maxWidth: 720 }}><div style={{ display: "flex", gap: 12, alignItems: "center" }}><span style={{ display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: 12, background: colors.primarySoft, color: colors.primary }}><Sparkles size={21} /></span><div><ApexText variant="subtitle">Your focus for today</ApexText><ApexText variant="caption">Based on your open work</ApexText></div></div><ApexText variant="body" style={{ marginTop: 24, lineHeight: 1.7 }}>Finish connecting the data layer before starting a new feature. It will unblock the dashboard and give every following module a reliable foundation.</ApexText><ApexButton style={{ marginTop: 24 }} onClick={() => setMessage("Focus session started — your next task is ready.")}>Start focus session</ApexButton>{message && <ApexText variant="caption" role="status" style={{ marginTop: 14, color: colors.success }}>{message}</ApexText>}</ApexCard>}

      {section === "settings" && <ApexCard style={{ maxWidth: 640 }}><ApexText variant="subtitle">Workspace preferences</ApexText><label style={{ display: "grid", gap: 8, marginTop: 22, color: colors.textSecondary, fontSize: 14 }}>Display name<ApexInput defaultValue="Mustafa" /></label><label style={{ display: "grid", gap: 8, marginTop: 18, color: colors.textSecondary, fontSize: 14 }}>Daily planning reminder<ApexInput defaultValue="09:00" type="time" /></label><ApexButton style={{ marginTop: 24 }} onClick={() => setMessage("Preferences saved for this session.")}>Save preferences</ApexButton>{message && <ApexText variant="caption" role="status" style={{ marginTop: 14, color: colors.success }}>{message}</ApexText>}</ApexCard>}
    </div>
  );
}
