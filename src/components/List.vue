<template>
    <div>
        <p v-text="dropdownResult"></p>

        <dropdown @update:option="updateOption"></dropdown>
    </div>
</template>

<script>
    import Dropdown from './Dropdown.vue';

    export default {
        name: "List",

        data: function () {
            return {
                dropdownResult: '',
            }
        },

        components: {
            Dropdown,
        },

        methods: {
            updateOption: function (value) {
                this.dropdownResult = value;
            },
        }
    }
</script>

<style scoped>

</style>