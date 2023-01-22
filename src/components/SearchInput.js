import { Button, Input } from "reactstrap"

export const SearchInput =(props)=>{
    return(
        <div className={`ml-auto flex relative ${props.className}`}   >
        <Input  placeholder='Search'  onChange={props.callback} />
        <Button className='bg_secondary absolute right-0 '>{props.value}</Button> 
        </div>
    )
}