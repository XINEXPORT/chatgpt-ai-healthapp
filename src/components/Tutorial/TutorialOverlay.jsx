import React from 'react';
import styles from './Tutorial.module.scss';

const TutorialOverlay = ({ highlightRef, explanation, onNext, onPrev, showPrev, showNext }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.highlightBox} ref={highlightRef}></div>
            <div className={styles.explanationBox}>
                <p>{explanation}</p>
                <div className={styles.buttons}>
                    {showPrev && <button onClick={onPrev}>Back</button>}
                    {showNext && <button onClick={onNext}>Next</button>}
                </div>
            </div>
        </div>
    );
};

export default TutorialOverlay;