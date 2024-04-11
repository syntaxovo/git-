/**
 * 求对象的全部属性之和
 * 解析 let a={b:10,c:{d:[11,12],e:13}}，实现 10+11+12+13 效果？
 */

const a = { b: 10, c: {d: [11,12, {k: 1}], j: 100}, e: 13, f: 100}
/**
 *   对当前对象进行递归判断
 *   简单类型直接返回值，复杂类型返回计算后的值
 */
function getAnd(obj) {
    //     //  对当前类型进行判断
    let type = Object.prototype.toString.call(obj).slice(8,-1)
    console.log(type,'type')
    let num = 0
    if(type == 'Array') {
    //      数组直接计算
       return  obj.reduce((total,current)=>{
             return   total + typeof current == 'number' ? current : getAnd(current)
         },num)
    }
    // //    对象
        let objValuesArray = Object.values(obj)
        console.log(objValuesArray,'objValuesArray')
      //     进行累加
      //   objValuesArray.reduce((totals,currentItem)=>{
      //       console.log(currentItem,'currentItem')
      //         totals = totals + typeof  currentItem =='number' ? currentItem : getAnd(currentItem)
      //       console.log(totals,'totals')
      //   },num)
        objValuesArray.forEach(e=>{
            num +=  typeof  e == 'number' ? e : getAnd(e)
        })
        return num


    // else if( type == 'Object'){
    // //    对象
    //     let objValuesArray = Object.values(obj)
    //     console.log(objValuesArray,'objValuesArray')
    //   //     进行累加
    //     objValuesArray.reduce((totals,currentItem)=>{
    //         console.log(currentItem,'currentItem')
    //           totals = totals + typeof  currentItem =='number' ? currentItem : getAnd(currentItem)
    //         console.log(totals,'totals')
    //     },num)
    //     return num
    // } else {
    //     console.log(obj,'111111111obj')
    // //     普通类型直接返回值
    //     return num+= obj;
    // }

}

let values =  getAnd(a)
console.log(values,'values')