import IReducerActio from '../../../models/Reducer'
import ITODO from '../../../models/ITODO'

export interface IProps {
    Data:ITODO[],
}

function reducer(state:IProps,action:IReducerActio){
    switch (action.type) {
        case "GetData":
            return state
        default:
            throw new Error();
            
    }
}

export default reducer