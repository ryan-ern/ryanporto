import { render, screen } from '@testing-library/react';
import Home from './Home.jsx'
import { describe, it, expect } from 'vitest';


describe('Home Component', () => {
    it('renders name from localStorage', () => {
        localStorage.setItem('name', 'Test User');
        render(<Home />);
        expect(screen.getByText('Test User'));
    });

    it('renders correct text content', () => {
        expect(screen.getByText('Ryan'));
        expect(screen.getByText('Full-Stack Developer'));
        expect(screen.getByText('Technical Informatics'));
    });

    it('renders "Let\'s Talk!" button', () => {
        const talkButton = screen.getByText("Let's Talk!");
        expect(talkButton);
    });
});
