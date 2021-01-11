(async function() {
const portal = document.createElement('portal');
portal.src = 'http://localhost:8080/blank.html';
document.body.append(portal);
  setTimeout(function() {
portal.activate();
    
  }, 1000);
  
})();
