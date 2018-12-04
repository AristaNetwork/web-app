import { CreateClientModule } from './create-client.module';

describe('CreateClientModule', () => {
  let createClientModule: CreateClientModule;

  beforeEach(() => {
    createClientModule = new CreateClientModule();
  });

  it('should create an instance', () => {
    expect(createClientModule).toBeTruthy();
  });
});
