import React, { useState } from "react";
import "./questions.css";
//import WomanHelp from "../../public/Woman_seeking_psycholigist_help.svg"

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
    <>
      <div className="answering-questions-pages">
        <div className="frame">
          <div className="frame1">
            <div className="frame-parent">
              <div className="frame2">
                <div className="frame-child" />
                <b className="b">1</b>
              </div>
              <div className="frame3">
                <div className="frame-child" />
                <b className="b1">2</b>
              </div>
              <div className="frame4">
                <div className="frame-child" />
                <b className="b1">3</b>
              </div>
              <div className="frame5">
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
              </div>
              <div className="frame6">
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <b className="b1">5</b>
              </div>
              <div className="frame7">
                <div className="frame-child" />
                <b className="b1">6</b>
              </div>
              <div className="frame8">
                <div className="frame-child" />
                <b className="b">7</b>
              </div>
              <div className="frame9">
                <div className="frame-child34" />
                <b className="b83">8</b>
              </div>
              <div className="frame10">
                <div className="frame-child35" />
                <b className="b84">
                  <p className="p">9</p>
                </b>
              </div>
              <div className="frame11">
                <div className="frame-child34" />
                <b className="b85">10</b>
              </div>
              <div className="frame12">
                <div className="frame-child" />
                <b className="b86">11</b>
              </div>
              <div className="frame13">
                <div className="frame-child" />
                <b className="b87">12</b>
              </div>
              <div className="frame14">
                <div className="frame-child" />
                <b className="b87">13</b>
              </div>
              <div className="frame15">
                <div className="frame-child" />
                <b className="b87">14</b>
              </div>
              <div className="frame16">
                <div className="frame-child" />
                <b className="b87">15</b>
              </div>
              <div className="frame17">
                <div className="frame-child" />
                <b className="b87">16</b>
              </div>
              <div className="frame18">
                <div className="frame-child" />
                <b className="b87">17</b>
              </div>
            </div>
            <div className="frame-parent">
              <div className="frame2">
                <div className="frame-child" />
                <b className="b">1</b>
              </div>
              <div className="frame3">
                <div className="frame-child" />
                <b className="b1">2</b>
              </div>
              <div className="frame4">
                <div className="frame-child" />
                <b className="b1">3</b>
              </div>
              <div className="frame5">
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
                <b className="b1">4</b>
              </div>
              <div className="frame6">
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <div className="frame-child" />
                <b className="b1">5</b>
              </div>
              <div className="frame7">
                <div className="frame-child" />
                <b className="b1">6</b>
              </div>
              <div className="frame8">
                <div className="frame-child" />
                <b className="b">7</b>
              </div>
              <div className="frame9">
                <div className="frame-child34" />
                <b className="b83">8</b>
              </div>
              <div className="frame10">
                <div className="frame-child35" />
                <b className="b84">
                  <p className="p">9</p>
                </b>
              </div>
              <div className="frame11">
                <div className="frame-child34" />
                <b className="b85">10</b>
              </div>
              <div className="frame12">
                <div className="frame-child" />
                <b className="b86">11</b>
              </div>
              <div className="frame13">
                <div className="frame-child" />
                <b className="b87">12</b>
              </div>
              <div className="frame14">
                <div className="frame-child" />
                <b className="b87">13</b>
              </div>
              <div className="frame15">
                <div className="frame-child" />
                <b className="b87">14</b>
              </div>
              <div className="frame16">
                <div className="frame-child" />
                <b className="b87">15</b>
              </div>
              <div className="frame17">
                <div className="frame-child" />
                <b className="b87">16</b>
              </div>
              <div className="frame18">
                <div className="frame-child" />
                <b className="b87">17</b>
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
                <div className="frame-child94" />
                <div className="frame40">
                  <div className="have-you-experienced-container">
                    <p className="p">
                      Have you experienced moments of racing thoughts and
                      restlessness that you find difficult to control?
                    </p>
                    <p className="p">&nbsp;</p>
                  </div>
                </div>
                <div className="frame40">
                  <div className="have-you-experienced-container">
                    <p className="p">
                      Have you experienced moments of racing thoughts and
                      restlessness that you find difficult to control?
                    </p>
                    <p className="p">&nbsp;</p>
                  </div>
                </div>
                <div className="frame42">
                  <div className="me-parent">
                    <div className="me">Me</div>
                    <div className="not-me">Not Me</div>
                    <img className="group-icon" alt="" src="/group-11.svg" />
                  </div>
                </div>
                <div className="frame42">
                  <div className="me-parent">
                    <div className="me">Me</div>
                    <div className="not-me">Not Me</div>
                    <img className="frame-icon" alt="" src="/frame.svg" />
                  </div>
                </div>
                <div className="frame44">
                  <img
                    className="woman-seeking-psycholigists-h"
                    alt="Error loading img"
                    src="../../public/Woman_seeking_psycholigist_help.svg"
                  />
                </div>
                <div className="frame44">
                  <img
                    className="woman-seeking-psycholigists-h"
                    alt="Error loading img 2"
                    src="../../public/Woman_seeking_psycholigist_help.svg"
                  />
                </div>
              </div>
            </div>
            <div className="frame46">
              <div className="image-3-parent">
                <img className="image-3-icon" alt="" src="/image-3@2x.png" />
                <div className="frame47">
                  <b className="beat-the-streets">Beat the Streets, Inc.</b>
                  <div className="young-adult-employment">{`Young Adult Employment, Vocational & Life Services`}</div>
                </div>
              </div>
              <div className="image-3-parent">
                <img className="image-3-icon" alt="" src="/image-3@2x.png" />
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
            <div className="question">Question</div>
          </div>
          <div className="frame51">
            <div className="frame-container">
              <div className="vector-parent">
                <img className="vector-icon" alt="" src="/vector.svg" />
                <img
                  className="oouinext-ltr-icon"
                  alt=""
                  src="/oouinextltr.svg"
                />
              </div>
              <div className="frame-div">
                <div className="frame52">
                  <b className="back">Back</b>
                </div>
                <div className="frame53">
                  <b className="next">Next</b>
                </div>
              </div>
            </div>
            <div className="frame-container">
              <div className="frame-div">
                <div className="frame-child96" />
                <b className="next1">Next</b>
                <div className="frame-child97" />
                <b className="back1">Back</b>
              </div>
              <div className="vector-parent">
                <img className="vector-icon" alt="" src="/vector.svg" />
                <img
                  className="oouinext-ltr-icon"
                  alt=""
                  src="/oouinextltr.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>{iter.curr().question}</h3>
        <button onClick={answerMe}>Me</button>
        <button onClick={answerNotMe}>Not Me</button>
      </div>
    </>
  );
}


export default Questions;
