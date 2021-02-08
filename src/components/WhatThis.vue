<template>
  <div>
    <a
      type="button"
      class="modal-button item"
      href="#"
      @click="setModalView(true)">
      What is this?
    </a>
    <modal-component
      v-if="showModal"
      @close="setModalView(false)">
      <h3 slot="header">What's this</h3>
      <div slot="body">
        <p>The purpose of this website is to provide a quick glimpse into the scope of TaxonWorks use.</p>
        <ul>
          <li>There is no one TaxonWorks, the numbers here reflect a single instance, as selected on the top of the page.</li>
          <li>Currently, clicking on a card takes you to the technical definition of that concept, as defined in code.  We'll work to make this more accessible in the future.</li>
          <li>Find out more about the project and code via the links on top.</li>
        </ul>
        <p>This website is also an <a href="https://github.com/SpeciesFileGroup/taxonworks_stats">open-source demonstration</a> of how to build applications off of a TaxonWorks API, and serve them freely.</p>
        <p>Questions? We're always <a href="https://gitter.im/SpeciesFileGroup/taxonworks">available to chat</a>.</p>
      </div>
    </modal-component>
  </div>
</template>

<script>

import ModalComponent from '@/components/Modal'

export default {
  components: {
    ModalComponent
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
  span.modal-button {
    white-space: nowrap;
    cursor: pointer;
    color: #00845D;
  }
</style>
