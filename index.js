async function getLink() {
    const response = await fetch('https://dailyofleaks.com/s?ZeE');
    const html = await response.text();
    // Convert the HTML string into a document object
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var scriptContent = doc.body.querySelector("script").textContent;
    console.log(scriptContent);

    const linkRegex = /link:\s*'([^']*)'/;
    const linkMatch = scriptContent.match(linkRegex);

    if (linkMatch && linkMatch[1]) {
    const linkValue = linkMatch[1];
    console.log(linkValue);
    } else {
    console.log("No link parameter found");
    }
}