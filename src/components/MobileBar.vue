<template>
  <div class="mobile-bar-section">
    <div class="empty" />
    <div class="mobile-bar">
      <slot />
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.empty {
  height: 100px;
}
.mobile-bar {
  box-sizing: border-box;
  height: 100px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 64px;
  padding: 0px 1em;
  box-shadow: rgba(36, 37, 38, 0.08) 0px 4px 15px 0px;
  z-index: 2;
  justify-content: center;

  .json-button {
    display: none;
  }

  .server-selector {
    width: 100%;
    flex-direction: column;
  }

  .navbar-selectors {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media screen and (min-width: 1200px) {
  .mobile-bar-section {
    display: none;
  }
}
</style>
