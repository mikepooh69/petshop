<template>
  <div class="q-ml-auto flex items-center no-wrap">
    <q-btn color="primary" dense round flat icon="remove" @click="down" />
    <span class="q-mx-xs">{{ item.count }}</span>
    <q-btn color="primary" dense round flat icon="add" @click="up" />
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style></style>
