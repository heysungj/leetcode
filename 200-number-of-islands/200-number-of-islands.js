/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands =  (grid) => {
	let count = 0 ; //count islands
    //helper function
    function explore(row, col, g){
        if(row<0 ||row>=g.length || col<0 || col>=g[row].length || g[row][col] === '0') {
            return
        }
        //update element from '1' to '0'
        g[row][col] = '0'
        
        explore(row-1, col, g)
        explore(row+1, col, g)
        explore(row, col-1,g)
        explore(row, col+1, g)
    }
    
    for(let r=0; r<grid.length; r++){ //interate whole grid
        for(let c=0; c<grid[r].length; c++){
            if(grid[r][c] === '1'){
                count ++
                explore(r, c, grid)
            }
            
        }
    }
    
    return count
}



// // Takes a cell in a grid with a “1” , turns it into a “0” and explores (DFS) any of the left, right, up, down 1’s
// function explore(row, col, grid){
//     //Let's return IF
//     // row < 0 OR col < 0 OR row is out of bounds(meaning the row is larger than the number of arrays in the 2d array) OR col is at/out of bounds (meaning the current col is at/over the number of elements a row has.)
//      if (row < 0 || col < 0 || row >= grid.length  
//          || col >= grid[row].length || grid[row][col] === '0')  {
//         return
//     }
    
//     //Otherwise, we should explore it!
//     //First let's set the current spot to "0"
//     grid[row][col]='0'
    
// 	//Possibilites:
// 	// 1) 1 to the right, left, top, bottom
// 	//right
// 	explore(row, col+1, grid)   
//     //Left
// 	explore(row, col-1, grid)  
//     //Down
// 	explore(row+1, col, grid) 
//     //Up
// 	explore(row-1, col, grid)   

// }