import React from 'react';

const Header = ({ text = 'Feedback UI', bgColor, textColor }) => {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor
    };

    return (
        <header style={headerStyle}>
            <div className='container'>{text} by Zeofix</div>
        </header>
    );
}

export default Header;