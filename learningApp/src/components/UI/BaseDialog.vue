<template>
    <dialog open>
        <header>
            <slot name="header">
                <h2>{{title}}</h2>
            </slot>
        </header>
        <section>
            <slot></slot>
        </section>
        <menu>
           <slot name="actions"></slot> 
        </menu>
    </dialog>
</template>

<script>
import MagangedGoals from '../../../../deepcomp/src/components/MagangedGoals.vue'
export default {
  components: { MagangedGoals },
    props:{
        title: {
            type: String,
            required: false
        }
    }        
}
</script>