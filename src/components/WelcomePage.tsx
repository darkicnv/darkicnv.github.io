import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { ASSET_BASE } from '../types';
import { useState } from 'react';

interface WelcomePageProps {
  onMenu: () => void;
  onWishes: () => void;
  onSecret: () => void;
}

export default function WelcomePage({ onMenu, onWishes, onSecret }: WelcomePageProps) {
  const [showSecretLock, setShowSecretLock] = useState(false);

  return (
    <motion.main 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10"
    >
      <button 
        onClick={onWishes}
        className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center group"
      >
        <Bell className="text-pink-primary w-6 h-6 animate-pulse group-hover:animate-none" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          7
        </span>
      </button>

      <div className="glass-card rounded-3xl p-8 max-w-md w-full text-center flex flex-col items-center">
        <motion.img 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          src={`${ASSET_BASE}assets/stickers/hello.png`} 
          alt="Hello Kitty" 
          className="w-32 h-32 object-contain -mt-20 mb-6 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setShowSecretLock(true)}
        />
        
        <h1 className="text-4xl font-cursive font-bold text-pink-primary mb-4">
          Hi, Mou! 🌻💕
        </h1>
        
        <div className="space-y-4 text-gray-700 text-lg">
          <p>Welcome to your little corner of my heart.</p>
          <p>
            I made this tiny world just for you, filled with little surprises, cute moments, and lots of love.
          </p>
          <p className="italic font-medium text-pink-primary/80 mt-4">
            "Every click is another reason to smile today. ❤️"
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMenu}
          className="mt-8 bg-pink-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-pink-primary/30 hover:shadow-pink-primary/50 transition-all w-full"
        >
          Open My Heart ❤️
        </motion.button>
      </div>

      <footer className="absolute bottom-6 text-sm text-gray-500 font-medium">
        Made with ❤️ especially for <strong className="text-pink-primary">Mou</strong>
      </footer>

      {/* Secret Lock Modal */}
      {showSecretLock && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowSecretLock(false)}
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-sm w-full text-center"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">🔒 Secret Lock</h2>
            <p className="text-pink-primary mb-6">🤭 Find the little troublemaker...</p>
            
            <div className="grid grid-cols-3 gap-4">
              {['🐶','🐰','🐱','🦊','🪳','🐼','🐸','🐻','🐷'].map((emoji, i) => (
                <button
                  key={i}
                  onClick={() => emoji === '🪳' ? onSecret() : alert('Wrong one! Try again 🤭')}
                  className="text-4xl hover:scale-125 transition-transform p-4 bg-pink-50 rounded-xl hover:bg-pink-100"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.main>
  );
}
