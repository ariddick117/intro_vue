import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

const myVM = (() => {
    // instantiate a new Vue instance
    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!", 

            collection: [
                { name: "Arthus, ", role: "Dovahkiin" },
                { name: "Kurama, ", role: "Nine Tails" },
                { name: "Arthas, ", role: "Lich King" }
            ]
        },

        methods: {
            logClicked() {
                console.log('clicked on an element');
            }
        }
    }).$mount("#app");

})();