import ProfileContentProjects from "./profile-content-projects";
import ProfileContentSidebar from "./profile-content-sidebar";
import sections from "./section.json";

export default function ProfileContentBase() {  

    return (
        <div className="px-20">

            {sections.sections.map((section) => (
                <div key={section.keys} className="min-h-screen flex mb-20 print:flex-col print:mb-30 print:min-h-0" id={section.keys.toLowerCase()}>
                    <div className="xl:w-1/6 w-1/3 print:w-full">
                        <ProfileContentSidebar items={section.values} title={section.title} />
                    </div>
                    <div className="xl:w-5/6 w-2/3 print:w-full">
                        {section.values.map((project) => (
                            <ProfileContentProjects key={project.keys} title={project.title} description={project.description} image={project.image} link={project.link} date={project.date} keys={project.keys} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}