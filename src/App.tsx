import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Page, Friend } from './types';
import FloatingHearts from './components/FloatingHearts';

// Pages
import LoadingPage from './components/LoadingPage';
import WelcomePage from './components/WelcomePage';
import MenuPage from './components/MenuPage';
import MessagesPage from './components/MessagesPage';
import FriendMessagePage from './components/FriendMessagePage';
import SmilePage from './components/SmilePage';
import MusicPage from './components/MusicPage';
import ReasonsPage from './components/ReasonsPage';
import ComplimentsPage from './components/ComplimentsPage';
import SurprisePage from './components/SurprisePage';
import YouPage from './components/YouPage';
import SecretPage from './components/SecretPage';
import LetterPage from './components/LetterPage';
import GalleryPage from './components/GalleryPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page | 'secret'>('loading');
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'loading':
        return <LoadingPage key="loading" onComplete={() => setCurrentPage('welcome')} />;
      case 'welcome':
        return (
          <WelcomePage 
            key="welcome" 
            onMenu={() => setCurrentPage('menu')} 
            onWishes={() => setCurrentPage('messages')} 
            onSecret={() => setCurrentPage('secret')} 
          />
        );
      case 'menu':
        return <MenuPage key="menu" onNavigate={(page) => setCurrentPage(page)} />;
      case 'messages':
        return (
          <MessagesPage 
            key="messages" 
            onBack={() => setCurrentPage('welcome')} 
            onSelectFriend={(friend) => {
              setSelectedFriend(friend);
              setCurrentPage('friend_message');
            }} 
          />
        );
      case 'friend_message':
        return selectedFriend ? (
          <FriendMessagePage 
            key="friend_message" 
            friend={selectedFriend} 
            onBack={() => setCurrentPage('messages')} 
          />
        ) : (
          <MessagesPage 
            key="messages" 
            onBack={() => setCurrentPage('welcome')} 
            onSelectFriend={(friend) => {
              setSelectedFriend(friend);
              setCurrentPage('friend_message');
            }} 
          />
        );
      case 'gallery':
        return <GalleryPage key="gallery" onBack={() => setCurrentPage('menu')} />;
      case 'smile':
        return <SmilePage key="smile" onBack={() => setCurrentPage('menu')} />;
      case 'music':
        return <MusicPage key="music" onBack={() => setCurrentPage('menu')} />;
      case 'reasons':
        return <ReasonsPage key="reasons" onBack={() => setCurrentPage('menu')} />;
      case 'compliments':
        return <ComplimentsPage key="compliments" onBack={() => setCurrentPage('menu')} />;
      case 'surprise':
        return <SurprisePage key="surprise" onBack={() => setCurrentPage('menu')} onOpenLetter={() => setCurrentPage('letter')} />;
      case 'letter':
        return <LetterPage key="letter" onBack={() => setCurrentPage('surprise')} />;
      case 'you':
        return <YouPage key="you" onBack={() => setCurrentPage('menu')} />;
      case 'secret':
        return <SecretPage key="secret" onBack={() => setCurrentPage('welcome')} />;
      default:
        return <WelcomePage key="welcome" onMenu={() => setCurrentPage('menu')} onWishes={() => setCurrentPage('messages')} onSecret={() => setCurrentPage('secret')} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-pink-50 selection:bg-pink-300 selection:text-white">
      {/* Background Hearts (Don't show in dark mode secret page) */}
      {currentPage !== 'secret' && <FloatingHearts />}
      
      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
    </div>
  );
}
