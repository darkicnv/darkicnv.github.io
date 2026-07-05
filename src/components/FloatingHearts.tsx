import React, { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number; size: number; icon: string }[]>([]);

  useEffect(() => {
    const icons = ['❤️', '💖', '💕', '🌸', '✨'];
    
    // Create an initial set of hearts
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 10, // 10-20s duration
      size: Math.random() * 1.5 + 0.5, // 0.5 - 2rem
      icon: icons[Math.floor(Math.random() * icons.length)]
    }));
    
    setHearts(newHearts);
  }, []);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}rem`,
          }}
        >
          {heart.icon}
        </div>
      ))}
    </div>
  );
}
