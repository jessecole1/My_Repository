import React from 'react';
import {useState} from 'react';
import Tab from '../components/Tab';

const Tabs = ({tabs}) => {
    // Setting variables called activeTab and setActiveTab
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (index) => {
        setActiveTab(index + 1);
    }

    console.log(activeTab);

    return (
        <div>
            <div>
        {tabs.map((tab, index) => (
            <div>
                <Tab 
                key = {index}
                label={tab.label}
                onClick={() => 
                    handleTabClick(index)
                }
                isActive = {index === activeTab}
                />
            </div>
        ))}
            </div>
        </div>
    );
};

export default Tabs;
