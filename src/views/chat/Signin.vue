<template>
  <form class="signin" @submit.prevent="$emit('signin', user)">
    <div class="signin__line">
      <label for="firstname" class="signin__label">Enter your first name:</label>
      <input
        type="text"
        id="firstname"
        class="signin__input"
        placeholder="Your first name"
        v-model="user.firstname"
        required
      />
    </div>
    <div class="signin__line">
      <label for="lastname" class="signin__label">Enter your lastname:</label>
      <input
        type="text"
        id="lastname"
        class="signin__input"
        placeholder="Your lastname"
        v-model="user.lastname"
        required
      />
    </div>
    <div class="signin__line">
      <div for="emoji" class="signin__label">Select your emoji:</div>
      <label for="unicorn" class="signin__emoji-label">
        <input
          type="radio"
          name="emoji"
          id="unicorn"
          class="signin__radio"
          value="🦄"
          v-model="user.emoji"
          required
        />
        🦄 Unicorn
      </label>
      <label for="ghost" class="signin__emoji-label">
        <input
          type="radio"
          name="emoji"
          id="ghost"
          class="signin__radio"
          value="👻"
          v-model="user.emoji"
        />
        👻 Ghost
      </label>
      <label for="fox" class="signin__emoji-label">
        <input
          type="radio"
          name="emoji"
          id="fox"
          class="signin__radio"
          value="🦊"
          v-model="user.emoji"
        />
        🦊 Fox
      </label>
      <label for="monkey" class="signin__emoji-label">
        <input
          type="radio"
          name="emoji"
          id="monkey"
          class="signin__radio"
          value="🙈"
          v-model="user.emoji"
        />
        🙈 Monkey
      </label>
      <label for="robot" class="signin__emoji-label">
        <input
          type="radio"
          name="emoji"
          id="robot"
          class="signin__radio"
          value="🤖"
          v-model="user.emoji"
        />
        🤖 Robot
      </label>
    </div>
    <button type="submit" class="signin__button">Sign In</button>
  </form>
</template>

<script>
import { reactive } from "vue";
export default {
  emit: ["signin"],
  setup() {
    let user = reactive({
      firstname: "",
      lastname: "",
      emoji: "",
    });

    return { user };
  },
};
</script>
