<template>
    <div class="allWrapper">
        <ul class="family">
            <li class="family-item -current" @click="ChangeTypes('akamine','赤嶺',0)">赤嶺</li>
            <li class="family-item" @click="ChangeTypes('nakahara','仲原',1)">仲原</li>
            <li class="family-item" @click="ChangeTypes('nishimukai','西向',2)">西向</li>
            <li class="family-item" @click="ChangeTypes('itokazu','糸数',3)">糸数</li>
            <li class="family-item" @click="ChangeTypes('CT','新郎新婦',4)">新郎新婦</li>
            <li class="family-item" @click="ChangeTypes('venue','会場',5)">会場</li>
        </ul>
        <!-- bestofus -->
        <section class="parts-section">
            <h2 class="parts-heading js-targetName" ref="TypesNameTtl">{{ChangeTypesName}}</h2>
            <ul
					class="pics js-modal"
					id="js-bestofus">
                    <template v-if="ChangeTypesType == 'akamine'">
                        <li
                            class="pics-item"
                            v-for="n of 114"
                            :key="n"
                            @click="modals(n,$event,114)">
                            <img
                                :id="n"
                                v-lazy="require(`@/assets/img/party/akamine/party-${n}.jpg`)">
                        </li>
                    </template>
					<template v-else-if="ChangeTypesType == 'nakahara'">
                        <li
                            class="pics-item"
                            v-for="n of 75"
                            :key="n"
                            @click="modals(n,$event,75)">
                            <img
                                :id="n"
                                v-lazy="require(`@/assets/img/party/nakahara/party-${n}.jpg`)">
                        </li>
                    </template>
                    <template v-else-if="ChangeTypesType == 'nishimukai'">
                        <li
                            class="pics-item"
                            v-for="n of 46"
                            :key="n"
                            @click="modals(n,$event,46)">
                            <img
                                :id="n"
                                v-lazy="require(`@/assets/img/party/nishimukai/party-${n}.jpg`)">
                        </li>
                    </template>
                    <template v-else-if="ChangeTypesType == 'itokazu'">
                        <li
                            class="pics-item"
                            v-for="n of 62"
                            :key="n"
                            @click="modals(n,$event,62)">
                            <img
                                :id="n"
                                v-lazy="require(`@/assets/img/party/itokazu/party-${n}.jpg`)">
                        </li>
                    </template>
                    <template v-else-if="ChangeTypesType == 'CT'">
                        <li
                            class="pics-item"
                            v-for="n of 218"
                            :key="n"
                            @click="modals(n,$event,218)">
                            <img
                                :id="n"
                                v-lazy="require(`@/assets/img/party/CT/party-${n}.jpg`)">
                        </li>
                    </template>
                    <template v-else-if="ChangeTypesType == 'venue'">
                        <li
                            class="pics-item"
                            v-for="n of 65"
                            :key="n"
                            @click="modals(n,$event,65)">
                            <img
                                :id="n"
                                v-lazy="require(`@/assets/img/party/venue/party-${n}.jpg`)">
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
    name: "PartyPage",
    components: {
        LargeImage,
    },
    data: function () {
        return {
            ModalReaction: false,
            ImageNum :  1,
            ChangeType: '',
            ChangeTypesType: 'akamine',
            ChangeTypesName: '赤嶺',
            CurrentPage : 'party',
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
    flex-wrap: wrap;
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
.family-item:nth-child(n + 4) {
    margin-top: 10px;
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