import axios from '../../boot/axios';

export function getProducts({
  commit
}) {
  commit('loading', true)
  axios.get(`/product`).then(({
    data
  }) => {
    data.map(value => {
      if (value.stock === 0) {
        value.count = 0
      } else {
        value.count = 1
      }
    })
    commit('setProducts', data)
    commit('loading', false)
  })

}
export function getCategories({
  commit
}) {
  commit('loading', true)
  axios.get('/product-category').then(({
    data
  }) => {
    commit('setCategories', data)
    commit('loading', false)
  })
}
