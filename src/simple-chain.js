const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    "chainArray": [],

    getLength() {
        return this.chainArray.length


    },
    addLink(value) {

        this.chainArray.push(`( ${value} )`)
        return chainMaker


    },
    removeLink(position) {
        if (this.chainArray[position-1] === undefined) {
            this.chainArray = []
            throw Error("You can't remove incorrect link!")
        }
        this.chainArray.splice(position - 1, 1)
        return chainMaker

    },
    reverseChain() {
        this.chainArray.reverse()
        return chainMaker
    },
    finishChain() {
        let returnArray = this.chainArray.filter((elem) => {
            return elem !== undefined
        })
        this.chainArray = []
        return returnArray.join("~~")
    }
};
module.exports = {
    chainMaker
};
