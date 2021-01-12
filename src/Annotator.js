import React from "react";
import "./Annotator.css";

const document = `After bowling Somerset out for 83 on the opening morning \
at Grace Road , Leicestershire extended their first innings by 94 runs before \
being bowled out for 296 with England discard Andy Caddick taking three for 83 .`;
const labels = ["Organisation", "Location", "Person", "Misc"];

const Document = (props) => {
  return <div className="document-body">{document}</div>;
};

const LabelPicker = (props) => {
  return (
    <div className="label-picker">
      <h4>These are the classes to be used for annotating spans of text</h4>
      {labels.map((label) => (
        <button key={label}>{label}</button>
      ))}
    </div>
  );
};

const AnnotationInterface = (props) => {
  return (
    <div className="annotation-interface">
      <Document />
      <LabelPicker />
    </div>
  );
};

export default AnnotationInterface;
