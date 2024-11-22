import React, { useState } from 'react';
import { ApiDish, IDishMutation } from '../../types';
import ButtonLoading from '../UI/ButtonLoading/ButtonLoading';

interface DishFormProps {
  addNewDish: (newDish: ApiDish) => void;
  existingDish?: IDishMutation;
  isEdit?: boolean;
  isLoading?: boolean;
}

const initialState = {
  title: '',
  price: 0,
  urlImage: '',
};

const DishForm: React.FC<DishFormProps> = ({addNewDish, existingDish = initialState, isEdit = false, isLoading = false}) => {
  const [newDish, setNewDish] = useState<IDishMutation>(existingDish);

  const changeDish = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDish(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newDish.title.trim().length === 0 && newDish.urlImage.trim().length === 0 && newDish.price <= 0) {
      alert("Fill in the blank");
    } else {
      addNewDish({
        ...newDish,
        price: Number(newDish.price),
      });

      if (!isEdit) {
        setNewDish(initialState);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new Dish</h3>
      <div className='form-group mb-2'>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id='title'
          name='title'
          value={newDish.title}
          onChange={changeDish}
          className='form-control'
          required
        />
      </div>

      <div className='form-group mb-2'>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id='price'
          name='price'
          value={newDish.price}
          onChange={changeDish}
          className='form-control'
          required
        />
      </div>

      <div className='form-group mb-2'>
        <label htmlFor="urlImage">URL Image:</label>
        <input
          type="url"
          id='urlImage'
          name='urlImage'
          value={newDish.urlImage}
          onChange={changeDish}
          className='form-control'
        />
      </div>

      <ButtonLoading text={'Save'} isLoading={isLoading} isDisabled={isLoading} />
    </form>
  );
};

export default DishForm;