<template>
    <footer class="footer">
        <ul class="footer_menus">
            <li class="menus_item"><router-link to="/photoshoot" @click="ChangeHeader('Photoshoot', '-sub')">Photoshoot</router-link></li>
                <li class="menus_item"><router-link to="/ceremony" @click="ChangeHeader('Ceremony', '-sub')">Ceremony</router-link></li>
                <li class="menus_item"><router-link to="/party" @click="ChangeHeader('Party', '-sub')">Party</router-link></li>
                <li class="menus_item"><a href="/#video" @click="HomeCurrent($event),ChangeHeader('home', '')">Movie</a></li>
        </ul>
        <p class="copy">&copy;codalista.com</p>
    </footer>
</template>

<script>
export default {
    props: {
        msg: String
    },
    data: function () {
        return {
            ChangeName: '',
            CurrentChange : '',
        }
    },
    methods: {
        ChangeHeader(name,current) {
            this.ChangeName = name
            this.CurrentChange = current
            this.$emit('UpdateHead',this.ChangeName,this.CurrentChange)
            window.scroll({top: 0, behavior: 'smooth'});
        },
    }
}

</script>

<style scoped>
    /* footer */
    .footer{
        border: 1px solid #81caaa;
        text-align: center;
        padding: 20px 0 0;
        color: #000;
        font-size: 15px;
    }
    .footer_menus{
        display: flex;
        justify-content: space-around;
        width: 60%;
        margin: 20px auto;
    }
    .footer_item a{
        color: #fff;
    }
    .footer_item a:hover{
        background: -webkit-linear-gradient(top, #0784E1 0%, #F514E4 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transform: scale(1.2);
    }
    .copy{
        padding: 10px 0;
        font-size: 20px;
        color: #fff;
        background: #81caaa;
    }
    @media screen and (max-width:1100px){
        .footer_menus{
            width: 100%;
        }
    }
</style>