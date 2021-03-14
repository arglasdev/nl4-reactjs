import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengerContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

export function CountDown() {

    const { minutes, seconds, isActive, startCountDown, resetCountDown, hasFinished } = useContext(CountDownContext);

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('');


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