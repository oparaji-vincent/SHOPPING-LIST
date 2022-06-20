import React, { useState} from 'react';
import './List.css';

const List = () => {
    const [data, setData] = useState("")
    let datalist = ['Mango', 'Tea', 'Banana', 'Orange', 'Lemon', 'Grape', 'Pineapple', 'Apple', 'Strawberry', 'Guava', 'Carrot', 'Tomato', 'Peper','Plantain', 'Pear', 'Avocado', 'Lime', 'Star-fruit', 'Golden-fruit', 'Watermelon'];
    console.log(datalist[1])
    let datalist2 = []
    let filtered;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const fillt=(e)=>{
        e.preventDefault();
let resultD = '';
const charactersLength = characters.length;
for(let i = 0; i < 5; i++){
    resultD += characters.charAt(Math.floor(Math.random() * charactersLength));
}
console.log(resultD)
datalist2 = datalist.push(resultD);
console.log(datalist2)
return resultD;


    }
    let result = datalist.filter((itr)=>{
        filtered = itr.includes(data)
        return filtered
    })

  return (
    <div className='wrapper'> 
        <div>
        <h1>SHOPPING LIST</h1>
        <form>
            <input type="text" placeholder='Search for' className="form-control" onChange={(e)=>{setData(e.target.value)}} value={data} />
        <button className="btn" onClick={fillt}>+</button>
        </form>

        <ul>
            {data ? result.map((list,index)=>{return <li key={index}>{list}</li>}) : datalist.map((i, j)=>{return <li key={j}>{i}</li>})}
        </ul>
        </div>
    </div>
  )
}

export default List;