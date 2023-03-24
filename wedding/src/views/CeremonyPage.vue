<template>
    <div class="allWrapper">
        <ul class="family">
            <li class="family-item -current" @click="ChangeTypes('prep','支度',0)">支度</li>
            <li class="family-item" @click="ChangeTypes('photo','撮影',1)">撮影</li>
            <li class="family-item" @click="ChangeTypes('ceremony','式典',2)">式典</li>
        </ul>
        <!-- bestofus -->
        <section class="parts-section">
            <h2 class="parts-heading js-targetName" ref="TypesNameTtl">{{ChangeTypesName}}</h2>
            <ul
					class="pics js-modal"
					id="js-bestofus">
                    <template v-if="ChangeTypesType == 'prep'">
                        <li
                            class="pics-item"
                            v-for="n of 43"
                            :key="n"
                            @click="modals(n,$event,43)">
                            <img
                                :id="n"
                                v-lazy="require(`@/assets/img/ceremony/prep/ceremony-${n}.jpg`)">
                        </li>
                    </template>
					<template v-else-if="ChangeTypesType == 'photo'">
                        <li
                            class="pics-item"
                            v-for="n of 59"
                            :key="n"
                            @click="modals(n,$event,59)">
                            <img
                                :id="n"
                                v-lazy="require(`@/assets/img/ceremony/photo/ceremony-${n}.jpg`)">
                        </li>
                    </template>
                    <template v-else-if="ChangeTypesType == 'ceremony'">
                        <li
                            class="pics-item"
                            v-for="n of 75"
                            :key="n"
                            @click="modals(n,$event,75)">
                            <img
                                :id="n"
                                v-lazy="require(`@/assets/img/ceremony/ceremony/ceremony-${n}.jpg`)">
                        </li>
                    </template>
				</ul>
        </section>
        <!-- モーダル -->
        <template v-if="ModalReaction">
            <LargeImage @CloseFlag="ModalReaction = $event" :current-num = ImageNum :current-page = CurrentPage :current-type = ChangeTypesType :MaxNumber = MaxNum ></LargeImage>
        </template>
    </div>
</template>

<script>
import LargeImage from "../components/LargeImage.vue";

export default {
    name: "CeremonyPage",
    components: {
        LargeImage,
    },
    data: function () {
        return {
            ModalReaction: false,
            ImageNum :  1,
            ChangeType: '',
            ChangeTypesType: 'prep',
            ChangeTypesName: '支度',
            CurrentPage : 'ceremony',
            MaxNum: 0,
        }
    },
    methods: {
        modals(n,event,max) {
            this.ModalReaction = true
            this.ImageNum = n
            this.MaxNum = max
        },
        ChangeTypes(type,name,index) {
            this.ChangeTypesType = type
            this.ChangeTypesName = name
            var CurrentItem = document.querySelectorAll(".family-item")
            for(let i = 0; i < CurrentItem.length; i++) {
                CurrentItem[i].classList.remove('-current')
                if(i == index) {
                    CurrentItem[i].classList.add('-current')
                }
            }

        },
    },
    watch: {
        ChangeTypesName : function(newVal) {
            var TypeName = this.$refs.TypesNameTtl
            TypeName.innerText = newVal
        },
    }
}
</script>

<style scope>
.family {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 15px;
}
.family-item {
    width: 24%;
    padding: 10px 0;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    background-color: #81caaa;
    color:#fff;
    cursor: pointer;
}
.family-item:hover {
    opacity: .8;
}
.family-item.-current {
    background-color: rgb(25, 114, 16);
}
/* pics */
.pics {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 20px;
	position: relative;
}
.pics-item {
	box-sizing: border-box;
	width: 32%;
	cursor: pointer;
}
.pics-item img {
	width: 100%;
}
.pics-item:hover {
	opacity: 0.8;
}

</style>