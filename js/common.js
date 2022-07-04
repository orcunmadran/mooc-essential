/*ESSENTIAL MOOC Common Module*/

function shareModule(moduleName, moduleURL){

  var baseURL = "http://bilgiyonetimi.net/essential-mooc/";
  var shareText = moduleName + baseURL + moduleURL;

  // Create a dummy input to copy the string array inside it
  var copyText = document.createElement("input");

  // Add it to the document
  document.body.appendChild(copyText);

  // Set its ID
  copyText.setAttribute("id", "copyText_id");

  // Output the array into it
  document.getElementById("copyText_id").value = shareText;

  // Select it
  copyText.select();

  // Copy its contents
  document.execCommand("copy");

  //Alert it
  alert("Module info is copied to clipboard! \n \n" + copyText.value)

  // Remove it as its not needed anymore
  document.body.removeChild(copyText);
}
