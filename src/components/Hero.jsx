import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";

const heroTexts = ["Business Grow", "Life Easier", "Work Better"];
export default function Hero() {
  const [heroText, setHeroText] = useState(0);
  useEffect(() => {
    const textInterval = setInterval(() => {
      setHeroText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearTimeout(textInterval);
  }, []);
  return (
    <div className="hero bg-base-100 min-h-[calc(100dvh-89px)]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold">
            Everything we do to make{" "}
            <span className="text-info">{heroTexts[heroText]}.</span>
          </h1>
          <p className="py-6 text-balance">
            Find the right space, services, and support, so your business and
            its people can work their way, every day.
          </p>
          <div className="flex justify-center gap-5 items-center">
            <button className="btn btn-info">Book Now</button>
            <div>
              <button className="btn text-info btn-circle shadow-xl">
                <FaPlay />
              </button>
              <span className="ml-2">How It Works</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
