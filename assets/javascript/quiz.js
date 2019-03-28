var quizMaterialObj = [
    {
      question: "In what century did the 100 years war begin?",
      answers: {
        a: "15th Century",
        b: "14th Century",
        c: "16th Century"
      },
      correctAnswer: "b"
    },
    {
      question: "When did Julius Caesar cross the Rubicon?",
      answers: {
        a: "59 BCE",
        b: "52 BCE",
        c: "49 BCE"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "a"
    }
  ];

  /*
	1. Game constraints and requirements:
		a. multiple choice -  form? with 4 options each. Radio buttons
		b. only one selection for person
		c. submit or click to deliver answer
		d. at least 20 trivia choices (random selection) use an array?
		e. 1 countdown timer - 15 seconds (display)
		f. 1 interval timer 3-5 seconds
		g. keep score - # questions answered correctly
		h. keep score- # questions answered incorrectly
		i. keep score- # questions skipped
		j. transition between questions seamlessly
		k. restart without reloading game
		l. show screen pop up displaying various game states:  correct, incorrect, timeout,  
		m. implement skip logic (if time)
	2. Create basic card structure with following variables:
		a. # questions correct /incorrect /time out
		b. display main countdown timer
		c. display interval counter
		d. display question (and answer)
        e. flip card to show answers?

  */