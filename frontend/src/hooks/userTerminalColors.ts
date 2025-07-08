import { useTheme } from '@mui/material/styles';

export const useTerminalColors = () => {
  const theme = useTheme();
  return theme.palette.terminal;
};
