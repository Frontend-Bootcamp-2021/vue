<template>
  <div class="chat">
    <h2 class="page-header">Chat</h2>

    <div class="chat__content">
      <SigninComponent @signin="signin" v-if="!isSignin" />
      <MsgComponent :data="chats" :nickname="nickname" @send="sendMessage" v-else />
    </div>
  </div>
</template>

<script>
import SigninComponent from "./Signin.vue";
import MsgComponent from "./Messages.vue";

import { ref, onMounted, onUnmounted, computed } from "vue";
export default {
  components: {
    SigninComponent,
    MsgComponent,
  },
  setup() {
    const database = firebase.firestore();
    const chatDB = database.collection("chat");

    let firstname = ref("");
    let lastname = ref("");
    let emoji = ref("");
    let isSignin = ref(false);
    let chats = ref([]);

    const nickname = computed(() => {
      if (firstname.value == "" || lastname.value == "") return "";
      return `${firstname.value.charAt(0).toUpperCase()}${lastname.value
        .charAt(0)
        .toUpperCase()}`;
    });

    const signin = (user) => {
      firstname.value = user.firstname;
      lastname.value = user.lastname;
      emoji.value = user.emoji;
      isSignin.value = true;
      getMessages();
    };

    const getMessages = () => {
      chatDB.onSnapshot(async function (data) {
        data.docChanges().forEach((msg) => {
          chats.value.push(msg.doc.data());
        });
      });
    };

    const sendMessage = (msg) => {
      chatDB.doc().set({
        firstname: firstname.value,
        lastname: lastname.value,
        emoji: emoji.value,
        msg: msg,
      });
    };

    return {
      nickname,
      emoji,
      signin,
      isSignin,
      chats,
      sendMessage,
    };
  },
};
</script>

<style lang="scss">
.chat {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}
.signin {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  &__line {
    margin: 8px 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  &__label {
    margin: 8px 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    font-size: 18px;
    font-weight: bold;
  }

  &__emoji-label {
    margin: 8px 0;
    padding: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    font-size: 18px;
    cursor: pointer;

    &:hover {
      color: $signin-emoji-hover;
    }
  }

  &__input {
    margin: 0;
    padding: 8px 16px;

    border: 1px solid $signin-border;
    border-radius: 4px;
  }

  &__radio {
    margin: 0 8px;
    padding: 0;

    width: 18px;
    height: 18px;

    border: 1px solid $signin-border;
    border-radius: 4px;
  }

  &__button {
    margin: 0;
    padding: 8px 16px;

    background-color: $button-bgcolor;
    border: 1px solid $signin-border;
    border-radius: 4px;

    color: $white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: $button-bgcolor-hover;
    }
  }
}
</style>
