/** 
 * Criteria 
 */
// Here I have set out my criteria for playing the quiz 
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

 // Define a set of questions - Here I have created a set of questions in an array that I want the user to answer 
 var myQuestions = 
    [ {
          question: "Who invented JavaScript?",
          answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich",
            d: "Harry Redknapp"
        
          },
          correctAnswer: "c"
        }

      
    ]