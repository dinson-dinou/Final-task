( {
  const CHOICES = ["rock", "paper", "scissors"];

  const BEATS = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  const RING_COLORS = {
    rock: { ring: "var(--red-600)", shadow: "var(--red-800)" },
    paper: { ring: "var(--blue-500)", shadow: "var(--blue-700)" },
    scissors: { ring: "var(--gold-500)", shadow: "var(--gold-600)" },
  };

  const gameBoard = document.getElementById("game-board");
  const resultsBoard = document.getElementById("results-board");
  const scoreEl = document.getElementById("score");

  const playerIcon = document.getElementById("player-choice-icon");
  const houseIcon = document.getElementById("house-choice-icon");
  const playerCircle = document.getElementById("player-choice-circle");
  const houseCircle = document.getElementById("house-choice-circle");

  const outcomeText = document.getElementById("outcome-text");
  const playAgainBtn = document.getElementById("play-again-btn");

  const rulesBtn = document.getElementById("rules-btn");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close");

 
});
