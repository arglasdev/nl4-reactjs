import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengerContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {

    const { currentExperience, experienceToNextlevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.floor((currentExperience * 100) / experienceToNextlevel);

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience}
                </span>
            </div>
            <span>{experienceToNextlevel} xp</span>
        </header>
    );
}