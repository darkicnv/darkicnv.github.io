import PageLayout from './PageLayout';
import { ASSET_BASE } from '../types';

interface Props {
  onBack: () => void;
}

export default function GalleryPage({ onBack }: Props) {
  const photos = [
    { src: 'photo1.jpg', caption: '✨ My favorite smile.' },
    { src: 'photo2.jpg', caption: '🌸 Beautiful... as always.' },
    { src: 'photo3.jpg', caption: '💖 A memory I\'ll never forget.' },
    { src: 'photo4.jpg', caption: '🫶 My happy place.' },
    { src: 'photo5.jpg', caption: '🥺 You\'re simply adorable.' },
    { src: 'photo6.jpg', caption: '❤️ This picture makes me smile every time.' },
  ];

  return (
    <PageLayout onBack={onBack} title="Our Memories ❤️">
      <div className="w-full text-center mb-8">
        <h1 className="text-3xl font-bold font-cursive text-pink-primary mb-2">
          Our Little Memory Book 📸
        </h1>
        <p className="text-gray-600 font-medium italic">
          Every picture tells a story...<br/>and every story reminds me of you. ❤️
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-lg mx-auto">
        {photos.map((photo, i) => (
          <div 
            key={i}
            className="bg-white p-2 rounded-xl shadow-sm border border-pink-100 transform hover:scale-105 transition-transform rotate-[random]"
            style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
          >
            <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-pink-50">
              <img 
                src={`${ASSET_BASE}assets/photos/${photo.src}`} 
                alt={`Memory ${i + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Mou&background=ffeaf1&color=FF5E99&size=256`;
                }}
              />
            </div>
            <p className="text-xs text-gray-700 text-center font-medium px-1">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 text-center mb-6">
        <p className="italic text-pink-600 font-medium">
          "Some memories fade...<br/>Mine become more beautiful because they're with you."
        </p>
      </div>
    </PageLayout>
  );
}
