<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<script setup lang="ts">
// import { SmoothDndContainer } from '../SmoothDnd/SmoothDndContainer'
// import { SmoothDndDraggable } from '../SmoothDnd/SmoothDndDraggable'
</script>

<template>
    <div class="blocks-drawer-wrapper">
        <h3 class="drawer-title">BLOCKS</h3>
        <!-- <div v-for="d in blocksBaseMetaList" :key="d.type">{{ d.type }}</div> -->
        <!-- <SmoothDndContainer
            behaviour="copy"
            group-name="blocks"
            :get-child-payload="(index: number) => console.log(index)"
        >
            <SmoothDndDraggable v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="i">
                <div>block {{ i }}</div>
            </SmoothDndDraggable>
        </SmoothDndContainer> -->
    </div>
</template>

<style scoped>
.blocks-drawer-wrapper {
    width: 100%;
}

.drawer-title {
    position: sticky;
    top: 0;
    font-weight: var(--font-weight-bolder);
    padding: 12px 0;
    background-color: var(--color-white);
}
</style>
