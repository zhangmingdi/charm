
<script setup lang="ts">
import { ApplicationMenu, DataSheet, Lightning, Page, Share } from '@icon-park/vue-next'
import { computed, defineComponent, h } from 'vue'
import { useRoute } from 'vue-router'

const linkItems = [
    {
        value: 'dataSource',
        label: 'Data',
        bg: `radial-gradient(50% 50% at 50% 100%, rgba(0, 196, 83, 0.2) 0%, rgba(0, 196, 83, 0) 100%)`,
        color: 'rgb(0, 196, 83)',
        borderColor: 'radial-gradient(50% 50%, rgb(0, 196, 83) 0%, rgba(0, 196, 83, 0) 100%)'
    },
    {
        value: 'layout',
        label: 'Layout',
        bg: `radial-gradient(50% 50% at 50% 100%, rgba(24, 190, 212, 0.2) 0%, rgba(24, 190, 212, 0) 100%)`,
        color: 'rgb(24, 190, 212)',
        borderColor: 'radial-gradient(50% 50%, rgb(24, 190, 212) 0%, rgba(24, 190, 212, 0) 100%)'
    },
    {
        value: 'actions',
        label: 'Actions',
        bg: `radial-gradient(50% 50% at 50% 100%, rgba(241, 60, 11, 0.2) 0%, rgba(241, 60, 11, 0) 100%)`,
        color: 'rgb(241, 60, 11)',
        borderColor: 'radial-gradient(50% 50%, rgb(241, 60, 11) 0%, rgba(241, 60, 11, 0) 100%)'
    }
]

// defineProps<{
//     msg: string
// }>()

const route = useRoute()

const activeLink = computed(() => route.name)
console.log('activeLink',activeLink);

// 等价于 computed
// const activeLink = ref(route.path.slice(1))
// watch(
//   () => route.name,
//   (path) => {
//     console.log('🚀 ~ file: AppNavigator.vue:20 ~ path:', path)
//     // activeLink.value = path.slice(1)
//   }
// )

const Icon = defineComponent({
    setup(props) {
        switch (props.type) {
            case 'dataSource':
                return () => h(DataSheet, { size: 16 })
            case 'layout':
                return () => h(Page, { size: 16 })
            case 'actions':
                return () => h(Lightning, { size: 16 })

            default:
                return () => h('div')
        }
    },
    props: {
        type: {
            type: String,
            required: true
        }
    }
})
</script>

<template>
    <div class="app-navigator">
        <div class="app-info-wrapper">
            <RouterLink class="icon-button" to="/o">
                <ApplicationMenu size="16" />
            </RouterLink>
            <div class="app-logo">
                <img
                    src="https://functions.prod.internal.glideapps.com/getEmoji/%E2%9C%88%EF%B8%8F"
                />
            </div>
            <h1 class="app-name">MiaoMa Vbuilder</h1>
        </div>
        <div class="app-navigator-link-wrapper">
            <RouterLink
                class="app-navigator-link-item"
                v-for="item in linkItems"
                :key="item.value"
                :style="activeLink === item.value && { background: item.bg }"
                :to="`/${item.value}`"
            >
                <div
                    :style="{
                        lineHeight: 0.7,
                        color: activeLink === item.value ? item.color : 'var(--color-gray-700)'
                    }"
                >
                    <Icon :type="item.value" :active="activeLink === item.value" />
                </div>
                <span class="item-title">
                    {{ item.label }}
                </span>
                <div
                    class="item-border"
                    :style="activeLink === item.value ? { background: item.borderColor } : {}"
                ></div>
            </RouterLink>
        </div>
        <div class="app-setting-wrapper">
            <div class="common-btn">
                <Share />
                发布
            </div>
        </div>
    </div>
</template>

<style scoped src="../style.css">

</style>
