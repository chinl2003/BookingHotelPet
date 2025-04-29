<template>
    <header class="header d-flex align-items-center justify-content-center container-fluid">
        <div class="d-flex align-items-center justify-content-center w-100 m-0">

            <div class="col-1 d-flex align-items-center justify-content-center">
                <div class="logo">
                    <img src="@/assets/images/logo-header.png" alt="Logo" />
                </div>
            </div>

            <div class="col-3 d-flex align-items-center">
                <div class="search-section w-100 d-flex align-items-center gap-2">
                    <multiselect v-model="selectedOption" :options="options" placeholder="Select type's room"
                        class="multiselect w-50" />
                    <input type="text" placeholder="Search room..." class="form-control w-50" />
                </div>
            </div>

            <div class="col-8 nav-menus d-flex align-items-center justify-content-around">
                <div class="menu-item" v-for="menu in menus" :key="menu">
                    <span>{{ menu }}</span>
                    <div class="dropdown-content">
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                    </div>
                </div>
            </div>

        </div>
    </header>
</template>

<script>
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
    name: "Header",
    components: {
        Multiselect,
    },
    data() {
        return {
            selectedOption: null,
            options: ["All", "Rooms", "Pets"],
            menus: [
                "Homepage",
                "List of rooms",
                "My pets",
                "My orders",
                "My payment",
                "My account",
            ],
        };
    },
};
</script>

<style scoped>
.header {
    position: fixed;
    top: 50px;
    left: 61px;
    height: 60px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    z-index: 10;
    padding: 0 20px;
}

.logo img {
    height: 60px;
}

.search-section {
    border: 1px solid #ccc;
    border-radius: 5px;
}

.search-section input {
    height: 36px;
    border: none;
}

.multiselect {
    height: 36px;
}

.nav-menus {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
}

.menu-item {
    position: relative;
    cursor: pointer;
    font-weight: normal;
    display: flex;
    align-items: center;
    height: 100%;
}

.menu-item span {
    padding: 8px 12px;
    display: inline-block;
    color: #333;
    white-space: nowrap;
}

.dropdown-content {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 120px;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.dropdown-content a {
    display: block;
    padding: 8px 12px;
    text-decoration: none;
    color: #333;
}

.dropdown-content a:hover {
    background-color: rgb(97, 69, 175);
    color: white;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 4px;
}

.menu-item:hover .dropdown-content {
    display: block;
    opacity: 1;
    transform: translateY(0);
}

.menu-item:hover span {
    opacity: 0.5;
    transition: opacity 0.3s;
}

::v-deep(.multiselect__tags) {
    padding: 7px 30px 0 8px;
    border: none;
}
</style>