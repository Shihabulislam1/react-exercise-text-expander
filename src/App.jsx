import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. Its the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what s possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while its not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what well
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Expand text",
  collapseButtonText = "Collapse text",
  buttonColor = "blue",
  expanded = false,
  className = "",
}) {
  const[isExpanded,setIsExpanded]=useState(expanded);
  const words=children.split(" ");
  const text=words.slice(0,collapsedNumWords).join(" ").concat("...");

  function handleClick(){
    setIsExpanded(!isExpanded)
  }
  return(
   <div className={className}>
      {isExpanded?children:text}
    <Button buttonColor={buttonColor} handleClick={handleClick}>{isExpanded?collapseButtonText:expandButtonText}</Button>
   </div>)
}

function Button({children,buttonColor,handleClick}) {
  const style={ 
    color:buttonColor,
    display:"inline-block",
    cursor:"pointer",
    marginLeft:"5px",
    fontWeight:"bold"

  }
  return <span style={style} onClick={handleClick}>{children}</span>
}
