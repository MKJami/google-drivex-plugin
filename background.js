```javascript
import { quotes } from './quotes.js';

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeBackgroundColor({ color: '#4688F1' });
});

chrome.tabs.onCreated.addListener((tab) => {
  let quote = getRandomQuote();
  chrome.tabs.sendMessage(tab.id, { type: "updateQuote", quote: quote });
});

function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
```