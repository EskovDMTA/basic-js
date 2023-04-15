const chainMaker = {
    "chainArray": [],

    getLength() {
        return this.chainArray.length


    },
    addLink(value) {
        if (!Number.isInteger(value) || value <= 0 || value > this.chainArray.length){
            throw Error("You can't remove incorrect link!")
        }
        this.chainArray.push(`( ${value} )`)
        return chainMaker


    },
    removeLink(position) {
        this.chainArray.splice(position,1)
        return chainMaker


    },
    reverseChain() {
        this.chainArray.reverse()
        return chainMaker


    },
    finishChain() {
        return this.chainArray.join("~~")


    }
};

console.log(chainMaker.addLink(123).addLink(5677).reverseChain().removeLink(5).finishChain())