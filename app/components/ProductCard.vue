<template>
  <article class="product-card">
    <a href="#" class="product-card__image-link">
      <img :src="product.image" :alt="product.name" class="product-card__image" loading="lazy" />
    </a>

    <a href="#" class="product-card__info">
      <div class="product-card__price-row">
        <span class="product-card__price">
          {{ formattedPrice }} ₽
        </span>
        <span class="product-card__price-badge">
          <span class="product-card__badge-double-price">{{ doubledPrice }} ₽</span>
          <span class="product-card__badge-label">x2</span>
        </span>
      </div>

      <h3 class="product-card__name">
        {{ product.name }}
      </h3>
    </a>

    <button class="product-card__favorite" type="button" aria-label="Добавить в избранное">
      <nuxt-icon name="favorite"></nuxt-icon>
    </button>
  </article>
</template>

<script setup lang="ts">
export interface Product {
  id: number
  name: string
  price: number
  image: string
}

const props = defineProps<{
  product: Product
}>()

const formattedPrice = computed(() => props.product.price.toLocaleString('ru-RU'))
const doubledPrice = computed(() => Math.ceil(props.product.price / 2).toLocaleString('ru-RU'))
</script>