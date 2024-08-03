import React from 'react';
import PropTypes from 'prop-types';
import './ChatBubble.scss';

const ChatBubble = ({ message, isUser = false }) => {
    return (
        <div className={`chatBubble ${isUser ? 'user' : 'assistant'}`}>
            {message.split('\n').map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </div>
    );
};

ChatBubble.propTypes = {
    message: PropTypes.string.isRequired,
    isUser: PropTypes.bool
};

export default ChatBubble;
