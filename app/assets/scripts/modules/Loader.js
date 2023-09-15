class Loader {
    constructor() {
        this.loader = document.querySelector('.loader');
        this.body = document.querySelector('.whole-section');
        this.init();
    }

    init() {
        setTimeout(() => {
            this.loader.classList.add('hide-loader');
            this.body.classList.add('show-section');
        }, 4000)
    }
}

export default Loader;