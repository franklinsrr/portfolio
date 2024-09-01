import { create } from "zustand";
import type { IConsoleAction, IConsoleState, ICord } from "@interfaces/console";
import { INITIAL_STATE } from "@constants/console";

export const useConsoleStore = create<IConsoleState & IConsoleAction>()(
  (set) => ({
    ...INITIAL_STATE,
    actions: {
      changeDirection: (dir) => {
        set((state) => {
          return {
            ...state,
            direction: dir,
          };
        });
      },

      changeFood: (food) => {
        set((state) => {
          return {
            ...state,
            food,
          };
        });
      },

      changeGameOver: (gameOver) => {
        set((state) => {
          return {
            ...state,
            gameOver,
          };
        });
      },

      changeGameStarted: (gameStarted) => {
        set((state) => {
          return {
            ...state,
            gameStarted,
          };
        });
      },

      changeScore: (score: number) => {
        set((state) => {
          return {
            ...state,
            score,
          };
        });
      },

      changeSnake: (snake) => {
        set((state) => {
          return {
            ...state,
            snake,
          };
        });
      },

      moveSnakeHead(head) {
        set((state) => {
          return {
            ...state,
            snake: [head, ...state.snake],
          };
        });
      },

      removeSnakeTail() {
        set((state) => {
          const newSnake = state.snake.filter(
            (item, index) => index !== state.snake.length - 1,
          );
          return {
            ...state,
            snake: newSnake,
          };
        });
      },

      changeGameInterval: (gameInterval) => {
        set((state) => {
          return {
            ...state,
            gameInterval,
          };
        });
      },
    },
  }),
);
