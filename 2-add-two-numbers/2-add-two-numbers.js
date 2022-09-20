/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//     let carry = 0 ;
//     let sum;
//     let result = new ListNode()
//     let node = result
//     if(!l1) {
//         return l2
//     } else if(!l2){
//         return l1
//     }
    
//     while(l1 || l2 || carry) {
//         if(l1 && l2){
// //             get sum of l1 and l2
//             sum = l1.val + l2.val + carry;
//             carry = 0 ;
            
//             if(sum >= 10){
//                 carry = 1;
//                 node.val = sum % 10  
//             } else {
//                 node.val = sum
//             }
//         } else if (l1) {
//             sum = l1.val + carry
//             carry = 0
//             if(sum >= 10){
//                 carry = 1;
//                 node.val = sum % 10   
//             } else {
//                 node.val = sum
//             }
//         } else if (l2) {
//             sum = l2.val + carry
//             carry = 0
//             if(sum >= 10){
//                 carry = 1;
//                 node.val = sum % 10
//             } else {
//                 node.val = sum
//             }
//         } else if (carry){
//             node.val = carry
//         } 
        
//         if(l1) l1 = l1.next
//         if(l2) l2 = l2.next
//         if(l1 || l2 || carry){
//             node.next = new ListNode()
//             node = node.next 
//         }
//     }
    
    
//     return result
// };


var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};



