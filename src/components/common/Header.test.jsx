import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

function renderHeader({ dropdownMenuActive, handleDropdownMenuActive }) {
  return render(
    <MemoryRouter>
      <Header
        dropdownMenuActive={dropdownMenuActive}
        onDropdownMenuActive={handleDropdownMenuActive}
      />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  const handleDropdownMenuActive = jest.fn();

  it('renders Header', () => {
    const { container } = renderHeader({
      dropdownMenuActive: false,
      handleDropdownMenuActive,
    });

    expect(container).toHaveTextContent('서비스소개');
    expect(container).toHaveTextContent('인터뷰즈');
    expect(container).toHaveTextContent('인터뷰연습');

    fireEvent.click(container.querySelector('button'));

    expect(handleDropdownMenuActive).toBeCalled();
  });
});
