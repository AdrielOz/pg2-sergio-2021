<template>
  <div>
    <v-form class="multi-col-validation" ref="form" lazy-validation>
      <v-row>
        <v-col cols="12" md="4">
          <v-select v-model="carrier" :items="items" label="Carrier" dense outlined></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-select v-model="node" :items="nodes" label="Node" dense outlined></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="cVlan" label="c-vlan:" outlined dense placeholder="c-vlan" hide-details></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="sVlan" label="s-vlan:" outlined dense placeholder="s-vlan" hide-details></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="cid" label="CID:" outlined dense placeholder="cid" hide-details></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="serviceOrder"
            label="Service Order:"
            outlined
            dense
            placeholder="Service Order"
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-select v-model="access" :items="accessItem" label="Access" dense outlined></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-select v-model="ifL2" :items="ifl2" label="IF-L2" dense outlined></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="bw" label="BW:" outlined dense placeholder="BW" hide-details></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-select v-model="agregation" :items="agregations" label="Agregation" dense outlined></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-select v-model="tos" :items="TosItem" label="ToS" dense outlined></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="ipBlock"
            label="IP Block:"
            outlined
            dense
            placeholder="IP Block"
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-select v-model="routing" :items="routings" label="Routing" dense outlined></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="asn" label="ASN:" outlined dense placeholder="ASN" hide-details></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="rd" label="RD:" outlined dense placeholder="RD" hide-details></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="managment"
            label="Managment:"
            outlined
            dense
            placeholder="Managment"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="lanComment"
            label="lan Comment:"
            outlined
            dense
            placeholder="lan Comment"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="trunk" label="Trunk:" outlined dense placeholder="Trunk" hide-details></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn color="accent" @click="enviar">Enviar</v-btn>
          <v-btn type="reset" outlined class="mx-2" >Cancelar</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'FormAction',
  setup() {
    const carrier = ref('')
    const node = ref('')
    const cVlan = ref('')
    const sVlan = ref('')
    const cid = ref('')
    const serviceOrder = ref('')
    const access = ref('')
    const ifL2 = ref('')
    const bw = ref('')
    const agregation = ref('')
    const tos = ref('')
    const ipBlock = ref('')
    const routing = ref('')
    const asn = ref('')
    const rd = ref('')
    const managment = ref('')
    const lanComment = ref('')
    const trunk = ref('')
    const items = ['Onnet', 'Tigo', 'Claro', 'Bluenet']
    const nodes = ['GTC', 'BUR', 'CTJ', 'TEC', 'Z01']
    const accessItem = ['GTM-GTCTJ-SW01', 'GTM-GTCTJ-SW02', 'GTM-GTCTJ-SW03', 'GTM-GTCTJ-SW04']
    const ifl2 = ['Fa0/1', 'Fa0/2', 'Fa0/3', 'Fa0/4']
    const agregations = ['GUA-CTJ-PE01', 'GUA-CTJ-PE02', 'GTM-CTJ-ASR02']
    const TosItem = ['IP-TRANSIT', 'L3-VPN', 'L2-VPN-L', 'L2-VPN-1']
    const routings = ['STATIC', 'BGP']
    return {
      carrier,
      node,
      cVlan,
      sVlan,
      cid,
      serviceOrder,
      access,
      ifL2,
      bw,
      agregation,
      tos,
      ipBlock,
      routing,
      asn,
      rd,
      managment,
      lanComment,
      trunk,
      items,
      nodes,
      accessItem,
      ifl2,
      agregations,
      TosItem,
      routings,
    }
  },
  methods: {
    enviar() {
      console.log('carrie', this.carrier, 'node ', this.node, ' cvlan ', this.cVlan)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>