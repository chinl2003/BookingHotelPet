<template>
    <aside class="sidebar">
        <div class="icon-container" title="Search" @click="$emit('toggle-booking-panel')">
            <font-awesome-icon :icon="['fas', 'ellipsis-h']" />
        </div>
    </aside>
</template>

<script>
export default {
    name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    width: 60px;
    height: calc(100vh - 50px);
    background-color: #f8f9fa;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    margin-top: 35px;
}

.icon-container svg {
    font-size: 20px;
}
</style>