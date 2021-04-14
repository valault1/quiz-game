<template>
  <div class="finished">
    <h1>The quiz is over!</h1>
    You got {{$route.params.numCorrect}} right!
    <router-link to="/">Take another quiz</router-link>
  </div>
</template>
