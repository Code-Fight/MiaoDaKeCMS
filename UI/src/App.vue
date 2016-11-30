<template>
  <!-- Navbar -->
  <div id='wrapper'>
    <!-- Sidebar -->
    <section id='sidebar'>
      <com-menu></com-menu>
    </section>
    <!-- Tools -->
    <section id="tools" style="-webkit-app-region:drag">
      <com-header></com-header>
    </section>
    <!-- Content -->
    <div id='content'>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>

</template>


<script>
import Header from './assets/componets/header.vue';
import Menu from './assets/componets/menu.vue';
import Index from './assets/pages/index.vue';

export default{
        components:{
            comHeader:Header,
            comMenu:Menu,
            comIndex:Index
        }

    }
</script>