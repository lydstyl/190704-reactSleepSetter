import React from 'react';

const Duration = () => {
  return (
    <p>
      <label>In (days) :</label>
      <input
        type='range'
        min='1'
        max='7'
        step='1'
        list='duration'
        name='duration'
        defaultValue='3'
      />
      <datalist id='duration'>
        <option value='1' label='1' />
        <option value='2' label='2' />
        <option value='3' label='3' />
        <option value='4' label='4' />
        <option value='5' label='5' />
        <option value='6' label='6' />
        <option value='7' label='7' />
      </datalist>
    </p>
  );
};

export default Duration;
