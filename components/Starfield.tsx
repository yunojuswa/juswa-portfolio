
import React, { useRef, useEffect } from 'react';
import type { Star, ShootingStar } from '../types';

interface StarfieldProps {
  starCount?: number;
  speedFactor?: number;
}

// --- EASTER EGG CONFIGURATION ---
// Change this value to adjust how often the goat appears.
// 0.01 = 1% chance every ~5 seconds.
const GOAT_SPAWN_CHANCE = 0.1; 
const GOAT_CHECK_INTERVAL = 300; // Check every 300 frames (approx 5 seconds at 60fps)
// --------------------------------

const Starfield: React.FC<StarfieldProps> = ({
  starCount = 1500,
  speedFactor = 0.05,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const goatRef = useRef<HTMLImageElement>(null);
  const goatState = useRef({
    active: false,
    x: -200,
    y: 0,
    vx: 0,
    vy: 0,
    rotation: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number;
    let stars: Star[] = [];
    let initialStars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let rotation = 0;
    let frameCount = 0;

    const setCanvasExtents = () => {
      width = document.body.clientWidth;
      height = document.body.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const makeStars = () => {
      stars = [];
      initialStars = [];
      const spread = Math.max(width, height) * 1.2;
      for (let i = 0; i < starCount; i++) {
        const star: Star = {
          x: (Math.random() - 0.5) * spread,
          y: (Math.random() - 0.5) * spread,
          z: (Math.random() - 0.5) * spread,
          size: Math.random() * 2 + 0.5,
          color: `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`,
        };
        stars.push(star);
        initialStars.push({ ...star });
      }
    };

    setCanvasExtents();
    makeStars();

    window.onresize = () => {
      setCanvasExtents();
      makeStars();
    };

    const clear = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const drawStars = () => {
      const focalLength = width * 0.9;
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const scale = focalLength / (focalLength + star.z);
        
        if (scale > 0) {
          const sx = centerX + star.x * scale;
          const sy = centerY + star.y * scale;
          const size = star.size * scale;
          
          if (sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(sx, sy, size / 2, 0, 2 * Math.PI);
            ctx.fillStyle = star.color;
            ctx.fill();
            ctx.restore();
          }
        }
      }
    };

    const drawShootingStars = () => {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.opacity -= 0.02;

        if (ss.opacity <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.vx * 20, ss.y - ss.vy * 20);
        const gradient = ctx.createLinearGradient(
          ss.x, ss.y, ss.x - ss.vx * 20, ss.y - ss.vy * 20
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    const updateGoat = () => {
      const g = goatState.current;
      const goatEl = goatRef.current;

      if (g.active) {
        g.x += g.vx;
        g.y += g.vy;
        
        if (goatEl) {
          goatEl.style.transform = `translate(${g.x}px, ${g.y}px) rotate(${g.rotation}deg)`;
        }

        // Deactivate if off-screen (with some buffer)
        if (g.x > width + 300 || g.y > height + 300 || g.y < -300) {
          g.active = false;
          if (goatEl) goatEl.style.display = 'none';
        }
      } else {
        // Roll for spawn every GOAT_CHECK_INTERVAL frames
        if (frameCount % GOAT_CHECK_INTERVAL === 0) {
          if (Math.random() < GOAT_SPAWN_CHANCE) {
            g.active = true;
            g.x = -200;
            g.y = Math.random() * (height * 0.8) + (height * 0.1);
            g.vx = Math.random() * 3 + 4; // Horizontal speed
            g.vy = (Math.random() - 0.5) * 2; // Slight vertical drift
            g.rotation = (Math.random() - 0.5) * 45; // Random diagonal orientation
            
            if (goatEl) {
              goatEl.style.display = 'block';
              goatEl.style.transform = `translate(${g.x}px, ${g.y}px) rotate(${g.rotation}deg)`;
            }
          }
        }
      }
    };

    let animationFrameId: number;
    
    const animate = () => {
      frameCount++;
      rotation += speedFactor * 0.01;
      
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);

      for (let i = 0; i < stars.length; i++) {
        const iStar = initialStars[i];
        const star = stars[i];

        const x1 = iStar.x * cos - iStar.z * sin;
        const z1 = iStar.x * sin + iStar.z * cos;

        const y2 = iStar.y * cos - z1 * sin;
        const z2 = iStar.y * sin + z1 * cos;

        star.x = x1;
        star.y = y2;
        star.z = z2;
      }
      
      if (Math.random() > 0.995 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * width * 1.5 - width * 0.25,
          y: Math.random() * height * 1.5 - height * 0.25,
          vx: (Math.random() - 0.5) * 15 - 5,
          vy: (Math.random() - 0.5) * 15 + 5,
          opacity: 1,
        });
      }

      clear();
      drawStars();
      drawShootingStars();
      updateGoat();
      
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.onresize = null;
    };
  }, [starCount, speedFactor]);

  return (
    <div className="fixed top-0 left-0 w-full h-full block z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <img 
        ref={goatRef}
        src="/astrogoat.gif" 
        alt="Astro Goat"
        style={{
          display: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: 'auto',
          zIndex: 5,
          filter: 'drop-shadow(0 0 10px rgba(0, 229, 255, 0.4))'
        }}
      />
    </div>
  );
};

export default Starfield;
