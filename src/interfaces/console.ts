export interface ICord {
  x: number | null;
  y: number | null;
}

export type TDirection = "UP" | "DOWN" | "LEFT" | "RIGHT";

export interface IConsoleState {
  food: ICord;
  snake: ICord[];
  score: number;
  gameOver: boolean;
  gameInterval: any;
  gameStarted: boolean;
  direction: TDirection;
}

export interface IConsoleAction {
  actions: {
    changeScore: (score: number) => void;
    changeFood: (food: ICord) => void;
    changeSnake: (snake: ICord[]) => void;
    changeGameOver: (isGameOver: boolean) => void;
    changeGameStarted: (isGameStarted: boolean) => void;
    changeDirection: (dir: TDirection) => void;
    changeGameInterval: (interval: any) => void;
    moveSnakeHead: (head: ICord) => void;
    removeSnakeTail: () => void;
  };
}
