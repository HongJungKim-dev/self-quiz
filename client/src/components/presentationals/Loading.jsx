import React, { useCallback, useEffect, useRef } from 'react';

export default function Loading({ size }) {
  const canvasRef = useRef();
  const degreeRef = useRef(0);

  const radian = (degree) => (Math.PI / 180) * degree;

  const draw = useCallback(() => {
    if (!canvasRef.current) {
      return;
    }

    const CIRCLE = 360;
    const CYCLE = CIRCLE * 3;
    const SPINNER_LENGTH = 220;

    const degree = degreeRef.current;
    const xPos = size / 2;
    const yPos = size / 2;
    const radius = size / 3;
    const lineWidth = size / 6;
    const startDegree = degree;
    const middleDegree = degree + SPINNER_LENGTH;
    const endDegree = middleDegree + CIRCLE - SPINNER_LENGTH;

    const context = canvasRef.current.getContext('2d');

    context.clearRect(0, 0, size, size);

    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = 'rgb(100, 100, 255)';
    context.arc(xPos, yPos, radius, radian(startDegree), radian(middleDegree), true);
    context.stroke();

    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = 'rgb(240, 240, 240)';
    context.arc(xPos, yPos, radius, radian(middleDegree), radian(endDegree), true);
    context.stroke();

    const nextDegree = (degree > CIRCLE * 2 ? (degree + 8) : (degree + 24)) % CYCLE;
    degreeRef.current = nextDegree;

    requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    requestAnimationFrame(draw);
  }, []);

  return (
    <canvas ref={canvasRef} width={size} height={size} />
  );
}
