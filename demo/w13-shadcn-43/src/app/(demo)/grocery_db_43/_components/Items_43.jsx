import SingleItem_43 from './SingleItem_43';
import { fetchGroceries } from '@/actions/grocery.action_43';

const Items_43 = async () => {
  const items = await fetchGroceries();
  return (
    <div className='items'>
    {items.map((item) => {
    return <SingleItem_43 key={item.id}  
      item={item}/>
    })}
    </div>
  );
};
export default Items_43;
