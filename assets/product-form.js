if (!customElements.get('product-form')) {
  customElements.define('product-form', class ProductForm extends HTMLElement {
    constructor() {
      super();

      this.form = this.querySelector('form');
      this.form.querySelector('[name=id]').disabled = false;
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.cartNotification = document.querySelector('cart-notification');
    }

    onSubmitHandler(evt) {
      evt.preventDefault();
      const submitButton = this.querySelector('[type="submit"]');
      if (submitButton.classList.contains('loading')) return;
      
      /*Adjustments For Please Select DropDown if Please Select is selected*/
      let selectDropdown=document.getElementsByClassName("dropdownSelect")[0];
      let buyButtonPosition = document.getElementById("mainBuyButton");
     
      if(selectDropdown!=null){
        let dropdownName=selectDropdown.getAttribute("name");
        if(selectDropdown.selectedIndex=="0" && dropdownName != "options[Color]"){
          buyButtonPosition.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
          selectDropdown.style.border="2px solid crimson";
          document.querySelector(".selectWarning").style.display="block";
        }else{
          this.handleErrorMessage();
        this.cartNotification.setActiveElement(document.activeElement);
  
        submitButton.setAttribute('aria-disabled', true);
        submitButton.classList.add('loading');
        this.querySelector('.loading-overlay__spinner').classList.remove('hidden');
  
        const config = fetchConfig('javascript');
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        delete config.headers['Content-Type'];
  
        const formData = new FormData(this.form);
        formData.append('sections', this.cartNotification.getSectionsToRender().map((section) => section.id));
        formData.append('sections_url', window.location.pathname);
        config.body = formData;
  
        fetch(`${routes.cart_add_url}`, config)
          .then((response) => response.json())
          .then((response) => {
            if (response.status) {
              this.handleErrorMessage(response.description);
              return;
            }
  
            this.cartNotification.renderContents(response);
          })
          .catch((e) => {
            console.error(e);
          })
          .finally(() => {
            submitButton.classList.remove('loading');
            submitButton.removeAttribute('aria-disabled');
            this.querySelector('.loading-overlay__spinner').classList.add('hidden');
          });
        } 
      }else{
        this.handleErrorMessage();
        this.cartNotification.setActiveElement(document.activeElement);
  
        submitButton.setAttribute('aria-disabled', true);
        submitButton.classList.add('loading');
        this.querySelector('.loading-overlay__spinner').classList.remove('hidden');
  
        const config = fetchConfig('javascript');
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        delete config.headers['Content-Type'];
  
        const formData = new FormData(this.form);
        formData.append('sections', this.cartNotification.getSectionsToRender().map((section) => section.id));
        formData.append('sections_url', window.location.pathname);
        config.body = formData;
  
        fetch(`${routes.cart_add_url}`, config)
          .then((response) => response.json())
          .then((response) => {
            if (response.status) {
              this.handleErrorMessage(response.description);
              return;
            }
  
            this.cartNotification.renderContents(response);
          })
          .catch((e) => {
            console.error(e);
          })
          .finally(() => {
            submitButton.classList.remove('loading');
            submitButton.removeAttribute('aria-disabled');
            this.querySelector('.loading-overlay__spinner').classList.add('hidden');
          });
      }     
    }

    handleErrorMessage(errorMessage = false) {
      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
      this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');

      this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

      if (errorMessage) {
        this.errorMessage.textContent = errorMessage;
      }
    }
  });
}
