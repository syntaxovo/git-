/**
 * 平铺结构转为树形结构
 *
 *
 */
const data = [
    {id: "01", name: "张大大", pid: "", job: "项目经理"},
    {id: "02", name: "小亮", pid: "01", job: "产品leader"},
    {id: "03", name: "小美", pid: "01", job: "UIleader"},
    {id: "04", name: "老马", pid: "01", job: "技术leader"},
    {id: "05", name: "老王", pid: "01", job: "测试leader"},
    {id: "06", name: "老李", pid: "01", job: "运维leader"},
    {id: "07", name: "小丽", pid: "02", job: "产品经理"},
    {id: "08", name: "大光", pid: "02", job: "产品经理"},
    {id: "09", name: "小高", pid: "03", job: "UI设计师"},
    {id: "10", name: "小刘", pid: "04", job: "前端工程师"},
    {id: "11", name: "小华", pid: "04", job: "后端工程师"},
    {id: "12", name: "小李", pid: "04", job: "后端工程师"},
    {id: "13", name: "小赵", pid: "05", job: "测试工程师"},
    {id: "14", name: "小强", pid: "05", job: "测试工程师"},
    {id: "15", name: "小涛", pid: "06", job: "运维工程师"}
]

function handlerTree(data) {
//    循环平铺的数据进行循环筛选出与id对应的数据
    data.forEach(e=>{
        let children = data.filter(i=> i.pid == e.id)
        console.log(children,'children')
        e.children = children.length ? children : []
    })
    return data;

}
const treeData = handlerTree(data)
console.log(treeData,'treeData')
/**
 *  数组进行拍平
 *  array.flat(Infinity)
 */

const arr = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]

const  flatOne = arr.flat(Infinity)
console.log(flatOne,'flatOne')

function handlerFlat(data) {

    return data.reduce((arr,item)=>{
        return arr.concat(item instanceof Array ? handlerFlat(item) : item)
    },[])
}
const  flatTwo = handlerFlat(arr)
console.log(flatTwo,'flatTwo')
