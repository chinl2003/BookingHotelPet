<template>
    <div class="intro-section">
        <div class="background-image"></div>

        <div class="info-boxes">
            <div class="info-box">
                <div class="title">Take care your pet</div>
                <div class="subtitle">There is a pet play area at Pet Hotel</div>
            </div>
            <div class="info-box">
                <div class="title">Pet Hotel</div>
                <div class="subtitle">5-star hotel service, clean, safe to keep pet's healthy</div>
            </div>
            <div class="info-box">
                <div class="title">Food</div>
                <div class="subtitle">Food is provided from prestigious brands around the world.</div>
            </div>
        </div>
    </div>
    <div class="swiper-container">
        <div class="section-title">
            <h2 class="text">Top most rented room's type</h2>
        </div>
        <swiper :slides-per-view="3" :space-between="20" :loop="true" navigation class="custom-swiper">
            <swiper-slide v-for="(item, index) in topRooms" :key="index">
                <div class="slide-card">
                    <div class="ribbon">-20%</div>
                    <img :src="item.image" alt="room" class="card-image" />
                    <div class="card-content">
                        <p><strong>Room's type:</strong> {{ item.type }}</p>
                        <p><strong>Room's price:</strong> {{ item.price }} / hour</p>
                        <p><strong>Room's name:</strong> {{ item.name }}</p>
                        <p><strong>Room's status:</strong> {{ item.status }}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>

        <div class="section-title">
            <h2 class="text">Top most rented hotel</h2>
        </div>
        <swiper :slides-per-view="3" :space-between="20" :loop="true" navigation class="custom-swiper">
            <swiper-slide v-for="(item, index) in topHotels" :key="index">
                <div class="slide-card">
                    <div class="ribbon">-20%</div>
                    <img :src="item.image" alt="hotel" class="card-image" />
                    <div class="card-content">
                        <p><strong>Hotel's name:</strong> {{ item.name }}</p>
                        <p><strong>Location:</strong> {{ item.location }}</p>
                        <p><strong>Rating:</strong> {{ item.rating }}</p>
                        <p><strong>Status:</strong> {{ item.status }}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>

    <div class="section-title">
        <h2 class="text">Ưu đãi & Khuyến mãi</h2>
    </div>
    <div class="promo-grid">
        <div class="promo-card" v-for="(promo, index) in promotions" :key="index">
            <img :src="promo.image" alt="Promo Image" class="promo-image" />
            <div class="promo-content">
                <h3>{{ promo.title }}</h3>
                <p>{{ promo.description }}</p>
                <button class="promo-button">Đặt ngay</button>
            </div>
        </div>
    </div>

    <div class="section-title">
        <h2 class="text">Dịch vụ phổ biến</h2>
    </div>
    <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
            <img :src="service.image" alt="Service Image" class="service-image" />
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
        </div>
    </div>


    <div class="section-title">
        <h2 class="text">Mẹo chăm sóc thú cưng</h2>
    </div>
    <div class="tips-grid">
        <div class="tip-card" v-for="(tip, index) in tips" :key="index">
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.content }}</p>
        </div>
    </div>


    <div class="section-title">
        <h2 class="text">Thương hiệu đối tác</h2>
    </div>
    <div class="partners-grid">
        <img v-for="(partner, index) in partners" :key="index" :src="partner.logo" :alt="partner.name"
            class="partner-logo" />
    </div>

    <div class="section-title">
        <h2 class="text">Cam kết an toàn & chất lượng</h2>
    </div>
    <div class="commitments">
        <div class="commitment">
            <h3>Quy trình kiểm duyệt nghiêm ngặt</h3>
            <p>Tất cả các khách sạn đều được kiểm tra và đánh giá định kỳ để đảm bảo chất lượng dịch vụ.</p>
        </div>
        <div class="commitment">
            <h3>Chính sách hoàn tiền linh hoạt</h3>
            <p>Hoàn tiền nhanh chóng nếu khách hàng không hài lòng với dịch vụ đã sử dụng.</p>
        </div>
        <div class="commitment">
            <h3>Theo dõi thú cưng 24/7</h3>
            <p>Khách hàng có thể giám sát thú cưng mọi lúc qua hệ thống camera trực tuyến.</p>
        </div>
    </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import headerPicture from '@/assets/images/header-picture.png'
SwiperCore.use([Navigation])

