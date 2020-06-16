    let currentTime = new Date().toLocaleString()

    let responseLabel = document.getElementById('resp-label')

    let speechRec = new p5.SpeechRec(); // speech recognition object
    let speechSynth = new p5.Speech() // speech synthesis object
    
    speechRec.onResult = respond; // bind callback function to trigger when speech is recognized

    continuous = true
    interim = false

    // Start listening	
    speechRec.start(continuous, interim); // start listening

    
    // Function to respond to commands
    function respond(){
        switch(speechRec.resultString){
            case 'hello': speechSynth.speak('Hello Senih how are you today'); break;
            case 'what time is it': speechSynth.speak('The Time is' + currentTime); break;
            case 'good morning': speechSynth.speak('Good morning how can I help you'); break;
            case 'good night': speechSynth.speak('Have a good night Senih'); break;
	    case 'Where am I from': speechSynth.speak('You are from Turkey'); break;
        }
    }
