<template>
    <div id="app">
        <div :class="classObject">{{ value }}</div>
        <div :style="{ fontSize: value + 'px'}">{{ value }}</div>

        <button type="button" @click="value++">+</button>
        <button type="button" @click="value--">-</button>
        <button type="button" @click="error = ! error">Error</button>
        <button type="button" @click="warning = ! warning">Warning</button>
    </div>
</template>

<script>

    export default {
        name: 'app',

        data: function () {
            return {
                value: 1,
                error: false,
                warning: false,
            }
        },

        computed: {
            classObject: function () {
                return {
                    'red-error': this.value > 5 ,
                    'green-error': this.value <= 5 ,
                    'yellow-warning': this.warning
                }
            }
        }
    }
</script>

<style>
    body {
        font-size: 40px;
        text-align: center;
        padding-top: 100px;
    }

    .red-error {
        background-color: darkred;
    }

    .green-error {
        background-color: darkgreen;
    }


    .yellow-warning {
        text-decoration: underline;
    }
</style>
