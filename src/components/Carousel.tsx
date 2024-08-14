import * as Tabs from "@radix-ui/react-tabs";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Dispatch, useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

type CarouselProps = {
  activetheme: string;
  setActivetheme: Dispatch<string>;
};
const slides = [
  {
    id: "slide1",
    title: "Welcome to Our Site",
    subtitle:
      "Experience the best products and services tailored just for you.",
    image: hero2,
    classnames: "text-white",
  },
  {
    id: "slide2",
    title: "Discover New Horizons",
    subtitle: "Unleash your potential with our cutting-edge solutions.",
    image: hero3,
    classNames: " text-slate-500",
  },
  {
    id: "slide3",
    title: "",
    subtitle: "",
    image: hero1,
  },
];

export const Carousel = ({ activetheme, setActivetheme }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setActivetheme(slides[currentIndex].image);
    console.log(activetheme);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setActivetheme(slides[currentIndex].image);
    console.log(activetheme);
  };

  return (
    console.log(slides[0].classnames),
    (
      <Tabs.Root
        className="relative flex items-center justify-center h-screen text-white !min-w-full"
        value={slides[currentIndex].id}
      >
        <Tabs.List className="absolute inset-0 z-10 flex justify-between items-center px-4">
          <Tabs.Trigger
            asChild
            value={
              slides[(currentIndex - 1 + slides.length) % slides.length].id
            }
          >
            <button
              className="bg-white/30 rounded-full p-2 hover:bg-white/50"
              onClick={handlePrev}
            >
              <ChevronLeftIcon className="w-6 h-6 text-white" />
            </button>
          </Tabs.Trigger>
          <Tabs.Trigger
            asChild
            value={slides[(currentIndex + 1) % slides.length].id}
          >
            <button
              className="bg-white/30 rounded-full p-2 hover:bg-white/50"
              onClick={handleNext}
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </button>
          </Tabs.Trigger>
        </Tabs.List>

        {slides.map((slide, index) => (
          <Tabs.Content
            key={slide.id}
            value={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            } ${slide.classnames}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    )
  );
};
