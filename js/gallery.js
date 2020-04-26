
new Vue({
    el: '#gallery-area',
    data:{
        showModal:false,
        modalimg: " ",
        items:[
            {
                id:1,
                img:'./img/g-1.png',
                text:"仲良しの親子。"
            },
            {
                id:2,
                img:'./img/g-2.png',
                text:"日向ぼっこ"
            },
            {
                id:3,
                img:'./img/g-3.png',
                text:"雲を見ています。"
            },
            {
                id:4,
                img:'./img/g-4.png',
                text:"凛々しい顔"
            },
            {
                id:5,
                img:'./img/g-5.png',
                text:"風が強い！"
            },
            {
                id:6,
                img:'./img/g-6.png',
                text:"一休み、一休み。"
            },
        ]
    },
    methods:{
        openmodal:function(item){
            this.showModal = true;
            this.modalimg = item.img;
        },
        closemodal:function(){
            this.showModal = false;
            this.modalimg = "";

        }
    }
});

