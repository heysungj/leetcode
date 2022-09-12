/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    for(let i = 0; i < s.length; i++) {
        
        if(s[i] === 'I' ){
            if(s[i+1]){
                switch(s[i+1]) {
                case 'V':
                    total += 4;
                    i++
                    break;
                case 'X':
                    total += 9;
                    i++
                    break;
                 default:
                     total ++;  
                } 
            } else {
                total++
            }
        } else if(s[i] === 'X' ){
            if( s[i+1]){
                switch(s[i+1]) {
                case 'L':
                    total += 40;
                    i++
                    break;
                case 'C':
                    total += 90;
                    i++
                    break;
                default:
                     total += 10;  
                } 
            } else{
                total += 10
            }
            
        } else if(s[i] === 'C' ){
            if(s[i+1]){
                 switch(s[i+1]) {
                case 'D':
                    total += 400;
                    i++
                    break;
                case 'M':
                    total += 900;
                    i++
                    break;
                 default:
                     total += 100;  
                }
            }else {
                total += 100
            }
           
            
        } else if(s[i] === 'V'){
                 total += 5
            } else if(s[i] === 'L'){
                 total += 50
            } else if(s[i] === 'D'){
                 total += 500
            } else if(s[i] === 'M'){
                 total += 1000
            }
        
        }
                return total
   
};