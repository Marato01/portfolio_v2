import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    generateParticles();

    window.addEventListener("resize", generateParticles);

    return () => {
      window.removeEventListener("resize", generateParticles);
    };
  }, []);

  const generateParticles = () => {
    const total = 80;

    const items = [];

    for (let i = 0; i < total; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 10 + 5,
      });
    }

    setParticles(items);
  };

  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      {/* Cyber Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,100,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,100,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute inset-0 bg-green-500/10 blur-3xl" />

      {/* Particles */}
      {particles.map((item) => (
        <div
          key={item.id}
          className="absolute rounded-full bg-green-400"
          style={{
            width: `${item.size}px`,
            height: `${item.size}px`,
            left: `${item.x}%`,
            top: `${item.y}%`,
            boxShadow: "0 0 15px #00ff99",
            animation: `pulse ${item.duration}s infinite`,
          }}
        />
      ))}

      {/* Animation */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.8);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.3;
            }
          }
        `}
      </style>
    </div>
  );
};