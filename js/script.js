Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    emails: [],
  },
  methods: {},
  created() {
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
        const email = res.data.response;
        this.emails.push(email);
      });
    };
  },
});
