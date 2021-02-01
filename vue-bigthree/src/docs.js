import qs from 'qs'

var state = {
    init:{
        vmDocTransfer:{
            custId: "",
            custName: "",
        },
    },
};

var getters = {};

var actions = {
    actSetCategory({commit}, Doc){
        commit('mutIniVmDT');
    },
    actTest({ commit }, value) {
        const uri = 'http://localhost:3674/Product/GetProductAPI';
        fetch(uri, {
                method: 'POST',
                body: encodeURI(JSON.stringify({
                    operId: '1112',
                })),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                }
            })
            .then(res => {
                return res.json();
            }).then(result => {

                console.log("A", result);
            }).catch(function(err) {
                // 錯誤處理
                console.log(err); // 使用 json() 可以得到 json 物件
            });
 
    },
};

var mutations = {
    mutIniVmDT: function(state){
        state.vmDocTransfer = JSON.parse(JSON.stringify(state.init.vmDocTransfer));
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}