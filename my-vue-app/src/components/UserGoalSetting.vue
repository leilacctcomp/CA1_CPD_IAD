<template>
  <div>
    <h1>Goal Setting</h1>
    <div class="goal-container">
      <label for="goalInput">Set a Goal</label>
      <input type="text" id="goalInput" v-model="goal" placeholder="Enter your goal">
      <button @click="saveGoal">Save</button>
    </div>
    <ul>
      <li v-for="(goal, index) in goals" :key="index">{{ goal }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserGoalSetting",
  data() {
    return {
      goal: '',
      goals: [],
    };
  },
  methods: {
    saveGoal() {
      const trimmedGoal = this.goal.trim();
      if (trimmedGoal !== '') {
        this.goals.push(trimmedGoal);
        this.goal = '';
      }
    },
  },
};
</script>

<style scoped>
  body {
    font-family: Arial, sans-serif;
  }

  .goal-container {
    margin-top: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"] {
    width: 300px;
    padding: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  ul {
    margin-top: 20px;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }
</style>
