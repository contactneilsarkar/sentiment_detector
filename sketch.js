let model;
let result;
let inputBox;
let button1;
function setup() {
  model=ml5.sentiment("movieReviews")
  inputBox=select("#textBox")
  button1=select("#inputButton")
  result=select("#output")
  button1.mousePressed(calculateScore)
}
function calculateScore(){
  let x=inputBox.value()
  let prediction=model.predict(x)
  let predictionScoreRounded=prediction.score.toFixed(3)
  if(prediction.score>0.5){
    result.html("Sentiment: Positive. "+predictionScoreRounded)
  } else if(prediction.score<0.5){
    result.html("Sentiment: Negative. "+predictionScoreRounded)
  } else {
    result.html("Sentiment: Neutral. "+predictionScoreRounded)
  }
}
