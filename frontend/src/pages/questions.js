import React, { useState } from "react";

// Import Questions and Create Iterator
import allQuestions from "../questionCategories.json";
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
      if (i < length - 1) {
        return true;
      }
      return false;
    },
    curr() {
      return array[i];
    },
    answer(bool) {
      array[i]["user_response"] = bool;
    }
  };
  return iterator;
}
const iter = createIterator(allQuestions.questions);


// Main Component
function Questions({ userService }) {
  const [update, setUpdate] = useState(1);

  function answerMe() {
    iter.answer(true);
    nextQuestion();
  }

  function answerNotMe() {
    iter.answer(false);
    nextQuestion();
  }

  function nextQuestion() {
    if (iter.hasNext()) {
      iter.next();
      setUpdate(update + 1);
    }
    else {
      userService.submitAssessmentData(allQuestions);
      window.open(window.location.href = "/home"); // assessment results page
    }
  }

  return (
    <div>
      <h3>{iter.curr().question}</h3>
      <button onClick={answerMe}>Me</button>
      <button onClick={answerNotMe}>Not Me</button>
    </div>
  );
}


export default Questions;
