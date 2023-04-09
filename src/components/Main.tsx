import { InputAreaOptions } from '@/types/root';
import { FormEvent, KeyboardEvent, useState } from 'react';
import InputArea from './InputArea';

const Main = (props: any) => {
  const [response, setResponse] = useState<string>('');
  const [options, setOptions] = useState<InputAreaOptions>({
    commands: [],
    isDisabled: false,
    inputValue: '',
  });

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      if (options.inputValue.includes('sudo')) {
        return setResponse('Permission denied.');
      } else if (options.inputValue == 'clear') {
        const data = 'clear';
        props.onData(data);
        return;
      } else {
        return setResponse('ERROR: Invalid key');
      }
    }
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          <label htmlFor='input'>
            <code style={{ color: '#30d904', fontWeight: 500 }}>root@cantez</code>
            :∼$
          </label>
          <input
            type='text'
            id='input'
            width='full'
            value={options.inputValue}
            onChange={(e) => {
              setOptions({
                ...options,
                inputValue: e.target.value,
              });
            }}
            autoComplete='off'
            autoFocus
            disabled={options.isDisabled}
            onKeyDown={handleSubmit}
          />
        </div>

        <div>{response}</div>
      </div>
    </>
  );
};

export default Main;
