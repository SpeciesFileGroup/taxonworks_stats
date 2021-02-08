<template>
<div class="footer-section">
  <div class="empty"/>
  <div class="footer">
    <slot>
    </slot>
  </div>
</div>
</template>

<script>

</script>

<style lang="scss">
  .empty {
    height: 64px;
  }
  .footer {
    height: 64px;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: white;
    position: fixed;
    bottom: 0;
    padding: 0px 1em;
    box-shadow: rgba(36, 37, 38, 0.08) 0px 4px 15px 0px;

    .json-button {
      display: none;
    }

    .server-selector {
      width: 100%;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 1200px) {
    .footer-section {
      display: none;
    }
  }
</style>
