import aboutMe from "./about-me.json";

export default function AboutMeSkillWidget() {
    const levelToPercentage = (level: string) => {
        switch (level) {
            case "Expert":
                return 100;
            case "Intermediate":
                return 50;
            case "Beginner":
                return 25;
            default:
                return 0;
        }
    }
    
    return <div className="flex flex-wrap gap-x-4 gap-y-4 ">
    {aboutMe.skills.map((skill) => {
        
        return (
            <div key={skill.name} className="flex w-full sm:w-[calc(50%-8px)] flex-row items-center border border-gray-100 rounded-md p-3 gap-2">
                <img className="w-10 h-10 mr-2" src={skill.icon} alt={skill.name} />
                <div className="flex flex-col w-full">
                    <p className="text-lg font-bold">{skill.name}</p>
                    <p className="text-sm text-gray-500 mb-2">{skill.description}</p>
                    <div className="flex w-full items-center gap-2">
                        <div className="flex-1 w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${levelToPercentage(skill.level)}%` }}></div>
                            </div>
                            <span className="text-sm">{skill.level}</span>
                    </div>
                </div>
            </div>
            )
        }
    )}
  </div>;
}