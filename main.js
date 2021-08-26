function setup() {
  canvas = createCanvas(300, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('Mobilenet', modelLoaded);
}
function draw(){
  image(video, 0, 0, 300, 250);
  classifier.classify(video, gotResult);
}
function modelLoaded(){
  console.log("Model Loaded");
}
function gotResult(error, result){
  if(error){
    console.log(error);
  }else{
    document.getElementById("object_name").innerHTML = result[0].label;
    document.getElementById("confidence").innerHTML = 100*result[0].confidence.toFixed(3) + "%";
  }
}