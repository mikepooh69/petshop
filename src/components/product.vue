<template>
  <div>
    <q-card bordered>
      <q-badge
        class="relative-position"
        style="top: -3px; left: -1px"
        :color="item.stock > 0 ? 'green-14' : 'amber-14'"
        text-color="white"
        :label="item.stock > 0 ? 'Disponible' : 'No disponible'"
      />
      <q-img class="q-mt-md" :ratio="2" contain :src="item.photo" />
      <q-card-section class="q-pa-none">
        <q-item>
          <q-item-section>
            <q-item-label lines="1">{{ item.name }}</q-item-label>
            <q-item-label class="text-subtitle2"
              >${{ item.price.toLocaleString('en') }}</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-separator />
      <q-card-actions class="q-px-none no-wrap">
        <InputStep :item="item" :index="index" />
        <q-separator class="q-mx-md" inset vertical />
        <q-btn
          color="primary"
          class="q-mr-auto"
          icon="shopping_cart"
          :label="$q.screen.gt.sm && $q.screen.lt.lg ? '' : 'Añadir'"
          no-caps
          no-wrap
          padding="5px 16px"
          :disable="item.stock <= 0"
          @click="open(item)"
        >
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import InputStep from './InputStep.vue'
export default {
  name: 'Product',
  components: {
    InputStep
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    down() {
      this.$store.commit('petshop/downCount', this.index)
    },
    up() {
      this.$store.commit('petshop/upCount', this.index)
    },
    open(item) {
      item.index = this.index
      this.$store.commit('petshop/setCurrentItem', item)
      this.$root.$emit('open', true)
    }
  }
}
</script>
