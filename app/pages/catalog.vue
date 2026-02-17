<template>
  <section class="catalog-page">
    <div class="catalog-page__inner">
      <h1 class="catalog-page__title">КАТАЛОГ</h1>

      <div class="catalog-page__grid">
        <ProductCard
          v-for="item in products"
          :key="item.id"
          :product="item"
        />
      </div>

      <div class="catalog-page__controls">
        <button
          v-if="!isLoading && hasMore && !loadError"
          type="button"
          class="catalog-page__more-button"
          @click="onLoadMore"
        >
          Показать ещё
        </button>

        <p v-if="isLoading" class="catalog-page__loading">
          Загрузка...
        </p>

        <div v-if="loadError" class="catalog-page__error">
          <p class="catalog-page__error-text">
            Произошла ошибка, попробуйте позже
          </p>
          <button
            type="button"
            class="catalog-page__retry-button"
            @click="onRetry"
          >
            Повторить
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard, {type Product} from '~/components/ProductCard.vue'

interface ProductsResponse {
  total: number
  totalPages: number
  currentPage: number
  limit: number
  products: Product[]
}

const API_URL = 'https://test-task-api.tapir.ws/products'

const page = ref(1)
const totalPages = ref(1)
const products = ref<Product[]>([])
const isLoading = ref(false)
const loadError = ref(false)

const hasMore = computed(() => page.value < totalPages.value)

const fetchPage = async (targetPage: number) => {
  return await $fetch<ProductsResponse>(API_URL, {
    query: {
      page: targetPage,
      limit: 12
    }
  })
}

const { data: initialData, error: initialError } = await useAsyncData(
  'products-initial',
  () => fetchPage(1),
  { server: true }
)

if (initialData.value) {
  products.value = initialData.value.products
  page.value = initialData.value.currentPage
  totalPages.value = initialData.value.totalPages
}

if (initialError.value) {
  loadError.value = true
}

const onLoadMore = async () => {
  if (isLoading.value || !hasMore.value) return

  isLoading.value = true
  loadError.value = false

  try {
    const nextPage = page.value + 1
    const data = await fetchPage(nextPage)

    products.value = [...products.value, ...data.products]
    page.value = data.currentPage
    totalPages.value = data.totalPages
  } catch {
    loadError.value = true
  } finally {
    isLoading.value = false
  }
}

const onRetry = () => {
  if (isLoading.value) return
  onLoadMore()
}
</script>


