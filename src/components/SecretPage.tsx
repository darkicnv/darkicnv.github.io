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
          A Little Secret ❤️
        </h1>
        
        <div className="text-gray-300 text-base leading-relaxed font-medium mb-4 space-y-4 text-left p-6 border border-pink-500/30 bg-gray-800/80 rounded-2xl backdrop-blur-sm shadow-[0_0_20px_rgba(255,94,153,0.1)] w-full">
          <p>If you've found this page...</p>
          <p>Congratulations. 😊</p>
          <p>This was hidden because these are the words I wanted only you to read.</p>
          <p>First of all...</p>
          <p className="text-pink-300 font-bold text-xl">I love you.</p>
          <p>There are so many things I never managed to say, and maybe I still don't know how to say them perfectly.</p>
          <p>One thing I have always thought about is that I wish I could have been there more during the difficult time you went through. I wanted to give you the space and privacy you deserved, but a part of me still wonders if I should have done more. I just hope you know that I cared, and I still do.</p>
          <p>There's another little secret behind this website.</p>
          <p>The birthday wishes you saw weren't there by accident.</p>
          <p>I reached out to your friends one by one, asking them if they would send me a birthday message and a photo for you. Seeing everyone come together to make you smile made me incredibly happy.</p>
          <p>I wanted this website to be more than just a birthday gift.</p>
          <p>I wanted it to become a small collection of memories, kind words, laughter, and love , all in one place.</p>
          <p>If this little world managed to make you smile, even for a moment...</p>
          <p>Then every hour I spent building it was worth it.</p>
          <p className="text-pink-300 font-bold text-xl text-center mt-6">Happy Birthday, Mou. ❤️</p>
          <p className="italic font-medium text-pink-400 mt-6 text-right">- Someone who will always wish the very best for you.</p>
        </div>

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
