import React from "react";
import TODOItem from "./TODOItem";
import { IProps } from "./TODOReducer";

const TODOList: React.FC<{ state: IProps }> = ({ state }) => {
  return (
    <>
      {state.DataList.map((item, index) => {
        return (
          <TODOItem key={index} state={item} ></TODOItem>
        );
      })}
    </>
  );
};
export default TODOList;