export type Page = 
  | 'loading' 
  | 'welcome' 
  | 'menu' 
  | 'letter' 
  | 'messages' 
  | 'friend_message'
  | 'music' 
  | 'reasons'
  | 'compliments'
  | 'smile' 
  | 'surprise' 
  | 'you'
  | 'gallery';

export interface Friend {
  id: string;
  name: string;
  img: string;
  previewMsg: string;
  fullMessage: string;
  isEveryone?: boolean;
}

export const ASSET_BASE = "./";
