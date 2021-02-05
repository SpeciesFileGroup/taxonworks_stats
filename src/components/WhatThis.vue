<template>
  <div>
    <button
      type="button"
      class="modal-button"
      @click="setModalView(true)">
      What is this?
    </button>
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
        <p>This website is also an [open-source demonstration](<a href="https://github.com/SpeciesFileGroup/taxonworks_stats">https://github.com/SpeciesFileGroup/taxonworks_stats</a>) of how to build applications off of a TaxonWorks API, and serve them freely.</p>
        <p>Questions? We're always [available to chat](<a href="https://gitter.im/SpeciesFileGroup/taxonworks">https://gitter.im/SpeciesFileGroup/taxonworks</a>).</p>
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
  .modal-button {
    background-color: #00845D;
    color: white;
    padding: 8px;
    border: none;
    border-radius: 8px;
  }
</style>
