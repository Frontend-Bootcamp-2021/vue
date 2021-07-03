<template>
  <div class="message">
    <div
      class="message__item"
      v-for="(message, index) in data"
      :key="index"
      :class="{ '-me': isMySelf(message) }"
    >
      <span class="message__icon" :data-emoji="message.emoji">{{
        createNickname(message)
      }}</span>
      <span class="message__text">{{ message.msg }}</span>
    </div>
  </div>
  <form class="message__send" @submit.prevent="sendMessage">
    <input
      type="text"
      placeholder="Enter your message"
      class="message__input"
      v-model="message"
    />
    <button type="submit" class="message__button" :disabled="message == ''">Send</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  emits: ["send"],
  props: ["nickname", "data"],
  setup(props, { emit }) {
    let message = ref("");

    const sendMessage = () => {
      emit("send", message.value);
      message.value = "";
    };

    const isMySelf = (user) => {
      let nickname = createNickname(user);
      return nickname == props.nickname;
    };

    const createNickname = (user) => {
      return `${user.firstname.charAt(0).toUpperCase()}${user.lastname
        .charAt(0)
        .toUpperCase()}`;
    };

    return {
      message,
      sendMessage,
      isMySelf,
      createNickname,
    };
  },
};
</script>

<style lang="scss">
.message {
  margin: 0;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  background-color: $message-bgcolor;
  min-height: 400px;

  &__item {
    margin: 0 0 12px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;

    &.-me {
      flex-direction: row;
      align-self: flex-start;
    }
  }

  &__text {
    padding: 8px;

    background-color: $message-item-bgcolor;
    border-radius: 12px;

    font-size: 16px;
  }

  &__icon {
    position: relative;

    margin: 0 10px;
    padding: 0;

    width: 48px;
    height: 48px;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: $message-icon-bgcolor;

    color: $message-icon-text;
    font-size: 22px;
    font-weight: bold;

    &::before,
    &::after {
      flex-grow: 0;
      flex-shrink: 0;
      content: "";

      width: 24px;
      height: 24px;

      position: absolute;
      bottom: -8px;
      right: -6px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    &::before {
      background-color: $message-emoji-bgcolor;
      border-radius: 50%;
      border: 1px solid $message-emoji-border;
    }

    &::after {
      content: attr(data-emoji);
      font-size: 32px;
      transform: scale(0.5);
    }
  }

  &__send {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }

  &__input {
    flex-grow: 1;

    padding: 12px;

    height: 40px;

    background-color: $message-input;
    border: none;

    font-size: 18px;
  }

  &__button {
    flex-grow: 0;

    margin: 0;
    padding: 0 8px;

    height: 40px;

    background-color: $message-button;
    border: none;

    cursor: pointer;

    &[disabled] {
      background-color: $message-button-disabled;
      cursor: not-allowed;
    }

    &:not([disabled]):hover {
      background-color: $message-button-hover;
    }
  }
}
</style>
