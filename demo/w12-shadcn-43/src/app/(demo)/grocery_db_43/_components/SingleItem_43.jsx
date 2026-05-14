'use client';

const SingleItem_43 = ({ item }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem_43;
