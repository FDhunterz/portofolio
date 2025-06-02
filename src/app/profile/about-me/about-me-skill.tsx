import { DataProfileModel } from "../[name]/profile_model";
import AboutMeSkillWidget from "./about-me-skill-widget";

export default function AboutMeSkill({aboutMe} : {aboutMe : DataProfileModel}) {
  return <div>
    <AboutMeSkillWidget aboutMe={aboutMe} />
  </div>;
}