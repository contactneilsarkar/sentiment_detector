//---------------------------Sentiment Analysis Model------
//Sentiment Analysis model is a model which helps in detecting the sentiment analysis of the text. that means it detects positive negative  neutral sentiments. it has lot of words inside that. The file moviereview has basically the words hat match with movie review words. This was actually to detect the sentiment of the moview rebiew but was later used for ptehr programs too

//
//-------------------Real life use of sentiment Analysis-

//1. Movie Review ny analyzing the sentimenst of the movie.
//2. Detecting the sentiments of the text app
//3. Social media montoring to analyze the sentiments of the user, content
//4. AI sentiment recognizing
//goal of project: take input from user, calculate sentiment score, if it is towards hundreds=positive. if it is towards 50=neutral. if it is towards 5=negative.
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
    console.log("testing here")
  } else if(prediction.score<0.5){
    result.html("Sentiment: Negative. "+predictionScoreRounded)
  } else {
    result.html("Sentiment: Neutral. "+predictionScoreRounded)
  }
}
