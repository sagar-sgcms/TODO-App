import React, { useReducer } from "react";
import ITODO from "../../../models/ITODO";
import TODOList from "./TODOList";
import reducer, { IProps } from "./TODOReducer";

function TODOMaster() {
  const intialValue: IProps = {
    Data: [
      { Id: 1, Task: "Task 1", CreatedOn: new Date(), IsCompleted: false },
      { Id: 2, Task: "Task 2", CreatedOn: new Date(), IsCompleted: false },
      { Id: 3, Task: "Task 3", CreatedOn: new Date(), IsCompleted: false },
      { Id: 4, Task: "Task 4", CreatedOn: new Date(), IsCompleted: false },
      { Id: 5, Task: "Task 5", CreatedOn: new Date(), IsCompleted: false },
    ] as ITODO[],
  };
  const [state, dispatch] = useReducer(reducer, intialValue);
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
