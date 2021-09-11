<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
    >
      <card-form-resource></card-form-resource>
    </v-col>
  </v-row>
</template>

<script>

import CardFormResource from './components/CardFormResource.vue'

export default {
  components: {
    CardFormResource
    }, 
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>