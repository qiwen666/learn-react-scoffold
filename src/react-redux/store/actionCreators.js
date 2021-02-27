// export function addAction(num) {
//   return {
//     type: "Add_NUMBER",
//     num
//   }
// }

// export const addAction = (num) => {
//   return {
//     type: "Add_NUMBER",
//     num
//   }

// }
import { ADD_NUMBER } from './constants';

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
  
});
