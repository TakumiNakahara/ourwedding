<template>
	<div>
		<meta property="og:image" content="	https://islandersweb.com/img/mv.cc8b068b.jpg" />
		<Header @ResetHeader = "ResetHead" :HeaderName = HeaderNameVal :CurrentHeader = CurrentHeaderVal></Header>
		<router-view @UpdateHead = "ChangeHead"></router-view>
		<Footer @UpdateHead = "ChangeHead"></Footer>
	</div>
</template>

<script>
import Header from "./components/HeaderComponent.vue";
import Footer from "./components/FooterComponent.vue";

export default {
	name: "App",
	data: function () {
        return {
            HeaderNameVal: 'home',
			CurrentHeaderVal: ''
        }
    },
	methods: {
        ChangeHead (ChangeName,CurrentChange) {
            this.HeaderNameVal = ChangeName
			this.CurrentHeaderVal = CurrentChange
        },
		ResetHead () {
			this.HeaderNameVal = 'home',
			this.CurrentHeaderVal =  ''
		}
    },
	components: {
		Header,
		Footer,
	}
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
	background-image: url(./assets/img/flower01.png);
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
	background-image: url(./assets/img/leaf01.png);
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
	background-image: url(./assets/img/leaf03.png);
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
	background-image: url(./assets/img/leaf02.png);
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
	Ï .name {
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
