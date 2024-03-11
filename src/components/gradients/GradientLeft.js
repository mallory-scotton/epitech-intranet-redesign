import React from 'react';
import GradientSrc from './GradientLeft.png'

export default function GradientLeft() {
    return (
        <div aria-hidden="true" className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0">
            <img src={GradientSrc} className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large" alt="left background" data-loaded="true"></img>
        </div>
    );
}