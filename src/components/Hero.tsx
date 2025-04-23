import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "./ui/button";

type SlideButton = {
  label: string;
  variant?: "default" | "outline";
  href?: string;
};

const HERO_SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&w=800",
    heading: "Welcome to Afrokaviar",
    logo: '/afrokaviar.png',
    subheading: "Your Gateway to Unique Afro Cinema",
    description: "Discover the rich diversity of Afro-European films and series, carefully curated for global audiences.",
    buttons: [
      { label: "Start Your Free Trial", variant: "default", href: "#" },
      { label: "Sign In", variant: "outline", href: "#" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&w=800",
    heading: "Welcome to Afrokaviar",
    logo: '/afrokaviar.png',
    subheading: "Your Gateway to Unique Afro Cinema",
    description:
      "Discover the rich diversity of Afro-European films and series, carefully curated for global audiences.",
    buttons: [
      { label: "Continue", variant: "default", href: "#" },
      { label: "Sign In", variant: "outline", href: "#" },
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&w=800",
    heading: "Welcome to earth",
    logo: '/afrokaviar.png',
    subheading: "Your Gateway to Unique Afro Cinema",
    description:
      "Discover the rich diversity of Afro-European films and series, carefully curated for global audiences.",
    buttons: [
      { label: "Join Now", variant: "default", href: "#" },
      { label: "Sign in", variant: "outline", href: "#" },
    ],
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      setSelectedIndex(index);
    },
    [emblaApi]
  );

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const currentIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(currentIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onScroll);
    return () => {
      emblaApi.off("select", onScroll);
    };
  }, [emblaApi, onScroll]);

  const currentSlide = HERO_SLIDES[selectedIndex];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="embla w-full h-full absolute top-0 left-0" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className="embla__slide relative flex-[0_0_100%] min-w-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  filter: "brightness(0.5)",
                }}
              />
              <div className="container relative z-10 text-center px-4 max-w-2xl mx-auto h-full flex flex-col justify-center">
                {/* added image here */}
                <img 
                  src={slide.logo} 
                  alt={slide.heading}
                  className="w-80 h-14 mx-auto mb-10"
                />
                <h2 className="text-[#FFFFFF] font-bold text-3xl md:text-4xl lg:text-5xl mb-10">
                  {slide.heading}
                </h2>
                <h3 className="text-white text-2xl md:text-5xl lg:text-2xl font-bold mb-8">
                  {slide.subheading}
                </h3>
                <p className="text-white text-lg md:text-xl mb-2">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  {slide.buttons.map((btn, i) => (
                    <Button
                      key={i}
                      asChild={!!btn.href}
                      className={
                        btn.variant === "default"
                          ? "bg-[#7A3EF3] hover:bg-[#009A31] text-white px-8 py-6 rounded-xl text-lg"
                          : "border-white text-white bg-white/5 hover:bg-white/20 px-8 py-6 rounded-xl text-lg"
                      }
                      variant={btn.variant as any}
                    >
                      {btn.href ? <a href={btn.href}>{btn.label}</a> : btn.label}
                    </Button>
                  ))}
                </div>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero content - changes with slide */}
      {/* <div className="container relative z-10 text-center px-4 max-w-2xl animate-fade-in">
        <h2 className="text-[#FFFFFF] font-bold text-3xl md:text-4xl lg:text-5xl mb-1">
          {currentSlide.heading}
        </h2>
        <h3 className="text-white text-2xl md:text-5xl lg:text-2xl font-bold mb-2">
          {currentSlide.subheading}
        </h3>
        <p className="text-white text-lg md:text-xl mb-2">
          {currentSlide.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          {currentSlide.buttons.map((btn, i) => (
            <Button
              key={i}
              asChild={!!btn.href}
              className={
                btn.variant === "default"
                  ? "bg-[#7A3EF3] hover:bg-[#009A31] text-white px-8 py-6 rounded-xl text-lg"
                  : "border-white text-white bg-white/5 hover:bg-white/20 px-8 py-6 rounded-xl text-lg"
              }
              variant={btn.variant as any}
            >
              {btn.href ? <a href={btn.href}>{btn.label}</a> : btn.label}
            </Button>
          ))}
        </div>
      </div> */}

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              selectedIndex === index ? "bg-[#7A3EF3]" : "bg-green-700"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
