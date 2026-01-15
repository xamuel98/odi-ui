import React, { useRef, useCallback } from "react";
import type { ColorPickerProps } from "./ColorPicker.type.js";
import { colorPickerVariants } from "./ColorPicker.variants.js";
import { hsbToCss } from "../../utils/color-picker-utils.js";
import "./ColorPicker.css";

export const ColorPicker = ({
  id,
  color,
  allowAlpha = false,
  fullWidth = false,
  onChange,
}: ColorPickerProps) => {
  const { hue, saturation, brightness, alpha = 1 } = color;
  const svRef = useRef<HTMLDivElement>(null);
  const hueRef = useRef<HTMLDivElement>(null);
  const alphaRef = useRef<HTMLDivElement>(null);

  const handleSvChange = useCallback(
    (clientX: number, clientY: number) => {
      if (!svRef.current) return;
      const rect = svRef.current.getBoundingClientRect();
      const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
      const y = Math.min(Math.max(0, clientY - rect.top), rect.height);

      const newSaturation = x / rect.width;
      const newBrightness = 1 - y / rect.height;

      onChange({
        ...color,
        saturation: newSaturation,
        brightness: newBrightness,
      });
    },
    [color, onChange]
  );

  const handleHueChange = useCallback(
    (clientX: number, clientY: number) => {
      if (!hueRef.current) return;
      const rect = hueRef.current.getBoundingClientRect();

      // Always Vertical
      const y = Math.min(Math.max(0, clientY - rect.top), rect.height);
      const newHue = (y / rect.height) * 360;

      onChange({ ...color, hue: newHue });
    },
    [color, onChange]
  );

  const handleAlphaChange = useCallback(
    (clientX: number, clientY: number) => {
      if (!alphaRef.current) return;
      const rect = alphaRef.current.getBoundingClientRect();

      // Always Vertical
      // Top=1, Bottom=0 seems to be the standard we chose.
      const y = Math.min(Math.max(0, clientY - rect.top), rect.height);
      const newAlpha = 1 - y / rect.height;

      onChange({ ...color, alpha: newAlpha });
    },
    [color, onChange]
  );

  const handleMouseDown = (
    e: React.MouseEvent,
    handler: (x: number, y: number) => void
  ) => {
    e.preventDefault(); // Prevent text selection
    handler(e.clientX, e.clientY);

    const handleMouseMove = (ev: MouseEvent) => {
      handler(ev.clientX, ev.clientY);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Saturation/Brightness Handle Position
  const svHandleStyle = {
    left: `${saturation * 100}%`,
    top: `${(1 - brightness) * 100}%`,
    backgroundColor: hsbToCss(hue, saturation, brightness, alpha),
  };

  // Hue Handle Position (Vertical)
  const hueHandleStyle: React.CSSProperties = {
    top: `${(hue / 360) * 100}%`,
    left: "50%",
  };

  // Alpha Handle Position (Vertical: Top=1)
  const alphaHandleStyle: React.CSSProperties = {
    top: `${(1 - alpha) * 100}%`,
    left: "50%",
  };

  // Dynamic Backgrounds
  const activeColorOpaque = hsbToCss(hue, 1, 1, 1);
  const alphaGradient = `linear-gradient(to bottom, ${activeColorOpaque}, transparent)`; // Opaque at top (1) to transparent at bottom (0)

  return (
    <div id={id} className={colorPickerVariants({ fullWidth })}>
      <div className="odi-color-picker__main">
        <div
          ref={svRef}
          className="odi-color-picker__sl-area"
          style={{ backgroundColor: hsbToCss(hue, 1, 1, 1) }}
          onMouseDown={(e) => handleMouseDown(e, handleSvChange)}
        >
          <div className="odi-color-picker__saturation-layer" />
          <div className="odi-color-picker__brightness-layer" />
          <div className="odi-color-picker__sl-handle" style={svHandleStyle} />
        </div>

        <div className="odi-color-picker__sliders">
          {/* Hue Slider */}
          <div
            ref={hueRef}
            className="odi-color-picker__hue-slider"
            onMouseDown={(e) => handleMouseDown(e, handleHueChange)}
          >
            <div
              className="odi-color-picker__slider-handle"
              style={hueHandleStyle}
            />
          </div>

          {/* Alpha Slider */}
          {allowAlpha && (
            <div
              ref={alphaRef}
              className="odi-color-picker__alpha-slider"
              onMouseDown={(e) => handleMouseDown(e, handleAlphaChange)}
            >
              <div
                className="odi-color-picker__alpha-overlay"
                style={{ background: alphaGradient }}
              />
              <div
                className="odi-color-picker__slider-handle"
                style={alphaHandleStyle}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
