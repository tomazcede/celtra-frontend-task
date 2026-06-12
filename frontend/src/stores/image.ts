import {computed, type ComputedRef, type Ref, ref} from 'vue'
import {defineStore} from 'pinia'
import type {ImageModel} from "../interfaces/Image.ts"

export const useImageStore = defineStore('image', () => {
  const page: Ref<number> = ref(1)
  const limit: number = 30
  const maxPage: number = 10
  const numOfItems: ComputedRef<number> = computed(() => {
    return limit * maxPage
  })
  const currentPageLimits: ComputedRef<{min: number, max: number}> = computed(() => {
    return {
      min: 1 + (limit * (page.value - 1)),
      max: limit * page.value
    }
  })
  const loading: Ref<Boolean> = ref(false)

  const currentIndex: Ref<number> = ref(-1)
  const images: Ref<Array<ImageModel>> = ref([])

  async function fetchImages() {
    loading.value = true

    await fetch(`https://picsum.photos/v2/list?page=${page.value}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        images.value = data;
      })
      .finally(() => {
        loading.value = false;
      });
  }

  async function fetchImage(id: string) {
    loading.value = true

    await fetch(`https://picsum.photos/id/${id}/info`)
        .then(res => res.json())
        .then(data => {
          images.value = [data];
          currentIndex.value = 0;
        })
        .finally(() => {
          loading.value = false;
        });
  }

  async function setPage(val: number) {
    if(val > maxPage) {
      page.value = maxPage
      return
    }

    if(val < 1) {
      page.value = 1
      return
    }

    page.value = val

    await fetchImages()
  }

  async function incrementPage(val: number) {
    await setPage(page.value + val)
  }

  async function findImage(id: string): Promise<ImageModel | null> {
    loading.value = true;

    try {
      const res = await fetch(`https://picsum.photos/id/${id}/info`);

      if (!res.ok) {
        return null;
      }

      return await res.json();
    } catch (error) {
      return null;
    } finally {
      loading.value = false;
    }
  }

  return { page, maxPage, numOfItems, currentPageLimits, loading, limit, images, incrementPage, setPage, findImage }
})
