import { Message, ClipData } from '../types';

// 메시지 리스너
chrome.runtime.onMessage.addListener((message: Message, sender, sendResponse) => {
  if (message.type === 'CLIP_CONTENT') {
    const clipData: ClipData = {
      url: window.location.href,
      title: document.title,
      content: getSelectedContent(),
      timestamp: Date.now()
    };
    sendResponse(clipData);
  }
  return true;
});

// 선택된 컨텐츠 가져오기
function getSelectedContent(): string {
  const selection = window.getSelection();
  if (selection && selection.toString()) {
    return selection.toString();
  }
  
  // 선택된 텍스트가 없으면 메타 설명이나 첫 번째 단락 반환
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && metaDescription.getAttribute('content')) {
    return metaDescription.getAttribute('content') || '';
  }

  const firstParagraph = document.querySelector('p');
  return firstParagraph ? firstParagraph.textContent || '' : '';
} 