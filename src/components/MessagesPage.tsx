import { useEffect, useState } from 'react';
import PageLayout from './PageLayout';
import { ASSET_BASE, Friend } from '../types';

interface Props {
  onBack: () => void;
  onSelectFriend: (friend: Friend) => void;
}

export default function MessagesPage({ onBack, onSelectFriend }: Props) {
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    fetch(`${ASSET_BASE}data/friends.json`)
      .then(res => res.json())
      .then(data => setFriends(data))
      .catch(err => console.error("Error loading friends:", err));
  }, []);

  return (
    <PageLayout onBack={onBack} title="Birthday Wishes 💌">
      <img 
        src={`${ASSET_BASE}assets/gifs/messages.gif`} 
        alt="Letters" 
        className="w-48 h-auto rounded-3xl shadow-md mb-6 object-contain bg-white/50 p-2"
      />
      
      <h1 className="text-3xl font-bold font-cursive text-pink-primary mb-4 text-center">
        Birthday Wishes 💌
      </h1>
      
      <p className="text-gray-700 font-medium text-center mb-8 px-4 leading-relaxed">
        Some people wanted to make your day a little more special.<br/>
        Every card below hides a birthday wish made just for you. ❤️
      </p>
      <div className="w-full h-px bg-pink-200 mb-8"></div>
      
      <div className="w-full space-y-4 pb-12">
        {friends.map((friend) => (
          <button 
            key={friend.id}
            onClick={() => onSelectFriend(friend)}
            className="w-full flex items-center p-4 bg-white rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-all hover:scale-[1.02] text-left group gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-pink-100 overflow-hidden shrink-0 border-2 border-pink-200">
              <img 
                src={`${ASSET_BASE}assets/friends/${friend.img}`} 
                alt={friend.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${friend.name}&background=ffeaf1&color=FF5E99`;
                }}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                {friend.isEveryone ? "💖" : "💌"} From {friend.name}
              </h3>
              <p className="text-pink-primary text-sm font-medium mt-1">
                {friend.previewMsg}
              </p>
            </div>
          </button>
        ))}
      </div>
    </PageLayout>
  );
}
