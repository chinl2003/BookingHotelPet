<template>
    <div class="home-page">
        <TopBar />

        <div class="main-layout">
            <Sidebar @toggle-booking-panel="showMenu = !showMenu" />

            <div class="main-content">
                <Header />
                <Menu v-if="showMenu" />

                <div class="page-body">
                    <MainContent />
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
import Menu from './Menu.vue'
import MainContent from './MainContent.vue'

export default {
    name: 'HomePage',
    components: {
        TopBar,
        Sidebar,
        Header,
        Footer,
        Menu,
        MainContent
    },
    data() {
        return {
            showMenu: false
        }
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
    padding: 5px;
    margin-left: 3%;
}
</style>