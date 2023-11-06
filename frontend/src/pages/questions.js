import React, { useState } from "react";

import { UserService } from "../service/userService";
//import { EventEmitter } from "../service/eventEmitter";
import "./questions.css";
import Woman_seeking_psycholigist_help from "../assets/Woman_seeking_psycholigist_help.svg"
import LeftArrow from "../assets/LeftArrow.svg"
import RightArrow from "../assets/RightArrow.svg"
import MeButtons from "../assets/Me-buttons.svg"
import BTSLOGO from "../assets/BTS-Logo.svg"

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
function Questions() {
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
      UserService.submitAssessmentData(allQuestions);
      window.open(window.location.href = "/home"); // assessment results page
    }
  }

  return (
    <>
      <div className="answering-questions-pages">
        <div className="frame">
          <div className="frame1">
            <div className="frame-parent">
              <div className="frame1">
                <div className="frame-child" />
                <b className="b-left">1</b>
              </div>
              <div className="frame2">
                <div className="frame-child" />
                <b className="b-left">2</b>
              </div>
              <div className="frame3">
                <div className="frame-child" />
                <b className="b-left">3</b>
              </div>
              <div className="frame4">
                <div className="frame-child" />
                <b className="b-left">4</b>
              </div>
              <div className="frame5">
                <div className="frame-child" />
                <b className="b-left">5</b>
              </div>
              <div className="frame6">
                <div className="frame-child" />
                <b className="b-left">6</b>
              </div>
              <div className="frame7">
                <div className="frame-child" />
                <b className="b-left">7</b>
              </div>
              <div className="frame8">
                <div className="frame-child-medium" />
                <b className="b-mid-left">8</b>
              </div>
              <div className="frame9">
                <div className="frame-child-large" />
                <b className="b-mid">
                  <p className="p">9</p>
                </b>
              </div>
              <div className="frame10">
                <div className="frame-child-medium" />
                <b className="b-mid-right">10</b>
              </div>
              <div className="frame11">
                <div className="frame-child" />
                <b className="b-mid-mid-right">11</b>
              </div>
              <div className="frame12">
                <div className="frame-child" />
                <b className="b-right">12</b>
              </div>
              <div className="frame13">
                <div className="frame-child" />
                <b className="b-right">13</b>
              </div>
              <div className="frame14">
                <div className="frame-child" />
                <b className="b-right">14</b>
              </div>
              <div className="frame15">
                <div className="frame-child" />
                <b className="b-right">15</b>
              </div>
              <div className="frame16">
                <div className="frame-child" />
                <b className="b-right">16</b>
              </div>
              <div className="frame17">
                <div className="frame-child" />
                <b className="b-right">17</b>
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
                    <div className="me">Me</div>
                    <div className="not-me">Not Me</div>
                    <img className="frame-icon" alt="" src={MeButtons} />
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
          <div className="frame50">
            <div className="question">Question</div>
          </div>
          <div className="frame51">
            <div className="frame-container">
              <div className="frame-div">
                <div className="frame-child96" />
                <b className="next1">Next</b>
                <div className="frame-child97" />
                <b className="back1">Back</b>
              </div>
              <div className="vector-parent">
                <img className="vector-icon" alt="" src={LeftArrow} />
                <img className="oouinext-ltr-icon" alt="" src={RightArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>{}</h3>
        <button onClick={answerMe}>Me</button>
        <button onClick={answerNotMe}>Not Me</button>
      </div>
    </>
  );
}


export default Questions;
