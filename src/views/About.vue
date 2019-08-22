<template>
    <div class="about flex flex-col items-center">

        <div class="absolute inset-0 z-0" @click="modal = false"></div>

        <input  type="text" class="bg-gray-300 px-4 py-2 z-10" autocomplete="off" v-model="state"  @focus="modal = true">

        <div v-if="filteredStates && modal" class="z-10">
            <ul class="w-48 bg-gray-800 text-white">
                <li v-for="filteredState in filteredStates" class="py-2 border-b cursor-pointer " @click="setState(filteredState)">{{ filteredState }}</li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {
        data: function () {
            return {
                state: '',
                modal: false,
                states: [
                    'Florida', 'Alabama', 'Mexico', 'New York', 'New Jersey', 'Alaska', 'Texas'
                ],
                filteredStates: [],
            }
        },

        mounted() {
            this.filterStates();
        },

        methods: {
            filterStates() {
                if (this.state.length == 0) {
                    this.filteredStates = this.states;
                }

                this.filteredStates = this.states.filter(state => {
                    return state.toLowerCase().startsWith(this.state.toLowerCase());
                });
            },

            setState(state){
                this.state = state;
                this.modal = false;
            }
        },

        watch: {
            state() {
                this.filterStates();
            }
        }
    }
</script>