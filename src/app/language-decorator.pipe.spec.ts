import { LanguageDecoratorPipe } from './language-decorator.pipe';

describe('LanguageDecoratorPipe', () => {
  it('create an instance', () => {
    const pipe = new LanguageDecoratorPipe();
    expect(pipe).toBeTruthy();
  });
});
