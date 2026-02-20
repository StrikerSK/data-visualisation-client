import { generateColor, getLabels } from '../Functions';

describe('Utility Functions', () => {
  describe('generateColor', () => {
    it('should generate a valid hex color code', () => {
      const color = generateColor();
      expect(color).toMatch(/^#[0-9A-F]{6}$/);
    });

    it('should generate random colors', () => {
      const color1 = generateColor();
      const color2 = generateColor();
      expect(color1).not.toBe(color2);
    });
  });

  describe('getLabels', () => {
    it('should return empty array if input is not an array', () => {
      expect(getLabels(null)).toEqual([]);
      expect(getLabels({})).toEqual([]);
    });

    it('should return empty array if input array is empty', () => {
      expect(getLabels([])).toEqual([]);
    });

    it('should extract keys from the first object, excluding "label"', () => {
      const input = [
        { label: 'Jan', data1: 10, data2: 20 },
        { label: 'Feb', data1: 15, data2: 25 },
      ];
      const result = getLabels(input);
      // It reverses them in the original function
      expect(result).toEqual(['data2', 'data1']);
    });
  });
});
