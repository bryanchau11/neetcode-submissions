class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let l = 0;
        let r = 1;
        let maxP = 0;
        while (r < prices.length) {
            if (prices[r] < prices[l]) {
                l = r;
            } else {
                maxP = Math.max(maxP, prices[r] - prices[l])
            }
            r += 1
        }
        return maxP
    }
}
