'use client';

import { motion } from 'framer-motion';

interface Props {
  steps: string[];
  variant: 'horizontal' | 'vertical';
  caption?: string;
}

const NODE_H = 36;
const NODE_RX = 10;
const H_GAP = 20;
const V_GAP = 16;
const ARROW_LEN = 28;
const PAD_X = 24;
const PAD_Y = 20;

function measureText(text: string): number {
  return Math.max(text.length * 7.2 + 28, 80);
}

export default function ArchitectureDiagram({ steps, variant, caption }: Props) {
  if (variant === 'vertical') {
    const maxW = Math.max(...steps.map(measureText));
    const svgW = maxW + PAD_X * 2;
    const rowH = NODE_H + ARROW_LEN + V_GAP;
    const svgH = steps.length * NODE_H + (steps.length - 1) * (ARROW_LEN + V_GAP) + PAD_Y * 2;

    return (
      <div className="rounded-lg border border-warm-800/50 bg-warm-950/60 overflow-hidden max-w-md">
        <motion.svg
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <defs>
            <marker
              id="arrow-v"
              viewBox="0 0 8 8"
              refX="4"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-auto"
            >
              <path d="M 1 1 L 4 7 L 7 1" fill="none" stroke="currentColor" className="text-accent-500/50" strokeWidth="1.5" />
            </marker>
          </defs>
          {steps.map((step, i) => {
            const cx = svgW / 2;
            const y = PAD_Y + i * (NODE_H + ARROW_LEN + V_GAP);
            const w = measureText(step);

            return (
              <g key={i}>
                <rect
                  x={cx - w / 2}
                  y={y}
                  width={w}
                  height={NODE_H}
                  rx={NODE_RX}
                  className="fill-warm-900/80 stroke-warm-700/50"
                  strokeWidth="1"
                />
                <text
                  x={cx}
                  y={y + NODE_H / 2}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="fill-warm-300 text-[11px]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {step}
                </text>
                {i < steps.length - 1 && (
                  <line
                    x1={cx}
                    y1={y + NODE_H + 2}
                    x2={cx}
                    y2={y + NODE_H + ARROW_LEN + V_GAP - 2}
                    className="stroke-accent-500/40"
                    strokeWidth="1.5"
                    markerEnd="url(#arrow-v)"
                  />
                )}
              </g>
            );
          })}
        </motion.svg>
        {caption && (
          <p className="px-5 py-2.5 text-[11px] text-warm-500 border-t border-warm-800/40 leading-snug">
            {caption}
          </p>
        )}
      </div>
    );
  }

  const widths = steps.map(measureText);
  const totalNodeW = widths.reduce((a, b) => a + b, 0);
  const totalArrowW = (steps.length - 1) * (H_GAP + ARROW_LEN + H_GAP);
  const svgW = totalNodeW + totalArrowW + PAD_X * 2;
  const svgH = NODE_H + PAD_Y * 2;

  let cursor = PAD_X;
  const positions = widths.map((w) => {
    const x = cursor;
    cursor += w + H_GAP + ARROW_LEN + H_GAP;
    return x;
  });

  return (
    <div className="rounded-lg border border-warm-800/50 bg-warm-950/60 overflow-hidden">
      <div className="overflow-x-auto">
        <motion.svg
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="min-w-[500px] w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <defs>
            <marker
              id="arrow-h"
              viewBox="0 0 8 8"
              refX="4"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-auto"
            >
              <path d="M 1 1 L 7 4 L 1 7" fill="none" stroke="currentColor" className="text-accent-500/50" strokeWidth="1.5" />
            </marker>
          </defs>
          {steps.map((step, i) => {
            const x = positions[i];
            const w = widths[i];
            const cy = PAD_Y + NODE_H / 2;

            return (
              <g key={i}>
                <rect
                  x={x}
                  y={PAD_Y}
                  width={w}
                  height={NODE_H}
                  rx={NODE_RX}
                  className="fill-warm-900/80 stroke-warm-700/50"
                  strokeWidth="1"
                />
                <text
                  x={x + w / 2}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="fill-warm-300 text-[11px]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {step}
                </text>
                {i < steps.length - 1 && (
                  <line
                    x1={x + w + H_GAP / 2}
                    y1={cy}
                    x2={positions[i + 1] - H_GAP / 2}
                    y2={cy}
                    className="stroke-accent-500/40"
                    strokeWidth="1.5"
                    markerEnd="url(#arrow-h)"
                  />
                )}
              </g>
            );
          })}
        </motion.svg>
      </div>
      {caption && (
        <p className="px-4 md:px-5 py-2.5 text-[11px] text-warm-500 border-t border-warm-800/40 leading-snug">
          {caption}
        </p>
      )}
    </div>
  );
}
