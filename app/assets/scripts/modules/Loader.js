class Loader {
    constructor() {
        this.loader = document.querySelector('.loader');
        this.body = document.querySelector('.whole-section');
        if(this.loader) {
            this.init();
        }
    }

    init() {
        setTimeout(() => {
            this.loader.style.display = 'none';
            this.body.style.display = 'block';
        }, 6000)
    }
}

export default Loader;