import React from 'react';

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'Cloud Architecture', level: 100 },
    { name: 'DevOps', level: 95 },
    { name: 'Security & Compliance', level: 90 },
    { name: 'Container', level: 90 },
    { name: 'IoT', level: 75 },
  ];

  return (
    <section className="py-20 bg-secondary" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary animate-progress-fill rounded-full"
                  style={{ '--progress-width': `${skill.level}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;