const Form = ({children, onSubmit, warning,...props}) =>{
    const color = warning ? "red": "blue"
    const solid = "solid"
    return <form 
        style={{border:`1px ${solid} ${color}`}}
        {...props}
    >
        {children}
    </form>
}
export default Form