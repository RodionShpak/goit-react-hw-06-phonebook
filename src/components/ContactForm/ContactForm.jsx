import React from 'react';
import { SubmitButton, Label, InputField } from './ContactForm.styled';
import { Box } from 'components/Common/Box.styled';
import { addContact } from 'redux/slicePhonebook';
import { useDispatch } from 'react-redux';

export const ContactForm = ({ editId, editName, editNumber, onSubmit, onResetForm }) => {
  const dispatch = useDispatch();

  const contactSubmitHandler = e => {
    e.preventDefault();
    
    const { name, number } = e.target.elements;

    dispatch(addContact({ name: name.value, number: number.value }));
    e.currentTarget.reset();
  };

  return (
    <form action="#" onSubmit={contactSubmitHandler}>
      <Box display="flex" flexDirection="column" mt="10px" p="0" border="1px solid #888888" borderRadius="2px">
        <Label htmlFor="contactName">Ім'я користувача</Label>
        <InputField id="contactName" type="text" name="name" title="Enter your name" required />
      </Box>
      <Box display="flex" flexDirection="column" mt="10px" p="0" border="1px solid #888888" borderRadius="2px">
        <Label htmlFor="contactNumber">Номер телефону</Label>
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,15}"
          title="Phone number must be up to 15 digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Box>
      <SubmitButton type="submit">Додати користувача</SubmitButton>
    </form>
  );
};

// ❌✍️👎👍🛑⛔🔙
