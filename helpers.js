function loadScript(url, callback) {

    // Add script to DOM
    var script = document.createElement("script")
    script.type = "text/javascript";
  
    // Execute callback
    script.onload = callback;
  
    // Set source  
    script.src = url;
  
    // Append to document
    document.head.appendChild(script);
  
  }