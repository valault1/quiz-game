<template>
  <div>
    <b-nav>
         Quiz game
    </b-nav>
    <b-container>
      <b-row>
        <b-col sm="6" offset="3">
          <b-jumbotron class="jumbo">
            Welcome to the quiz game!
            <b-container>
              <b-col class="col">
                   <b-form-select 
                    v-model="selectedCategory" 
                    :options="QUESTION_CATEGORIES" 
                    value-field="item"
                    text-field="name"
                    ></b-form-select>

                  <b-form-select v-model="selectedDifficulty" :options="DIFFICULTIES"></b-form-select>
              </b-col>
              <b-col class="col">
                <b-button @click="startQuiz()">Start Quiz</b-button>
              </b-col>
                  

              
            </b-container>
              
             
              
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue , Watch} from 'vue-property-decorator';
import { Question } from '../models/Question';
import { AnswerChoice } from '../models/AnswerChoice';
import router from '../router/index'

@Component
export default class StartQuiz extends Vue {
  QUESTION_CATEGORIES = [
    {item: 9, name: "General Knowledge"},
    {item: 10, name: "Entertainment: Books"},
    {item: 11, name: "Entertainment: Film"},
    {item: 12, name: "Entertainment: Music"},
    {item: 13, name: "Entertainment: Musicals & Theatres"},
    {item: 14, name: "Entertainment: Television"},
    {item: 15, name: "Entertainment: Video Games"},
    {item: 16, name: "Entertainment: Board Games"},
    {item: 17, name: "Science & Nature"},
    {item: 18, name: "Science: Computers"},
    {item: 19, name: "Science: Mathematics"},
    {item: 20, name: "Mythology"},
    {item: 21, name: "Sports"},
    {item: 22, name: "Geography"},
    {item: 23, name: "History"},
    {item: 24, name: "Politics"},
    {item: 25, name: "Art"},
    {item: 26, name: "Celebrities"},
    {item: 27, name: "Animals"},
    {item: 28, name: "Vehicles"},
    {item: 29, name: "Entertainment: Comics"},
    {item: 30, name: "Science: Gadgets"},
    {item: 31, name: "Entertainment:Japanese Anime & Manga"},
    {item: 32, name: "Entertainment: Cartoon & Animations"}
  ]
  DIFFICULTIES = [
    "easy",
    "medium",
    "hard"
  ]

  selectedDifficulty = "medium";
  selectedCategory = 9;

  startQuiz() {
    let route = "quiz/" + this.selectedCategory  + "/"  + this.selectedDifficulty;
    console.log(route);
    router.push(route)
  }
}
</script>

<style scoped>
.jumbo {
  color: #1d1d1d
}

.col {
  padding: 20px
}

</style>