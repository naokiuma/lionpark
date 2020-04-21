
//コンポーネント
var about = Vue.component('about-component',{
    props:['cssclass'],
    data:function(){
        return{
            style:this.cssclass
        }
    },
    template:`
    <div :style="cssclass">グローバルで登録したコンポーネントです。</div>
    `,
    mounted: function(){
            console.log(this.cssclass);
        
    }

})

new Vue({
    el: '#aboutarea',
    components:{
        about:about
    }
});

