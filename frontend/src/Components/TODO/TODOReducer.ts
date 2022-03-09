import IReducerActio from '../../../models/Reducer'
import ITODO from '../../../models/ITODO'

export interface IProps {
    DataList:ITODO[],
    EnteredTask:string
}

function reducer(state:IProps,action:IReducerActio){
    switch (action.type) {
        case "GetData":
            return state
        case "AddData":
            debugger
            const {Task} = action.payload
            var list = [...state.DataList]
            list.push(Task);
            return {...state,DataList:list,EnteredTask:""}
        case "OnTextChange":
            debugger
            const {Text} = action.payload
            return {...state,EnteredTask:Text}
        default:
            throw new Error();
            
    }
}

export default reducer