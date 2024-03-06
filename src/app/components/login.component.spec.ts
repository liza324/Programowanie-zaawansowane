import { LoginComponent } from './loginform/login.component';

describe('test our log-in component', () => {
  it('Right credentials let me in', () => {
    const testComponent = new LoginComponent();
    testComponent.formData.username = 'Liza';
    testComponent.formData.password = '1111';
    testComponent.login();
    expect(testComponent.formData.isLoged).toBe(true);
  });

  it('Wrong credentials does not let me in', () => {
    const testComponent = new LoginComponent();
    testComponent.formData.username = 'Piotr';
    testComponent.formData.password = '666';
    testComponent.login();
    expect(testComponent.formData.isLoged).toBe(false);
  });
});
