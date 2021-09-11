<template>
  <div>
    <v-row>
        <v-col md="12" sm="12" cols="12">
            <v-card class="overFlow-hidden">
                <v-row class="ma-0 h-full">
                    <v-col cols="12" sm="12" md="12" lg="112" order="2" order-lg="1">
                        <v-card-title>Formulario</v-card-title>
                        <v-card-text>
                            <form-action></form-action>
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import FormAction from './FormAction.vue'


export default {
  components: { FormAction },
  setup() {
      return {}
  },

}
</script>

<style lang="scss" scoped>
</style>