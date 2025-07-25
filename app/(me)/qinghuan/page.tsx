'use client';

import { animate, svg } from 'animejs';
import { useEffect } from 'react';

export default function QinghuanPage() {
  useEffect(() => {
    // 路径绘制动画
    animate(svg.createDrawable('#motionPath'), {
      draw: '0 1',
      ease: 'linear',
      duration: 3000,
      loop: false,
    });

    // 沿路径运动的动画
    animate('.particle', {
      ...svg.createMotionPath('#motionPath'),
      ease: 'linear',
      duration: 3000,
      loop: false,
    });
  }, []);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      {/* SVG 和粒子的容器 */}
      <div className="relative w-2/3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" className="w-full">
          <path
            id="motionPath"
            fill="none"
            stroke="skyblue"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 60,110 
            C 10,110 10,30 60,30 
            C 110,30 110,110 60,110
            C 70,150 110,150 120,90
            C 121,85 119,85 120,90 
            C 125,70 145,70 150,90
            C 155,70 175,70 180,90
            C 185,70 205,70 210,90
            C 210,150 160,150 170,90
            C 180,30 230,30 240,90
            C 245,70 265,70 270,90
            C 275,70 295,70 300,90
            C 310,70 330,70 340,90
            C 338,85 342,85 340,90 
            C 345,70 365,70 370,90
            C 375,70 395,70 400,90
            C 410,120 440,120 450,100
            C 460,80 420,80 430,100
            "
          />
        </svg>

        <div className="particle absolute top-0 left-0 h-full w-full"></div>
      </div>
    </div>
  );
}
