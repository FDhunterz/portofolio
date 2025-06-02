import AboutMeCodestyle from "./about-me-codestyle";
import AboutMeContact from "./about-me-contact";
import AboutMeSkill from "./about-me-skill";
import { DataProfileModel } from "../[name]/profile_model";

export default function AboutMeBase({aboutMe} : {aboutMe : DataProfileModel}) {
  return (
    <div className="flex flex-col pb-60 print:pb-20 px-20 items-center" id="about-me">
      <h2 className="text-2xl font-bold text-center mb-5">About Me</h2>
      <p className="text-center mb-10 max-w-200">{aboutMe.about_me}</p>
      <AboutMeSkill aboutMe={aboutMe} />
      <AboutMeContact aboutMe={aboutMe}/>
      <AboutMeCodestyle aboutMe={aboutMe} />
    </div>
  );
}