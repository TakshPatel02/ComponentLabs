import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Monitor, Tablet, Smartphone, ExternalLink, Lock, HelpCircle } from "lucide-react";

const ResizeableBrowserPreview = ({ src }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerRef = useRef(null);
  const frameRef = useRef(null);

  // Width state can be a number (px) or "100%"
  const [width, setWidth] = useState("100%");
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartWidth, setDragStartWidth] = useState(0);
  const [containerMaxWidth, setContainerMaxWidth] = useState(1200);

  // Measure the maximum container width for pixel calculations
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerMaxWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();
    // Delay slightly to ensure layout has settled
    const timer = setTimeout(updateWidth, 100);

    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timer);
    };
  }, []);

  // Preset sizes
  const presets = [
    { id: "mobile", name: "Mobile", width: 375, icon: Smartphone, desc: "Mobile View (375px)" },
    { id: "tablet", name: "Tablet", width: 768, icon: Tablet, desc: "Tablet View (768px)" },
    { id: "desktop", name: "Desktop", width: "100%", icon: Monitor, desc: "Desktop View (Fluid)" },
  ];

  // Get numerical width value in pixels
  const getPixelWidth = () => {
    if (width === "100%") return containerMaxWidth;
    return width;
  };

  // Pointer event handlers for drag resizing
  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStartX(e.clientX);
    
    // Get current width in pixels
    const currentPixelWidth = getPixelWidth();
    setDragStartWidth(currentPixelWidth);
  };

  // Robust global event listeners for smooth drag resizing
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e) => {
      const deltaX = e.clientX - dragStartX;
      let newWidth = dragStartWidth + deltaX;

      // Constrain width
      const minWidth = 340;
      const maxWidth = containerMaxWidth;
      
      if (newWidth < minWidth) newWidth = minWidth;
      if (newWidth > maxWidth) newWidth = maxWidth;

      // If extremely close to max, snap to 100%
      if (maxWidth - newWidth < 15) {
        setWidth("100%");
      } else {
        setWidth(newWidth);
      }
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, dragStartX, dragStartWidth, containerMaxWidth]);

  const activePreset = width === "100%" ? "desktop" : (width === 768 ? "tablet" : (width === 375 ? "mobile" : null));

  return (
    <div 
      ref={containerRef} 
      className={`w-full flex flex-col items-center ${isDragging ? "select-none" : ""}`}
    >
      {/* Viewport Control Panel / Toolbar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 mb-6 p-4 rounded-xl border oklab-border bg-surface-container/60 backdrop-blur-sm select-none">
        {/* Left: Device Preset Toggles */}
        <div className="flex items-center gap-1.5 bg-surface-container-highest p-1 rounded-lg border oklab-border">
          {presets.map((preset) => {
            const Icon = preset.icon;
            const isActive = activePreset === preset.id || (preset.id === "desktop" && width === "100%");
            return (
              <button
                key={preset.id}
                onClick={() => setWidth(preset.width)}
                title={preset.desc}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold tracking-tight transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-surface shadow-xs"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                }`}
              >
                <Icon size={14} />
                <span>{preset.name}</span>
              </button>
            );
          })}
        </div>

        {/* Center: Live Dimension Display */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-highest border oklab-border font-mono text-[11.5px] font-semibold text-on-surface-variant/80">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>VIEWPORT:</span>
          <span className="text-primary font-bold">{Math.round(getPixelWidth())}px</span>
          <span className="opacity-40">×</span>
          <span>100% Height</span>
        </div>

        {/* Right: Open in New Tab Link */}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-surface hover:bg-error-warm text-xs font-semibold font-['Space_Grotesk'] tracking-tight transition-all duration-200 active:scale-[0.98]"
        >
          <ExternalLink size={13} />
          <span>Open Full Page</span>
        </a>
      </div>

      {/* Browser Mockup Container */}
      <div 
        className="relative flex flex-row items-stretch justify-center max-w-full"
        style={{
          width: width === "100%" ? "100%" : `${width}px`,
          transition: isDragging ? "none" : "width 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        {/* Browser Window */}
        <div 
          className={`flex-1 flex flex-col rounded-xl overflow-hidden border shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-colors duration-300 ${
            isDark ? "bg-[#16161a] border-white/10" : "bg-[#fdfdfd] border-black/8"
          }`}
        >
          {/* Browser Chrome Header */}
          <div 
            className={`flex items-center justify-between px-4 py-3 border-b select-none shrink-0 ${
              isDark ? "bg-[#1a1a20] border-white/8" : "bg-[#f5f5f7] border-black/6"
            }`}
          >
            {/* Left: Window dots */}
            <div className="flex items-center gap-1.5 w-20">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-95 transition-all" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-95 transition-all" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-95 transition-all" />
            </div>

            {/* Center: Address Bar */}
            <div 
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-[11px] font-mono select-none w-full max-w-md justify-center border ${
                isDark 
                  ? "bg-[#111115] border-white/5 text-white/50" 
                  : "bg-white border-black/5 text-black/40"
              }`}
            >
              <Lock size={10} className="text-emerald-500 shrink-0" />
              <span className="truncate">componentlabs.ai/templates/saas-billing</span>
            </div>

            {/* Right: Window Controls spacer */}
            <div className="w-20 flex justify-end">
              <div className="flex gap-1">
                <div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white/20" : "bg-black/10"}`} />
                <div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white/20" : "bg-black/10"}`} />
                <div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white/20" : "bg-black/10"}`} />
              </div>
            </div>
          </div>

          {/* Iframe Viewport Area */}
          <div className="relative w-full h-[680px] bg-[#fafbfe]">
            {/* The actual landing page iframe */}
            <iframe
              ref={frameRef}
              src={src}
              title="SaaS Landing Page Live Preview"
              scrolling="yes"
              className="w-full h-full border-none overflow-y-auto"
              style={{
                // Disable events while dragging to prevent stutter, otherwise keep scrolling natural
                pointerEvents: isDragging ? "none" : "auto",
                WebkitOverflowScrolling: "touch",
              }}
            />

            {/* Invisible overlay while dragging to capture mouse moves correctly */}
            {isDragging && (
              <div className="absolute inset-0 z-50 cursor-col-resize bg-transparent" />
            )}
          </div>
        </div>

        {/* Right side Resize Handle */}
        <div
          onPointerDown={handlePointerDown}
          className="absolute top-0 bottom-0 -right-4 w-4 flex items-center justify-center cursor-col-resize z-30 group"
          title="Drag to resize viewport"
        >
          {/* Visual indicator lines */}
          <div 
            className={`w-1.5 h-16 rounded-full flex flex-col justify-between items-center py-2 transition-all duration-300 ${
              isDragging 
                ? "bg-[#E8567A] scale-x-125 shadow-[0_0_8px_rgba(232,86,122,0.6)]" 
                : "bg-on-surface-variant/20 group-hover:bg-primary group-hover:scale-x-110"
            }`}
          >
            <div className="w-0.5 h-2 bg-surface/50 rounded-full" />
            <div className="w-0.5 h-2 bg-surface/50 rounded-full" />
            <div className="w-0.5 h-2 bg-surface/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Helpful tips / indicator */}
      <div className="flex items-center gap-1.5 mt-4 text-[12px] italic text-on-surface-variant/60 font-editorial-standard select-none">
        <HelpCircle size={12} />
        <span>Drag the pink handle on the right or use buttons above to test responsiveness.</span>
      </div>
    </div>
  );
};

export default ResizeableBrowserPreview;
