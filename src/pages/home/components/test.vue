<template>
    <div class="test-class">
        {{ d }}
    </div>
</template>

<script>
    const test = {
        name: 'test',
        data: function () {
            return {
                d: 'you data from test.vue file'
            }
        }
    }

    export default test
</script>

<style lang="scss" scoped>
    @import './../../../utils/variable.scss';

    .test-class {
        @include font-size(12px)
    }
</style>
