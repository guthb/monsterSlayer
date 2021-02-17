export default {
    increment(context) {
        setTimeout(function () {
            context.commit('increment')  //async
        }, 2000);
    },
    increase(context, payload) {
        context.commit('increase', payload)
    },
};