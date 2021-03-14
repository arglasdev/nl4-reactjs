import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengerContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://instagram.ffln1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123145849_967549040407925_8449309040249437860_n.jpg?_nc_ht=instagram.ffln1-1.fna.fbcdn.net&_nc_ohc=gpFewZsJ21wAX-VlJ4i&tp=1&oh=005872d2385840d79eaf16bd6c4afbb6&oe=6062010F" alt="perfil" />
            <div>
                <strong>Artur Milani</strong>

                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}