import { FETCH_USER_BY_SEARCH } from '../UserActionType'
import { User } from '../../../firebase'

export const fetchUserBySearch = (payload) => {
  console.log(payload, 'in action')
  return dispatch => {
    User.get()
    .then(snapshot=> {
      let datas = []
      snapshot.forEach(doc => {
        let foundObj = {
          id: doc.id,
          ...doc.data()
        }
      datas.push(foundObj)
      console.log(datas)
      })
      let filteredData = datas.filter(data => data.url.toLowerCase().indexOf(payload.toLowerCase()) !== -1)
      dispatch(fetchUserBySearchSuccess(filteredData))
    })
  }
}

const fetchUserBySearchSuccess = (payload) => {
  return {
    type: FETCH_USER_BY_SEARCH,
    payload
  }
}