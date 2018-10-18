export function saveAsset (state = { data: [], pageIndex: 1, hasMore: true }, { type, payload }) {
  switch (type) {
  case 'saveAssetList':
    switch (payload.action) {
    case 'fresh':
      return {
        ...state,
        data: payload.data,
        hasMore: true,
        pageIndex: 1
      }
    case 'fetch':
      return {
        ...state,
        data: state.data.concat(payload.data),
        hasMore: payload.data.length !== 0,
        pageIndex: payload.data.length === 0 ? state.pageIndex : state.pageIndex + 1
      }
    case 'query':
      return {
        ...state,
        data: state.data.concat(payload.data),
        hasMore: payload.data.length !== 0,
        pageIndex: payload.data.length === 0 ? state.pageIndex : state.pageIndex + 1
      }
    case 'saveDetail':
      return {
        ...state,
        assetDetail: { ...payload.tabData, ...payload.cardData }
      }

    default:
      return {
        ...state
      }
    }

  case 'initialAssetList':
    console.log('initial state of AssetList')
    return {
      data: [], pageIndex: 1, isfinished: false
    }

  default:
    return state
  }
}

export function saveForm (state = {}, { type, payload }) {
  if (type === 'saveForm') {
    return {
      ...state,
      ...payload
    }
  } else {
    return state
  }
}

export function saveAllocationData (state = [], { type, payload }) {
  switch (type) {
  case 'saveAllocationData':
    return Array.isArray(payload) ? state.concat(payload) : state
  case 'updateAllocationData':
    return Array.isArray(payload) ? payload : payload.allocationData
  default:
    return state
  }
}

export function saveSelectedtab (state = 'menu', { type, payload }) {
  if (type === 'saveSelectedtab') {
    // console.log(action.payload);
    return payload
  } else {
    return state
  }
}
