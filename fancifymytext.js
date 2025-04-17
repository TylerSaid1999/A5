function makeBigger() {
    document.getElementById("text-area").style.fontSize = "24pt";
  }
  
  function setFancy() {
    let area = document.getElementById("text-area");
    area.style.fontWeight = "bold";
    area.style.color = "blue";
    area.style.textDecoration = "underline";
  }
  
  function setBoring() {
    let area = document.getElementById("text-area");
    area.style.fontWeight = "normal";
    area.style.color = "black";
    area.style.textDecoration = "none";
  }
  
  function mooify() {
    let area = document.getElementById("text-area");
    area.value = area.value.toUpperCase();
    let sentences = area.value.split(".");
    area.value = sentences.join("-Moo.");
  }