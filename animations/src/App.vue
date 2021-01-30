<template>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">  
      <transition 
      name="para" 
      @before-enter="beforeEnter" 
      @enter="enter" 
      @after-enter="afterEnter" 
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      >
        <p v-if="paraIsVisible">This is testing paragraph visibility</p>
      </transition> 
      <button @click="toggleParagraph">Toggle Paragraph</button>  
  </div>   
  <div class="container">
  <transition name="fade-button" mode="out-in">  
    <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
    <button @click="hideUsers" v-else>Hide Users</button>
  </transition>
  </div>
  <base-modal @close="hideDialog" :open='dialogIsVisible'>
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      animatedBlock: false,
      dialogIsVisible: false, 
      paraIsVisible: false,
      usersAreVisible: false,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter')
       console.log(el)
       el.style.opacity =0;
    },
    enter(el, done) {
      console.log('enter')
       console.log(el)
       let round = 1;
       const interval = setInterval(function() {
         el.style.opacity = round * 0.1;
         round++;
         if (round > 100) {
           clearInterval(interval);
           done();
         }
       }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter')
       console.log(el)
    },
    beforeLeave(el) {
      console.log('beforeLeave')
      console.log(el)
    },
    leave(el){
     console.log('leave')
     console.log(el)
    },
    afterLeave(el){
     console.log('afterLeave')
     console.log(el)
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible =false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade .3s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to{
  opacity: 0;
}

.fade-button-enter-active{
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to
.fade-button-enter-from,
{
  opacity: 0;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }

}
</style>