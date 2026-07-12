import { motion } from 'framer-motion';
import { ASSET_BASE } from '../types';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export default function SecretPage({ onBack }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      className="min-h-screen bg-gray-900 text-white p-6 relative z-10 flex flex-col items-center justify-center overflow-y-auto"
    >
      <div className="max-w-md w-full flex flex-col items-center text-center space-y-6 pt-12 pb-12">
        <motion.img 
          initial={{ y: 20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          src={`${ASSET_BASE}assets/gifs/milk-and-mocha.gif`}
          alt="Secret"
          className="w-48 h-auto drop-shadow-[0_0_15px_rgba(255,94,153,0.5)] rounded-2xl mb-4 bg-white/10 p-2"
        />
        
        <h1 className="text-3xl font-bold text-pink-400 font-cursive tracking-wider">
          🤫 You Found My Secret!
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed font-medium mb-4">
          Hi, Bachha...<br/>
          I honestly didn't think you'd find this page.<br/><br/>
          But since you're here...<br/>
          you deserve one last little surprise. ❤️
        </p>
        
        <div className="p-6 border border-pink-500/30 bg-gray-800/80 rounded-2xl backdrop-blur-sm shadow-[0_0_20px_rgba(255,94,153,0.1)] w-full text-left space-y-3 my-6">
          <h2 className="text-xl font-bold font-cursive text-pink-300 mb-4 text-center">Things I Wish For... 🌸</h2>
          <p className="text-gray-300">🤍 I wish you always stay healthy.</p>
          <p className="text-gray-300">😊 I wish your smile never fades.</p>
          <p className="text-gray-300">✨ I wish every dream of yours comes true.</p>
          <p className="text-gray-300">🌷 I wish you always know how loved you are.</p>
          <p className="text-gray-300">🫂 I wish I could hug you whenever you're sad.</p>
          <p className="text-gray-300 mt-4">💖 And most of all...</p>
          <p className="text-pink-300 font-bold mt-2 text-lg">I wish life is always kind to you, Mou.</p>
        </div>

        <p className="italic text-pink-400 font-medium text-lg px-4 mb-8">
          "You deserve every beautiful thing this world has to offer." ❤️
        </p>

        <button 
          onClick={onBack}
          className="bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          <span>🏠 Go Back Home</span>
        </button>
      </div>
      
      {/* Dark mode hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-[-1]">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            💖
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
