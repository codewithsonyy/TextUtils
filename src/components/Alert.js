import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div className="text-white px-6 py-4 border-0  relative mb-4 bg-pink-500">
        <span className="inline-block align-middle mr-8">
          {props.alert.type} : {props.alert.msg}
        </span>
      </div>
    )
  );
}
