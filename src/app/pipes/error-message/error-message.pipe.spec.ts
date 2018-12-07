import { ErrorMessagePipe } from './error-message.pipe';
import { TestBed, inject } from '@angular/core/testing';
import { ErrorMessageService } from './error-message.service';

describe('ErrorMessagePipe', () => {

  let pipe: ErrorMessagePipe;

  // Dictionary of errors
  const errorDict = {
    required: 'Required testing',
    maxlength: 'Maxlength testing with {*} examples of {*}'
  };

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [ 
        { provide: ErrorMessageService, useValue: errorDict }
      ]
    });

  });

  it('create an instance with dependency', inject([ ErrorMessageService ], (errorMessageSrv: ErrorMessageService) => {
    pipe = new ErrorMessagePipe( errorMessageSrv );
    console.warn('PIPE:', pipe);

    expect(pipe).toBeTruthy();
  }));

  it('maxlength: Two {*} in the string', () => {
    expect( pipe.transform({ maxlength: true }, { maxlength: [2, 'parameters'] }) ).toBe('Maxlength testing with 2 examples of parameters');
  });

  it('maxlength: Two {*} in the string with one bad array param', () => {
    expect( pipe.transform({ maxlength: true }, { maxlength: 2  }) ).toBe('Maxlength testing with {*} examples of {*}');
  });

  it('required test', () => {
    expect( pipe.transform({ required: true })).toBe('Required testing');
  });

  it('required test with params but they do not necessary', () => {
    expect( pipe.transform({ required: true }, { required: [50]}) ).toBe('Required testing');
  });

  it('required testing with empty param', () => {
    expect( pipe.transform({ required: true }, {}) ).toBe('Required testing');
  });

  it('required testing with param and bad array on the property', () => {
    expect( pipe.transform({ required: true }, { required: 10 }) ).toBe('Required testing');
  });

  it('without errors', () => {
    expect( pipe.transform({}) ).toBe(null);
  });

  it('argument errors is not an object', () => {
    expect( pipe.transform('hola', {}) ).toBe(null);
  });

  it('bad options', () => {
    expect( pipe.transform({}, 12) ).toBe(null);
  });

});
