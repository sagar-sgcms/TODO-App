import axios from "axios";
import React, { useEffect, useReducer } from "react";
import ITODO from "../../../models/ITODO";
import TODOList from "./TODOList";
import reducer, { IProps } from "./TODOReducer";

function TODOMaster() {
  const intialValue: IProps = {
    DataList: [] as ITODO[],
    EnteredTask:''
  };
  const [state, dispatch] = useReducer(reducer, intialValue);

  useEffect(()=>{
    axios.get("https://localhost:5001/TODO").then(function(res){
      dispatch({type: 'GetData', payload: {data: res.data.data}})
    })
  },[])

  const handleKeyDown =(e:any)=>{
    // dispatch({type: 'OnTextChange', payload: {Text: e.target.value}})
    
    // if (e.key === 'Enter') {
    //   const Data = {
    //     id:1,
    //     createdOn:new Date(),
    //     taskName:e.target.value,
    //     isCompleted:false
    //   } as ITODO
    //   dispatch({type: 'AddData', payload: {Task: Data}})
    // }
  }
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="card card-white">
                <div className="card-header">
                    <h3>Task</h3>
                    </div>
              <div className="card-body">
                <form action="javascript:void(0);">
                  <input
                    onKeyDown={handleKeyDown}
                    onChange={(e)=>{dispatch({type: 'OnTextChange', payload: {Text: e.target.value}})}}
                    value={state.EnteredTask}
                    type="text"
                    className="form-control add-task"
                    placeholder="New Task..."
                  />
                </form>
                <ul className="nav nav-pills todo-nav">
                  <li role="presentation" className="nav-item all-task active">
                    <a href="#" className="nav-link">
                      All
                    </a>
                  </li>
                  <li role="presentation" className="nav-item active-task">
                    <a href="#" className="nav-link">
                      Active
                    </a>
                  </li>
                  <li role="presentation" className="nav-item completed-task">
                    <a href="#" className="nav-link">
                      Completed
                    </a>
                  </li>
                </ul>
                  <TODOList state={state}></TODOList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TODOMaster;
