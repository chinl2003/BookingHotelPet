<template>
    <div class="home-page">
        <TopBar />

        <div class="main-layout">
            <Sidebar />

            <div class="main-content">
                <Header />

                <div class="page-body">
                    <h2>Welcome to A.L.O Hotel</h2>
                    <p>This is the homepage content area.</p>
                </div>

                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from './TopBar.vue'
import Sidebar from './SideBar.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    name: 'HomePage',
    components: {
        TopBar,
        Sidebar,
        Header,
        Footer
    }
}
</script>

<style scoped>
.home-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.main-layout {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.sidebar {
    width: 60px;
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.page-body {
    flex: 1;
    padding: 20px;
}
</style>