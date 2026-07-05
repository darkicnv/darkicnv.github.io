import PageLayout from './PageLayout';
import { ASSET_BASE } from '../types';

interface Props {
  onBack: () => void;
}

export default function SmilePage({ onBack }: Props) {
  return (
    <PageLayout onBack={onBack} title="Your Smile ❤️">
      <div className="glass-card p-8 rounded-3xl w-full text-center flex flex-col items-center mb-12">
        <img 
          src={`${ASSET_BASE}assets/stickers/bear-love.png`} 
          alt="Smile" 
          className="w-48 h-48 object-contain mb-6 drop-shadow-sm transition-transform hover:scale-105"
        />
        
        <h1 className="text-3xl font-bold font-cursive text-pink-primary mb-6">
          I Saw You... ❤️
        </h1>
        
        <p className="text-gray-700 text-lg mb-8 font-medium leading-relaxed">
          And somehow...the whole world became a little brighter.<br/><br/>
          Maybe that's your superpower.✨
        </p>

        <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 w-full mb-4">
          <p className="italic text-pink-600 font-medium">
            "You have no idea how happy you make me."
          </p>
        </div>

      </div>
    </PageLayout>
  );
}
