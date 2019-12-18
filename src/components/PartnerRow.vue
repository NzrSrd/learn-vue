<template>
    <div class="row-expand">
        <div class="expand-body">
            <a
                    @click="clickout(category, partner.clicked_partner_name, index, 'table')"
                    class="link-wrap"
                    v-bind:href="partner.api_clickout"
                    v-bind:aria-label="partner.partner_name"
                    target="_blank"
            >
                <div class="partner-info" v-html="partner.introduction"></div>
            </a>

            <div class="link-wrap img-container">
                <img  v-for="img in partnerImages" :src="img" :alt="partner.partner_name" class="expand-img">
            </div>

            <div class="expand-link">
                <router-link v-if="partner.has_review"
                             :to="{ path: `/review/` + partner.review_slug }">
                    {{ $t('Read review') }}
                </router-link>
                <a v-else
                   @click="clickout(category, partner.clicked_partner_name, index, 'table')"
                   v-bind:aria-label="partner.name"
                   v-bind:href="partner.api_clickout"
                   target="_blank"
                   class="link-wrap"
                >{{$t("More Info")}}</a>
            </div>

            <div class="btn">
                <a
                        @click="clickout(category, partner.clicked_partner_name, index, 'table')"
                        :aria-label="partner.partner_name"
                        class="partner-link"
                        :href="partner.api_clickout"
                        target="_blank"
                >{{$t("Visit Site")}}</a>
            </div>

            <div class="payment-wrap" >
                <div class="line"></div>
                <div class="payment-icons">
                    <div class="payment-text">{{$t("Pay with: ")}}</div>
                    <div class="icon" v-for="item in pIcons" >
                        <img :src="item.url" :alt="item.name">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import {analyticsMixin} from '../../mixins/analytics'

    export default {
        name: 'ExpandBox',
        mixins: [analyticsMixin],
        props: {
            partner: {
                type: Object,
                required: true
            },
            imageUrl: {
                type: String,
            },
            paymentIcons: {
                type: String,
            },
        },
        computed: {
            pIcons() {
                if (!this.paymentIcons) {
                    return []
                }
                return this.paymentIcons.split('*')
                    .filter(function(item) {
                        return item !== ''
                    })
                    .map(function(item)  {
                        let url = `img/meal-delivery/img/${item}.svg`;

                        return {url: url, name: item}
                    })
            },
            partnerImages() {
                let imgArray = []

                if (this.partner.cover_image !== null ) {
                    imgArray.push(`${this.imageUrl}${this.partner.cover_image}`);
                }

                for (let key in this.partner.marketing_properties) {
                    let img = this.partner.marketing_properties
                    if(key.includes('cover_image')) {
                        if (img[key] !== null) {
                            imgArray.push(`${this.imageUrl}${img[key]}`)
                        }
                    }
                }

                return imgArray


            },
        }
    }
</script>

<style></style>