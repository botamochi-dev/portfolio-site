import Image from "next/image";
import { profile } from "@/data/profile";

export default function ProfileSection() {
  return (
    <section className="section">
      <h2 className="section-title">About Me</h2>
      <div className="section-card">
        <div className="profile-container">
          <div className="profile-image-wrapper">
            <div className="profile-image-placeholder">
              <Image 
                src={profile.profileImage} 
                alt="プロフィール" 
                width={128} 
                height={128} 
                className="profile-image" 
              />
            </div>
          </div>
          <div className="profile-content">
            <h3 className="profile-name">{profile.name}</h3>
            <p className="profile-title">{profile.title}</p>
            <p className="profile-bio">{profile.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
