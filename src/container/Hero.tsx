import { Carousel } from "../components/Carousel";

export const Hero = () => {
  return (
    <div>
      <div
        id="hero"
        className="flex flex-col items-center justify-center h-screen text-white"
      >
        <Carousel />
      </div>
    </div>
  );
};
