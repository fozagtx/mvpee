"use client";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import React from "react";

export default function ShaderBackground() {
  return (
    <ShaderGradientCanvas
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      lazyLoad={undefined}
      fov={undefined}
      pixelDensity={1}
      pointerEvents="none"
    >
      <ShaderGradient
        animate="on"
        type="waterPlane"
        wireframe={false}
        shader="positionMix"
        uTime={10}
        uSpeed={0.4}
        uStrength={2}
        uDensity={2}
        uFrequency={0}
        uAmplitude={0}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={2}
        rotationY={21}
        rotationZ={0}
        color1="#040927"
        color2="#c22938"
        color3="#e16f23"
        reflection={0.3}
        cAzimuthAngle={180}
        cPolarAngle={90}
        cDistance={3.5}
        cameraZoom={7}
        lightType="env"
        brightness={1.1}
        envPreset="lobby"
        grain="on"
        toggleAxis={false}
        zoomOut={false}
        hoverState=""
        enableTransition={false}
      />
    </ShaderGradientCanvas>
  );
} 