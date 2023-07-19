import React, { useState } from 'react';
import { plusCircle } from '../Assets';

const Accordions = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="w-full">
            <div
                className={`flex justify-between items-center border hover:bg-slate-100 border-solid border-transparent p-md border-b-black cursor-pointer `} onClick={toggleAccordion} >
                <span className='lg:text-base md:text-sm text-xs'>{title}</span>
                <img src={plusCircle} lt="plus-circle" className={`md:w-[20px] w-[15px] transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </div>

            <div className="bg-slate-50" style={
                {
                    height: isExpanded ? '120px' : '0px',
                    overflow: 'hidden',
                    transition: 'height 0.5s ease-in-out',
                    
                }} >
                <p className="lg:text-sm text-xs md:p-md p-sm">{content}
                </p>
            </div>
        </div>
    );
};

export default Accordions;