export default {
    name: 'MainContent',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            topRooms: [
                {
                    image: headerPicture,
                    type: 'Luxury',
                    price: '$15',
                    name: 'Room A',
                    status: 'Available'
                },
                {
                    image: headerPicture,
                    type: 'Standard',
                    price: '$10',
                    name: 'Room B',
                    status: 'Occupied'
                },
                {
                    image: headerPicture,
                    type: 'Premium',
                    price: '$20',
                    name: 'Room C',
                    status: 'Available'
                },
                {
                    image: headerPicture,
                    type: 'Economy',
                    price: '$8',
                    name: 'Room D',
                    status: 'Available'
                },
                {
                    image: headerPicture,
                    type: 'Deluxe',
                    price: '$18',
                    name: 'Room E',
                    status: 'Occupied'
                }
            ],
            topHotels: [
                {
                    image: headerPicture,
                    name: 'ALO Hotel',
                    location: 'District 1',
                    rating: '4.8',
                    status: 'Active'
                },
                {
                    image: headerPicture,
                    name: 'PetCare Palace',
                    location: 'District 3',
                    rating: '4.9',
                    status: 'Active'
                },
                {
                    image: headerPicture,
                    name: 'HappyPaws',
                    location: 'Binh Thanh',
                    rating: '4.7',
                    status: 'Inactive'
                },
                {
                    image: headerPicture,
                    name: 'Woof Hotel',
                    location: 'District 5',
                    rating: '4.6',
                    status: 'Active'
                },
                {
                    image: headerPicture,
                    name: 'Meow Stay',
                    location: 'District 7',
                    rating: '4.5',
                    status: 'Active'
                }
            ],
            promotions: [
                {
                    image: headerPicture,
                    title: 'Giảm 20% cho đặt phòng trước 7 ngày',
                    description: 'Đặt phòng sớm để nhận ưu đãi hấp dẫn từ PetCare Palace.'
                },
                {
                    image: headerPicture,
                    title: 'Miễn phí dịch vụ tắm cho lần đầu',
                    description: 'Khách hàng mới sẽ được tặng một lần tắm miễn phí cho thú cưng.'
                },
                {
                    image: headerPicture,
                    title: 'Combo grooming chỉ 200.000đ',
                    description: 'Gói chăm sóc toàn diện cho thú cưng với giá ưu đãi.'
                }
            ],
            services: [
                {
                    image: headerPicture,
                    name: 'Tắm & Grooming',
                    description: 'Dịch vụ tắm rửa và cắt tỉa lông chuyên nghiệp cho thú cưng.'
                },
                {
                    image: headerPicture,
                    name: 'Cho ăn theo chế độ',
                    description: 'Thực đơn dinh dưỡng được thiết kế riêng cho từng thú cưng.'
                },
                {
                    image: headerPicture,
                    name: 'Theo dõi qua camera',
                    description: 'Giám sát thú cưng mọi lúc mọi nơi qua hệ thống camera trực tuyến.'
                },
                {
                    image: headerPicture,
                    name: 'Đưa đón thú cưng',
                    description: 'Dịch vụ đưa đón thú cưng tận nơi, an toàn và tiện lợi.'
                }
            ],
            tips: [
                {
                    title: 'Chăm sóc thú cưng khi vắng nhà',
                    content: 'Sử dụng camera giám sát và nhờ người thân kiểm tra định kỳ để đảm bảo thú cưng luôn an toàn.'
                },
                {
                    title: 'Mẹo chọn homestay phù hợp',
                    content: 'Lựa chọn homestay có kinh nghiệm, được đánh giá cao và có môi trường phù hợp với thú cưng của bạn.'
                }
            ],
            partners: [
                { name: 'Royal Canin', logo: headerPicture },
                { name: 'Pedigree', logo: headerPicture },
                { name: 'Whiskas', logo: headerPicture },
                { name: 'Purina', logo: headerPicture }
            ]
        }
    }
}
</script>

<style scoped>
.intro-section {
    position: relative;
    height: 300px;
    width: 100%;
    overflow: hidden;
}

.background-image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/header-picture.png');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    z-index: 1;
}

.info-boxes {
    position: absolute;
    top: 82%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 30px;
    z-index: 2;
}

.info-box {
    background-color: rgba(100, 100, 100, 0.7);
    color: #fff;
    padding: 5px 10px;
    border-radius: 12px;
    text-align: center;
    max-width: 27%;
    font-size: 14px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    max-height: 10%;
    height: 10%;
}

.info-box .title {
    font-weight: bold;
    margin-bottom: 8px;
}

.info-box .subtitle {
    font-weight: normal;
}

.section-title {
    font-size: 18px;
    font-weight: bold;
    margin: 30px 20px 10px;
    color: #333;
}

.custom-swiper {
    padding: 10px 18px;
    margin-left: 3%;
}

.slide-card {
    display: flex;
    position: relative;
    background-color: #f4f4f4;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.ribbon {
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    color: white;
    font-weight: bold;
    padding: 4px 10px;
    border-bottom-right-radius: 8px;
    z-index: 2;
    font-size: 12px;
}

.card-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    flex-shrink: 0;
}

.card-content {
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.text {
    text-align: center;
}

.promo-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
}

.promo-card {
    background-color: #f9f5ff;
    border-radius: 12px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.promo-card:hover {
    transform: scale(1.05);
}

.promo-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.promo-content {
    padding: 15px;
    text-align: center;
}

.promo-button {
    background-color: #c084fc;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s ease;
}

.promo-button:hover {
    background-color: #a855f7;
}

.services-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
}

.service-card {
    background-color: #f3e8ff;
    border-radius: 12px;
    width: 250px;
    padding: 15px;
    text-align: center;
    transition: transform 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
}

.service-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
}

.tips-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
}

.tip-card {
    background-color: #ede9fe;
    border-radius: 12px;
    width: 300px;
    padding: 15px;
    transition: box-shadow 0.3s ease;
}

.tip-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.partners-grid {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}

.partner-logo {
    width: 120px;
    height: auto;
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.partner-logo:hover {
    opacity: 1;
}

.commitments {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
}

.commitment {
    background-color: #f5f3ff;
    border-radius: 12px;
    width: 300px;
    padding: 15px;
    text-align: center;
    transition: transform 0.3s ease;
}

.commitment:hover {
    transform: scale(1.05);
}
</style>

<style>
.custom-swiper .swiper-button-next,
.custom-swiper .swiper-button-prev {
    width: 32px;
    height: 32px;
    background-color: #f0f0f0;
    border: 2px solid #ccc;
    border-radius: 50%;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    top: auto !important;
    bottom: 40%;
    transition: color 0.3s ease;
}

.custom-swiper .swiper-button-next {
    right: 20px;
}

.custom-swiper .swiper-button-prev {
    left: 20px;
}

.custom-swiper .swiper-button-next::after,
.custom-swiper .swiper-button-prev::after {
    font-size: 14px;
}

.custom-swiper .swiper-button-next:hover,
.custom-swiper .swiper-button-prev:hover {
    cursor: pointer;
    color: #c084fc;
}
</style>