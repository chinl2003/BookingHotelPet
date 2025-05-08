<template>
    <div class="booking-panel">
        <h6 class="title">Booking Information</h6>

        <div class="filter-section">
            <div class="date-inputs">
                <div class="date-group">
                    <label class="date-label">From Date</label>
                    <input type="date" v-model="startDate" class="form-control" />
                </div>
                <div class="date-group">
                    <label class="date-label">To Date</label>
                    <input type="date" v-model="endDate" class="form-control" />
                </div>
            </div>
        </div>

        <div class="price-filter-section">
            <h6 class="price-title">Price</h6>
            <div class="price-labels">
                <span class="label">From</span>
                <span class="label">To</span>
            </div>
            <div class="price-inputs">
                <input type="text" v-model="formattedPriceFrom" @keypress="validatePriceInput($event)"
                    @input="onPriceInput('from')" />
                <input type="text" v-model="formattedPriceTo" @keypress="validatePriceInput($event)"
                    @input="onPriceInput('to')" />
            </div>
        </div>

        <div class="action">
            <button class="apply-btn" @click="applyFilters">Apply</button>
        </div>
    </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
    name: "BookingPanel",
    components: { Multiselect },
    data() {
        return {
            startDate: null,
            endDate: null,
            selectedHotel: null,
            selectedRoom: null,
            rooms: ["VIP", "Deluxe", "Standard"],
            hotels: ["ALO Hotel", "Sunshine Inn", "Ocean View"],
            priceFrom: 0,
            priceTo: 0,
        };
    },
    computed: {
        formattedPriceFrom: {
            get() {
                return this.formatNumber(this.priceFrom);
            },
            set(value) {
                this.priceFrom = this.parseNumber(value);
            },
        },
        formattedPriceTo: {
            get() {
                return this.formatNumber(this.priceTo);
            },
            set(value) {
                this.priceTo = this.parseNumber(value);
            },
        },
    },
    methods: {
        applyFilters() {
            console.log("Filter applied", this.startDate, this.endDate, this.selectedHotel, this.priceFrom, this.priceTo);
        },
        formatNumber(value) {
            const number = parseFloat(value) || 0;
            return number.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
            });
        },
        parseNumber(value) {
            const cleaned = value.replace(/,/g, "");
            const floatVal = parseFloat(cleaned);
            return isNaN(floatVal) ? 0 : Math.floor(floatVal * 100) / 100;
        },
        onPriceInput(type) {
            if (type === "from") {
                this.formattedPriceFrom = this.formatNumber(this.priceFrom);
            } else {
                this.formattedPriceTo = this.formatNumber(this.priceTo);
            }
        },
        validatePriceInput(event) {
            const char = String.fromCharCode(event.which);
            const input = event.target.value;

            const allowed = /^[0-9.]$/;

            if (!allowed.test(char)) {
                event.preventDefault();
                return;
            }

            if (char === '.' && input.includes('.')) {
                event.preventDefault();
                return;
            }

            const parts = input.split('.');
            if (parts.length === 2 && parts[1].length >= 2) {
                if (input.includes('.') && event.target.selectionStart > input.indexOf('.')) {
                    event.preventDefault();
                }
            }
        }
    },
};
</script>

<style scoped>
.booking-panel {
    position: fixed;
    top: 110px;
    left: 61px;
    padding: 20px;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: calc(100% - 121px);
    max-width: 21%;
    z-index: 9;
    bottom: 10.5%;
}

.title {
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
}

.filter-section {
    margin-bottom: 20px;
}

.date-inputs {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
}

.date-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.date-label {
    margin-bottom: 5px;
    font-size: 14px;
}

.multiselect {
    flex: 1;
}

.action {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.apply-btn {
    background-color: rgb(97, 69, 175);
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.price-filter-section {
    text-align: center;
}

.price-title {
    font-weight: bold;
    margin-bottom: 10px;
}

.price-labels {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    margin-bottom: 5px;
}

.label {
    font-size: 14px;
    flex: 1;
    text-align: center;
}

.price-inputs {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.price-inputs input {
    width: 100%;
    padding: 5px;
    text-align: left;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>