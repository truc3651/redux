// constants action types

export const ADD_HOBBY = 'ADD_HOBBY'
export const ACTIVE_HOBBY = 'ACTIVE_HOBBY'

// action creators

export const addHobby = (hobby) => ({
  type: ADD_HOBBY,
  payload: hobby,
})

export const activeHobby = (idHobby) => ({
  type: ACTIVE_HOBBY,
  payload: idHobby,
})
