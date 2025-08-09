'use client';

import { useRef, useState } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import SecondaryIllustration from '@/public/images/secondary-illustration.svg';

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({ video, videoWidth, videoHeight }: ModalVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative">
      {/* Secondary illustration */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none"
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Secondary illustration"
        />
      </div>

      {/* Video con controles personalizados */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
        <video
          ref={videoRef}
          width={videoWidth}
          height={videoHeight}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full rounded-3xl object-cover"
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>

        {/* Overlay vignette (oscuro en bordes, claro al centro) */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(0,0,0,0)_55%,rgba(0,0,0,0.9)_100%)] bg-blend-multiply"></div>

        {/* Botón mute/unmute */}
        <button
          onClick={toggleMute}
          className="absolute top-4 left-1/2 -translate-x-1/2 rounded-lg bg-black/60 px-4 py-2 text-white transition hover:bg-black/80"
        >
          {isMuted ? '🔇' : '🔊'}
        </button>

        {/* Botón play/pause */}
        <button
          onClick={togglePlay}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-white/80 px-4 py-2 text-black transition hover:bg-white"
        >
          {isPlaying ? '⏸ Pausar' : '▶ Reproducir'}
        </button>
      </div>
    </div>
  );
}
