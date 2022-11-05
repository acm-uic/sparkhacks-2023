export const Item = (props) => {
    return (
      <div className="relative inline-flex items-center	justify-center" style={{width: "100%"}}>
        <img className="brightness-50 z-0" src={require('../../../assets/images/archivedImages/' + props.name)} alt={props.name}/> 
        <h1 className="invisible md:visible absolute top-1/3 text-white	z-10" >{props.title}</h1>
        <h4 className="visible md:invisible absolute top-1/4 z-10 text-white z-10" >{props.title}</h4>
        <p className="invisible md:visible absolute top-1/2 whitespace-normal	break-words	w-1/2 text-center text-white z-10" >{props.description}</p>
        <p className="visible md:invisible absolute top-1/2 whitespace-normal	break-words	w-screen text-center text-xs text-white z-10" >{props.description}</p>
        <p className="invisible md:visible absolute top-2/3 text-secondary-dark z-10" >{props.link}</p>
        <p className="visible md:invisible absolute top-3/4 text-xs text-secondary-dark z-10" >{props.link}</p> 
      </div>
  
    );
  }