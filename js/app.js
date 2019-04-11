Vue.component('playList',{
    data: function(){
        return{
            songNames: [],
            newSong:'',
            favBtn: true
        }
    },
    methods: {
        addItem() {
            if(this.newSong == '') return;
            this.songNames.push(this.newSong);
            this.newSong = '';
        },
            removeItem(x){
                this.songNames.splice(x, 1);
            }
    },

    template: `
    <div>
        <h1> PlayList </h1>
        <ul class = "list-group">
            <li v-for="(song, index) in songNames" class="list-group-item">
            <button @click="removeItem(index)" class="btn btn-danger">X</button>
            <button class="btn" :class="{btn-success : favBtn}">Favourite</button>

                {{ song }}
            </li>
        </ul>

        <div>
            <form @submit.prevent="addItem">
            <input type = "text" placeholder="Enter Song and Artist" v-model="newSong"/>
            <button type="submit" class="btn btn-primary"> New New </button>
            </form>
        </div>
    </div>
    `
});


























const app = new Vue({
    el:'#app'
});
