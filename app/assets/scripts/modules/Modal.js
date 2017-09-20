import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events() {
		
		// click open modal
		this.openModalButton.click(this.openModal.bind(this));
		
		// click close modal
		this.closeModalButton.click(this.closeModal.bind(this));
		
		// push any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			// ESC key
			this.closeModal();
		}
	}
 
	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;