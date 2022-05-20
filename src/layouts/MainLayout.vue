<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-white" elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          color="grey-7"
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->
        <img class="q-ml-sm" src="~assets/logo.png" alt="Logo" width="72" />
        <q-space />
        <q-btn
          color="primary"
          dense
          :flat="$route.path == '/home' ? false : true"
          no-caps
          label="Inicio"
          class="q-mr-md"
          padding="4px 10px"
          to="/home"
          unelevated
        />
        <q-btn
          color="primary"
          dense
          :flat="$route.path.includes('products') ? false : true"
          no-caps
          label="Productos"
          class="q-mr-md"
          padding="4px 8px"
          to="/products"
          unelevated
        />
        <q-btn
          flat
          dense
          round
          icon="shopping_bag"
          aria-label="cart"
          class="q-mx-md"
          color="grey-7"
        >
          <q-badge v-if="cart.length" color="red" rounded floating>{{
            cart.length
          }}</q-badge>
          <q-menu>
            <q-item-label header class="text-grey-8">
              Resumen del carrito de compras
            </q-item-label>
            <q-list
              style="min-width: 300px; max-width: 400px; max-height: 400px"
              class="scroll"
            >
              <div class="text-center text-caption q-my-lg" v-if="!cart.length">
                No hay productos añadidos al carrito
                <br />
                <q-icon size="md" color="grey-5" name="remove_shopping_cart" />
              </div>
              <q-item v-for="(item, i) in cart" :key="i">
                <q-item-section avatar top>
                  <q-img
                    :src="item.photo"
                    contain
                    spinner-color="primary"
                    spinner-size="36px"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label lines="1">{{ item.name }}</q-item-label>
                  <q-item-label class="text-subtitle2">
                    precio: ${{ item.price.toLocaleString('en') }}
                  </q-item-label>
                  <q-item-label class="text-subtitle2">
                    Subtotal: ${{ item.price.toLocaleString('en') }}
                  </q-item-label>
                  <q-item-label class="text-subtitle2">
                    cantidad: {{ item.count }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon
                    name="close"
                    class="cursor-pointer"
                    color="red"
                    @click="remove(i)"
                  />
                </q-item-section>
              </q-item>
            </q-list>
            <q-item>
              <q-item-section>
                <q-item-label>Sub-total</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label class="text-subtitle2"
                  >${{ subtotal }}</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list class="q-pa-sm">
        <q-item-label header class="text-grey-8"> Categorias </q-item-label>

        <q-item
          style="border-radius: 6px"
          clickable
          to="/products"
          exact-active-class="bg-grey-2"
          @click="setNameProducts"
        >
          <q-item-section avatar>
            <q-icon name="pets" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Todas las categorias</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>

        <Categories
          v-for="(item, i) in categories"
          :key="i"
          :item="item"
          drawer
        />
      </q-list>
    </q-drawer>

    <q-page-container class="text-grey-7">
      <router-view />
    </q-page-container>

    <Cart-Modal />
  </q-layout>
</template>

<script>
import Categories from '../components/Categories.vue'
import CartModal from '../components/CartModal.vue'
export default {
  name: 'MainLayout',
  components: {
    Categories,
    CartModal
  },
  data() {
    return {
      leftDrawerOpen: true,
      modal: false
    }
  },
  watch: {
    $route(val) {
      if (val.path === '/home') {
        this.leftDrawerOpen = false
      } else {
        this.leftDrawerOpen = true
      }
    }
  },
  created() {
    this.$store.dispatch('petshop/getProducts')
    this.$store.dispatch('petshop/getCategories')
    this.$router.replace('/products')
  },

  methods: {
    remove(index) {
      this.$store.state.petshop.cart.splice(index, 1)
    },
    setNameProducts() {
      this.$store.commit('petshop/filter', 0)
      this.$store.commit('petshop/setName', 'Todas las categorias')
    }
  },
  computed: {
    products() {
      return this.$store.state.petshop.products
    },
    categories() {
      return this.$store.state.petshop.categories
    },
    cart() {
      return this.$store.state.petshop.cart
    },
    subtotal() {
      let result = 0
      this.cart.forEach((element) => {
        result += element.price
      })
      return result.toLocaleString('en')
    }
  }
}
</script>
<style lang="scss">
.logo {
  span {
    font-weight: 600;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.192);
  }
  i {
    text-shadow: 1px 2px 0px black;
    position: relative;
    transform: rotate(16deg);
  }
}
</style>
