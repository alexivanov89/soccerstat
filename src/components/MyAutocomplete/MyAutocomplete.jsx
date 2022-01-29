import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const MyAutocomplete = ({ getOptionLabel, options, onChange, label }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      getOptionLabel={getOptionLabel}
      options={options}
      sx={{ width: '100%', padding: '0px 5px' }}
      onChange={(e, newValue) => {
        onChange(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default MyAutocomplete;
