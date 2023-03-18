import React from 'react';
import EorzeaWeather from 'eorzea-weather';
import EorzeaTime from 'eorzea-time';
import { EIGHT_HOURS, ONE_HOUR, PHASES } from './Constants';
import { useState, useEffect } from 'react';
import SightLogView from './SightLogView';
import useDeepCompareEffect from 'use-deep-compare-effect';

const timesIntersect = (Range1, Range2) => {
  if (Range1.StartTime > Range1.EndTime) {
    return (
      timesIntersect(Range2, { StartTime: Range1.StartTime, EndTime: 24 }) ||
      timesIntersect(Range2, { StartTime: 0, EndTime: Range1.EndTime })
    );
  }
  if (Range2.StartTime > Range2.EndTime) {
    return (
      timesIntersect(Range1, { StartTime: Range2.StartTime, EndTime: 24 }) ||
      timesIntersect(Range1, { StartTime: 0, EndTime: Range2.EndTime })
    );
  }
  return Range1.StartTime < Range2.EndTime && Range1.EndTime > Range2.StartTime;
};

const getStartOfPhase = (date) => {
  const msec = date.getTime();
  const bell = (msec / ONE_HOUR) % 8;
  return msec - Math.round(ONE_HOUR * bell);
};

const getTimeDisplay = (time) => {
  if (time === 0) return '12AM';
  if (time === 12) return '12PM';
  if (time > 11) return `${time % 12}PM`;
  return `${time}AM`;
};

export const getStartOffset = ({ phaseStartHour, windowStartHour }) => {
  return Math.max(windowStartHour - phaseStartHour, 0);
};

export const getEndOffset = ({
  phaseStartHour,
  windowStartHour,
  windowEndHour,
  nextWeatherPhaseIsGood,
}) => {
  const adjustedWindowEndHour =
    windowStartHour > windowEndHour ? windowEndHour + 24 : windowEndHour;
  if (adjustedWindowEndHour <= phaseStartHour + 8)
    return windowEndHour - phaseStartHour;
  return (
    (nextWeatherPhaseIsGood ? adjustedWindowEndHour : phaseStartHour + 8) -
    phaseStartHour
  );
};

const getWindow = ({ log, currentTime }) => {
  const eWeather = new EorzeaWeather(log.ZoneId);
  const phases = PHASES.filter((phase) => timesIntersect(phase, log.Window));
  let goodWeatherFound = false;
  let startOfWeatherWindow = 0;
  while (!goodWeatherFound) {
    if (startOfWeatherWindow === 0) {
      startOfWeatherWindow = getStartOfPhase(new Date(currentTime));
    } else {
      startOfWeatherWindow += EIGHT_HOURS;
    }
    const startOfWeatherWindowDate = new Date(startOfWeatherWindow);
    const phase = phases.find(
      (phase) =>
        phase.StartTime === new EorzeaTime(startOfWeatherWindowDate).getHours()
    );
    if (phase == null) continue;
    if (
      !log.Weather.some(
        (allowedWeather) =>
          allowedWeather === eWeather.getWeather(startOfWeatherWindowDate)
      )
    )
      continue;
    const CollectableWindowStartOffset = getStartOffset({
      phaseStartHour: phase.StartTime,
      windowStartHour: log.Window.StartTime,
    });

    const CollectableWindowStartTime = new Date(
      startOfWeatherWindow + CollectableWindowStartOffset * ONE_HOUR
    );

    const currentStartOfWeatherWindow = startOfWeatherWindow;
    const CollectableWindowEndOffset = getEndOffset({
      phaseStartHour: phase.StartTime,
      windowStartHour: log.Window.StartTime,
      windowEndHour: log.Window.EndTime,
      nextWeatherPhaseIsGood: log.Weather.some(
        (allowedWeather) =>
          allowedWeather ===
          eWeather.getWeather(
            new Date(currentStartOfWeatherWindow + EIGHT_HOURS)
          )
      ),
    });

    const CollectableWindowEndTime = new Date(
      startOfWeatherWindow + CollectableWindowEndOffset * ONE_HOUR
    );
    if (new Date(currentTime) > CollectableWindowEndTime) continue;
    return {
      Key: log.Key,
      CollectableWindowStartTime,
      CollectableWindowEndTime,
    };
  }
};

function SightLog({
  log,
  updateCollectionWindow,
  onChangeMarkAsFound,
  currentTime,
}) {
  const [windowStartDisplay, setWindowStartDisplay] = useState('');
  const [windowEndDisplay, setWindowEndDisplay] = useState('');
  const [alert, setAlert] = useState(null);

  useDeepCompareEffect(() => {
    if (
      currentTime != null ||
      log.CollectableWindowStartTime != null ||
      log.CollectableWindowEndTime != null ||
      currentTime > log.CollectableWindowEndTime
    )
      updateCollectionWindow(getWindow({ log, currentTime }));
  }, [log, updateCollectionWindow, currentTime]);

  useEffect(() => {
    setWindowStartDisplay(getTimeDisplay(log.Window.StartTime));
    setWindowEndDisplay(getTimeDisplay(log.Window.EndTime));
  }, [log.Window.StartTime, log.Window.EndTime]);

  useEffect(() => {
    setAlert(
      log.CollectableWindowStartTime != null &&
        log.CollectableWindowEndTime != null &&
        log.CollectableWindowStartTime >= log.CollectableWindowEndTime
        ? 'This is an impossible time range'
        : null
    );
  }, [log.CollectableWindowStartTime, log.CollectableWindowEndTime]);

  return (
    <SightLogView
      {...log}
      WindowStartDisplay={windowStartDisplay}
      WindowEndDisplay={windowEndDisplay}
      AlertMessage={alert}
      onChangeMarkAsFound={onChangeMarkAsFound}
    />
  );
}

export default SightLog;
