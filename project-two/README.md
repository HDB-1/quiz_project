User Stories

MVP

Before quiz:
As a user, so I can start the quiz:
I would like a start button

As a user, so I can use the app:
I would like instructions on how to use app

As a user, so I can customise the quiz:
- I would like a drop down to choose the topic
- I would like a drop down to choose the number of users playing
- I would like text boxes to enter the names of the users
- I would like a drop down to pick the difficulty level
- I would like a drop down to choose the number of rounds to be played

As a user, so I have a quiz to answer:
I would like a quiz to be gathered from an api

During quiz:
As a user, so I can choose my answer:
I would like to choose from a set of radio buttons with the answer text attached

As a user, so I can submit my answer:
- I would like to submit my answer with a submit button (Thought about having clicking the radio button to submit the answers but this will help avoid accidental answers)
- I would like a visual response to inform me my answer was submitted

As a user, so I can know my progress on the quiz:
I would like text displaying what question I am on and how many there are in total

As a user, so I can navigate between questions:
- I would like a button to go to next question
- I would like a button to go back to previous question

As a user, so I can know who’s turn it is to answer:
I would like to text of the current user displayed or some visual indication of who’s it is

As a user, so I can change who’s turn it is to answer:
I would like to be able to click the current user to toggle who it is

As a user, so I can skip questions I don’t know the answer to:
I would like to a button to skip to the next question

After quiz:
As a user  so that I know how well I did in the quiz:
- I would like to see how many I got correct out of the total. 
- I would like to see a percentage.

As a user so that I know how much I can brag:
I want to know who won out of all players.

As a user so that I can play another amazing quiz:
I want a link to take me back to the quiz selection.

MVP
- 1 quiz
- 2 questions
- 1 user
- No css
- End score
- Multiple choice questions only

Workflow
- Stand ups: 9:30am
- Repo: git/github
- Pair Programming: Driver/Navigator 20mins 5-10mins break
- TDD: Write tests first and then code
- Lunch flexible
- CamelCase for naming
- Mob programming until a point at which everyone has an understanding
 of base project and it is easy to work on separate branches
- Github
- Commit messages in present tense
- When merging to dev, put other pair as reviewer
- Branch naming: name of feature/component
- Commit after each test

Technologies
- jest-enzyme (for testing)
- Node js
- React
- VSCode
- Git
- Github
- Node JS
- Babel
- Async await


Data format 
API data format for question:

{
"category": "Entertainment: Books",
"type": "multiple",
"difficulty": "medium",
"question": "Which of the following authors was not born in England? ",
"correct_answer": "Arthur Conan Doyle",
"incorrect_answers": [
"Graham Greene",
"H G Wells",
"Arthur C Clarke"
]
}

User data object:
{
“Id” : (number)
“Name”?: (text)
Answers [(text)]
}



Stretch goals:
- Timer
- Quiz brief on homepage (displays selected customisations)
- Progress on completion mid quiz


Append onto end of quiz object:

Let correctAnswers = [];
For(question of questions){
	correctAnswers.push(question.correct_answer);

this(quiz).setState({correctAnswers: correctAnswers);
Initial Designs

Homepage


			_____________________________
			|                           |
			|     Title Component       |
			|___________________________|

			_____________________________
			|                           |
			|                           |
			|  Customise Quiz Component |
			|                           |
			|                           |
			|___________________________|

			_____________________________
			|                           |
			|  Start Quiz Button        |
			|___________________________|


Quiz Page

__________        ______________          __________ 
| User   |       |Title of Quiz |         |Progress|
|________|       |______________|         |________|


      _________________________________________
     |                Question                 |
     |                                         |     
     |    _______________________________      |     
     |   |            Answers            |     |     
     |   |                               |     |     
     |   |    _______________________    |     |     
     |   |   |         Answer       |    |     |
     |   |   |                      |    |     |
     |   |   |______________________|    |     |
     |   |                               |     |
     |   |_______________________________|     |
     |                                         |
     |   __________             __________     |
     |  |          |           |          |    |
     |  | Skip     |           | Submit   |    |
     |  |__________|           |__________|    |
     |_________________________________________|

_______________                       _______________         
|              |                      |              |
|   Previous   |                      |   Next       |
|______________|                      |______________|





Tree diagram

                                                App-----------QuizSetup
                                                 |
                                                 |
                                                 |
                                                 |
                                                 |
                                                 |
                           Nav-----------------Quiz------------------Info--------Progress
                                                 |                     |
                                                 |                     |
                                                 |                    Users
                                                 |
                                                 |
                                                 |
                       Submit-----------------Question                  
                                                 |
                                                 |
                                                 |
                                                 |
                                              Answers
                                                 |
                                                 |
                                                 |
                                                 |
                                               Answer
 
 
 
 
 
 
 
N.B. Quiz setup has been moved. To where I know not.


Problems:
- Understanding jest-enzyme testing



Day 1:
- We set up the basic app and testing framework. 
- We set up the app structure and file structure. 
- We set up a routing.
- Created app.js and tested it
- Created navBar.js and tested it
- Created QuizSetup.js and tested it
- Looked at the API
- MOB programming. 

Day 2:
Stand up:
	- What did we achieve?
      - See day 1 bullet points
	- What are the blockers?
      - Not being at a point the project where it is easy to split up tasks between pairs
      - Issues with simulating changes in the dropdown for testing in Enzyme.
      - Issues with getting tests to run on Elizabeth’s laptop.
	- What are we doing today?
      - A discussion about what components will receive in terms of props so we can work on them in smaller groups based upon         that
      - Pair 1 (Harry/Josh) : Work on the api call for Quiz based upon the props from QuizSetup
      - Pair 2 (Dom/Elizabeth) : Work on passing information from QuizSetup to the state App

      - We discussed the format of the data passed to ‘quiz’ from ‘quizSetup’:
An object with the following keys:
{# Of users: (number),  # Of Questions: (number), Difficulty: (string), topic: (number)  

Day 3:
- What did we achieve yesterday?
    - Harry/Josh
        - Setup API call for a given set of parameters
        - Tests for Quiz Component
        - Created and tested Question, Answers, Answer, Info, Title, User  and Progress components
    - Elizabeth / Dom
        - Implemented the recording of input in the quizSetup page and passing that info to app.js
        - Thoroughly tested App’s state updates after changing values in QuizSetup.
- What are the blockers?
    - Since we need to work on similar areas of the code, finding a way to avoid conflicts and use of similar files
- What are we doing today?
    - Using fake data to implement a 2 question quiz - Shuffling quiz questions into random order (Harry/ Dom) Post API call checking Question
    - Passing data from QuizSetup to Quiz, using API call and passing information down to children (Elizabeth/Josh) Info bit
- Problems
    - Setup of jest on Josh’s computer (npm install)
    - Having more civil discussion, more appropriate for a work environment. This was regarding the infamous Title component         incident 

