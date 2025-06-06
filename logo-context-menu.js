(function() {
  let logo;
  let contextMenu;
  

  function openContextMenu() {
    contextMenu.classList.add('menu-open');
    logo.ariaExpanded = 'true';
  }

  function closeContextMenu() {
    contextMenu.classList.remove('menu-open');
    logo.ariaExpanded = 'false';
  }

  function isContextMenuOpen() {
    return contextMenu && contextMenu.classList.contains('menu-open');
  }
  
  function initContextMenu() {    
    logo = document.querySelector('.navbar2_logo-link');
    contextMenu = document.querySelector('.navigation_context_menu');

    if (!logo || !contextMenu) { return; }

    logo.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        openContextMenu();
    });

    document.addEventListener('click', function(event) {
      if (isContextMenuOpen() && !contextMenu.contains(event.target) && event.button !== 2) {
        closeContextMenu();
      }
    });

    document.addEventListener('contextmenu',function(event) {
      if (!logo.contains(event.target) && isContextMenuOpen()) {
        closeContextMenu();
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && isContextMenuOpen()) {
        closeContextMenu();
      }
    })
  }

  document.addEventListener('DOMContentLoaded', function() {
    initContextMenu();
  });
})();