<template>
<header>
  <div class="empty">
  </div>
  <nav
    :class="menuState"
    class="navbar">
    <img
      class="brand"
      src="@/assets/taxonworks_logo-full.svg"
      height="48px"
      alt="TaxonWorks">
    <button type="button" @click="setMenuState" class="toggle"></button>
    <div class="middle">
      <div class="navbar-selectors">
        <slot name="selectors"/>
      </div>
      <slot name="buttons"/>
    </div>
    <div class="right">
      <what-this/>
      <a
        class="item"
        v-for="(link, key) in links"
        :key="key"
        :href="link">{{ key }}</a>
    </div>
  </nav>
</header>
</template>

<script>

import WhatThis from '@/components/WhatThis.vue'

export default {
  components: {
    WhatThis
  },
  data () {
    return {
      openMenu: false,
      links: {
        Home: 'https://taxonworks.org',
        Code: 'https://github.com/SpeciesFileGroup/taxonworks',
        API: 'https://api.taxonworks.org'
      }
    }
  },
  computed: {
    menuState () {
      return this.openMenu ? 'active' : ''
    }
  },
  methods: {
    setMenuState () {
      this.openMenu = !this.openMenu
    }
  }
}
</script>

<style lang="scss">
  .navbar {
    box-sizing: border-box;
    background-color: white;
    box-shadow: rgba(36, 37, 38, 0.08) 4px 4px 15px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 0.5rem 1rem;
    width: 100%;
    left: 0px;
    top: 0;
    z-index: 2;

    .middle, .right {
      display: none;
      @media screen and (min-width: 1200px) {
        display: flex;
        align-items: center;
      }
    }
  }

  .toggle {
    border: none;
    padding: 1em 0em;
    color: black;
    vertical-align: middle;
    background-color: white;
  }

  .toggle::after {
    content: "\2630";
    font-size: 20px;
  }

  .toggle:focus {
    outline:0;
  }

  .item {
    font-size: 18px;
    font-weight: 500;
    padding:0px 1em;
    text-align: center;
    width: 100%;
    white-space: nowrap;
  }

  .brand {
    height: 48px;
    text-align: center;
    color: white;
    margin-right: 1em;
  }

  .navbar-selectors {
    display: flex;
    flex-direction: row;
    justify-content: center;

    select {
      margin-right: 4px;
    }
  }

  @media screen and (max-width: 1200px) {
    .server-selector {
      display: block;
    }
    .json-link {
      display: none;
    }

  }

  @media screen and (min-width: 1200px) {
    .navbar {
      display: flex;

      .middle {
        display: flex;
        flex: 1;
      }

      .right {
        display: flex;
        flex: 0.5;
      }

      .item {
        width: auto;
      }

      .right {
        justify-content: flex-end;
      }

      .toggle {
        display: none;
      }

      .navbar-selectors {
        flex-direction: row;
      }
    }
  }

  @media screen and (max-width: 1500px) {
      .navbar-selectors {
        flex-direction: column !important;
      }
  }

  @media screen and (max-width: 1200px) {
    .navbar.active {
      .toggle {
        background: white;
      }

      .right {
        left: 0;
        width: 100%;
        background-color: white;
        top:100%;
        position: absolute;
        display: block;
      }

      .item {
        padding:1em 0px;
        display: block;
      }
    }
  }
</style>
