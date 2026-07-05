import PageLayout from './PageLayout';
import { ASSET_BASE } from '../types';

interface Props {
  onBack: () => void;
}

export default function YouPage({ onBack }: Props) {
  return (
    <PageLayout onBack={onBack} title="Just You ❤️">
      <div className="glass-card p-8 rounded-3xl w-full flex flex-col items-center text-center mb-12">
        <img 
          src={`${ASSET_BASE}assets/stickers/heart-bear.png`} 
          alt="Cute Bear" 
          className="w-40 h-40 object-contain mb-8 hover:scale-105 transition-transform"
        />

        <h1 className="text-3xl font-bold font-cursive text-pink-primary mb-6 leading-tight">
          Can I Tell You A Secret? 🤍
        </h1>

        <div className="space-y-4 text-gray-700 leading-relaxed font-medium mb-8">
          <p>
            Do you know what my favorite part of the day is?
          </p>
          <p>
            It's when I get a message from you.
          </p>
          <p>
            Even a simple "Hi" somehow manages to make my entire day better.
          </p>
        </div>

        <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 w-full mb-4">
          <p className="italic text-pink-600 font-medium">
            "You're my favorite notification. 💖"
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
