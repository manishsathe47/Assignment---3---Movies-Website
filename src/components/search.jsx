import './style.css'

function Search(props){
    return( <div className="input flex">
        <input type='search' onChange={props.onsearch} id='searchbar' className={props.className} placeholder={props.placeHolder}/>
    </div>
    )
}

export default Search
