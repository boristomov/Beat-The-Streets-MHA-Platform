export class DataParse {

  constructor(userData) {
    this.userData = userData
  }

  /**
   * READ THIS: USE THE FUNCTIONS IN THIS CLASS TO GET DATA
   * 
   * The assessment object contains 2 keys: date, questions.
   * date: int miliseconds since epoch time
   * questions: array of question objects
   * 
   * The question object contains 9 keys: question, Depression, Anxiety, Stress, Self-esteem, Cultural Sensitivity, Quality of Life, PTSD, user_response
   * question: string that contains the question
   * Depression, Anxiety, Stress, Self-esteem, Cultural Sensitivity, Quality of Life, PTSD: int, 0 if it the question does not belong in the category, 1 if it does
   * user_response: null if user skipped question, false if user selected "Not Me", true if user selected "Me"
   * 
  **/

  // returns username as string
  getUsername() {
    return this.userData.username;
  }

  // returns number of assessments user has taken
  getNumAssessments() {
    return this.userData.assessmentData.length
  }

  // returns true if user has taken an assessment
  assessmentExists() {
    return this.userData.assessmentData.length > 0
  }

  // returns most recent asssessment data as assessment object
  getMostRecentAssessments() {
    return this.userData.assessmentData[this.userData.assessmentData.length - 1];
  }

  // returns ith assessment data as assessment object
  getAssessments(i) {
    return this.userData.assessmentData[i];
  }

  // returns all assessment data as array of objects that contain assessments objects
  getAllAssessments() {
    return this.userData.assessmentData;
  }
}