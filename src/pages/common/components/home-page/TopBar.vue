<template>
    <div class="topbar">
        <div class="actions">
            <div class="action-item">
                <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
                <span>Login</span>
            </div>
            <div class="action-item">
                <font-awesome-icon :icon="['fas', 'user-plus']" />
                <span>Register</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
};
</script>

<style scoped>
.topbar {
    width: 100%;
    height: 50px;
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

.actions {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 1%;
}

.action-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #333;
    font-size: 14px;
}

.action-item i {
    margin-right: 6px;
    font-size: 18px;
}

.action-item :deep(svg) {
    margin-right: 8px;
    font-size: 18px;
}
</style>