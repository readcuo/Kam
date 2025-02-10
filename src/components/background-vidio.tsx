"use client";

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export const BackgroundVideo = () => {
  const [isNight, setIsNight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const currentHour = new Date().getHours();
    setIsNight(currentHour >= 18 || currentHour < 7);
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-full rounded-[40px] overflow-hidden border-2 border-white/20 m-4 shadow-2xl">
      {mounted && (
        <ReactPlayer
          url={isNight ? 'https://res.cloudinary.com/depbfbxtm/video/upload/v1739168678/Background_Video_Animasi_Awan_Bergerak_eovhes.mp4' : 'https://res.cloudinary.com/depbfbxtm/video/upload/v1739169325/Cartoon_Cloud_background___Free_motion_graphics_clouds_overlay___After_Effects_Clouds_animation_sk6kbr.mp4'}
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover'
          }}
        />
      )}
    </div>
  );
};