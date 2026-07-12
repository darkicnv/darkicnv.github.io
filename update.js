const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'src/components/MessagesPage.tsx');
let content = fs.readFileSync(p, 'utf8');

const newArray = `export const FRIENDS: Friend[] = [
  { 
    id: 'nafisa', 
    name: "Nafisa", 
    img: "nafisa.jpg", 
    previewMsg: "Tap to read her birthday wish →",
    fullMessage: "Happy Birthday, my dearest patniji 😋, It feels incredible that a year of friendship, born within the halls of our university, has already become one of my life's sweetest blessings. Thank you for holding my hand through countless moments with your rare empathy and unwavering kindness. Your effortlessly desi soul and your quiet, timeless beauty make you truly one of a kind. May this year cherish you as deeply as your friendship has cherished me—today and always. ❤️‍🩹"
  },
  { 
    id: 'nipa', 
    name: "Nipa", 
    img: "nipa.jpg", 
    previewMsg: "Tap to read his birthday wish →",
    fullMessage: "Happy Birthday! Hope you have an incredible day filled with fun and laughter. You're a great friend and I'm lucky to know you. 🎉"
  },
  { 
    id: 'jenny', 
    name: "Jenny", 
    img: "jenny.jpg", 
    previewMsg: "Tap to read her birthday wish →",
    fullMessage: "Dearest Mou, wishing you the happiest of birthdays! ✨ Keep shining and smiling always. So grateful for our bond and all the fun times we share."
  },
  { 
    id: 'parama', 
    name: "Parama", 
    img: "parama.jpg", 
    previewMsg: "Tap to read her birthday wish →",
    fullMessage: "Happy Birthday! 🎈 Wishing you success, joy, and endless blessings. Have a blast today, you totally deserve it!"
  },
  { 
    id: 'raniya', 
    name: "Raniya", 
    img: "raniya.jpg", 
    previewMsg: "Tap to read her birthday wish →",
    fullMessage: "Happy Birthday! 🎈 Wishing you success, joy, and endless blessings. Have a blast today, you totally deserve it!"
  },
  { 
    id: 'nishat', 
    name: "Nishat", 
    img: "nishat.jpg", 
    previewMsg: "Tap to read her birthday wish →",
    fullMessage: "Happy Birthday! 🎈 Wishing you success, joy, and endless blessings. Have a blast today, you totally deserve it!"
  },
  { 
    id: 'tte', 
    name: "a", 
    img: "ama.jpg", 
    previewMsg: "Tap to read her birthday wish →",
    fullMessage: "Happy Birthday! 🎈 Wishing you success, joy, and endless blessings. Have a blast today, you totally deserve it!"
  },
  { 
    id: 'everyone', 
    name: "Everyone", 
    img: "everyone.jpg", 
    previewMsg: "One last birthday surprise →",
    isEveryone: true,
    fullMessage: "Happy Birthday from all of us! 💖 We love you so much and we are so incredibly proud of the person you are. Here is to another wonderful year of life!"
  }
];`;

content = content.replace(/export const FRIENDS: Friend\[\] = \[([\s\S]*?)\];/, newArray);
fs.writeFileSync(p, content, 'utf8');
console.log('Updated file');
