// Fetch the result from the server and update the HTML view
async function updateResult() {
    const response = await fetch('/ShowLastBlock');
    const result = await response.text();
    document.getElementById('result').textContent = `Latest Ethereum Block is ${result}`;
  }
  
  // Call the updateResult function when the page loads
  window.onload = updateResult;
