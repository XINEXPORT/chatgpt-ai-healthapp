import React, { useRef, useState } from 'react';
import TutorialOverlay from './TutorialOverlay.jsx';

const TutorialManager = () => {
    const [step, setStep] = useState(0);

    const componentsToHighlight = [
        { ref: useRef(), explanation: 'This is the home button. Click here to go back to the home page.' },
        { ref: useRef(), explanation: 'This is the conversation button. Click here to start a conversation.' },
        // Add more components and explanations as needed
    ];

    const handleNext = () => setStep((prev) => Math.min(prev + 1, componentsToHighlight.length - 1));
    const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

    return (
        <>
            {/* Render the tutorial overlay if the tutorial is active */}
            <TutorialOverlay
                highlightRef={componentsToHighlight[step].ref}
                explanation={componentsToHighlight[step].explanation}
                onNext={handleNext}
                onPrev={handlePrev}
                showPrev={step > 0}
                showNext={step < componentsToHighlight.length - 1}
            />
        </>
    );
};

export default TutorialManager;