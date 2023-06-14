import { render, screen, fireEvent } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

const MockFollowersList = () => (
      <BrowserRouter>
        <FollowersList />
      </BrowserRouter>
    )

describe("FollowersList", () => {
    it('should render follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0");
        expect(followerDivElement).toBeInTheDocument();
      });

    // it('should render multiple follower items', async () => {
    //     render(<MockFollowersList />);
    //     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    //     expect(followerDivElements.length).toBe(5);
    // });
})