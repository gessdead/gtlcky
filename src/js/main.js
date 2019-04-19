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
        this.fullData = null;
        this.template = data => `
                <div class="result">
                    <span>${data.number}</span>
                    <span>${data.positiveText}</span>
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
            this.renderBlock();
        });
    }

    concatData(data1, data2) {
        return Object.assign(data1, data2);
    }

    renderBlock() {
        this.number = {number: this.getRandomNumber(-100, 100)};
        this.fullData = this.concatData(this.blockData, this.number);
        console.log(this.container);
        console.log(this.template(this.fullData));

        this.container.innerHTML = this.template(this.fullData);
    }

    getRandomNumber(max, min) {
        return Math.floor(Math.random() * (max - min));
    }
}
