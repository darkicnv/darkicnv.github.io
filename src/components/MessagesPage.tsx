import PageLayout from './PageLayout';
import { ASSET_BASE, Friend } from '../types';

interface Props {
  onBack: () => void;
  onSelectFriend: (friend: Friend) => void;
}

export const FRIENDS: Friend[] = [
  { 
    id: 'nafisha', 
    name: "Nafisha", 
    img: "nafisha.jpg", 
    previewMsg: "Tap to read her birthday wish →",
    fullMessage: "Happy Birthday, my dearest patniji 😋 It feels incredible that a year of friendship, born within the halls of our university, has already become one of my life's sweetest blessings. Thank you for holding my hand through countless moments with your rare empathy and unwavering kindness. Your effortlessly desi soul and your quiet, timeless beauty make you truly one of a kind. May this year cherish you as deeply as your friendship has cherished me—today and always. ❤️‍🩹"
  },
  { 
    id: 'rohan', 
    name: "Rohan", 
    img: "rohan.jpg", 
    previewMsg: "Tap to read his birthday wish →",
    fullMessage: "Happy Birthday! Hope you have an incredible day filled with fun and laughter. You're a great friend and I'm lucky to know you. 🎉"
  },
  { 
    id: 'priya', 
    name: "Priya", 
    img: "priya.jpg", 
    previewMsg: "Tap to read her birthday wish →",
    fullMessage: "Dearest Mou, wishing you the happiest of birthdays! ✨ Keep shining and smiling always. So grateful for our bond and all the fun times we share."
  },
  { 
    id: 'anik', 
    name: "Anik", 
    img: "anik.jpg", 
    previewMsg: "Tap to read his birthday wish →",
    fullMessage: "Happy Birthday! 🎈 Wishing you success, joy, and endless blessings. Have a blast today, you totally deserve it!"
  },
  { 
    id: 'everyone', 
    name: "Everyone", 
    img: "everyone.jpg", 
    previewMsg: "One last birthday surprise →",
    isEveryone: true,
    fullMessage: "Happy Birthday from all of us! 💖 We love you so much and we are so incredibly proud of the person you are. Here is to another wonderful year of life!"
  }
];

export default function MessagesPage({ onBack, onSelectFriend }: Props) {
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
        {FRIENDS.map((friend) => (
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
