<template>
  <div id="diary-page">
    <h1>Diary</h1>

    <!-- Text area where users will write -->
    <div>
      <!-- Textarea for the users to write their diary -->
      <textarea v-model="entryInput" placeholder="Write your diary entry here"></textarea>

      <!-- Save button -->
      <button @click="saveEntry">Save</button>
    </div>

    <!-- Area to display the entries saved -->
    <!-- This div is the container that will display the saved entries -->
    <div id="entriesContainer">
      <div v-for="(entry, index) in savedEntries" :key="index">
        {{ entry }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    const entryInput = ref('');
    const savedEntries = reactive([]);

    function saveEntry() {
      if (entryInput.value.trim() !== '') {
        savedEntries.push(entryInput.value);
        entryInput.value = '';
      }
    }

    return { entryInput, savedEntries, saveEntry };
  },
};
</script>

<style scoped>
#entryInput {
  width: 100%;
  height: 150px;
  resize: none;
}

#saveButton {
  margin-top: 10px;
}

#entriesContainer {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
