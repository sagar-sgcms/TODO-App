import React from "react";
import ITODO from "../../../models/ITODO";

const TODOItem: React.FC<{ state: ITODO }> = ({ state }) => {
    debugger
    return (
        <div className="todo-list">
          <div className="todo-item">
            <div className="checker">
              <span className="">
                <input type="checkbox" checked={state.isCompleted} />
              </span>
            </div>
            <span>{state.taskName}</span>
            <a
              href="javascript:void(0);"
              className="float-right remove-todo-item"
            >
              <i className="icon-close"></i>
            </a>
          </div>
        </div>
      );
};

export default TODOItem;
