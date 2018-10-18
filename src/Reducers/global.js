export function save (state = {}, { type, payload }) {
  switch (type) {
  case 'save':
    return {
      ...state,
      ...payload
    }
  default:return state
  }
}
