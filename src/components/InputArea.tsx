import React, { FormEvent, useState } from 'react';
import { InputAreaOptions } from '@/types/root';

const InputArea = () => {
  const [response, setResponse] = useState<string>('');
  const [options, setOptions] = useState<InputAreaOptions>({
    commands: [],
    isDisabled: false,
    inputValue: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let newCommands: Array<JSX.Element> = options.commands.slice();

    if (options.inputValue.includes('sudo')) {
      setResponse('Permission denied.');
    } else if (options.inputValue == 'clear') {
      newCommands = [];
    } else {
      setResponse('ERROR: Invalid key');
      console.log(options);
    }

    newCommands.push(<InputArea />);
    setOptions({ ...options, commands: newCommands, isDisabled: !options.isDisabled });
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
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
          />
        </form>

        <div>{response}</div>
        <div>{options.commands}</div>
      </div>
    </>
  );
};

export default InputArea;
