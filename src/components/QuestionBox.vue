<template>
  <div class="question-box">
      <div>
        <div>Correct so far: {{numberCorrect}} / {{numberAnswered}}</div>
        <b-jumbotron style="background-color:#1d1d1d">
          <p>{{currentQuestion.question}}</p>
          <hr class="my-4" style="background-color:#fff"/>
          <b-list-group >
            <b-list-group-item 
              v-model="selectedAnswer" 
               v-html="answer"
              v-for="(answer, index) in answers" 
              :key="answer.text" 
              :value="answer" 
              @click="selectAnswer(index)"
              :class="{correct: userHasClicked && isCorrectAnswer(answer),
                       incorrect: selectedIndex === index &&  !isCorrect,
                       unclickedListGroupItem: !userHasClicked}"
            >

            </b-list-group-item>
          </b-list-group>
          
          <b-button variant="secondary"
            @click="next()"
            :disabled="!userHasClicked"
          >
            Next
          </b-button>
        </b-jumbotron>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue , Watch} from 'vue-property-decorator';
import { Question } from '../models/Question';
import { AnswerChoice } from '../models/AnswerChoice';
import router from '../router/index'
@Component
export default class QuestionBox extends Vue {
  @Prop() private msg!: string;
  @Prop() currentQuestion: Question;
  @Prop() next: void;
  selectedAnswer = null;
  shuffledAnswers = [];
  testclass = "test";
  userHasClicked = false;
  correctAnswers = 0;
  isCorrect = false;
  selectedIndex = null;
  numberCorrect = 0;
  numberAnswered = 0;
  
  @Watch("currentQuestion", {immediate: true})
  onPropertyChanged(value, oldValue) {
    if (value === null) {
      
       var route = '/finished/' + this.numberCorrect
       console.log("routing to " + route);
        router.push(route);
        
    }
    else {
      this.selectedIndex = null;
      this.shuffleAnswers();
      this.userHasClicked = false;
    }
    

  }
  isCorrectAnswer(answer) {
    return answer === this.currentQuestion.correct_answer;
  }
  shuffleAnswers() {
    this.shuffledAnswers = this.shuffleArray(this.answers); 

  }
  get answers() {
    return this.getAnswersList();
  }

  selectAnswer(index) {
    if (!this.userHasClicked) {
      this.selectedIndex = index;
      this.isCorrect = this.shuffledAnswers[this.selectedIndex] === this.currentQuestion.correct_answer;
      this.numberAnswered += 1;
      if (this.isCorrect) 
        this.numberCorrect += 1;
    }
    
    this.userHasClicked = true;
  }
  
  
  getAnswersList(){
    let answers = [...this.currentQuestion.incorrect_answers]
    answers.push(this.currentQuestion.correct_answer);
    return answers;
  }

  shuffleArray(array : Array<any>) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.list-group {
  margin-bottom: 15px;
  color:#1d1d1d;
}

.unclickedListGroupItem:hover {
  background: #EEE;
  cursor: pointer;
}

.correct {
  background-color: palegreen;
}
.incorrect {
  background-color: lightcoral;
}

.btn {
  margin: 0 5px;
}
</style>
