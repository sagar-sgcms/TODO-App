import React from "react";
import { IProps } from "./TODOReducer";

const TODOList: React.FC<{ state: IProps }> = ({ state }) => {
  return (
    <>
      {state.Data.map((item, index) => {
        return (
          <div className="todo-list">
            <div className="todo-item">
              <div className="checker">
                <span className="">
                  <input type="checkbox" />
                </span>
              </div>
              <span>{item.Task}</span>
              <a
                href="javascript:void(0);"
                className="float-right remove-todo-item"
              >
                <i className="icon-close"></i>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TODOList;
