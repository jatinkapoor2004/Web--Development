function simulateMultipleTasks() {
    setTimeout(() => {
      console.log('Task 1 finished');
    }, 1000);
  
    setTimeout(() => {
      console.log('Task 2 finished');
    }, 2000);
  
    setTimeout(() => {
      console.log('Task 3 finished');
    }, 3000);
  }
  simulateMultipleTasks();