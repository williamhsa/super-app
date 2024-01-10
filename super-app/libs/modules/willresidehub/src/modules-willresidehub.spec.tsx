import { render } from '@testing-library/react';

import ModulesWillresidehub from './modules-willresidehub';

describe('ModulesWillresidehub', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesWillresidehub />);
    expect(baseElement).toBeTruthy();
  });
});
