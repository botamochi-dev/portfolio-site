interface SkillLevelProps {
  level: number;
}

export default function SkillLevel({ level }: SkillLevelProps) {
  return (
    <div className="skill-level">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={dot <= level ? "skill-level-dot skill-level-dot-active" : "skill-level-dot skill-level-dot-inactive"}
        />
      ))}
    </div>
  );
}
