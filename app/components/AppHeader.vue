<template>
  <header class="header">
    <div class="header__inner">
      <NuxtLink to="/" class="header__logo"/>
      <nav class="header__nav">
        <a href="#" class="header__link">Мужчинам</a>
        <a href="#" class="header__link">Женщинам</a>
        <a href="#" class="header__link">Каталог</a>
        <a href="#" class="header__link">Доставка</a>
        <a href="#" class="header__link">Блог</a>
        <a href="#" class="header__link">О нас</a>
      </nav>
      <div class="header__burger" aria-label="Логотип">
        <nuxt-icon name="menu"></nuxt-icon>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

