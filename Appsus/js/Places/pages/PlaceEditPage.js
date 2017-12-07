'use strict';
var cl = console.log;
cl('PlacesEditPage.js ran');

import PlacesService from '../PlacesService.js'
// import EventBusService from '../services/EventBusService.js'


export default {
    template: `
    <section>
    
    Add place
        <form @submit.prevent="savePlace">
            <input type="text" v-model="placeToUpdate.model" autofocus>
            <button>{{(placeId)? 'Save' : 'Add'}}</button>
            <router-link tag="button" to="/">Cancel</router-link>
        </form>
    </section>
    
    `,
    data() {
        return {
            placeToUpdate: PlacesService.emptyplace(),
            placeId: +this.$route.params.placeId,
            userMsg : null

        }
    },
    created() {
        // if (!this.carId) return;
        // CarService.getCarById(this.carId)
        //     .then(car => {
        //         this.carToUpdate = Object.assign({}, car)
        //     })
    },
    methods: {
    //     saveCar() {
    //         CarService.saveCar(this.carToUpdate)
    //             .then(addedCar => {
    //                 this.$router.push('/')
    //             })
    //             .catch(err => {
    //                 var userMsg = { txt: 'Cars Loaded Failed!', type: 'danger' }
    //                 EventBusService.$emit(SHOW_MSG, userMsg)
    //             })
    //     }
    }
    
}