import PageLayout from './PageLayout';
import { ASSET_BASE, Friend } from '../types';

interface Props {
  friend: Friend;
  onBack: () => void;
}

export default function FriendMessagePage({ friend, onBack }: Props) {
  return (
    <PageLayout onBack={onBack} title="Birthday Wish 💌">
      <div className="w-full flex flex-col items-center">
        <p className="text-gray-600 mb-6 text-center font-medium">
          Someone wanted to make your birthday a little more special...
        </p>

        <div className="w-full h-px bg-pink-200 mb-8"></div>

        {/* Duo Pic */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-lg border-4 border-white rotate-[-3deg] hover:rotate-0 transition-transform duration-300 mb-8 bg-pink-50 flex items-center justify-center">
          <img 
            src={`${ASSET_BASE}assets/friends/${friend.img}`} 
            alt={friend.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${friend.name}&background=ffeaf1&color=FF5E99&size=256`;
            }}
          />
        </div>

        {/* Message */}
        <div className="glass-card w-full p-8 rounded-3xl relative">
          <div className="absolute -top-6 -left-2 text-5xl text-pink-300 opacity-50">❝</div>
          <h2 className="text-2xl font-bold font-cursive text-pink-primary mb-4 text-center">
            Happy Birthday Mou ❤️
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium whitespace-pre-wrap">
            {friend.fullMessage}
          </p>
          <div className="absolute -bottom-8 -right-2 text-5xl text-pink-300 opacity-50">❞</div>
        </div>

        <div className="w-full h-px bg-pink-200 my-8"></div>

        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium">With Lots of Love,</p>
          <p className="text-3xl font-bold font-cursive text-pink-primary mt-2">
            {friend.name} {friend.isEveryone ? "💖" : "🌸"}
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
