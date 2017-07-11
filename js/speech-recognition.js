jQuery(document).ready(function () {
  jQuery('img.speech').click(function () {
    jQuery(this).attr("src", '../images/recording.gif');
  });
});
function startDictation(source) {
  if (window.hasOwnProperty('webkitSpeechRecognition')) {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = function(e) {
      switch (source) {
        case 'home' :
          document.getElementById('homeNewQuestion').value = e.results[0][0].transcript;
          runBotFromHome();
          break;
        case 'chat' :
          document.getElementById('talk').value = e.results[0][0].transcript;
          //jQuery('#submit-message').click();
          break;
      }
      recognition.stop();
      jQuery('img.speech').attr("src", '../images/microphone.gif');
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  } else {

      var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral'];
      var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
      var recognition = new SpeechRecognition();
      var speechRecognitionList = new SpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);

      recognition.grammars = speechRecognitionList;
      //recognition.continuous = false;
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onresult = function(event) {

        document.getElementById('homeNewQuestion').value = event.results[last][0].transcript;
        recognition.stop();
        document.getElementById('homeNewChat').submit();

      }

  }
}
//SA 30 March 2017 temporary add second version of above until merge courses with home question page 
function startDictation2(source) {
  if (window.hasOwnProperty('webkitSpeechRecognition')) {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = function(e) {
      switch (source) {
        case 'home' :
          document.getElementById('course-input').value = e.results[0][0].transcript;
          runBotFromHome();
          break;
        case 'chat' :
          document.getElementById('talk').value = e.results[0][0].transcript;
          //jQuery('#submit-message').click();
          break;
      }
      recognition.stop();
      jQuery('img.speech').attr("src", '../images/microphone.gif');
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  } else {

      var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral'];
      var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
      var recognition = new SpeechRecognition();
      var speechRecognitionList = new SpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);

      recognition.grammars = speechRecognitionList;
      //recognition.continuous = false;
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onresult = function(event) {

        document.getElementById('course-input').value = event.results[last][0].transcript;
        recognition.stop();
        document.getElementById('homeNewChat').submit();

      }

  }
}
