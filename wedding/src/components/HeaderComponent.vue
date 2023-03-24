<template>
        <header>
            <div class="header-wrapper" :class="CurrentHead">
                <nav class="header-nav">
                    <h1 class="header-nav_ttl"><router-link to="/" @click="HomeCurrent">TAKUMI & CLAIRE<br><small>our wedding memories</small></router-link></h1>
                    <ul class="menus">
                        <li class="menus_item"><router-link to="/photoshoot" @click="SubCurrent($event)">Photoshoot</router-link></li>
                        <li class="menus_item"><router-link to="/ceremony" @click="SubCurrent($event)">Ceremony</router-link></li>
                        <li class="menus_item"><router-link to="/party" @click="SubCurrent($event)">Party</router-link></li>
                        <li class="menus_item"><a href="/#video">Movie</a></li>
                    </ul>
                    <!-- ハンバーガー -->
                    <div class="hamburger-menu">
                        <input type="checkbox" id="menu-btn-check">
                        <label for="menu-btn-check" class="menu-btn"><span></span></label>
                        <div class="menus_sp">
                            <ul class="menus_sp_modal">
                                <li class="menus_sp_modal_item"><router-link to="/photoshoot" @click="SubCurrent($event)">Photoshoot</router-link></li>
                                <li class="menus_sp_modal_item"><router-link to="/ceremony" @click="SubCurrent($event)">Ceremony</router-link></li>
                                <li class="menus_sp_modal_item"><router-link to="/party" @click="SubCurrent($event)">Party</router-link></li>
                                <li class="menus_sp_modal_item"><a href="/#video" @click="HomeCurrent($event)">Movie</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <h2 v-if="CurrentHeadName == 'home'">Wedding photo Gallery</h2>
                <h2 v-else-if="CurrentHeadName == 'Ceremony'" class="ceremony-ttl">Ceremony</h2>
                <h2 v-else-if="CurrentHeadName == 'Party'" class="ceremony-ttl">Party</h2>
                <h2 v-else-if="CurrentHeadName == 'Photoshoot'" class="ceremony-ttl">Photoshoot</h2>
                
                <div v-if="CurrentHeadName == 'home'" class="header-btn">
                    <a href="/#video">VIDEO</a>
                </div>
                <div class="arrow">
                    <div class="blinking">
                        <img  height="24" width="54" class="pointer" src="../assets/img/point.png">
                        <p>scroll</p>
                    </div>
                    <img height="50" width="60" src="../assets/img/arrow.png">
                </div>
            </div>
        </header>
</template>

