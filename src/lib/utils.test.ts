import { cn } from './utils';

describe('cn', () => {
  it('should return an empty string when no arguments are passed', () => {
    expect(cn()).toEqual('');
  });

  it('should return the same string when a single string argument is passed', () => {
    expect(cn('text-red-500')).toEqual('text-red-500');
  });

  it('should merge multiple string arguments', () => {
    expect(cn('text-red-500', 'bg-blue-500')).toEqual(
      'text-red-500 bg-blue-500',
    );
  });

  it('should handle conditional arguments correctly', () => {
    expect(cn('text-red-500', false && 'bg-blue-500')).toEqual(
      'text-red-500',
    );
    expect(cn('text-red-500', true && 'bg-blue-500')).toEqual(
      'text-red-500 bg-blue-500',
    );
  });

  it('should mix tailwind utility classes with other classes', () => {
    expect(cn('text-red-500', 'my-custom-class')).toEqual(
      'text-red-500 my-custom-class',
    );
  });

  it('should correctly merge complex class strings', () => {
    expect(
      cn(
        'text-red-500 font-bold',
        'text-blue-500',
        'hover:text-green-500',
        'p-4',
        'm-2',
        'hover:underline',
      ),
    ).toEqual(
      'font-bold text-blue-500 hover:text-green-500 p-4 m-2 hover:underline',
    );
  });
});