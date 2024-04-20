import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { customRender, mockNotificationContextValue } from './mock/notification-mock'
import DrawerNav from '../components/DrawerNav'

describe('DrawerNav', () => {
  test('template renders', () => {
    customRender(<DrawerNav isDrawerOpen={true} setIsDrawerOpen={() => { }} />, { ...mockNotificationContextValue })
    expect(screen.getByText(/Mark all as read/)).toBeVisible()
    expect(screen.getByText(/Mark checked items as read/)).toBeVisible()
  })
})