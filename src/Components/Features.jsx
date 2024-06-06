import React, {useState} from "react";
import FeatureData from "./FeatureData";
import "./Features.css";

const Features = () => {
    const [activeTab, setActiveTab] = useState(FeatureData[0].id);
  
    const handleTabClick = (id) => {
      setActiveTab(id);
    };
  
    return (
      <section id="problem-target" className="problem-target-section">
        <div className="container">
          <h2>Features of CleverBooks</h2>
          <div className="tabs">
            <div className="tab-buttons">
              {FeatureData.map((feature) => (
                <button 
                  key={feature.id} 
                  className={`tab-button ${activeTab === feature.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(feature.id)}
                >
                  {feature.title}
                </button>
              ))}
            </div>
            <div className="tab-content">
              {FeatureData.map((feature) => (
                <div 
                  key={feature.id} 
                  className={`tab-panel ${activeTab === feature.id ? 'active' : ''}`}
                >
                  <p>{feature.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;