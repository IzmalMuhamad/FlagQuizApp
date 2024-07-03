function startQuiz() {
  var counter = 0;
  const correctStreak = 2;
  const guess = prompt("What does ✅ stands for?");

  if (guess.toLowerCase() === "tick") {
    counter += 1;
    alert("You are correct!");
    // console.log("You are correct!");
  } else {
    alert("You are incorrect. It's called 'Tick'.");
    // console.log("You are incorrect. It's called 'Tick'.");
  }

  const guess2 = prompt("What does 🍉 stands for?");

  if (guess2.toLowerCase() === "watermelon") {
    counter += 1;

    if (counter === correctStreak) {
      alert("You are correct again!");
      // console.log("You are correct again!");
    } else
      alert("You are correct!");
    // console.log("You are correct!");
  } else {
    counter -= 1;
    
    alert("You are incorrect. It's called 'Watermelon'.");
    // console.log("You are incorrect. It's called 'Tick'.");
  }
}