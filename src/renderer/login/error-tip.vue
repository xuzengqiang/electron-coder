<template>
  <transition name="error-tip">
    <div class="login-error-tip"
         v-show="visible">
      <label>{{message}}</label>
    </div>
  </transition>
</template>
<script>
  export default {
    data () {
      return {
        timer: null
      }
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      message: {
        type: String
      }
    },
    watch: {
      show (value) {
        if (value) {
          if (this.timer) {
            clearTimeout(this.timer)
            this.timer = null
          }
          this.timer = setTimeout(() => {
            this.visible = false
          }, 3000)
        }
      }
    }
  }
</script>
<style scoped>
  .login-error-tip {
    position: fixed;
    bottom: 18px;
    font-size: 13px;
    background: rgb(255, 96, 96);
    padding: 5px 25px;
    color: #fff;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
  }
  .error-tip-enter-active {
    transition: all 0.3s ease;
  }
  .error-tip-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .error-tip-enter,
  .error-tip-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
