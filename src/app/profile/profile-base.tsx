import AboutMeBase from "./about-me/about-me-base";
import ProfileContentBase from "./profile-content/profile-content-base";
import ProfileHeader from "./profile-header";
import { DataProfileModel, SectionModel } from "./[name]/profile_model";
import "./print.css";

export default function ProfileBase({ data, section }: { data: DataProfileModel, section: SectionModel }) {
    return (
        <div className="flex flex-col " id="base">
            <ProfileHeader data={data} />
            <AboutMeBase aboutMe={data} />
            <ProfileContentBase sections={section} />
        </div>
  );
}