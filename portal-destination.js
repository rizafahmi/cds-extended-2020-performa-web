addEventListener('portalactivate', function(event) {
  const portal = event.adoptPredecessor();
  document.body.append(portal);

  const div = document.createElement('div');
  const button = document.createElement('button');
  button.textContent = "Donasi";
  const input = document.createElement('input');
  input.type = 'number';
  const rp = document.createElement('span');
  rp.textContent = "Rp. ";
  const header = document.createElement('h1')
  header.textContent = "Donasi"

  button.addEventListener('click', function() {
    portal.activate();
  });


  div.append(header);
  div.append(rp);
  div.append(input);
  div.append(button);

  const style = document.createElement('style');
  style.innerHTML = `
    button {
      background-color: #fff382;
      border-radius: 4px;
      border: 1px solid #2779bd;
      color: #2779bd;
      padding-top: 4px;
      padding-bottom: 4px;
      font-weight: bold;
    }
    input {
      border-radius: 4px;
      border: 1px solid #3d4852;
      padding: 4px;
      margin-right: 1em;
    }
    span {
      font-weight: bold;
    }
    div {
      padding: 1em;
      background-color: #fff;
      position: absolute;
      left: 25em;
      top: 12em;
      width: 300px;
      height: 128px;
      border-radius: 1em;
      box-shadow: 0 0 20px 10px #999;
    }
    body {
      color: #3d4852;
    }
`;
  document.body.append(style, div);
})
