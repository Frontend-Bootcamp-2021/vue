<template>
  <header class="header">
    <nav class="header__menu">
      <router-link to="/" class="header__link">Home</router-link>
      <router-link to="/about" class="header__link">About</router-link>
      <router-link to="/detail" class="header__link">Detail</router-link>
      <router-link to="/chat" class="header__link">Chat</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  flex-grow: 1;

  min-height: 80px;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  &__menu {
    flex-grow: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  &__link {
    margin: 0 20px;
    padding: 10px 20px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    border-radius: 6px;
    background-color: transparent;

    color: $menu-link;
    text-decoration: none;
    text-transform: uppercase;

    transition: background-color 0.4s ease-out;

    &:hover {
      color: $menu-link-hover;
      text-decoration: underline;
    }

    &.router-link-active {
      background-color: $menu-link-active-bgcolor;
      color: $menu-link-active;
    }
  }
}
</style>
