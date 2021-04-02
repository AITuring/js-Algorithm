import Deque from './deque'
function palindromeChecker(s){
    if (s === undefined || s === null ||(s !== null && s.length === 0)){
        return false
    }

    const deque = new Deque()
    const lowerStr = s.toLowerCase().split(' ').join('')
    let isEqual = true
    let begin,end

    for (let i=0; i<lowerStr.length;i++) {
        deque.addBack(lowerStr.charAt(i))
    }

    while(deque.size() > 1 && isEqual) {
        begin = deque.removeFront()
        end = deque.removeBack()
        if (begin !== end) {
            isEqual = false
        }
    }
    return isEqual
}
