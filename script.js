document.getElementById("fetchBtn").addEventListener("click", async () => {
    const inputUrl = document.getElementById("inputUrl").value;
    if (!inputUrl) {
      alert("Please enter a URL.");
      return;
    }
    document.getElementById("result").textContent = ``;
    try {
      const response = await fetch(inputUrl);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const scriptContent = doc.body.querySelector("script").textContent;
  
      const linkRegex = /link:\s*'([^']*)'/;
      const linkMatch = scriptContent.match(linkRegex);
  
      if (linkMatch && linkMatch[1]) {
        const linkValue = linkMatch[1];
        document.getElementById("result").textContent = `Target Link: ${linkValue}`;
        document.getElementById("result").setAttribute("href", linkValue);
      } else {
        document.getElementById("result").textContent = "No link parameter found";
      }
    } catch (error) {
      document.getElementById("result").textContent = "Error fetching the target URL";
    }
  });