import produce from 'immer'

const initialState = {
  seasons: [{season: 1}, {season: 2}, {season: 3}],
  nextIndex: 1,
  evaluatingIndex: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_SEASON':
      const seasons = produce(state.seasons, (draftCurrentSeasonArray) => {

        const elemToMove = draftCurrentSeasonArray[0]
        draftCurrentSeasonArray.splice(0, 1)
        draftCurrentSeasonArray.splice(0 + 1, 0, elemToMove)
      })

      let nextNextIdex = state.nextIndex;
      let nextEvaluatingIndex = state.evaluatingIndex;
      if(true){
        nextNextIdex = state.nextIndex + 1;
        nextEvaluatingIndex = 0
      }else{
        nextEvaluatingIndex = state.evaluatingIndex + 1
      }

      return { seasons, evaluatingIndex: nextEvaluatingIndex, nextIndex: nextNextIdex }
    default:
      return state
  }
}

const selector = () => {
  // this decides if the loop is done
}

const val = reducer(initialState, {type: 'SELECT_SEASON', data: {seasons: [1, 2], winner: 1}})
const val2 = reducer(val, {type: 'SELECT_SEASON', data: {seasons: [1, 3], winner: 1}})

console.log(val, 'val')
console.log(val2, 'val2')
