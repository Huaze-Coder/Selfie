var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

console.log(event);

var Content = event.results[0][0].transcript;
console.log(Content);
if(Content == "take my selfie"){
    console.log("Take my selfie");
    speak();
}
document.getElementById("textbox").innerHTML = Content;
}

function speak(){
    var synth = window.speechSynthesis;
    speakdata = "Taking your selfie in 5 seconds";
    var utterance = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterance);
    Webcam.attach(camera);
    setTimeout(function(){takeSnapShot();
    save();
    }, 5000);
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}

Webcam.set({
    width: 250,
    height: 250,
    image_format: "jpg",
    jpg_quality: 90
})

camera = document.getElementById("camera");

function takeSnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie_img' src='" + data_uri + "'>";
    })
}

