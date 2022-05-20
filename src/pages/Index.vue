<template>
  <q-page class="q-pa-md">
    <q-img
      src="../assets/banner.jpg"
      :ratio="4"
      height="180px"
      position="bottom"
      spinner-color="primary"
      spinner-size="82px"
    />

    <div class="text-subtitle1 q-my-md text-weight-medium flex items-center">
      Nuestros mejores productos
      <q-btn
        color="grey-2"
        unelevated
        text-color="primary"
        label="Ver mas"
        no-caps
        class="q-ml-auto"
        to="/products"
      />
    </div>
    <div class="row q-col-gutter-md">
      <div
        class="col-12 col-sm-4 col-md-2 col-lg-2"
        v-for="(item, i) in products"
        :key="i"
      >
        <Products :item="item" :index="i" />
      </div>
    </div>
    <div class="text-subtitle1 q-my-md text-weight-medium flex items-center">
      Explora nuestras categorias
      <q-btn
        color="grey-2"
        unelevated
        text-color="primary"
        label="Ver mas"
        no-caps
        class="q-ml-auto"
        to="/products"
      />
    </div>
    <div class="row q-col-gutter-md">
      <div
        class="col-12 col-sm-4 col-md-3 col-lg"
        v-for="(item, i) in categories"
        :key="i"
      >
        <Categories :item="item" />
      </div>
    </div>
    <q-inner-loading :showing="loading">
      <q-spinner class="q-mx-auto" size="60px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<script>
import Categories from '../components/Categories.vue'
import Products from '../components/product.vue'
export default {
  name: 'PageIndex',
  components: {
    Categories,
    Products
  },
  computed: {
    loading() {
      return this.$store.state.petshop.loading
    },
    products() {
      return this.$store.state.petshop.products
    },
    categories() {
      return this.$store.state.petshop.categories
    }
  }
}
</script>
