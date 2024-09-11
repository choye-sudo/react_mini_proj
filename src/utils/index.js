const submitSupportFunc = (e)=> {
    e.preventDefault();
    const obj = {}
    const {target} = e;
    for(let i =0; i < target.length; i++)
        if(target[i] && target[i].type!=="submit")
            obj[target[i].name] = target[i].value
    return obj;
}
export {submitSupportFunc}