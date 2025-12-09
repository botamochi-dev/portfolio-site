import Image from "next/image";
import { Skill } from "@/types";
import SkillLevel from "./SkillLevel";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-icon-wrapper">
        <Image src={skill.icon} alt={skill.name} width={56} height={56} />
      </div>
      <div className="skill-content">
        <h3 className="skill-name">{skill.name}</h3>
        <p className="skill-experience">{skill.experience}</p>
        <SkillLevel level={skill.level} />
      </div>
    </div>
  );
}
