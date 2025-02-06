import { Message } from '../types';

// 익스텐션이 설치되거나 업데이트될 때
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// 메시지 리스너
chrome.runtime.onMessage.addListener((message: Message, sender, sendResponse) => {
  switch (message.type) {
    case 'SAVE_CLIP':
      chrome.storage.local.set({ lastClip: message.payload }, () => {
        sendResponse({ success: true });
      });
      break;
    case 'GET_LAST_CLIP':
      chrome.storage.local.get(['lastClip'], (result) => {
        sendResponse({ data: result.lastClip });
      });
      break;
  }
  return true; // 비동기 응답을 위해 true 반환
}); 