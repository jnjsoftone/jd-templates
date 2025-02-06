import React, { useEffect, useState } from 'react';
import { ClipData } from '../types';

const Popup: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [clipData, setClipData] = useState<ClipData | null>(null);

  useEffect(() => {
    // 현재 활성 탭의 URL 가져오기
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.url) {
        setUrl(tabs[0].url);
      }
    });
  }, []);

  const handleClip = async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id!,
        { type: 'CLIP_CONTENT' },
        (response: ClipData) => {
          setClipData(response);
          // 클립 데이터를 스토리지에 저장
          chrome.storage.local.set({ lastClip: response });
        }
      );
    });
  };

  return (
    <div className="popup">
      <h1>JCE Test Extension</h1>
      <div className="current-url">{url}</div>
      <button onClick={handleClip}>Clip Content</button>
      {clipData && (
        <div className="clip-data">
          <h2>{clipData.title}</h2>
          <div className="content">{clipData.content}</div>
          <div className="timestamp">
            {new Date(clipData.timestamp).toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup; 