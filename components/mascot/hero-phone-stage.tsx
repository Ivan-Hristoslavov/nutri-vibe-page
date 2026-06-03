import { Screenshot } from "@/components/media/Screenshot";

type HeroPhoneStageProps = {
  src: string;
  alt: string;
};

export function HeroPhoneStage({ src, alt }: HeroPhoneStageProps) {
  return (
    <div className="hero-phone-stage">
      <div aria-hidden className="hero-phone-halo brand-gradient" />
      <div className="hero-phone-float">
        <Screenshot src={src} alt={alt} priority className="relative z-[2] mx-auto w-full" />
      </div>
    </div>
  );
}
