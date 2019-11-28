export default {
    myMutationTabOne(state, data) {
        state.tabOne="after mutation! I am tabOne"
    },
    myMutationTabTwo(state, data) {
        state.tabTwo="after action! after mutation! I am tabTwo"
    },
};
