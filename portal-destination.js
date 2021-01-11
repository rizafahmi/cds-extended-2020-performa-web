addEventListener('portalactivate', function(event) {
  const portal = event.adoptPredecessor();
  document.body.append(portal);

  const button = document.createElement('button');
  button.textContent = "Share";
  const style = document.createElement('style');
  style.innerHTML = `
    button {
        position: absolute;
        left: 2em;
        top: 2em;
    }
`;
  document.body.append(style, button);
})
