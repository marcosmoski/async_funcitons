async function foo () { 
  await execsTimeout();
  console.log("TEST 2")
}

function execsTimeout () { 
  return new Promise(resolve => { 
    setTimeout(() => {
      console.log("TEST")
      resolve();
    }, 0)
  });
}

foo();