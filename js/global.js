// * * * * * * * * * *
//  MAIN MENU
// * * * * * * * * * *

function openMainMenu() {
  document.body.classList.remove('show-basket-menu');
  document.body.classList.add('show-overlay', 'show-main-menu');
}
function openBasketMenu() {
  document.body.classList.remove('show-main-menu');
  document.body.classList.add('show-overlay', 'show-basket-menu');
}
function openUserMenu() {
  document.body.classList.add('show-overlay', 'show-user-menu');
}
function openSearchMenu() {
  document.body.classList.add('show-overlay', 'show-search-menu');
  document.getElementById('txtSearch').focus();
}
function closeMenus() {
  document.body.classList.remove(
    'show-overlay',
    'show-main-menu',
    'show-basket-menu',
    'show-user-menu',
    'show-search-menu'
  );
}
