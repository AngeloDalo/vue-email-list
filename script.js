/**
 * Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
 */

const app = new Vue(
    {
        el: '#app',
        data: {
           email: null,
        },

        created() {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
              this.email = response.data.response;
            })
            .catch(function (error) {
              console.log(error);
            });
        },

        methods: { 

        }
    });