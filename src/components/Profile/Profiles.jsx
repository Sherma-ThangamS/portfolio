import React from 'react'
import styles from "./Profiles.module.css";
import profiles from "../../data/profile.json"
const Profiles = () => {
    return (
        <div className={styles.profiles}>
            <h1>Feats</h1>
            <div className={styles.content}>
                <div className={styles.scrollingContainer}>
                        {profiles.map((profile, id) => (
                            <a key={id} className={styles.profileCard} href={profile.profile_url}>
                                <div className={styles.ProfileImage}>
                                    <img src={profile.link} alt={profile.info || 'Profile Image'} />
                                </div>
                                <span>{profile.info}</span>
                            </a>
                        ))}
                    </div>
                    <div className={styles.scrollingContainer}>
                        {profiles.map((profile, id) => (
                            <a key={id} className={styles.profileCard} href={profile.profile_url}>
                                <div className={styles.ProfileImage}>
                                    <img src={profile.link} alt={profile.info || 'Profile Image'} />
                                </div>
                                <span>{profile.info}</span>
                            </a>
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default Profiles