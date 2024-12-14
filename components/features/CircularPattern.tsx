'use client';

import { useEffect, useRef } from 'react';

export function CircularPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Create multiple circular patterns
      const patterns = [
        { radius: Math.min(width, height) * 0.4, dots: 24, size: 3 },
        { radius: Math.min(width, height) * 0.3, dots: 18, size: 2 },
        { radius: Math.min(width, height) * 0.2, dots: 12, size: 1.5 }
      ];

      patterns.forEach(pattern => {
        const centerX = width / 2;
        const centerY = height / 2;

        for (let i = 0; i < 360; i += (360 / pattern.dots)) {
          const angle = (i * Math.PI) / 180;
          const x = centerX + pattern.radius * Math.cos(angle);
          const y = centerY + pattern.radius * Math.sin(angle);

          ctx.beginPath();
          ctx.arc(x, y, pattern.size, 0, 2 * Math.PI);
          ctx.fillStyle = '#3C82F6';
          ctx.fill();

          // Add connecting lines
          if (i > 0) {
            const prevAngle = ((i - (360 / pattern.dots)) * Math.PI) / 180;
            const prevX = centerX + pattern.radius * Math.cos(prevAngle);
            const prevY = centerY + pattern.radius * Math.sin(prevAngle);

            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.strokeStyle = '#00FF0020';
            ctx.stroke();
          }
        }
      });
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Add animation
    let rotation = 0;
    const animate = () => {
      rotation += 0.001;
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rotation);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
      draw();
      ctx.restore();
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20"
    />
  );
}