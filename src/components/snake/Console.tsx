/* eslint-disable */
// @ts-nocheck
import { type FC, useState, useRef, useEffect } from "react";
import { useConsoleStore } from "@store/console/useConsoleStore";
import StartButton from "@components/snake/StartButton";
import { INITIAL_STATE } from "@constants/console";
import "@components/snake/console.css";

const Console: FC = () => {
  const gameRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<any>();
  const [showStartButton, SetShowStartButton] = useState(true);

  const state = useConsoleStore((state) => state);
  const { actions } = state;

  useEffect(() => {
    window.addEventListener("resize", render);
    return () => window.removeEventListener("resize", render);
  }, []);

  useEffect(() => {
    render();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (state.gameStarted) {
        switch (event.keyCode) {
          case 37:
            if (state.direction !== "RIGHT") {
              actions.changeDirection("LEFT");
            }
            break;
          case 38:
            if (state.direction !== "DOWN") {
              actions.changeDirection("UP");
            }
            break;
          case 39:
            if (state.direction !== "LEFT") {
              actions.changeDirection("RIGHT");
            }
            break;
          case 40:
            if (state.direction !== "UP") {
              actions.changeDirection("DOWN");
            }
            break;
        }
      } else {
        switch (event.keyCode) {
          case 32:
            if (state.gameOver) {
              handleStartAgain();
            } else {
              handleStartGame();
            }
            break;
        }
      }
    });
  }, []);

  const handleRestartScore = () => {
    actions.changeScore(0);
    const scoreFoods: any = document.getElementsByClassName("food");
    for (let i = 0; i < scoreFoods.length; i++) {
      scoreFoods[i].style.opacity = 0.3;
    }
  };

  const handleStartGame = () => {
    actions.changeGameStarted(true);
    intervalRef.current = setInterval(moveSnake, 50);
    SetShowStartButton(false);
  };

  const handleStartAgain = () => {
    SetShowStartButton(true);
    actions.changeGameOver(false);
    actions.changeGameStarted(false);

    handleRestartScore();
    actions.changeFood(INITIAL_STATE.food);
    actions.changeDirection("UP");
    actions.changeSnake(INITIAL_STATE.snake);
    clearInterval(intervalRef.current);
  };

  const render = () => {
    const gameScreen = gameRef.current as HTMLDivElement;
    gameScreen.innerHTML = "";

    // responsive cell screen
    // (this.$refs.gameScreen.offsetWidth / 20) + "px";

    /* const widthCells = window.innerWidth > 1536 ? 24 : 20; */
    const cellSize = window.innerWidth > 1536 ? "10px" : "8px";
    // eje y
    for (let i = 0; i < 40; i++) {
      // exe x
      for (let j = 0; j < 24; j++) {
        /* cell style */
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = cellSize;
        cell.style.height = cellSize;
        cell.style.display = "flex";
        cell.style.flexShrink = "0";
        cell.classList.add("black");

        /* Food cell style */
        if (j === state.food.x && i === state.food.y) {
          cell.style.backgroundColor = "#43D9AD";
          cell.style.borderRadius = "50%";
          cell.style.boxShadow = "0 0 10px #43D9AD";
        }

        /* Estilo de la serpiente a medida que va crediendo */
        const snakeCell = state.snake.find(
          (snakeCell) => snakeCell.x === j && snakeCell.y === i,
        );

        if (snakeCell) {
          cell.style.backgroundColor = "#43D9AD";
          cell.style.opacity = `${1 - state.snake.indexOf(snakeCell) / state.snake.length}`;
          cell.classList.add("green");
        }

        /* Estilo de la cabeza */
        if (snakeCell && state.snake.indexOf(snakeCell) === 0) {
          const headRadius = "5px";
          if (state.direction === "UP") {
            cell.style.borderTopLeftRadius = headRadius;
            cell.style.borderTopRightRadius = headRadius;
          }
          if (state.direction === "DOWN") {
            cell.style.borderBottomLeftRadius = headRadius;
            cell.style.borderBottomRightRadius = headRadius;
          }
          if (state.direction === "LEFT") {
            cell.style.borderTopLeftRadius = headRadius;
            cell.style.borderBottomLeftRadius = headRadius;
          }
          if (state.direction === "RIGHT") {
            cell.style.borderTopRightRadius = headRadius;
            cell.style.borderBottomRightRadius = headRadius;
          }
        }
        gameScreen.appendChild(cell);
      }
    }
  };

  const moveSnake = () => {
    let newX = state.snake[0].x as number;
    let newY = state.snake[0].y as number;

    switch (state.direction) {
      case "UP":
        newY--;
        break;
      case "DOWN":
        newY++;
        break;
      case "LEFT":
        newX--;
        break;
      case "RIGHT":
        newX++;
        break;
    }

    // check if snake dont leave from game window
    // and check if snake dont eat itself
    if (
      newX >= 0 &&
      newX < 24 &&
      newY >= 0 &&
      newY < 40 &&
      !state.snake.find(
        (snakeCell) => snakeCell.x === newX && snakeCell.y === newY,
      )
    ) {
      /* snake move next cell */
      actions.moveSnakeHead({ x: newX, y: newY });

      /* check snake next cell is food */
      if (newX === state.food.x && newY === state.food.y) {
        // add score
        actions.changeScore(state.score + 1);

        // add food to score board
        const scoreFoods = document.getElementsByClassName("food") as any;
        scoreFoods[state.score - 1].style.opacity = 1;

        // check if score is 10 (max score)
        if (state.score === 10) {
          // move snake head to food (fix snake head position at end)
          actions.moveSnakeHead({ x: newX, y: newY });
          actions.changeFood({ x: null, y: null });
          clearInterval(intervalRef.current); // stop game
          document.getElementById("congrats")!.style.display = "block"; // show congrats
          actions.changeGameOver(true);
          actions.changeGameStarted(false);
        } else {
          // create new food
          actions.changeFood({
            x: Math.floor(Math.random() * 24),
            y: Math.floor(Math.random() * 40),
          });
        }
      } else {
        // if next cell is not food: snake pop last cell
        actions.removeSnakeTail();
      }
    } else {
      // GAME OVER: if snake leave from game window or eat itself
      clearInterval(intervalRef.current);
      document.getElementById("game-over")!.style.display = "block";
      actions.changeGameStarted(false);
      actions.changeGameOver(true);
    }
    render();
  };

  return (
    <div className="relative">
      <div id="game-screen" ref={gameRef}></div>
      {showStartButton && <StartButton onClick={handleStartGame} />}
      <div id="game-over" className="hidden">
        <span className="font-fire-code-retina text-greenfy bg-bluefy-dark h-12 flex items-center justify-center">
          GAME OVER!
        </span>
        <button
          className="font-fire-code-retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white"
          onClick={handleStartAgain}
        >
          start-again
        </button>
      </div>
      <div id="congrats" className="hidden">
        <span className="font-fire-code-retina text-greenfy bg-bluefy-dark h-12 flex items-center justify-center">
          WELL DONE!
        </span>
        <button className="font-fire-code-retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white">
          play-again
        </button>
      </div>
    </div>
  );
};

export default Console;