<script>
export default {
    props: {
        HeaderName: String,
        CurrentHeader: String
    },
    data: function () {
        return {
            CurrentHead : this.CurrentHeader,
            CurrentHeadName :  this.HeaderName,
        }
    },
    methods: {
        HomeCurrent () {
            this.CurrentHead = ''
            this.CurrentHeadName = 'home'
            this.$emit('ResetHeader')
        },
        SubCurrent (event) {
            this.CurrentHead = '-sub'
            this.CurrentHeadName = event.target.innerText
            document.querySelector(`input[type='checkbox']`).checked = false;
            window.scroll({top: 0, behavior: 'smooth'});
        },
    },
    watch: {
        HeaderName : function(newHead){
            this.CurrentHeadName = newHead
        },
        CurrentHeader : function (newCurrent) {
            this.CurrentHead = newCurrent
        }
    }
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-wrapper{
    background: url(../assets/img/mv.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    text-align: center;
    position: relative;
    height: 800px
}
.header-nav{
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    z-index: 1;
}
.header-nav .header-nav_ttl {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin-top: 30px;
    text-shadow: 1px 2px 3px #808080;
    line-height: 1;
}
.header-nav .header-nav_ttl small {
    font-size: 14px;
}
.header-nav .menus{
    display: flex;
    justify-content: space-around;
}
.header-nav .menus .menus_item{
    padding: 20px;
    font-size: 30px;
}
.header-nav .menus .menus_item a{
    color: #ffff ;
    font-family: 'Noto Sans JP', sans-serif;
}
.header-nav .menus li:hover{
    background: rgb(242, 231, 27);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(1.2);
}
.header-wrapper h2{
    font-size: 50px;
    width: 100%;
    color: white;
    mix-blend-mode: difference;
    position: absolute;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 700;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}
.header-btn{
    width: 230px;
    padding: 10px 0;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.403);
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border-bottom: solid 5px #808080;;
    border-left: solid 5px #808080;;
    cursor: pointer;
}
.header-btn:hover{
    border-bottom: solid 0px #000;
    border-left: solid 0px #000;
}
.header-btn a{
    color: #fff;
    font-size: 20px;
    font-family: 'Noto Sans JP', sans-serif;
}
.arrow{
    position: absolute;
    bottom: 50px;
    right: 10%;
    width: 55px;
}
.arrow p{
    font-size: 20px;
    color: #fff;
    padding-bottom: 5px;
}
.arrow img{
    width: 100%;
}
.blinking{
        -webkit-animation:blink 1.5s ease-in-out infinite alternate;
        -moz-animation:blink 1.5s ease-in-out infinite alternate;
        animation:blink 1.5s ease-in-out infinite alternate;
    }
    @-webkit-keyframes blink{
        0% {opacity:0;}
        100% {opacity:1;}
    }
    @-moz-keyframes blink{
        0% {opacity:0;}
        100% {opacity:1;}
    }
    @keyframes blink{
        0% {opacity:0;}
        100% {opacity:1;}
    }

.header-wrapper.-sub {
    background-image: none;
    background-color: black;
    background-size: cover;
    height: 400px;
}
/* ////////////
//  SP
//////////// */
/* ハンバーガー */
.menu-btn {
    position: relative;
    top: 10px;
    right: 10px;
    display: flex;
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
    z-index: 90;
    cursor: pointer;
}
.menu-btn span,
.menu-btn span:before,
.menu-btn span:after {
    content: '';
    display: block;
    height: 5px;
    width: 40px;
    border-radius: 3px;
    background-color: #ffffff;
    position: absolute;
    transition-duration: 0.5s;
}
.menu-btn span:before {
    bottom: 12px;
}
.menu-btn span:after {
    top: 12px;
}
/* クリック時変化 */
#menu-btn-check:checked ~ .menu-btn span {
    background-color: rgba(255, 255, 255, 0);/*メニューオープン時は真ん中の線を透明にする*/
    transition-duration: 0.5s;
}
#menu-btn-check:checked ~ .menu-btn span::before {
    bottom: 0;
    transform: rotate(45deg);
    transition-duration: 0.5s;
}
#menu-btn-check:checked ~ .menu-btn span::after {
    top: 0;
    transform: rotate(-45deg);
    transition-duration: 0.5s;
}
#menu-btn-check {
    display: none;
}
.hamburger-menu{
    display: none;
}
/* sp modal */
.menus_sp{
    display: block;
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100vw;
    height: 0;
    z-index: 80;
    background-color: #000;
    overflow: hidden;
}
#menu-btn-check:checked ~  .menus_sp{
    height: 100vh;
    transition-duration: 1.5s;
}
.menus_sp_modal{
    padding-top: 50px;
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.menus_sp_modal  .menus_sp_modal_item{ 
    padding: 0 20px;
}
.menus_sp_modal .menus_sp_modal_item a{ 
    display: block;
    padding: 30px 20px;
    font-size: 40px;
    color: #fff;
}
.menus_sp_modal .menus_sp_modal_item a:hover{
    opacity: 0.8;
}



@media screen and (max-width:1100px){
    .header-wrapper.-sub {
        height: 160px;
    }
    .header-wrapper.-sub h2{
        top: 65%;
    }
    .arrow{
        display: none;
    }
    .menu-btn {
        top: -10px;
    }
  .parts-heading{
        padding: 0 0 20px;
    }
    .menu{
        padding: 0;
    }
    .header-btn{
        bottom: 5px;
        width: 150px;
    }
    .header-wrapper{
        height: 400px;
    }
    .header-wrapper h2{
        font-size: 30px;
    }
    .header-nav .header-nav_ttl {
        font-size: 20px;
        margin-top: 0px;
    }
    .header-nav {
        width: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);;
        padding: 10px 5px;
        max-width: none;
    }
    .header-nav .menus {
        display: none;
    }
    .hamburger-menu{
        display: block;
        position: relative;
    }
  }
</style>
