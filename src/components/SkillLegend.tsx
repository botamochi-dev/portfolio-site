export default function SkillLegend() {
  const levels = [
    { dots: 5, label: "個人で案件を受けられるレベル" },
    { dots: 4, label: "制作上で使用に困らないレベル" },
    { dots: 3, label: "そこそこの機能が作れるレベル" },
    { dots: 2, label: "基礎的な理解があるレベル" },
    { dots: 1, label: "使用したことはあるレベル" },
  ];

  return (
    <div className="skill-legend">
      <h3 className="skill-legend-title">スキルレベル</h3>
      <div className="skill-legend-items">
        {levels.map((level, index) => (
          <div key={index} className="skill-legend-item">
            <div className="skill-level">
              {[1, 2, 3, 4, 5].map((dot) => (
                <div
                  key={dot}
                  className={dot <= level.dots ? "skill-level-dot skill-level-dot-active" : "skill-level-dot skill-level-dot-inactive"}
                />
              ))}
            </div>
            <span>{level.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
