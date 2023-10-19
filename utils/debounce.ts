
/**
 * 
 * @param func 需要执行防抖的函数
 * @param wait 需要防抖的间隔秒数
 * @returns function
 */
export const debounce = (func: Function, wait: number) : Function => {
  let timerId: any;
  return (...args: any[]) => {
    if(timerId){
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func(...args).apply(this, args);
    }, wait);
  };
}