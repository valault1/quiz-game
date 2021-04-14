<template>
  <div class="quiz">
    <b-nav>
      
      <b-nav-item style="class:nav-info" disabled>Question: {{index + 1}}/{{this.numQuestions}}</b-nav-item>
     <!-- <b-nav-item style="class:nav-info">
        Question Type: 
        <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
          <b-dropdown-item v-for="(category, key) in questionCategories" :key="key" :value="key">{{category}}</b-dropdown-item>
          
        </b-dropdown>
      </b-nav-item>-->
    </b-nav>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox
            v-if="questions.length" 
            :currentQuestion="questions[index]"
            :next="next"
          />
          </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
import QuestionBox from '../components/QuestionBox.vue';


let NUM_QUESTIONS = 10;

export default {
  name: "quiz",
  components: {
    QuestionBox,
  },
  props: {
    numQues : Number,
    category: String,
  },
  data() {
    return {
      questions: [],
      index: 0,
      numQuestions: NUM_QUESTIONS,
      url: "https://opentdb.com/api.php?amount=" + NUM_QUESTIONS + "&category="+ this.$route.params.category + "&type=multiple&difficulty=" + this.$route.params.difficulty
    }
  },
  methods: {
    next() {
      this.index +=1;
      if (this.index >= this.numQuestions - 1 ) {
        this.index = this.numQuestions - 1
        this.questions[this.index] = null;
      }
    }
  },
  mounted: function() {
    fetch(this.url, {
      method: 'get'
    })
      .then((result) => {
        return result.json();
      })
      .then((jsonData) => {
        this.questions = jsonData.results
      })
  }
}
</script>
