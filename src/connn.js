function getCommonCharacterCount(s1, s2) {
    let s1Array = s1.split("")
    let s2Array = s2.split("")
    let counter = 0
    s1Array.forEach((elem)=>{
        for(let i = 0; i < s2.length - 1; i++){
            if (elem === s2Array[i]) {

                counter +=1
                s2Array.splice(i,1)

            }
        }
    })
    return counter
}
getCommonCharacterCount("1aaasdd22dff", "aassss11122gffdsdg")