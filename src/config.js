// 🚨 Vulnerability: Hardcoded API Key
export const API_KEY = "12345-FAKE-API-KEY"; 

fetch(`https://api.example.com/data?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data));
