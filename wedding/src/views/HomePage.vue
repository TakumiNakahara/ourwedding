<template>
    <div class="allWrapper">
			<div class="scroll"></div>
			<!-- greeting -->
			<section class="parts-section">
				<h2 class="parts-heading flower">GREETING</h2>
				<div class="greeting-text">
					<img
						class="explain pc"
						alt="codalista"
						src="../assets/img/greeting.jpg" />
					<img
						class="explain sp"
						style="margin: 0 auto"
						alt="codalista"
						src="../assets/img/greeting.jpg" />
					<div class="is-open name">
						<h3>ご挨拶</h3>
						<p>
							先日は、私たちの結婚式にお越し頂きありがとうございました。
							皆さんと素敵な時間を過ごすことができ本当に嬉しかったです。
							たくさんの思い出の写真を皆様にシェアしたくwebページを作成しました。
							素敵な写真をたくさん残していますので、ぜひここからダウンロードしてください。
						</p>
					</div>
				</div>
			</section>
			<!-- menu -->
			<section class="parts-section">
				<h2 class="parts-heading plant">MENU</h2>
				<ul class="menu">
					<li
						class="menu-item"
						id="floating">
						<router-link to="/photoshoot" @click="ChangeHeader('Photoshoot', '-sub')" >
							<div class="menu-item-upper">
								<img src="../assets/img/pre-wedding.jpg" />
							</div>
							<div class="menu-item-bottom">
								<h2 class="bottom-ttl">前撮り</h2>
								<p class="bottom-text">
									結婚式前に、撮影した写真を掲載しています。私達二人のみの写真が多いですが、記録として掲載しています。
								</p>
							</div>
						</router-link>
					</li>
					<li
						class="menu-item"
						id="floating">
						<router-link to="/ceremony" @click="ChangeHeader('Ceremony', '-sub')">
							<div class="menu-item-upper">
								<img src="../assets/img/ceremony.jpg" />
							</div>
							<div class="menu-item-bottom">
								<h2 class="bottom-ttl">挙式</h2>
								<p class="bottom-text">
									北谷町、ヴォヤージュドゥルミエールで行った挙式になります。海の見える綺麗な式場で行いました。
								</p>
							</div>
						</router-link>
					</li>
					<li
						class="menu-item"
						id="floating">
						<router-link to="/party" @click="ChangeHeader('Party', '-sub')">
							<div class="menu-item-upper">
								<img src="../assets/img/party.jpg" />
							</div>
							<div class="menu-item-bottom">
								<h2 class="bottom-ttl">披露宴</h2>
								<p class="bottom-text">
									ブルックリンハウスで行ったウエディングパーティーの様子です。
								</p>
							</div>
						</router-link>
					</li>
				</ul>
			</section>
			<!-- bestofus -->
			<section class="parts-section">
				<h2 class="parts-heading leaf">BEST OF US</h2>
				<ul
					class="pics js-modal"
					id="js-bestofus">
					<li
						class="pics-item"
						v-for="n of 15"
						:key="`lazyload-img_${n}`"
						@click="modals(n,$event,15)">
						<img
							:id="n"
							v-lazy="require(`@/assets/img/bestofus/bestofus/bestofus-${n}.jpg`)">
					</li>
				</ul>
			</section>
			<section
				class="parts-section"
				id="video">
				<h2 class="parts-heading green">VIDEO</h2>
				<ul class="video">
					<!-- <li class="video-item">
						<h3 class="video-ttl">結婚式ムービー</h3>
						<p class="video-desc">
							※こちらの動画まだ完成したもの頂けていないので、アップロードできましたらご連絡いたします。
						</p>
						<div class="video_cont">
							<iframe
								src="https://www.youtube.com/embed/shHgAifWoOI"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen></iframe>
						</div>
					</li> -->
					<li class="video-item">
						<h3 class="video-ttl">結婚式ムービー</h3>
						<p class="video-desc">
							披露宴の入場前に上映したムービーになります。プロカメラマンの方にお願いして撮影したものでとてもカッコよく仕上がってます。撮影は本当に様々な場所で撮って一日かけて撮影しました。1日かけた甲斐があったなと思うほど素晴らしい動画になっているのでぜひ最後まで見ていただけると嬉しいです。
						</p>
						<div class="video_cont">
							<iframe
								src="https://www.youtube.com/embed/shHgAifWoOI"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen></iframe>
						</div>
					</li>
					<li class="video-item">
						<h3 class="video-ttl">プロフィールムービー</h3>
						<p class="video-desc">
							私たち二人の人生を約10分ほどに凝縮したムービーです。結婚式でも流した内容ですが、再度見返したい方のために掲載しておきます。
						</p>
						<div class="video_cont">
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/gxD8Ui4BR9Y"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen></iframe>
						</div>
					</li>
				</ul>
			</section>
            <!-- モーダル -->
            <template v-if="ModalReaction">
                <LargeImage @CloseFlag="ModalReaction = $event" :current-num = ImageNum  :current-page = CurrentPage :current-type = ChangeTypesType :MaxNumber = MaxNum></LargeImage>
            </template>
		</div>
</template>

<script>
import LargeImage from "../components/LargeImage.vue";

