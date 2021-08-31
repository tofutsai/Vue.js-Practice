import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        formdata: {
            input: 'a',
            show: 'b'
        },
        registrations: [],
        users: [
            { id: 1, name: 'Max', registered: false },
            { id: 2, name: 'Anna', registered: false },
            { id: 3, name: 'Chris', registered: false },
            { id: 4, name: 'Sven', registered: false }
        ],
        fake: [],
    },
    getters: {
        unregisteredUsers(state) {
            return state.users.filter(user => {
                return !user.registered;
            });
        },
        registrations(state) {
            return state.registrations;
        },
        totalRegistrations(state) {
            return state.registrations.length;
        },
        formdata(state) {
            return state.formdata;
        },
        fake(state) {
            return state.fake;
        }
    },
    mutations: {
        fakeMu(state, data) {
             state.fake = data;
          
        },
        register(state, userId) {
            const date = new Date;
            const user = state.users.find(user => {
                return user.id == userId
            });
            user.registered = true;
            const registration = {
                userId: userId,
                name: user.name,
                date: date.getMonth() + "/" + date.getDay()
            };
            state.registrations.push(registration);
        },
        unregister(state, payload) {
            const user = state.users.find(user => {
                return user.id == payload.userId
            });
            user.registered = false;
            const registration = state.registrations.find(registration => {
                return registration.userId == payload.userId;
            });
            state.registrations.splice(state.registrations.indexOf(registration), 1);
            state.fake = [];
        }
    },
    actions: {
        register(context, userId) { //與 store 實例具有相同方法和屬性的 context 物件

            var fake = [
                { name: "AAA", age: "18", },
                { name: "BBB", age: "18", }
            ]
            
            setTimeout(() => {
                context.commit('register', userId);
                context.commit('fakeMu', fake);
            }, 1000)

            fetch('http://localhost:3674/product/ReadAPI', {
                method: 'post',
                body: JSON.stringify({
                    operId: 1,

                })
            }).then(function (j) {
                // `j`會是一個JavaScript物件
                console.log(j)
            }).catch(function (err) {
                // Error :(
            })

        }
    }
});
