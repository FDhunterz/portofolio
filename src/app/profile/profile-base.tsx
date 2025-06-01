import AboutMeBase from "./about-me/about-me-base";
import ProfileContentBase from "./profile-content/profile-content-base";
import ProfileHeader from "./profile-header";
import "./print.css";

export default function ProfileBase() {
    return (
        <div className="flex flex-col " id="base">
            <ProfileHeader />
            <AboutMeBase/>
            <ProfileContentBase />
        </div>
  );
}