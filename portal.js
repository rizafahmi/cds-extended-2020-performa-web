const portal = document.createElement('portal');
portal.src = 'http://localhost:8080/blank.html';
document.body.append(portal);

const shareButton = document.querySelector("#share-button");
shareButton.addEventListener('click', function() {
  portal.activate();
});
