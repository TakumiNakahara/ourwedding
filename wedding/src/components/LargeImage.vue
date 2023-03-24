<template>
	<div class="modal">
		<div class="modal-overlay" @click="CloseImage"></div>
		<div class="modal-item">
			<div class="modal-item-img">
				<img
					ref="TargetImg"
					:id= "current"
					:src="require(`@/assets/img/${this.currentPageVal}/${this.currentTypeVal}/${this.currentPageVal}-${current}.jpg`)"> />
			</div>
			<div class="modal-dawnload">
				携帯の方は写真を長押しから『写真を保存』クリックでダウンロードできます。<br />パソコンの方は写真を右クリックして『名前を付けて保存』を押してください。
			</div>
			<div class="modal-move-next" @click="NextImage">次へ</div>
			<div class="modal-move-before" @click="BeforeImage">前へ</div>
			<div class="modal-close" @click="CloseImage">閉じる</div>
		</div>
	</div>
</template>

<script>

export default {
    props: {
        value: {
            type: Boolean,
        },
		currentNum : {
			type: Number,
		},
		currentPage : {
			type: [String, Number],
		},
		currentType: {
			type: [String, Number],
		},
		MaxNumber: {
			type: Number,
		},
    },

    data: function(){
        return {
            current : this.currentNum,
			currentPageVal : this.currentPage,
			currentTypeVal: this.currentType,
			MaxNumberVal: this.MaxNumber
        }
    },
    methods : {
        CloseImage() {
            this.$emit("CloseFlag",false)
        },
		NextImage() {
			var target = this.$refs.TargetImg;
			if(this.current >= this.MaxNumber) {
				this.current = 1
				target.setAttribute('src',`@/assets/img/${this.currentPage}/${this.currentType}-${this.current + 1}.jpg`)
				
			} else {
				this.current ++
				target.setAttribute('src',`@/assets/img/${this.currentPage}/${this.currentType}-${this.current + 1}.jpg`)
			}
		},
		BeforeImage() {
			var target = this.$refs.TargetImg;
			
			if(this.current <= 1) {
				this.current = this.MaxNumber
				target.setAttribute('src',`@/assets/img/${this.currentPage}/${this.currentType}-${this.current}.jpg`)
				
			} else {
				this.current --
				target.setAttribute('src',`@/assets/img/${this.currentPage}/${this.currentType}-${this.current - 1}.jpg`)
			}
		}
    },
};
</script>

<style scoped>
/* モーダル */
.modal {
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
}
.modal.-open {
	display: block;
}
.modal-overlay {
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 3;
	background-color: #000;
	opacity: 0.8;
	top: 0;
	left: 0;
	cursor: pointer;
}

.modal-item {
	width: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 4;
	max-width: 400px;
}
.modal-item-img {
	width: 100%;
	text-align: center;
}
.modal-item-img img {
	width: 100%;
}
.modal-dawnload {
	font-size: 12px;
	color: #333;
	background-color: #fff;
	border-radius: 5px;
	padding: 20px;
	font-weight: bold;
}
.modal-move-next {
	display: inline-block;
	padding: 10px;
	border-radius: 50%;
	background-color: #fff;
	color: #000;
	font-size: 16px;
	font-weight: bold;
	position: absolute;
	top: 50%;
	right: 5px;
	transform: translateY(-50%);
	box-shadow: -5px 10px 10px rgb(0 0 0 / 31%);
	cursor: pointer;
}
.modal-move-before {
	display: inline-block;
	padding: 10px;
	border-radius: 50%;
	background-color: #fff;
	color: #000;
	font-size: 16px;
	font-weight: bold;
	position: absolute;
	top: 50%;
	left: 5px;
	transform: translateY(-50%);
	box-shadow: -5px 10px 10px rgb(0 0 0 / 31%);
	cursor: pointer;
}
.modal-close {
	display: inline-block;
	color: #000;
	background-color: #fff;
	border-radius: 10px;
	padding: 10px;
	font-size: 20px;
	font-weight: bold;
	position: absolute;
	top: 10px;
	right: 5px;
	cursor: pointer;
}
@media screen and (max-width: 1100px) {
	.modal-item {
		width: 90%;
	}
}
</style>
