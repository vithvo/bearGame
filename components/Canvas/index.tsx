import React, { useEffect, useRef } from "react";

import styles from "./Canvas.module.scss";

type CanvasProps = {};

export const Canvas: React.FC<CanvasProps> = () => {
  const rootRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (rootRef.current) {
      const ctx = rootRef.current.getContext("2d");

      rootRef.current.width = 800;
      rootRef.current.height = 500;

      if (ctx) {
        // переменные для рисования
        ctx.lineCap = "round";
        ctx.lineWidth = 5;
        ctx.strokeStyle = "red";
        // вешаем обработчики на кнопки
        // очистка изображения
        // ctx.clearRect(0, 0, canvas.width, canvas.height);

        rootRef.current.addEventListener("mousemove", (e) => {
          // в "e"  попадает экземпляр MouseEvent
          const x = e.offsetX;
          const y = e.offsetY;
          const dx = e.movementX;
          const dy = e.movementY;
          // Проверяем зажата ли какая-нибудь кнопка мыши
          // Если да, то рисуем
          if (e.buttons > 0) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x - dx, y - dy);
            ctx.stroke();
            ctx.closePath();
          }
        });

        // На любое движение мыши по canvas будет выполнятся эта функция
      }
    }
  }, []);

  return <canvas ref={rootRef} className={styles.root} />;
};
