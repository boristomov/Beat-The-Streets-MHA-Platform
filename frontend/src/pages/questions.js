import React from "react";

import allQuestions from "../questionCategories.json";


function Questions({ userService }) {
  const questions = allQuestions.questions;
  const iter = createIterator(questions); // iter is an iterator through question objects
  /** Here is an example of a question object
    {
      "question": "Are you only relaxed when you have total control over your life?",
      "Depression": 0,
      "Anxiety": 1,
      "Stress": 0,
      "Self-esteem": 0,
      "Cultural Sensitivity": 0,
      "Quality of Life": 1,
      "PTSD": 0
    } 
  */
  
  return (
    <div>
      <h3>{iter.next().question}</h3>
      <button>Me</button>
      <button>Not Me</button>
    </div>
  );
}

function createIterator(array) {
  let i = 0;
  const length = array.length;
  const iterator = {
    next() {
      const newVal = array[i];
      i += 1;
      return newVal;
    },
    hasNext() {
      if (i < length) {
        return true;
      }
      return false;
    }
  }
  return iterator;
}

export default Questions;
