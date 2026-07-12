import PageLayout from './PageLayout';
import { ASSET_BASE } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Gift } from 'lucide-react';

interface Props {
  onBack: () => void;
  onOpenLetter: () => void;
}

export default function SurprisePage({ onBack, onOpenLetter }: Props) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    if (navigator.vibrate) {
      navigator.vibrate([100, 80, 100]);
    }
  };

  return (
    <PageLayout onBack={onBack} title="Surprise ❤️">
      <div className="flex flex-col items-center justify-center min-h-[60vh] w-full mb-12 text-center">
        
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="box"
              exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
              className="cursor-pointer text-center"
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-3xl font-bold font-cursive text-pink-primary mb-4">
                I Have A Surprise For You 🎁
              </h1>
              <p className="text-gray-700 font-medium mb-8">
                Tap the gift box...<br/>I hope it makes you smile. 🥺❤️
              </p>
              <motion.img 
                animate={{ rotate: [-5, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                src={`${ASSET_BASE}assets/gifs/gift.gif`} 
                alt="Gift Box" 
                className="w-64 h-64 object-contain mx-auto"
              />
            </motion.div>
          ) : (
            <motion.div
              key="surprise"
              initial={{ opacity: 0, scale: 0, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="w-full text-center glass-card p-6 rounded-3xl relative overflow-hidden"
            >
              <h2 className="text-3xl font-cursive font-bold text-pink-primary mb-2">
                ✨ Congratulations! 🎉 ✨
              </h2>
              <p className="text-gray-600 font-medium mb-6">
                You have unlocked...
              </p>
              
              <div className="flex flex-col gap-3 text-left w-full max-w-[260px] mx-auto mb-6">
                <div className="bg-pink-50 p-3 rounded-xl border border-pink-100 flex items-center gap-3">
                  <span className="text-2xl">🫂</span> <span className="font-semibold text-gray-700">Unlimited Hugs</span>
                </div>
                <div className="bg-pink-50 p-3 rounded-xl border border-pink-100 flex items-center gap-3">
                  <span className="text-2xl">😘</span> <span className="font-semibold text-gray-700">Unlimited Kisses</span>
                </div>
                <div className="bg-pink-50 p-3 rounded-xl border border-pink-100 flex items-center gap-3">
                  <span className="text-2xl">🌹</span> <span className="font-semibold text-gray-700">Unlimited Flowers</span>
                </div>
                <div className="bg-pink-50 p-3 rounded-xl border border-pink-100 flex items-center gap-3">
                  <span className="text-2xl">💖</span> <span className="font-semibold text-gray-700">Unlimited "I'm Proud Of You"</span>
                </div>
                <div className="bg-pink-50 p-3 rounded-xl border border-pink-100 flex items-center gap-3">
                  <span className="text-2xl">🤍</span> <span className="font-semibold text-gray-700">Unlimited Care</span>
                </div>
                <div className="bg-pink-50 p-3 rounded-xl border border-pink-100 flex items-center gap-3">
                  <span className="text-2xl">♾️</span> <span className="font-semibold text-gray-700">Unlimited Love</span>
                </div>
              </div>

              <p className="text-pink-primary font-bold italic mb-8">
                Valid Forever ❤️<br/>No Expiry Date.
              </p>

              <button 
                onClick={onOpenLetter}
                className="bg-pink-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 w-full max-w-xs mx-auto"
              >
                <span>💌 Open My Letter</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageLayout>
  );
}
