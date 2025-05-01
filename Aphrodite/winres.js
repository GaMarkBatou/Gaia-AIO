function resizeToContentSize() {
  // Get the dimensions of the content (e.g., the document body)
  const contentWidth =  window.outerWidth * window.devicePixelRatio;
  const contentHeight = window.outerHeight * window.devicePixelRatio;
console.log(`w: ${contentWidth}px`);
console.log(`h: ${contentHeight}px`);

//const primaryMonitorHeight = screen.availHeight;
//console.log(`Primary monitor height: ${primaryMonitorHeight}px`);

//const primaryMonitorWidth = window.screen.availWidth;
//console.log(`Primary monitor width: ${primaryMonitorWidth}px`);

  // Resize the window to match the content size
  window.resizeTo(contentWidth, contentHeight);
}

// Call the function to resize the window
resizeToContentSize();


//  const contentWidth =  window.screen.availWidth * 0.65;
//  const contentHeight = screen.availHeight * 0.99;
//  console.log(`w: ${contentWidth}px`);
//  console.log(`h: ${contentHeight}px`);

//  const contentWidth =  window.outerWidth * 1.45;
//  const contentHeight = window.outerHeight * 1.45;