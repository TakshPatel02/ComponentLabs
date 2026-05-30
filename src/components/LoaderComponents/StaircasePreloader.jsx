import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * StaircasePreloader Component
 * A premium preloader that cycles through multi-lingual greetings with a fade effect,
 * then reveals content with a staggered staircase panel animation where
 * 5 vertical strips slide up one-by-one with cascading delays.
 */
export const StaircasePreloader = ({
  greetings = [
    "Hello",
    "Bonjour",
    "नमस्ते",
    "Hola",
    "Ciao",
    "Olá",
    "こんにちは",
    "Привет",
  ],
  durationPerWord = 250,
  panelCount = 5,
  panelStaggerMs = 100,
  accentColor = "#d24200",
  bgColor = "#f2f1ed",
  textColor = "#11100a",
  isGlobal = true,
  onComplete,
  children,
}) => {
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [textVisible, setTextVisible] = useState(true);
  const [phase, setPhase] = useState("cycling"); // 'cycling' | 'exiting' | 'done'
  const indexRef = useRef(0);

  // Greeting cycling logic — matches reference: fade out, swap text, fade in
  useEffect(() => {
    if (phase !== "cycling") return;

    const interval = setInterval(() => {
      // Fade out
      setTextVisible(false);

      setTimeout(() => {
        indexRef.current += 1;
        if (indexRef.current < greetings.length) {
          setCurrentGreeting(greetings[indexRef.current]);
          setTextVisible(true);
        } else {
          clearInterval(interval);
          // Begin exit sequence
          setTimeout(() => {
            setPhase("exiting");
            // After panels finish sliding, mark complete
            const totalPanelDuration =
              800 + (panelCount - 1) * panelStaggerMs + 200;
            setTimeout(() => {
              setPhase("done");
              if (onComplete) onComplete();
            }, totalPanelDuration);
          }, 400);
        }
      }, 150);
    }, durationPerWord);

    return () => clearInterval(interval);
  }, [greetings, durationPerWord, panelCount, panelStaggerMs, phase, onComplete]);

  // Build the panel array
  const panels = Array.from({ length: panelCount }, (_, i) => i);

  if (phase === "done") {
    return (
      <div className={`w-full ${isGlobal ? "min-h-screen" : "h-112.5"}`}>
        {children || (
          <div className="flex flex-col items-center justify-center min-h-120 text-center p-8 bg-[#1a1915] text-white rounded-xl select-none">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-['Space_Grotesk'] mb-4 text-[#e6e5e0]">
              Welcome to Your Amazing Page!
            </h2>
            <p className="text-neutral-400 font-['Newsreader'] italic text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              The staircase curtain has lifted, revealing your content with a
              premium cascading entrance.
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden w-full ${isGlobal ? "min-h-screen" : "h-112.5"}`}
      style={{ backgroundColor: "#120f13" }}
    >
      {/* ── Children rendered below the overlay ── */}
      <div className="absolute inset-0 z-0">
        {children || (
          <div className="flex flex-col items-center justify-center min-h-120 text-center p-8 bg-[#1a1915] text-white rounded-xl select-none">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-['Space_Grotesk'] mb-4 text-[#e6e5e0]">
              Welcome to Your Amazing Page!
            </h2>
            <p className="text-neutral-400 font-['Newsreader'] italic text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              The staircase curtain has lifted, revealing your content with a
              premium cascading entrance.
            </p>
          </div>
        )}
      </div>

      {/* ── Preloader Overlay — 5 Vertical Strips ── */}
      <div
        className={`${isGlobal ? "fixed" : "absolute"} inset-0 z-100 flex pointer-events-none`}
      >
        {panels.map((i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={
              phase === "exiting"
                ? { y: "-100%" }
                : { y: 0 }
            }
            transition={
              phase === "exiting"
                ? {
                    duration: 0.8,
                    ease: [0.77, 0, 0.175, 1],
                    delay: i * (panelStaggerMs / 1000),
                  }
                : {}
            }
            className="h-full flex-1"
            style={{
              backgroundColor: bgColor,
              borderRight:
                i < panelCount - 1
                  ? "1px solid oklab(0.26 0.01 0.01 / 0.1)"
                  : "none",
            }}
          />
        ))}

        {/* ── Center Greeting Text ── */}
        <motion.div
          className={`${isGlobal ? "fixed" : "absolute"} inset-0 flex items-center justify-center pointer-events-none`}
          animate={
            phase === "exiting" ? { opacity: 0 } : { opacity: 1 }
          }
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: accentColor }}
            />
            <span
              className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium uppercase tracking-[0.2em] select-none whitespace-nowrap"
              style={{
                color: textColor,
                opacity: textVisible ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              {currentGreeting}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StaircasePreloader;
