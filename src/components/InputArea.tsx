import React, { FormEvent, useState, useContext } from 'react';
import { MainContext } from '@/pages/_app';
import { CommandType } from '@/types/root';

const InputArea = () => {
  const { history, setHistory } = useContext(MainContext);
  const [commandVal, setCommandVal] = useState<CommandType>({
    prompt: '',
    response: '',
    isDisabled: false,
  });

  const incomingCommand: Array<object> = [...history];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Don't render a new line if the input is an empty string or null
    const pattern: RegExp = /^(?!\s+$)[a-zA-Z1-9_\s\-\.]+$/;
    if (!pattern.test(commandVal.prompt)) return;

    commandVal.prompt == 'clear'
      ? (incomingCommand.length = 0)
      : incomingCommand.push({ prompt: commandVal.prompt, response: commandVal.response });

    setHistory(incomingCommand);
    setCommandVal({ ...commandVal, prompt: '' });
  };

  return (
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
          value={commandVal.prompt}
          onChange={(e) => {
            setCommandVal({
              ...commandVal,
              prompt: e.target.value,
            });
          }}
          autoComplete='off'
          autoFocus
          disabled={commandVal.isDisabled}
          spellCheck='false'
        />
      </form>
    </div>
  );
};

export default InputArea;
