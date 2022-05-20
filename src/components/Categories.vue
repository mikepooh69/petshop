<template>
  <q-item
    :class="drawer ? '' : 'bg-grey-1'"
    style="border-radius: 6px"
    :to="`/products/${item.id}`"
    active-class="bg-grey-2"
    clickable
    @click="setNameProducts(item)"
  >
    <q-item-section avatar>
      <q-icon name="pets" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ item.name }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-icon name="keyboard_arrow_right" />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'Categories',
  props: {
    item: {
      type: Object,
      required: true
    },
    drawer: {
      type: Boolean
    }
  },
  methods: {
    setNameProducts(item) {
      this.$store.commit('petshop/filter', item.id)
      this.$store.commit('petshop/setName', item.name)
    }
  }
}
</script>
