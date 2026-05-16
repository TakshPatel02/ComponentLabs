import { useRef, useEffect } from "react";

const FluidCursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let mouseMoved = false;
    let animationFrameId;

    const pointer = {
      x: 0.5 * window.innerWidth,
      y: 0.5 * window.innerHeight,
    };
    
    const params = {
      pointsNumber: 40,
      widthFactor: 0.3,
      mouseThreshold: 0.6,
      spring: 0.4,
      friction: 0.5,
    };

    const trail = new Array(params.pointsNumber);
    for (let i = 0; i < params.pointsNumber; i++) {
      trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
      };
    }

    const updateMousePosition = (eX, eY) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = eX - rect.left;
      pointer.y = eY - rect.top;
    };

    const onMouseMove = (e) => {
      mouseMoved = true;
      updateMousePosition(e.clientX, e.clientY);
    };
    
    const onTouchMove = (e) => {
      mouseMoved = true;
      if (e.targetTouches.length > 0) {
        updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
      }
    };

    const setupCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const update = (t) => {
      if (!mouseMoved) {
        pointer.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * canvas.width;
        pointer.y = (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) * canvas.height;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = "round";
      ctx.beginPath();
      // Use ComponentLab's primary accent color (#E8567A) for the trail
      ctx.strokeStyle = "rgba(232, 86, 122, 0.8)";
      
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }
      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      animationFrameId = window.requestAnimationFrame(update);
    };

    setupCanvas();
    update(0);

    // Using window allows tracking mouse even if it leaves the component slightly
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("resize", setupCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", setupCanvas);
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden min-h-[400px] bg-surface rounded-xl flex items-center justify-center cursor-crosshair">
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h3 className="font-section-heading text-2xl md:text-4xl text-primary font-bold tracking-tight mb-2 opacity-20">Move your mouse</h3>
        <p className="font-editorial-standard text-on-surface-variant text-sm md:text-base opacity-40">Fluid trail simulation</p>
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full z-20" />
    </div>
  );
};

export default FluidCursorTrail;
