<script setup lang="ts">
import BlocksDrawer from '../components/blocks-drawer/BlocksDrawer.vue';
import MaterialDrawer from '../components/material-drawer/MaterialDrawer.vue';
import NavigationDrawer from '../components/navigation-drawer/NavigationDrawer.vue';
import { useDisclosure } from '@/hooks/useDisclosure'

const [isOpen, { toggle }] = useDisclosure(false)

</script>
<template>
    <div class="app-left-panel-wrapper">
        <div class="app-left-panel-drawer">
            <div class="app-left-panel-split tiny-scrollbar">
                <NavigationDrawer  />
            </div>
            <div class="app-left-panel-split tiny-scrollbar">
                <MaterialDrawer/>
                <button @click="toggle">+</button>
            </div>
        </div>
        <div class="app-left-sub-panel" v-if="isOpen">
            <BlocksDrawer  />
        </div>
    </div>
</template>

<style scoped>
.app-left-panel-wrapper {
    position: relative;
    display: flex;
    z-index: 4;
    box-shadow: var(--color-gray-300) 1px 0 0;
}

.app-left-panel-drawer {
    width: var(--panel-width);
    box-shadow: var(--color-gray-300) 1px 0 0;
    overflow: hidden;
}

.app-left-panel-split {
    height: 50%;
    overflow: hidden;
    display: flex;
    overflow: auto;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-gray-300);
}

.app-left-sub-panel {
    width: 320px;
}
</style>
