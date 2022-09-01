/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

var furthestBuilding = function(heights, bricks, ladders) {
    let minHeap= new PriorityQueue()
    if(heights.length === 1) return 0
    
    for(let i = 0; i < heights.length - 1; i ++){
        let diff  = heights[i+1]-heights[i]
        
        if(diff < 0) continue
        
        if(diff > 0 && ladders > 0) {
            minHeap.enqueue(diff,diff)
            ladders --
            continue
        }
        // console.log(minHeap.values) 
        if(minHeap.values.length === 0 ) {
            bricks = bricks -diff
            if(bricks >= 0){
                continue
            }
            return i
        }
        
       
        if(diff > minHeap.values[0].val && bricks >= minHeap.values[0].val ){
            minHeap.enqueue(diff,diff)
            bricks = bricks - minHeap.values[0].val
            minHeap.dequeue()
        }else if(diff <= minHeap.values[0].val && bricks >= diff){
            bricks = bricks -diff
        } else{
            return i
        }  
    }
    return heights.length-1
     
};