import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengerContext';
import styles from '../styles/components/CountDown.module.css';

export function CountDown() {

    const { startNewChallenge } = useContext(ChallengesContext);

    let countDownTimeout: NodeJS.Timeout;

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {

        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }

    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRigth}</span>
                </div>
            </div>

            { hasFinished ? (
                <button type="button"
                    disabled
                    className={styles.startCountDownButton}>Ciclo encerrado</button>
            ) : (
                    <>
                        { !isActive ? (
                            <button type="button"
                                onClick={startCountDown}
                                className={styles.startCountDownButton}>Iniciar um ciclo</button>
                        ) : (
                                <button type="button"
                                    onClick={resetCountDown}
                                    className={`${styles.startCountDownButton} ${styles.startCountDownButtonActive}`}>Abandonar um ciclo</button>
                            )
                        }
                    </>
                )
            }

        </div>
    )
}