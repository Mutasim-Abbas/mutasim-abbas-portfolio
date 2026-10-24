"use client";

import { useState } from "react";
import Image from "next/image";
import { Code2 } from "lucide-react";
import { withBase } from "@/lib/content";

type PortraitProps = {
  /** Real file at /public/portrait.jpg (the GitHub profile photo). */
  src?: string;
  alt: string;
  caption?: string;
};

/**
 * Portrait frame for the one photo on the site. If the image fails to load, an
 * on-theme placeholder shows — never a broken-image icon.
 */
export function Portrait({
  src = withBase("/portrait.jpg"),
  alt,
  caption = "mutasim // portrait pending",
}: PortraitProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="glass glass--glow relative aspect-[4/5] w-full overflow-hidden rounded-[48px]">
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 320px, 42vw"
          className="object-cover object-center"
          priority
          onError={() => setFailed(true)}
        />
      ) : (
        // Intentional placeholder — glass frame, accent glyph, mono caption.
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-card-2">
          <Code2
            size={64}
            strokeWidth={1.25}
            className="text-accent-dim"
            aria-hidden
          />
          <p className="label-mono text-text-muted">{caption}</p>
        </div>
      )}
    </div>
  );
}
