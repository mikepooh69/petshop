export function loading(state, val) {
  state.loading = val
}

export function setProducts(state, val) {
  state.products = val
  state.current_products = val
}

export function setCategories(state, val) {
  state.categories = val
}

export function setName(state, val) {
  state.name = val
}

export function filter(state, val) {
  if (val == 0) {
    state.current_products = state.products
  } else {
    state.current_products = state.products.filter(value => value.category.id == val)
  }
}

export function setCurrentItem(state, val) {
  state.currentItem = val
}

export function addToCart(state) {
  if (state.cart.length <= 0) {
    state.cart.push(JSON.parse(JSON.stringify(state.currentItem)))
    state.current_products[state.currentItem.index].count = 1
  } else {

    let index = null
    state.cart.forEach((value, i) => {
      if (value.id == state.currentItem.id) {
        index = i
      }
    })
    if (index !== null) {
      state.cart[index].count += 1
    } else {
      state.cart.push(JSON.parse(JSON.stringify(state.currentItem)))
      state.current_products[state.currentItem.index].count = 1
    }

  }


}

export function downCount(state, val) {
  if (state.current_products[val].count === 0) {
    state.current_products[val].count = 0
  } else if (state.current_products[val].count === 1) {
    state.current_products[val].count = 1
  } else {
    state.current_products[val].count -= 1
  }
}

export function upCount(state, val) {
  if (state.current_products[val].count === state.current_products[val].stock) {
    state.current_products[val].count = state.current_products[val].stock
  } else {
    state.current_products[val].count += 1
  }
}

export function filterInput(state, val) {
  if (val == '') {
    state.current_products = state.products
  } else {
    state.current_products = []
    state.products.forEach(value => {
      if (value.name.toLowerCase().includes(val.toLowerCase())) {
        state.current_products.push(value)
      }
    })
  }
}
