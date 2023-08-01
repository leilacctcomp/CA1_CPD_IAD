<template>
  <div id="reminderPage">
    <h1>Reminder</h1>
    <input type="text" v-model="reminderInput" placeholder="Enter a reminder">
    <button @click="addReminder">Add Reminder</button>
    <ul>
      <li v-for="(reminder, index) in reminders" :key="index" :class="{completed: reminder.completed}">
        <input type="checkbox" v-model="reminder.completed">
        <span>{{ reminder.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserReminder",
  data() {
    return {
      reminderInput: '',
      reminders: [],
    };
  },
  methods: {
    addReminder() {
      const reminderText = this.reminderInput.trim();
      if (reminderText !== '') {
        this.reminders.push({text: reminderText, completed: false});
        this.reminderInput = '';
      }
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #999;
}
</style>
