function createCalculator() {
    return {
        display: document.querySelector(`.display`),
        btnClear: document.querySelector(`btn-clear`),

        start() {
            this.clickButtons();
            this.pressEnter();
        },

        clickButtons() {
            document.addEventListener(`click`, (event) => {
                const element = event.target;

                if (element.classList.contains(`btn-num`)) {
                    this.btnForDisplay(element.innerText);
                }

                if (element.classList.contains(`btn-clear`)) {
                    this.clearDisplay();
                }

                if (element.classList.contains(`btn-del`)) {
                    this.deleteChar();
                }

                if (element.classList.contains(`btn-eq`)) {
                    this.calculateResult();
                }
            });
        },

        pressEnter(){
            this.display.addEventListener(`keyup`, e => {
                if (e.keyCode === 13) this.calculateResult();
            });
        },

        btnForDisplay(valueElement) {
            this.display.value += valueElement;
        },

        clearDisplay() {
            this.display.value = ``;
        },

        deleteChar() {
            this.display.value = this.display.value.slice(0, -1);
        },

        calculateResult() {
            let count = this.display.value;

            try {
                count = eval(count);

                if(!count){
                    alert(`Conta Invalida. Tente novamente`);
                    return;
                }

                this.display.value = String(count);
            } catch (e) {
                alert(`Conta Invalida. Tente novamente`);
                return;
            }
        }

    }
}

const calculator = createCalculator();
calculator.start();