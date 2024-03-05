```javascript
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "updateQuote") {
        document.getElementById("quoteText").innerText = request.quote.text;
        document.getElementById("quoteAuthor").innerText = request.quote.author;
        document.body.style.backgroundImage = `url('images/background${request.background}.jpg')`;
        const fontColor = getContrastYIQ(request.background);
        document.getElementById("quoteText").style.color = fontColor;
        document.getElementById("quoteAuthor").style.color = fontColor;
    }
});

function getContrastYIQ(hexcolor){
    const r = parseInt(hexcolor.substr(0,2),16);
    const g = parseInt(hexcolor.substr(2,2),16);
    const b = parseInt(hexcolor.substr(4,2),16);
    const yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
}
```