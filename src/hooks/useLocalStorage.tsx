// import { useState } from 'react';

// export const useLocalStorage = (key: string, initialValue: string) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const item = localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       return initialValue;
//     }
//   });

//   const setValue = (value: unknown) => {
//     try {
//       setStoredValue(value);
//       localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       // console.log(error);
//     }
//   };

//   return [storedValue, setValue];
// };