export default {
	name: "HomePage",
	components: {
		LargeImage,
	},
	data: function () {
		return {
			ModalReaction: false,
            ImageNum :  1,
			CurrentPage : 'bestofus',
			ChangeTypesType: 'bestofus',
			MaxNum: 0,
			ChangeName: '',
            CurrentChange : '',
		}
	},
	methods: {
		modals(n,event,max) {
			this.ModalReaction = true
            this.ImageNum = n
			this.MaxNum = max
		},
		ChangeHeader(name,current) {
            this.ChangeName = name
            this.CurrentChange = current
            this.$emit('UpdateHead',this.ChangeName,this.CurrentChange)
			window.scroll({top: 0, behavior: 'smooth'});
        },
	},
};
</script>

<style scoped>
/* greeting */
.flower {
	position: relative;
}
.flower::after {
	content: "";
	display: block;
	position: absolute;
	width: 100px;
	height: 100px;
	background-image: url(../assets/img/flower01.png);
	background-size: 100px 100px;
	top: calc(50% - 20px);
	left: calc(50% - 150px);
	transform: translate(-50%, -50%);
}
.greeting-text {
	display: flex;
	align-items: center;
}
.explain {
	width: 50%;
	max-width: 300px;
	max-height: 300px;
	border-radius: 50px;
	box-shadow: -5px 10px 10px rgb(0 0 0 / 31%);
}
.name h3 {
	font-size: 40px;
	padding: 0px;
	margin: 0;
	text-align: center;
}
.name {
	width: 400px;
	margin: 0 auto;
	font-size: 20px;
	line-height: 1.5;
	padding-top: 10px;
	text-align: left;
	width: 50%;
	line-height: 2;
	position: relative;
}
.name::after {
	content: "";
	width: 300px;
	height: 300px;
	background-color: rgb(255 136 4 / 28%);
	filter: blur(50px);
	border-radius: 50%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 0 0 15px 15px rgb(251, 249, 158);
}
/* menu */
.plant {
	position: relative;
}
.plant::after {
	content: "";
	display: block;
	position: absolute;
	width: 100px;
	height: 100px;
	background-image: url(../assets/img/leaf01.png);
	background-size: 100px 100px;
	top: calc(50% - 20px);
	left: calc(50% - 100px);
	transform: translate(-50%, -50%);
}
.menu {
	display: flex;
	justify-content: space-around;
}
.menu-item {
	max-width: 300px;
	max-height: 400px;
	width: 30%;
	border-radius: 10px;
	border: 1px solid #3434;
	min-height: 400px;
	box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
}
.menu-item:hover {
	position: relative;
	top: -10px;
	box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.4);
}

.menu-item-upper {
	height: 50%;
	padding: 10px;
	box-sizing: border-box;
	border-radius: 10px 10px 0px 0px;
	position: relative;
}
.menu-item-upper img {
	object-fit: cover;
	width: 100%;
	height: 185px;
	border-radius: 10px;
}
.menu-item-bottom {
	height: 50%;
	box-sizing: border-box;
}
.bottom-ttl {
	font-size: 16px;
	font-weight: bold;
	padding: 10px 0;
}
.bottom-text {
	line-height: 2;
	text-align: left;
	padding: 10px;
	height: 140px;
	overflow: scroll;
}
/* bestofus */

.leaf {
	position: relative;
}
.leaf::after {
	content: "";
	display: block;
	position: absolute;
	width: 100px;
	height: 100px;
	background-image: url(../assets/img/leaf03.png);
	background-size: 100px 100px;
	top: calc(50% - 20px);
	left: calc(50% - 200px);
	transform: translate(-50%, -50%);
}

/* fadein */
.scroll-in {
	opacity: 1;
	transform: translate(0, 0);
	transition-duration: 3s;
}

/* float */
#floating {
	animation: img_box_9955 3s linear infinite;
	transform-origin: 50% 50%;
	margin: 1rem 0;
}

@keyframes img_box_9955 {
	0% {
		transform: translateY(0);
	}
	33.33333% {
		transform: translateY(-10px);
	}
	66.66667% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(0);
	}
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

/* video */

.green {
	position: relative;
}
.green::after {
	content: "";
	display: block;
	position: absolute;
	width: 100px;
	height: 100px;
	background-image: url(../assets/img/leaf02.png);
	background-size: 100px 100px;
	top: calc(50% - 20px);
	left: calc(50% - 100px);
	transform: translate(-50%, -50%);
}
.video-ttl {
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 20px;
}
.video-desc {
	text-align: left;
	margin-bottom: 20px;
}
.video_cont iframe {
	width: 100%;
	height: 400px;
}
.video-item + .video-item {
	margin-top: 50px;
}

/* ////////////
    /// SP
    //////////// */
@media screen and (max-width: 1100px) {
	.flower::after {
		width: 80px;
		height: 80px;
		background-size: 80px 80px;
		top: calc(50% - 10px);
		left: calc(50% - 130px);
		transform: translate(-50%, -50%);
	}
	.greeting-text {
		display: block;
	}
	.explain {
		width: 80%;
	}
	.name {
		width: 80%;
	}
	.menu {
		display: block;
	}
	.menu-item {
		width: 80%;
	}
	.menu-btn {
		top: 0;
	}
	#floating {
		margin: 0 auto;
	}
	#floating + #floating {
		margin-top: 30px;
	}
	.menu-item-upper {
		height: 200px;
	}
	.pics {
		justify-content: space-around;
	}
	.video {
		padding: 0 5px;
	}
	.scroll {
		left: 90%;
	}
}
</style>
<!-- npm run serve -->
