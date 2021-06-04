//aplicationに存在する全てのreducersを統括する
import {combineReducers} from 'redux'
import count from './count'

//countをcombineDeducersで結合
export default combineReducers({count})
//export default combineReducers({foo, bar, baz})  //複数のreducerがある時