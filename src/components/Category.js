import React from 'react';
import Roll from 'react-reveal/Roll';

function Category({ filteration, categories: categoriesNames }) {

  const onFilteration = (cat) => {
    filteration(cat);
  }

  return (
    <>

      <Roll>
        <div className='categories d-flex justify-content-center flex-wrap gap-3 mb-5'>
          {
            categoriesNames.length > 0 &&
            categoriesNames.map(categoryName => {
              return <button key={Math.random()} onClick={() => onFilteration(categoryName)}>{categoryName}</button>
            })
          }

        </div>
      </Roll>


    </>
  )
}

export default Category