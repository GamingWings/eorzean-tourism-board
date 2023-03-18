import { getStartOffset, getEndOffset } from '../SightLog';

describe('A window that fits in one phase', () => {
  const phaseStartHour = 8;
  const windowStartHour = 13;
  const windowEndHour = 16;
  it('Calculates the start offset correctly', () => {
    expect(getStartOffset({ phaseStartHour, windowStartHour })).toBe(5);
  });

  describe('Next weather window is good', () => {
    it('Calculates the end offset correctly', () => {
      expect(
        getEndOffset({
          phaseStartHour,
          windowStartHour,
          windowEndHour,
          nextWeatherPhaseIsGood: true,
        })
      ).toBe(8);
    });
  });
  describe('Next weather window is not good', () => {
    it('Calculates the end offset correctly', () => {
      expect(
        getEndOffset({
          phaseStartHour,
          windowStartHour,
          windowEndHour,
          nextWeatherPhaseIsGood: false,
        })
      ).toBe(8);
    });
  });
});

describe('A window across two phases within one day', () => {
  const phaseStartHour = 8;
  const windowStartHour = 14;
  const windowEndHour = 18;

  it('Calculates the start offset correctly', () => {
    expect(getStartOffset({ phaseStartHour, windowStartHour })).toBe(6);
  });

  describe('The Window start is before the Phase Start', () => {
    it('Calculates the start offset correctly', () => {
      expect(
        getStartOffset({ phaseStartHour: phaseStartHour + 8, windowStartHour })
      ).toBe(0);
    });
  });

  describe('Next weather window is good', () => {
    it('Calculates the end offset correctly', () => {
      expect(
        getEndOffset({
          phaseStartHour,
          windowStartHour,
          windowEndHour,
          nextWeatherPhaseIsGood: true,
        })
      ).toBe(10);
    });
  });
  describe('Next weather window is not good', () => {
    it('Calculates the end offset correctly', () => {
      expect(
        getEndOffset({
          phaseStartHour,
          windowStartHour,
          windowEndHour,
          nextWeatherPhaseIsGood: false,
        })
      ).toBe(8);
    });
  });
});

describe('A window across two phases across two days', () => {
  const phaseStartHour = 16;
  const windowStartHour = 18;
  const windowEndHour = 5;

  it('Calculates the start offset correctly', () => {
    expect(getStartOffset({ phaseStartHour, windowStartHour })).toBe(2);
  });

  describe('The Window start is before the Phase Start', () => {
    it('Calculates the start offset correctly', () => {
      expect(
        getStartOffset({ phaseStartHour: phaseStartHour + 8, windowStartHour })
      ).toBe(0);
    });
  });

  describe('Next weather window is good', () => {
    it('Calculates the end offset correctly', () => {
      expect(
        getEndOffset({
          phaseStartHour,
          windowStartHour,
          windowEndHour,
          nextWeatherPhaseIsGood: true,
        })
      ).toBe(13);
    });
  });
  describe('Next weather window is not good', () => {
    it('Calculates the end offset correctly', () => {
      expect(
        getEndOffset({
          phaseStartHour,
          windowStartHour,
          windowEndHour,
          nextWeatherPhaseIsGood: false,
        })
      ).toBe(8);
    });
  });
});
