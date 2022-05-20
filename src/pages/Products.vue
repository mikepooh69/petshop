<template>
  <q-page class="q-pa-md">
    <div class="text-subtitle1 text-weight-medium q-mb-md flex items-center">
      {{ name }}
      <q-input
        class="q-ml-auto"
        v-model="search"
        borderless
        dense
        type="text"
        placeholder="Buscar producto"
        bg-color="grey-1"
        :debounce="300"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="row q-col-gutter-md">
      <div class="text-center text-primary" v-if="!products.length">
        No hay resultados
      </div>
      <div
        class="col-12 col-sm-4 col-md-3"
        v-for="(item, i) in products"
        :key="i"
      >
        <Product :item="item" :index="i" />
      </div>
    </div>
    <q-inner-loading :showing="loading">
      <q-spinner class="q-mx-auto" size="60px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<script>
import Product from '../components/product.vue'
export default {
  name: 'Products',
  data() {
    return {
      search: ''
    }
  },
  watch: {
    search(val) {
      this.$store.commit('petshop/filterInput', val)
    }
  },
  components: {
    Product
  },
  computed: {
    loading() {
      return this.$store.state.petshop.loading
    },
    products() {
      return this.$store.state.petshop.current_products
    },
    name() {
      return this.$store.state.petshop.name
    }
  }
}
</script>
