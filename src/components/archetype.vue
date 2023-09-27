<script>
export default {
    name: 'archetype',

    props: {
        type: String,
    }

}
</script>
<template>
    <option :value="type">{{ type }}</option>
</template>


<style lang="scss" scoped></style>