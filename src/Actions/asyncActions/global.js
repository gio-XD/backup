
export function handleTabChange(currentIndex,nextIndex,key){
  let payload = {}
  return dispatch => {
    if(currentIndex !== nextIndex){
      payload[key] = {
        tabIndex:nextIndex,
        direction:currentIndex < nextIndex ? 'right' : 'left'
      }
      dispatch({
        type:'saveTabIndex',
        payload
      })
    }

  }
}
