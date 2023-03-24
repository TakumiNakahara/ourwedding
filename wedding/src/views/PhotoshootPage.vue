<template>
    <div class="allWrapper">
        <ul class="family">
            <li class="family-item -current" @click="ChangeTypes(2021,2021,0)">2021</li>
            <li class="family-item" @click="ChangeTypes(2022,2022,1)">2022</li>
        </ul>
        <!-- bestofus -->
        <section class="parts-section">
            <h2 class="parts-heading js-targetName" ref="TypesNameTtl">{{ChangeTypesName}}</h2>
            <ul
					class="pics js-modal"
					id="js-bestofus">
                    <template v-if="ChangeTypesType == 2021">
                        <li
                            class="pics-item"
                            v-for="n of 34"
                            :key="n"
                            @click="modals(n,$event,34)">
                            <img
                                :id="n"
                                v-lazy="require(`@/assets/img/photoshoot/2021/photoshoot-${n}.jpg`)">
                        </li>
                    </template>
					<template v-else-if="ChangeTypesType == 2022">
                        <li
                            class="pics-item"
                            v-for="n of 177"
                            :key="n"
                            @click="modals(n,$event,177)">
                            <img
                                :id="n"
                                v-lazy="require(`@/assets/img/photoshoot/2022/photoshoot-${n}.jpg`)">
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
    name: "photoshootPage",
    components: {
        LargeImage,
    },
    data: function () {
        return {
            ModalReaction: false,
            ImageNum :  1,
            ChangeType: '',
            ChangeTypesType: 2021,
            ChangeTypesName: 2021,
            CurrentPage : 'photoshoot',
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
    width: 30%;
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