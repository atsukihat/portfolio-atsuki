import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useWindowSize } from './useWindowSize'

export function useScrollPosition() {
  const router = useRouter()
  const currentSection = ref('')
  const { width, height } = useWindowSize()

  const sections = [
    { id: '', height: 0 },
    { id: '#about', height: height.value },
    { id: '#skills', height: height.value * 2 },
    { id: '#works', height: height.value * 3 },
    { id: '#contact', height: height.value * 4 }
  ]

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const currentHeight = height.value

    // 現在のスクロール位置に基づいてセクションを特定
    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= sections[i].height) {
        if (currentSection.value !== sections[i].id) {
          currentSection.value = sections[i].id
          // URLを更新（homeの場合は/に、それ以外はセクション名に）
          const path = sections[i].id === 'home' ? '/' : `/${sections[i].id}`
          router.replace(path)
        }
        break
      }
    }
  }

  // ウィンドウサイズの変更を監視
  watch([width, height], () => {
    // セクションの高さを更新
    sections[1].height = height.value
    sections[2].height = height.value * 2
    sections[3].height = height.value * 3
    sections[4].height = height.value * 4

    // 現在のスクロール位置に基づいてセクションを更新
    handleScroll()
  })

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    // 初期位置の設定
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    currentSection
  }
}
