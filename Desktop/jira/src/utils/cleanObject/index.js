//此函数是用来清除对象属性值为""或为undefined或null的情况
export default function(obj){
    const result={...obj}
    Object.keys(result).forEach(key => {
        let value=result[key]
        console.log(key,value)
        if(!value&&value!==0){
            delete result[key]
        }
    });
    return result
}