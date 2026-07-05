import PageLayout from './PageLayout';
import { ASSET_BASE } from '../types';
import { Music, Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Props {
  onBack: () => void;
}

export default function MusicPage({ onBack }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(`${ASSET_BASE}assets/music/ours.mp3`);
    audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio playback prevented', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <PageLayout onBack={onBack} title="Our Song ❤️">
      <div className="glass-card w-full p-8 rounded-3xl flex flex-col items-center text-center">
        
        <div className="relative w-48 h-48 mb-8 cursor-pointer" onClick={togglePlay}>
          <div className={`absolute inset-0 rounded-full border-4 border-pink-primary border-dashed transition-all duration-1000 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}></div>
          <img 
            src={`${ASSET_BASE}assets/gifs/music-bear.gif`} 
            alt="Music Bear" 
            className="w-full h-full object-cover rounded-full border-4 border-white p-2 bg-white"
          />
          {isPlaying && (
            <>
              <Music className="absolute -top-2 -right-2 text-pink-primary animate-bounce" />
              <Music className="absolute top-1/2 -left-4 text-pink-400 animate-pulse delay-100" />
            </>
          )}
        </div>

        <h1 className="text-3xl font-bold text-pink-primary mb-2 font-cursive leading-tight">
          Every Love Story<br/>Has A Song 🎵
        </h1>
        <p className="text-gray-700 font-medium mb-8">
          Whenever this song plays...it reminds me of you. ❤️
        </p>

        <button 
          onClick={togglePlay}
          className="bg-pink-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mb-6"
        >
          {isPlaying ? <Pause fill="currentColor" size={20} /> : <Play fill="currentColor" size={20} />}
          <span>{isPlaying ? 'Pause' : 'Play Our Song'}</span>
        </button>

        <p className="text-sm text-pink-400 font-medium mb-8 px-4">
          💖 Close your eyes...and let this song remind you how special you are.
        </p>

        <div className="w-full border-t border-pink-100 pt-8 mt-4">
          <p className="text-gray-700 italic font-medium leading-loose text-lg transition-opacity duration-1000" style={{ opacity: isPlaying ? 1 : 0.5 }}>
            Every beat reminds me of your smile...<br/><br/>
            Every lyric reminds me of your kindness...<br/><br/>
            Every second reminds me how lucky I am to know you. ❤️
          </p>
        </div>

      </div>
    </PageLayout>
  );
}
