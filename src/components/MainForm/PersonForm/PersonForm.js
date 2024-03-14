import { useOrder } from 'components/OrderContext';
import { useFormikContext } from 'formik';
import { Box, Button } from '@mui/material';
import ContactInfo from '../ContactInfo';
import MiscInfo from '../MiscInfo';
import { getFirstInvalidFieldName, sanitizeObject } from 'utils';
import countryMapping from 'countryMapping';

export default function PersonForm({ editIndex, setEditIndex, isNewPerson, setIsNewPerson, resetForm }) {
  const { order, updateOrder } = useOrder();
  const formik = useFormikContext();
  const { values, setFieldValue } = formik;

  async function savePersonForm() {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length > 0) {
      formik.setTouched(errors, true); // show errors
      // scroll to first invalid field; refactor to use ref instead of directly accessing DOM
      const firstInvalidFieldName = getFirstInvalidFieldName(errors);
      if (firstInvalidFieldName) {
        const invalidFieldElement = document.getElementsByName(firstInvalidFieldName)[0];
        if (invalidFieldElement) {
          invalidFieldElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      return;
    }
    const submittedOrder = Object.assign({}, values);
    const sanitizedOrder = sanitizeObject(submittedOrder);
    const orderWithCountry = { ...sanitizedOrder, people: sanitizedOrder.people.map(updateCountry) };
    updateOrder(orderWithCountry);
    return true;
  }

  function handleCancelButton() {
    setEditIndex(null);
    resetForm();
    if (isNewPerson) {
      const people = values.people.slice(0, -1);
      setFieldValue('people', people);
      setIsNewPerson(false);
    }
  }

  async function handleSaveButton() {
    const success = await savePersonForm();
    if (success) {
      setEditIndex(null);
      setIsNewPerson(false);
    }
  }

  return (
    <>
      <ContactInfo index={editIndex} />
      <MiscInfo index={editIndex} />
      <Box sx={{ mt: 5, mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          { order.people[0].email !== '' ?
            <>
              <div />
              <Button onClick={handleCancelButton} variant='contained' color='warning'>Cancel</Button>
              <div />
              <Button onClick={handleSaveButton} variant='contained' color='success'>Save</Button>
              <div />
            </>
            :
            <>
              <div />
              <Button onClick={handleSaveButton} variant='contained' color='success'>Save</Button>
              <div />
            </>
          }
        </Box>
      </Box>
    </>
  );
}

function updateCountry(person) {
  if (person.country === 'United States') {
    return { ...person, country: 'USA' };
  } else if (person.state) {
    const region = person.state.toLowerCase().replace(/\s/g, '').trim();
    const country = countryMapping[region] || person.country;
    return { ...person, country };
  } else {
    return person;
  }
}
