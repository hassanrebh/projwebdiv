var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const speechTrigger = document.getElementById("speech-trigger");
const speechOutput = document.getElementById("todo-input");

var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

speechTrigger.onclick = function () {
  recognition.start();
  console.log("Ready to receive a task.");
};

recognition.onresult = function (event) {
  speechOutput.value = event.results[0][0].transcript;
  speechOutput.focus();
};

recognition.onspeechend = function () {
  recognition.stop();
};

recognition.onerror = function (event) {
  console.error(event);
};

// new SpeechSynthesisUtterance object
let utter = new SpeechSynthesisUtterance();
utter.lang = 'en-US';
utter.text = 'Hello World';
utter.volume = 0.5;

// speak
utter.onclick = function (event){
   window.speechSynthesis.speak(utter);
  }

// event after text has been spoken
utter.onend = function() {
	alert('Finshed');
}