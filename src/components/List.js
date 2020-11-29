import React from 'react';
const List = (props) => {
  const { wikis } = props;
  if (!wikis || wikis.length === 0) return <p>No wiki was foud, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Wiki Pages : Happy Learning </h2>
      {wikis.map((wiki) => {
        return (
          <li key={wiki.title} className='list'>
            <span className='wiki-text'>{wiki.title} </span>
            <span className='w3-tag'>{wiki.category} </span>
            <span className='wiki-description'><a href={wiki.url}>{wiki.url}</a></span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
