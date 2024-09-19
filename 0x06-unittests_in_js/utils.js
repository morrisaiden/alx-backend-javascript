export const Utils = {
    calculateNumber: function(type, a, b) {
        if (type === 'SUM') {
            return Math.round(a) + Math.round(b);
        }
    }
};
