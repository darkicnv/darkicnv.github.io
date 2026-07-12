import { motion } from 'framer-motion';
import { Page, ASSET_BASE } from '../types';
import { ArrowLeft } from 'lucide-react';

interface MenuPageProps {
  onNavigate: (page: Page) => void;
}

export default function MenuPage({ onNavigate }: MenuPageProps) {
  const menuItems = [
    { id: 'smile', title: 'Smile 🌸', icon: 'bear-love.png', delay: 0.1 },
    { id: 'gallery', title: 'Gallery 📸', icon: 'love-letter.png', delay: 0.15 },
    { id: 'music', title: 'Our Song 🎵', icon: 'hello.png', delay: 0.2 },
    { id: 'reasons', title: 'Reasons ❤️', icon: 'heart-bear.png', delay: 0.3 },
    { id: 'compliments', title: 'Compliments ✨', icon: 'hello.png', delay: 0.35 },
    { id: 'surprise', title: 'Surprise 🎁', icon: 'care-bear.png', delay: 0.4 },
    { id: 'you', title: 'Just You ✨', icon: 'bear-heart.png', delay: 0.5 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="min-h-screen p-6 relative z-10 flex flex-col items-center"
    >
      <div className="w-full max-w-md flex justify-between items-center mb-8 pt-4">
        <button 
          onClick={() => onNavigate('welcome')}
          className="p-3 bg-white rounded-full shadow-md text-pink-primary hover:bg-pink-50 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-2xl font-cursive font-bold text-pink-primary">Your Surprises</h2>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.delay }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate(item.id as Page)}
            className="glass-card flex flex-col items-center justify-center p-6 rounded-3xl gap-4 hover:shadow-pink-primary/30 transition-shadow"
          >
            <img 
              src={`${ASSET_BASE}assets/stickers/${item.icon}`} 
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
            <span className="font-semibold text-gray-800">{item.title}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
