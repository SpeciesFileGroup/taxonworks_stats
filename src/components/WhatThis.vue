<template>
  <div>
    <a
      type="button"
      class="modal-button item"
      href="#"
      @click="setModalView(true)">
      What is this?
    </a>
    <VModal
      v-if="showModal"
      @close="setModalView(false)"
    >
      <template #header>
        <h3>What is this?</h3>
      </template>
      <template #body>
        <div>
          <p>The purpose of this website is to provide a quick glimpse into the scope of TaxonWorks' use.</p>
          <p>
          <ul>
            <li>There is no one TaxonWorks, the numbers here reflect a single instance, the one selected at the top.</li>
            <li>Currently, clicking on a card takes you to the technical definition of that concept, as defined in code.  We'll work to make this more accessible in the future.</li>
            <li>Find out more about the project and code via links at the top right.</li>
          </ul>
          </p>
          <p>This website is also an <a href="https://github.com/SpeciesFileGroup/taxonworks_stats">open-source demonstration</a> of how to build applications on top of a TaxonWorks API, and how to serve those application freely.</p>
          <p>Questions? We're always <a href="https://gitter.im/SpeciesFileGroup/taxonworks">available to chat</a>.</p>
        </div>
      </template>
    </VModal>
  </div>
</template>

<script>

import VModal from '@/components/Modal.vue'

export default {
  components: {
    VModal
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    setModalView (value) {
      this.showModal = value
    }
  }
}
</script>
<style>
  .modal-body {
    line-height: 1.5;
  }
  span.modal-button {
    white-space: nowrap;
    cursor: pointer;
    color: #00845D;
  }
  li {
    padding: 0.4em;
  }
</style>
