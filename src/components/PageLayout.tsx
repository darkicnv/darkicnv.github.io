import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Page } from '../types';

interface PageLayoutProps {
  children: ReactNode;
  onBack: () => void;
  title: string;
}

export default function PageLayout({ children, onBack, title }: PageLayoutProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 relative z-10 flex flex-col items-center custom-scrollbar overflow-y-auto"
    >
      <div className="w-full max-w-md flex justify-between items-center mb-6 pt-4 sticky top-0 z-20">
        <button 
          onClick={onBack}
          className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-sm text-pink-primary hover:bg-pink-50 transition-colors border border-white"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-2xl font-cursive font-bold text-pink-primary drop-shadow-sm">
          {title}
        </h2>
        <div className="w-12"></div>
      </div>
      
      <div className="w-full max-w-md flex flex-col items-center">
        {children}
      </div>
    </motion.div>
  );
}
