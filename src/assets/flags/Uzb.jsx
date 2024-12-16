import React from "react";

const UzbekistanFlag = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
        >
            {/* Top Blue Stripe */}
            <rect y="0" width="40" height="6" fill="#1EB6E7" />

            {/* Middle White Stripe */}
            <rect y="6" width="40" height="6" fill="#FFFFFF" />

            {/* Middle Green Stripe */}
            <rect y="12" width="40" height="6" fill="#3DBE34" />

            {/* Bottom Red Stripe */}
            <rect y="18" width="40" height="2" fill="#FF4C0F" />

            {/* Crescent Moon */}
            <path
                d="M5.5 3.5C5.5 5.70914 3.70914 7.5 1.5 7.5C-0.709137 7.5 -2.5 5.70914 -2.5 3.5C-2.5 1.29086 -0.709137 -0.5 1.5 -0.5C3.70914 -0.5 5.5 1.29086 5.5 3.5Z"
                fill="#FFFFFF"
            />
            <circle cx="2" cy="3.5" r="1.5" fill="#1EB6E7" />

            {/* 12 Stars */}
            <circle cx="8.5" cy="2" r="0.5" fill="#FFFFFF" />
            <circle cx="10.5" cy="2" r="0.5" fill="#FFFFFF" />
            <circle cx="12.5" cy="2" r="0.5" fill="#FFFFFF" />
            <circle cx="8.5" cy="3.5" r="0.5" fill="#FFFFFF" />
            <circle cx="10.5" cy="3.5" r="0.5" fill="#FFFFFF" />
            <circle cx="12.5" cy="3.5" r="0.5" fill="#FFFFFF" />
            <circle cx="8.5" cy="5" r="0.5" fill="#FFFFFF" />
            <circle cx="10.5" cy="5" r="0.5" fill="#FFFFFF" />
            <circle cx="12.5" cy="5" r="0.5" fill="#FFFFFF" />
            <circle cx="10.5" cy="6.5" r="0.5" fill="#FFFFFF" />
            <circle cx="10.5" cy="8" r="0.5" fill="#FFFFFF" />
            <circle cx="10.5" cy="9.5" r="0.5" fill="#FFFFFF" />
        </svg>
    );
};

export default UzbekistanFlag;
