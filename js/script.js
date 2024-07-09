// Sample data
const questions = [
  {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2,
  },
  {
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0,
  },
  {
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0,
  },
  {
    text: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "High Technology Modern Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 2,
  },
  {
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2,
  },
  {
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3,
  },
  {
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0,
  },
  {
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2,
  },
  {
    text: "What is the primary use of the Git command 'clone'?",
    options: [
      "To stage changes",
      "To copy a repository",
      "To switch to a different branch",
      "To list all the files in a repository",
    ],
    correct: 1,
  },
  {
    text: "What does API stand for in the context of programming?",
    options: [
      "Apple Pie Interface",
      "Application Programming Interface",
      "Advanced Peripheral Integration",
      "Application Process Integration",
    ],
    correct: 1,
  },
];

const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");
nextButton.style.display = "none";
const question = document.getElementById("question");
const answer = document.getElementById("answer-list");
question.innerHTML += `<div>${questions[0].text}</div>`;
questions[0].options.forEach(
  (item) =>
    (answer.innerHTML += `<li><input type="radio" class="radio" name="foo">${item}</input></li>`)
);
let count = 0;
let score = 0;

function checkRadio() {
  let radios = document.getElementsByClassName("radio");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === "radio" && radios[i].checked) {
      // get value, set checked flag or do whatever you need to
      return i + 1;
    }
  }
  return null;
}

submitButton.addEventListener("click", () => {
  // Write the JS code that you want to be executed each time the Submit button is clicked.
  let res = checkRadio();
  if (!res) {
    alert("Please select an answer!");
    return;
  }

  const correctIndex = questions[count].correct + 1;
  if (res === correctIndex) score++;
  const listItem = document.querySelector(
    `#answer-list li:nth-child(${correctIndex})`
  );

  listItem.style.backgroundColor = "lightgreen";

  submitButton.style.display = "none";
  nextButton.style.display = "block";
});

nextButton.addEventListener("click", () => {
  // Write the JS code that you want to be executed each time the Next button is clicked.
  console.log("score is", score)
  if (count < questions.length - 1) {
    count = count + 1;
    question.innerHTML = `<div>${questions[count].text}</div>`;
    answer.innerHTML = "";
    questions[count].options.forEach(
      (item) =>
        (answer.innerHTML += `<li><input type="radio" class="radio" name="foo">${item}</input></li>`)
    );
  } else if (count === questions.length - 1) {
    alert(`Total score obtained is ${score}`);
  }
  submitButton.style.display = "block";
  nextButton.style.display = "none";
});
