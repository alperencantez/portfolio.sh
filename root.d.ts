export type HistoryContext = {
  history: array<object>;
  setHistory: function;
};

export type CommandType = {
  prompt: string;
  response: string;
  isDisabled: boolean;
};

export type DisplayCommandT = {
  cmd: string;
  res: string;
};

export type HistoryElementT = {
  prompt: string;
  res: string;
};
