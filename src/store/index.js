import { createStore } from 'vuex'
import { ROOTFQDN } from '../config.js'

const store = createStore({
    state: {
        postits: [],
    },
    mutations: {
        addPostIt(store, obj) {
            store.postits.push(obj)
        },
        initApp(store, obj) {
            for(let i = 0; i < obj.length; i++) {
                store.postits.push(obj[i])
            }
        }
    },
    getters: {
        getPostits() {
            return store.state.postits 
        }
    },
    actions: {
        addPostIt(store, obj) {
            store.commit('addPostIt', obj)
            fetch(ROOTFQDN + 'notes', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            }).then((data)=> {
                console.log(data)
            })
        },
        async initApp(store) {
            const obj = await fetch(ROOTFQDN + 'notes').then((data) => {
                return data.json()
            })

            store.commit('initApp', obj.notes)
        }
    }
})

export default store