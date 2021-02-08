<template>
  <transition name="modal">
    <div
      class="modal-mask"
      @click="$emit('close')"
      @key.esc="$emit('close')">
      <div class="modal-wrapper">
        <div
          class="modal-container"
          :class="containerClass"
          :style="containerStyle"
          @click.stop>
          <div class="modal-header">
            <div
              class="modal-close"
              @click="$emit('close')"/>
            <slot name="header">
              default header
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    containerClass: {
      type: Object,
      default: () => {
        return {}
      }
    },
    containerStyle: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', this.handleKey)
  },
  destroyed () {
    document.removeEventListener('keydown', this.handleKey)
  },
  methods: {
    handleKey (e) {
      if (e.key === 'Escape') {
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss">

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 800px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #00845D;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.modal-default-button {
  background-color: #00845D;
  color: white;
  padding: 8px;
  border-radius: 8px;
  box-shadow: none;
  border: none;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media screen and (max-width: 700px) {
  .modal-container {
    width: 90vw;
    max-width: 90vw;
    padding: 20px 30px;
  }
}

</style>
