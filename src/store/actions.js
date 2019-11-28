export default {
    myActionTabTwo(context) {

        setTimeout(function () {
            context.commit('myMutationTabTwo')
        },2000);
    },
};
