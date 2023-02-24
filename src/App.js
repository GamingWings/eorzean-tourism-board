import './App.css';
import { useState, useEffect, useMemo } from 'react';
import {DATA, ONE_HOUR, EIGHT_HOURS, ONE_DAY, DAYS_TO_CHECK, SORT_COLUMN_KEY, SORT_COLUMN_START, SORT_COLUMN_END, LOCAL_STORAGE_KEY_SORT_COLUMN, LOCAL_STORAGE_KEY_SEARCH_TERM, LOCAL_STORAGE_THEME} from './Constants';
import range from 'lodash/range'
import SightLog from './SightLog';
import { Container } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Unstable_Grid2';
import Menu from './Menu';
import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [storedTheme, setStoredTheme] = useState(localStorage.getItem(LOCAL_STORAGE_THEME)); 
  const [times, setTimes] = useState([]);
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [logs, setLogs] = useState(DATA);
  const [sortedLogs, setSortedLogs] = useState(logs);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem(LOCAL_STORAGE_KEY_SEARCH_TERM) ?? '');
  const [sortColumn, setSortColumn] = useState(localStorage.getItem(LOCAL_STORAGE_KEY_SORT_COLUMN) ?? SORT_COLUMN_KEY);

  const updateCollectionWindow = ({Key, CollectableWindowStartTime, CollectableWindowEndTime, LastUpdated}) => {
    setLogs(prevLogs => (
      prevLogs.map(log => {
        return log.Key !== Key ? log : {
          ...log,
          CollectableWindowStartTime,
          CollectableWindowEndTime,
          LastUpdated
        };
      })
    ));
  }

  const handleChangeSearchTerm = (searchTerm) => {
    localStorage.setItem(LOCAL_STORAGE_KEY_SEARCH_TERM, searchTerm);
    setSearchTerm(searchTerm);
  }

  const handleChangeSortColumn = (sortColumn) => {
    localStorage.setItem(LOCAL_STORAGE_KEY_SORT_COLUMN, sortColumn);
    setSortColumn(sortColumn);
  };

  const handleChangeTheme = () => {
    const newTheme = theme.palette.mode === "dark" ? "light": "dark";
    if (prefersDarkMode ? 'dark' : 'light' === newTheme) {
      localStorage.removeItem(LOCAL_STORAGE_THEME);
    } else {
      localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
    }
    setStoredTheme(newTheme);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: storedTheme ?? (prefersDarkMode ? 'dark' : 'light'),
        },
      }),
    [prefersDarkMode, storedTheme],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLastRefresh(new Date());
    }, ONE_DAY);
    return () => clearInterval(interval);
  })

  useEffect(() => {
    const msec = new Date().getTime();
    const bell = (msec / ONE_HOUR) % 24;
    const startMsec = msec - Math.round(ONE_HOUR * bell);
    setTimes(range(
      startMsec,
      startMsec + ONE_DAY * DAYS_TO_CHECK,
      EIGHT_HOURS,
    ));
  }, [
    lastRefresh
  ]);

  useEffect(() => {
    if (searchTerm == null) {
      setLogs(DATA);
    } else {
      setLogs(DATA.filter(({Key, Name}) => (
        `${Key}. ${Name}`.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      )));
    }
  }, [searchTerm]);

  useEffect(() => {
    switch(sortColumn) {
      case SORT_COLUMN_KEY:
        setSortedLogs([...logs].sort((a, b) => a.Key > b.Key ? 1 : -1));
        break;
      case SORT_COLUMN_START:
        setSortedLogs([...logs].sort((a, b) => {
          if (a.CollectableWindowStartTime === b.CollectableWindowStartTime) return 0;
          if (a.CollectableWindowStartTime == null) return 1;
          if (b.CollectableWindowStartTime == null) return -1;
          return a.CollectableWindowStartTime < b.CollectableWindowStartTime ? -1 : 1;
        }));
        break;
      case SORT_COLUMN_END:
        setSortedLogs([...logs].sort((a, b) => {
          if (a.CollectableWindowEndTime === b.CollectableWindowEndTime) return 0;
          if (a.CollectableWindowEndTime == null) return 1;
          if (b.CollectableWindowEndTime == null) return -1;
          return a.CollectableWindowEndTime < b.CollectableWindowEndTime ? -1 : 1;
        }));
        break;
      default:
        break;
    }
  }, [sortColumn, logs]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'right',
        justifyContent: 'right',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={handleChangeTheme} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
      <Menu
        searchTerm={searchTerm}
        onChangeSearchTerm={handleChangeSearchTerm}
        sortColumn={sortColumn}
        onChangeSortColumn={handleChangeSortColumn}
      />
      <Container component="main">
        <Grid container spacing={2}>
          <Grid xs={12}>
            <img className="headerImage" src={`${process.env.PUBLIC_URL}/greetings-from-eorzea.png`} alt="Greetings from Eorzea header" />
          </Grid>
          {sortedLogs.map((log) => (
          <Grid xs={4} key={log.Key}>
            <SightLog
              log={log}
              times={times}
              updateCollectionWindow={updateCollectionWindow}
            />
          </Grid>
        ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
