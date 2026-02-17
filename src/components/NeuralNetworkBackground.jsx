import React, { useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Helper to generate static random nodes outside the component
const generateNetwork = (count, connectionChance = 0.15) => {
  const nodes = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage
    y: Math.random() * 100, // percentage
    size: Math.random() * 2 + 1,
    zDepth: Math.random() * 40, // 0 to 40 for blur/parallax
    driftDuration: Math.random() * 15 + 10,
    driftX: Math.random() * 4 - 2,
    driftY: Math.random() * 4 - 2,
    pulseDuration: Math.random() * 3 + 2,
    pulseDelay: Math.random() * 5,
  }));

  const connections = [];
  const maxDist = 20;

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < maxDist && Math.random() < connectionChance) {
        connections.push({
          id: `c-${i}-${j}`,
          from: nodes[i],
          to: nodes[j],
          packetDuration: Math.random() * 3 + 2,
          packetDelay: Math.random() * 10
        });
      }
    }
  }

  return { nodes, connections };
};

const NeuralNetworkBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const { nodes, connections } = useMemo(() => generateNetwork(45), []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Volumetric Fog/Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-40 mix-blend-screen" />
      
      {/* 3D Perspective Grid - Slightly darker */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: 'perspective(1200px) rotateX(65deg) translateY(-10%) translateZ(-300px) scale(1.5)',
          transformOrigin: 'top'
        }}
      />

      <svg className="absolute inset-0 w-full h-full preserve-3d">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connections Layer */}
        {connections.map((conn) => (
          <Connection 
            key={conn.id} 
            conn={conn} 
            mouseX={smoothMouseX} 
            mouseY={smoothMouseY} 
          />
        ))}

        {/* Nodes Layer */}
        {nodes.map((node) => (
          <Node 
            key={node.id} 
            node={node} 
            mouseX={smoothMouseX} 
            mouseY={smoothMouseY} 
          />
        ))}
      </svg>

      {/* Dynamic Grain overlay for that premium "dirty" feel */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
    </div>
  );
};

const Connection = ({ conn, mouseX, mouseY }) => {
  // Parallax based on average depth of endpoints
  const avgZ = (conn.from.zDepth + conn.to.zDepth) / 2;
  const xMovement = useTransform(mouseX, [-0.5, 0.5], [-avgZ * 1.5, avgZ * 1.5]);
  const yMovement = useTransform(mouseY, [-0.5, 0.5], [-avgZ * 1.5, avgZ * 1.5]);

  return (
    <g style={{ filter: `blur(${avgZ / 15}px)` }}>
      {/* Static Connection Line */}
      <motion.line
        x1={`${conn.from.x}%`}
        y1={`${conn.from.y}%`}
        x2={`${conn.to.x}%`}
        y2={`${conn.to.y}%`}
        stroke="var(--primary)"
        strokeWidth="0.5"
        strokeOpacity={0.1 * (1 - avgZ / 50)}
        style={{ x: xMovement, y: yMovement }}
      />
      
      {/* Animated Data Packet */}
      <motion.circle
        r="1"
        fill="var(--primary)"
        className="mix-blend-screen"
        animate={{
          cx: [`${conn.from.x}%`, `${conn.to.x}%`],
          cy: [`${conn.from.y}%`, `${conn.to.y}%`],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: conn.packetDuration,
          repeat: Infinity,
          delay: conn.packetDelay,
          ease: "linear"
        }}
        style={{ 
          x: xMovement, 
          y: yMovement,
          filter: 'url(#glow)'
        }}
      />
    </g>
  );
};

const Node = ({ node, mouseX, mouseY }) => {
  const xMovement = useTransform(mouseX, [-0.5, 0.5], [-node.zDepth * 1.5, node.zDepth * 1.5]);
  const yMovement = useTransform(mouseY, [-0.5, 0.5], [-node.zDepth * 1.5, node.zDepth * 1.5]);

  return (
    <motion.g
      style={{ 
        x: xMovement, 
        y: yMovement,
        filter: `blur(${node.zDepth / 12}px)`
      }}
    >
      {/* Drifting subtle movement */}
      <motion.g
        animate={{
          x: [0, node.driftX, 0],
          y: [0, node.driftY, 0]
        }}
        transition={{
          duration: node.driftDuration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Core Node */}
        <circle
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r={node.size}
          fill="var(--primary)"
          style={{ opacity: 0.4 * (1 - node.zDepth / 50) }}
        />
        
        {/* Pulse Effect */}
        <motion.circle
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r={node.size * 3}
          fill="var(--primary)"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.05, 0, 0.05]
          }}
          transition={{
            duration: node.pulseDuration,
            repeat: Infinity,
            delay: node.pulseDelay,
            ease: "easeInOut"
          }}
        />
      </motion.g>
    </motion.g>
  );
};

export default NeuralNetworkBackground;
