import React from 'react';
import GradientSrc from './GradientRight.png'

export default function GradientRight() {
    return (
        <div aria-hidden="true" className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12">
            <img src={GradientSrc} className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large" alt="right background" data-loaded="true"></img>
        </div>
    );
}
