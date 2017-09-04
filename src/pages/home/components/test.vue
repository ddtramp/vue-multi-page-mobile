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
        font-size: $font-size;
        [data-dpr="2"] & {
            font-size: $font-size * 2;
        }
        [data-dpr="3"] & {
            font-size: $font-size * 3;
        }
    }
</style>
