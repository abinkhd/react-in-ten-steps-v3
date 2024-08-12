

let TechnologyComponent = ({getTechnology,selectedTechnology}) => {
    let technologies = [
        {"id":1, "domain":"Java Spring Boot"}, 
        {"id":2, "domain":"Python Django"}, 
        {"id":3, "domain":"Express Js"}, 
        {"id":4, "domain":"Asp.Net MVC"}
    ];

    const handleChange=(e,item)=>{
        getTechnology({e,item});
    }

    return (
        <div className="my-1">
            {technologies.map(item=>
            <span key={item.id}>
                <input type="checkbox"  className="form-check-input mx-2" onClick={(e)=>handleChange(e,item)} id={item.id} />
                <label htmlFor={item.id} className="mx-1">{item.domain}</label>
            </span>
            )}
        </div>
    )
}

export default TechnologyComponent;