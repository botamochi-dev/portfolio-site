import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";
import SkillLegend from "./SkillLegend";

export default function SkillsSection() {
  return (
    <section className="section">
      <h2 className="section-title">Skills</h2>
      <div className="section-card">
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
        <SkillLegend />
      </div>
    </section>
  );
}
