import IReducerActio from '../../../models/Reducer'
import ITODO from '../../../models/ITODO'

export interface IProps {
    DataList:ITODO[],
    EnteredTask:string
}

function reducer(state:IProps,action:IReducerActio){
    switch (action.type) {
        case "GetData":
            const {data} = action.payload
            return {...state,DataList:data as ITODO[]}
        case "AddData":
            const {Task} = action.payload
            var list = [...state.DataList]
            list.push(Task);
            return {...state,DataList:list,EnteredTask:""}
        case "OnTextChange":
            const {Text} = action.payload
            return {...state,EnteredTask:Text}
        default:
            throw new Error();
            
    }
}

export default reducer