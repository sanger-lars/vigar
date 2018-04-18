class MobileMenu {
	constructor() {
		this.siteHeader = document.getElementsByClassName("site-header");
		this.menuIcon = document.getElementsByClassName("site-header__menu-icon");
		console.log(this.menuIcon);
		this.menuContent = document.getElementsByClassName("site-header__menu-content");
		this.events();
	} 

	events() {
		console.log(this.menuIcon);
		this.menuIcon[0].addEventListener("click", this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContent[0].classList.toggle("site-header__menu-content--is-visible");
		this.siteHeader[0].classList.toggle("site-header--is-expanded");
		this.menuIcon[0].classList.toggle("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;


