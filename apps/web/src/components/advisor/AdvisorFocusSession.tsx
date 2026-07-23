type Props = {

  project: string;

  goal: string;

};


export default function AdvisorFocusSession({
  project,
  goal,
}: Props) {


return (

<div
style={{
background:"#eff6ff",
padding:"24px",
borderRadius:"20px",
border:"1px solid #dbeafe"
}}
>


<h2>
🧠 Focus Session
</h2>


<p>
Project:
{" "}
{project}
</p>


<p>
Goal:
{" "}
{goal}
</p>


<button
style={{
marginTop:"20px",
background:"#2563eb",
color:"white",
padding:"12px 24px",
borderRadius:"999px",
border:"none"
}}
>
Session Started
</button>


</div>

);

}