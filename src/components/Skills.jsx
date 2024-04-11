import React from 'react';

const SkillBar = ({ skill, level }) => {
  return (

    <div className="mb-4">
        
      <div className="flex justify-between items-center">
        <span className="text-lg">{skill}</span>
        <span className="text-gray-600">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 mt-1">
        <div
          className="h-full bg-yellow-500"
          style={{ width:'${level}%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className=''>
        <div className="">
      <SkillBar skill="HTML" level={90} />
      <SkillBar skill="Tailwind CSS/Bootstrap" level={80} />
      <SkillBar skill="UI/UX" level={95} />
    </div>
    <div>
      <SkillBar skill="JavaScript" level={75} />
      <SkillBar skill="Python" level={80} />
    </div>
    </div>

  );
};

export default Skills;