// AudioPlayer.tsx
'use client'; // якщо використовуєш Next.js App Router

import React, { useState, useRef, useEffect } from 'react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Зміни цю змінну на свій трек
  const audioSrc = "/audio/audioh.mp3"; // або "https://example.com/song.mp3"

  // або дозволяємо користувачу завантажувати файл
  const [customSrc] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateTime);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

 

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Play error:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !audioRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pos * duration;
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

 
  const src = customSrc || audioSrc;

  return (
    <div className="w-full max-w-md mx-auto bg-yellow-500 
                    rounded-2xl shadow-2xl p-6 text-white border border-indigo-500/20">
      
      {/* Обкладинка / назва треку */}
      <div className="text-center mb-6">
        
        <h2 className="text-xl font-semibold truncate">
          {customSrc ? "Твій трек" : "Анатомія серця"}
        </h2>
      </div>

      {/* Прогрес */}
      <div 
        ref={progressRef}
        className="h-1.5 bg-white rounded-full mb-2 cursor-pointer relative overflow-hidden"
        onClick={handleSeek}
      >
        <div 
          className="absolute h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-100"
          style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
        />
      </div>

      <div className="flex justify-between text-xs text-white mb-4">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Кнопки керування */}
      <div className="flex items-center justify-center gap-6 mb-6">
        {/* Попередній трек (можна додати логіку плейлиста) */}
       

        <button
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 
                     flex items-center justify-center shadow-lg hover:from-indigo-500 hover:to-purple-500 
                     transition transform hover:scale-105 active:scale-95"
        >
          {isPlaying ? (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        {/* Наступний трек */}
        
      </div>


      {/* Сам аудіо елемент */}
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
      />
    </div>
  );
}