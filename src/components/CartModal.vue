<template>
  <q-dialog v-model="modal" persistent>
    <q-card style="width: 600px">
      <q-card-section class="text-subtitle1 text-weight-medium">
        Añadir producto al carrito
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">
        <div>
          <div class="flex no-wrap">
            <q-img
              :src="current.photo"
              :ratio="2"
              contain
              spinner-color="primary"
              spinner-size="82px"
              width="300px"
            />
            <q-list style="width: 300px">
              <q-item>
                <q-item-section>
                  <q-item-label caption>Producto</q-item-label>
                  <q-item-label lines="1">{{ current.name }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Codigo</q-item-label>
                  <q-item-label lines="1">{{ current.code }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Precio</q-item-label>
                  <q-item-label lines="1"
                    >${{ current.price.toLocaleString('en') }}</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Cantidad</q-item-label>
                  <InputStep
                    :item="current"
                    :index="current.index"
                    style="margin: 0 !important"
                  />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label caption>Sub-total</q-item-label>
                  <q-item-label lines="1"
                    >${{ current.price.toLocaleString('en') }}</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-item>
          <q-item-section>
            <q-item-label caption>Descripción</q-item-label>
            <q-item-label lines="3"> {{ current.description }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          label="Seguir comprando"
          no-caps
          color="primary"
          v-close-popup
        />
        <q-btn
          label="Añadir al carrito"
          no-caps
          padding="5px 16px"
          color="primary"
          @click="add"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import InputStep from '../components/InputStep.vue'
export default {
  components: {
    InputStep
  },
  data() {
    return {
      modal: false
    }
  },
  mounted() {
    this.$root.$on('open', (val) => {
      this.modal = val
    })
  },
  methods: {
    add() {
      this.$store.commit('petshop/addToCart')
    }
  },
  computed: {
    current() {
      return this.$store.state.petshop.currentItem
    }
  }
}
</script>

<style></style>
