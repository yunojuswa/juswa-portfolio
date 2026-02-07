import React, { useRef, useEffect } from 'react';
import type { Star, ShootingStar } from '../types';

interface StarfieldProps {
  starCount?: number;
  speedFactor?: number;
}

const Starfield: React.FC<StarfieldProps> = ({
  starCount = 1500,
  speedFactor = 0.05,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    let animationFrameId: number;
    
    const animate = () => {
      rotation += speedFactor * 0.01;
      
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);

      for (let i = 0; i < stars.length; i++) {
        const iStar = initialStars[i];
        const star = stars[i];

        // Rotate around Y-axis (yaw)
        const x1 = iStar.x * cos - iStar.z * sin;
        const z1 = iStar.x * sin + iStar.z * cos;

        // Rotate around X-axis (pitch) for diagonal feel
        const y2 = iStar.y * cos - z1 * sin;
        const z2 = iStar.y * sin + z1 * cos;

        star.x = x1;
        star.y = y2;
        star.z = z2;
      }
      
      // Spawn shooting stars
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
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.onresize = null;
    };
  }, [starCount, speedFactor]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full block z-0" />;
};

export default Starfield;