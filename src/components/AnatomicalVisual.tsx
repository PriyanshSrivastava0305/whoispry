
import React, { useEffect, useRef } from 'react';

interface AnatomicalVisualProps {
  className?: string;
}

const AnatomicalVisual: React.FC<AnatomicalVisualProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw brain outlines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 0.5;
    
    // Draw circular patterns
    for (let i = 0; i < 5; i++) {
      const radius = 80 + i * 20;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Draw measurement lines
    for (let i = 0; i < 10; i++) {
      const x = canvas.width / 10 * i;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    // Draw text labels
    ctx.font = '10px monospace';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    
    const labels = ['Nb', 'Thb', 'Sb', 'Wb', 'Okb', 'Jb', 'Stb', 'Hhb', 'Ukb'];
    
    labels.forEach((label, i) => {
      const x = 20 + (canvas.width - 40) / labels.length * i;
      const y = 20 + Math.sin(i) * 30;
      ctx.fillText(label, x, y);
    });
    
    // Draw connecting lines
    ctx.beginPath();
    ctx.moveTo(canvas.width / 4, canvas.height / 4);
    ctx.lineTo(canvas.width * 3/4, canvas.height * 3/4);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvas.width * 3/4, canvas.height / 4);
    ctx.lineTo(canvas.width / 4, canvas.height * 3/4);
    ctx.stroke();
    
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className={`w-full h-full ${className}`}
    />
  );
};

export default AnatomicalVisual;
