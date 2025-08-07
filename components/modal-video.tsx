"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
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

      {/* Video visible desde el principio */}
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
        <video
          width={videoWidth}
          height={videoHeight}
          autoPlay
          loop
          muted
          controls
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
    </div>
  );
}
