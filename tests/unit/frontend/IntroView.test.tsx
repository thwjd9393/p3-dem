import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import IntroView from '../../../frontend/src/views/IntroView'

describe('IntroView', () => {
  it('shows the product introduction and current integration status', () => {
    render(<IntroView />)

    expect(
      screen.getByRole('heading', { name: '오늘 귀갓길, 함께 살펴볼게요.' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/경로와 확인 가능한 안전정보/)).toBeInTheDocument()
    expect(screen.getByText(/실제 경로와 안전정보는 아직 연결되지 않았습니다/))
      .toBeInTheDocument()
  })
})
