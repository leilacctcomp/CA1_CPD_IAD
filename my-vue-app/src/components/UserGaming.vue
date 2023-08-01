<template>
  <div>
    <div class="header">
      <h1>Welcome to MoodShine Gaming</h1>
      <div class="profile">
        <div class="avatar"></div>
        <div class="user-info">
          <div class="username">John Doe</div>
          <div class="user-settings">Settings</div>
        </div>
      </div>
    </div>

    <div class="game-selection">
      <h2>Choose a Game:</h2>
      <div class="game-card" v-for="(game, index) in games" :key="index">
        <h3>{{ game.title }}</h3>
        <p>{{ game.description }}</p>
        <button class="play-button" @click="startGame(game.title)">Play</button>
      </div>
    </div>

    <div class="game-progress">
      <h2>Game Progress:</h2>
      <div class="progress-container">
        <div class="progress-bar" :style="{width: progressPercentage + '%'}"></div>
        <div class="progress-info">
          <span>Level 1</span>
          <span>Points: {{ currentPoints }}</span>
        </div>
      </div>
    </div>

    <div class="navigation-menu">
      <h2>Navigation:</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Games</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          title: 'Game 1',
          description: 'Game 1 Life is like a treasure hunt!'
        },
        {
          title: 'Game 2',
          description: 'Game 2 Life is a treasure mined by gods!'
        }
      ],
      currentPoints: 0,
      maxPoints: 1000,
    }
  },
  computed: {
    progressPercentage() {
      return (this.currentPoints / this.maxPoints) * 100;
    },
  },
  methods: {
    startGame(gameTitle) {
      console.log(`Starting ${gameTitle}...`);
    },
    simulateGameProgress() {
      setInterval(() => {
        this.currentPoints += 50;
        if (this.currentPoints >= this.maxPoints) {
          this.currentPoints = this.maxPoints;
        }
      }, 1000);
    },
  },
  mounted() {
    this.simulateGameProgress();
  },
}
</script>

<style scoped>
  body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .header {
      background-color: #f1f1f1;
      padding: 20px;
    }

    .game-selection {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin: 20px;
    }

    .game-card {
      border: 1px solid #ccc;
      padding: 10px;
    }

    .game-progress {
      margin: 20px;
    }

    .navigation-menu {
      margin: 20px;
    }

    .navigation-menu ul {
      list-style-type: none;
      padding: 0;
    }

    .navigation-menu li {
      margin-bottom: 10px;
    }

    .play-button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
    }

    .profile {
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: #f0f0f0;
      padding: 10px;
      border-radius: 5px;
    }

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #ddd;
    }

    .user-info {
      display: flex;
      flex-direction: column;
    }

    .username {
      font-size: 16px;
      font-weight: bold;
    }

    .user-settings {
      font-size: 12px;
      color: #666;
    }

    .game-progress {
      margin-top: 20px;
    }

    .progress-container {
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 5px;
      display: flex;
      align-items: center;
    }

    .progress-bar {
      height: 20px;
      background-color: #4CAF50;
      border-radius: 5px;
      width: 0;
      transition: width 0.3s ease;
    }

    .progress-info {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }

    .progress-info span {
      font-size: 14px;
      color: #666;
    }

    @media (max-width: 600px) {
      .game-progress {
        margin-top: 10px;
      }

      .progress-container {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
      }

      .progress-bar {
        width: 100%;
      }

      .progress-info {
        margin-top: 10px;
        margin-left: 0;
      }
    }
</style>