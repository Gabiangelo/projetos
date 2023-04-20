export default function MyCmp(props){
    const data = ["item1", "item2", "item3"];
  
    return (
        <ul>
            {data.map((item, index) => <li key={index}> {item} </li>)}
        </ul>
    );
}