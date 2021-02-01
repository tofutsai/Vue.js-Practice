<template>
    <div>
        DOCS{{ vmDocTransfer }}
        <br>
        <br>
        <button @click="actTest">actTest</button>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'
export default {
    data(){
        return{
            tmpValue:"",
        };
    },
    components:{

    },
    watch:{

    },
    computed:{
        ...mapState("docs",["vmDocTransfer"])
    },
    methods:{
        ...mapActions("docs", ["actSetCategory", "actTest"])
    },
    created(){
        this.actSetCategory();
        this.actTest();
    }
};
</script>