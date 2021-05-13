const vm = new Vue({
    el: '#app',
    data() {
        return {
            logged: '',
        }
    },

    methods: {
        logApi: async function () {
            const res = await fetch('https://api.artic.edu/api/v1/artworks');
            const { data } = await res.json();
            this.logged = data;
        },

    },

    mounted() {
        this.logApi();
    }
})