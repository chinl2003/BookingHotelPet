<template>
    <footer class="footer">
        <div class="footer-title">
            A.L.O Hotel
        </div>

        <div class="footer-contact">
            <div class="contact-item">
                <font-awesome-icon :icon="['fas', 'phone-alt']" />
                <span>0819790919</span>
            </div>

            <div class="contact-item">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <span>alohotel@gmail.com</span>
            </div>

            <div class="contact-item">
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <span>ALO Hotel</span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
.footer {
    background-color: #f5f5f5;
    padding: 20px 10px;
    text-align: center;
    font-size: 16px;
    color: #333;
}

.footer-title {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 18px;
}

.footer-contact {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
}
</style>