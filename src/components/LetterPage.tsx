import PageLayout from './PageLayout';
import { ASSET_BASE } from '../types';

interface Props {
  onBack: () => void;
}

export default function LetterPage({ onBack }: Props) {
  return (
    <PageLayout onBack={onBack} title="A Letter For You 💌">
      <div className="glass-card p-8 rounded-3xl w-full flex flex-col items-center text-center mb-12">
        <img 
          src={`${ASSET_BASE}assets/gifs/letter.gif`} 
          alt="Letter" 
          className="w-32 h-32 object-contain mb-8 hover:scale-105 transition-transform"
        />

        <div className="text-left space-y-4 text-gray-700 leading-relaxed font-medium mb-8 bg-white p-6 rounded-2xl shadow-sm border border-pink-100">
          <p>Dear <strong>Mowsana (Mou)</strong>, ❤️</p>
          <p>If you've reached this page, thank you for taking the time to explore this little world I made just for you.</p>
          <p>This isn't just a website. It's a collection of little thoughts, little smiles, and little pieces of my heart that I wanted to share with you.</p>
          <p>Every page, every heart, every animation, and every tiny detail reminds me of one person... <strong>You.</strong></p>
          <p>I don't know what tomorrow holds, but I do know one thing... Meeting you has made my days brighter and my heart happier.</p>
          <p>Whenever you smile, I smile. Whenever you're happy, it makes me happy too. And whenever you're feeling down, I hope you remember that there's someone who genuinely cares about you.</p>
          <p>Please keep being the wonderful, kind, and beautiful person you are. Don't let anyone make you believe you're anything less than amazing.</p>
          <p>If life ever feels difficult, come back here. Read these little messages again. I hope they remind you how special you are.</p>
          <p>Thank you for being part of my life. Thank you for every conversation, every laugh, every smile, and every memory.</p>
          <p>No matter where life takes us... I'll always wish for your happiness. Because seeing you happy is one of my favorite things. ❤️</p>
          <p>Take care of yourself, Bachha. Eat well. Sleep on time. Smile often. And never forget... You'll always have a special place in my heart. 🌸</p>
        </div>

        <h2 className="text-2xl font-bold font-cursive text-pink-primary">
          With lots of love,<br/>❤️ Mohapurus, Always ❤️
        </h2>
      </div>
    </PageLayout>
  );
}
