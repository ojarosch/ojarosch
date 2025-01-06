import React from 'react';

interface Language {
  name: string;
  level: string;
  percentage: number;
}

const Languages = () => {
  const languages: Language[] = [
    { name: 'German', level: 'Native', percentage: 100 },
    { name: 'English', level: 'Fluent', percentage: 90 },
  ];

  return (
    <section className="py-20 bg-white" id="languages">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Languages</h2>
        <div className="max-w-2xl mx-auto grid gap-6">
          {languages.map((language) => (
            <div key={language.name} className="bg-secondary rounded-lg p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-medium">{language.name}</h3>
                <span className="text-gray-600">{language.level}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary animate-progress-fill rounded-full"
                  style={{ '--progress-width': `${language.percentage}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;