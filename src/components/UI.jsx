import React, { useState } from 'react';

function UI() {
  const [activeTab, setActiveTab] = useState('chat'); // Initial active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="container"> {/* Add a container for layout */}
        <nav className="tabs"> {/* Add a class for tab styling */}
          <button
            className={`tab ${activeTab === 'chat' ? 'active' : ''}`}
            onClick={() => handleTabClick('chat')}
          >
            Chat
          </button>
          <button
            className={`tab ${activeTab === 'create' ? 'active' : ''}`}
            onClick={() => handleTabClick('create')}
          >
            Create
          </button>
        </nav>
        <div className="tab-content"> {/* Add a class for content styling */}
          {activeTab === 'chat' && <Chat />}
          {activeTab === 'create' && <Create />}
        </div>
      </div>
    </div>
  );
}

export default UI;
