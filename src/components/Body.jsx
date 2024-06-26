function Body(props)
{
    console.log(props)
    return(
        <><h1>Body Component</h1>
        <h2>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>height : {props.height}</p>
        <p>Dept : {props.dept}</p>
        </h2>
        </>
    )
}

export default Body