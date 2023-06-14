async function getResults() {
  try {
    // I changed the names to my friends Omer , Nuri and also myself
    const players = ['Omer', 'Arshya', 'Nuri'];

    for (const player of players) {
      const result = await luckyDraw(player);
      console.log(result);
    }
  } catch (error) {
    console.error(error.message);
  }
}

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

getResults();
