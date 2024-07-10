document.addEventListener("DOMContentLoaded", function() {
    let count = 0;
    const countSpan = document.getElementById("count");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
  
    incrementButton.addEventListener("click", function() {
        count++;
        updateCount();
    });
  
    decrementButton.addEventListener("click", function() {
        if (count > 0) {
            count--;
            updateCount();
        }
    });
  
    function updateCount() {
        countSpan.textContent = count;
    }
  });