import React from 'react';
import { icons } from '../data/data';
import '../css/VerticalNbar.css';

const VerticalNBar: React.FC = () => {
    return (
        <div className="vertical-n-bar">
            <div className="home-icon-container">
                <a href="/">
                    <img src={icons.home} alt="Home" className="home-icon" />
                </a>
            </div>
           
        </div>
    );
};

export default VerticalNBar;
