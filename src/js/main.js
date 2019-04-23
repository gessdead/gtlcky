document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.js-container');
    const getLucky = new GetLucky(container);

    getLucky.init();
});

class GetLucky {
    constructor(container) {
        this.container = container;
        this.actionButton = container.querySelector('.js-action-button');
        this.number = null;
        this.text = null;
        this.className = 'js-result';
        this.element = null;
        this.template = (number, text) => `
                <div class="result">
                    <span>${number}</span>
                    <span>${text}</span>
                </div>
            `;
        this.blockData = {
            negativeText: `Oh, f*ck. You're damned! Try again.`,
            positiveText:  `Yeah! You're lucky! <3`
        };
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.actionButton.addEventListener('click', () => {
            this.removeBlock(this.className);
            this.renderBlock();
        });
    }

    renderBlock() {
        this.number = this.getRandomNumber(-100, 101);
        this.number > 0 ?
            this.text = this.blockData.positiveText:
            this.text = this.blockData.negativeText;

        const div = document.createElement('div');

        div.className = this.className;
        div.innerHTML = this.template(this.number, this.text);

        this.container.appendChild(div);
    }

    removeBlock(className) {
        this.element = document.querySelector(`.${className}`);

        if (this.element !== null) {
            this.element.remove();
        }
    }

    getRandomNumber(max, min) {
        return Math.floor(Math.random() * (max - min) - max);
    }
}
