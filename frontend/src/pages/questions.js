import React, { useState } from "react";

import { UserService } from "../service/userService";
//import { EventEmitter } from "../service/eventEmitter";
import "./questions.css";
import Woman_seeking_psycholigist_help from "../assets/Woman_seeking_psycholigist_help.svg"
import LeftArrow from "../assets/LeftArrow.svg"
import RightArrow from "../assets/RightArrow.svg"

import MeButton from "../assets/MeButton.svg"
import NotMeButton from "../assets/NotMeButton.svg"

import BTSLOGO from "../assets/BTS-Logo.svg"

// Import Questions and Create Iterator
import allQuestions from "../questionCategories.json";
function createIterator(array) {
  let i = 0;
  const length = array.length;
  const iterator = {
    length() {
      return length;
    },
    indexNum() {
      return i;
    },
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
    prev() {
      const newVal = array[i];
      i -= 1;
      return newVal;
    },
    hasPrev() {
      if (i > 0) {
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
function Questions() {
  const [update, setUpdate] = useState(1);
  //Me Button
  function answerMe() {
    iter.answer(true);
    nextQuestion();
  }
  //Not Me Button
  function answerNotMe() {
    iter.answer(false);
    nextQuestion();
  }
  //Next Button
  function nextQuestion() {
    if (iter.hasNext()) {
      iter.next();
      setUpdate(update + 1);
    }
    else {
      UserService.submitAssessmentData(allQuestions);
      window.open(window.location.href = "/home"); // assessment results page
    }
  }
  //Back button
  function prevQuestion() {
    if (iter.hasPrev()) {
      iter.prev();
      setUpdate(update - 1);
    }
  }
  //Question numbers in little blue circles
  function questionNum(displacement) {
    let questNum = iter.indexNum() + displacement + 1
    return 1<=questNum && questNum<=iter.length() ? questNum : " ";
  }

  return (
    <>
      <div className="answering-questions-pages">
        <div className="frame">
          <div className="frame-parent">
              <div className="frame2">
                <div className="frame-child">
                  <b className="b-left">{questionNum(-7)}</b>
                </div>
              </div>
              <div className="frame3">
                <div className="frame-child">
                  <b className="b-left">{questionNum(-6)}</b>
                </div>
              </div>
              <div className="frame4">
                <div className="frame-child">
                  <b className="b-left">{questionNum(-5)}</b>
                </div>
              </div>
              <div className="frame5">
                <div className="frame-child">
                  <b className="b-left">{questionNum(-4)}</b>
                </div>
              </div>
              <div className="frame6">
                <div className="frame-child">
                  <b className="b-left">{questionNum(-3)}</b>
                </div>
              </div>
              <div className="frame7">
                <div className="frame-child">
                  <b className="b-left">{questionNum(-2)}</b>
                </div>
              </div>
              <div className="frame8">
                <div className="frame-child-medium">
                  <b className="b-mid-left">{questionNum(-1)}</b>
                </div>
              </div>
              <div className="frame9">
                <div className="frame-child-large" />
                <b className="b-mid">
                  <p>{questionNum(0)}</p>
                </b>
              </div>
              <div className="frame10">
                <div className="frame-child-medium">
                  <b className="b-mid-right">{questionNum(1)}</b>
                </div>
              </div>
              <div className="frame11">
                <div className="frame-child">
                  <b className="b-right">{questionNum(2)}</b>
                </div>
              </div>
              <div className="frame12">
                <div className="frame-child">
                  <b className="b-right">{questionNum(3)}</b>
                </div>
              </div>
              <div className="frame13">
                <div className="frame-child">
                  <b className="b-right">{questionNum(4)}</b>
                </div>
              </div>
              <div className="frame14">
                <div className="frame-child">
                  <b className="b-right">{questionNum(5)}</b>
                </div>
              </div>
              <div className="frame15">
                <div className="frame-child">
                  <b className="b-right">{questionNum(6)}</b>
                </div>
              </div>
              <div className="frame16">
                <div className="frame-child">
                  <b className="b-right">{questionNum(7)}</b>
                </div>
              </div>
          </div>
          <div className="frame36">
            <div className="frame37">
              <div className="frame38">
                <div className="rectangle-parent">
                  <div className="rectangle-div" />
                  <div className="frame-child91" />
                </div>
                <div className="rectangle-parent">
                  <div className="rectangle-div" />
                  <div className="frame-child91" />
                </div>
              </div>
              <div className="frame39">
                <div className="frame-child94" />
                <div className="frame40">
                  <div className="have-you-experienced-container">
                    <p className="p">
                      {iter.curr().question}
                    </p>
                    <p className="p">&nbsp;</p>
                  </div>
                </div>
                <div className="frame42">
                  <div className="me-parent">
                    <button className="me-button" onClick={answerMe}>
                      <img className="me-not-me-button-icons" alt="" src={MeButton} />
                    </button>
                    <div className="me">Me</div>
                    <button className="not-me-button" onClick={answerNotMe}>
                      <img className="me-not-me-button-icons" alt="" src={NotMeButton} />
                    </button>
                    <div className="not-me">Not Me</div>
                  </div>
                </div>
                <div className="frame44">
                  <img
                    className="woman-seeking-psycholigists-h"
                    alt="Error loading img"
                    src={Woman_seeking_psycholigist_help}
                  />
                </div>
              </div>
            </div>
            <div className="frame46">
              <div className="image-3-parent">
                <img className="image-3-icon" alt="" src={BTSLOGO} />
                <div className="frame47">
                  <b className="beat-the-streets">Beat the Streets, Inc.</b>
                  <div className="young-adult-employment">{`Young Adult Employment, Vocational & Life Services`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame49">
          <div className="frame50">Question</div>
          <div className="frame51">
            <div className="frame-container">
              <div className="vector-parent">
                <button className="vector-button" onClick={prevQuestion}>
                  <img className="vector-icon" alt="" src={LeftArrow} />
                </button>
                <button className="vector-button" onClick={nextQuestion}>
                  <img className="oouinext-ltr-icon" alt="" src={RightArrow} />
                </button>
              </div>
              <div className="frame-div">
                <button className="back-button" onClick={prevQuestion}>Back</button>
                <button className="next-button" onClick={nextQuestion}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Questions;
