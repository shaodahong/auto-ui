import cn from 'classnames'
import * as React from 'react'
import './style/index.scss'

interface IFigureProps {
  image: string
  title?: string
  onClick?: () => void
  className?: string
  aspectRatio?: number
  [otherProps: string]: any
}

const CardFigure: React.FC<IFigureProps> = props => {
  const { image, title, children, onClick, className, aspectRatio, ...otherProps } = props

  const cls = cn(
    'x-card__figure',
    {
      'x-card__figure--activable': !!onClick,
      'x-card__figure--ar': aspectRatio && aspectRatio > 0,
    },
    className,
  )

  return (
    <figure {...otherProps} className={cls} onClick={onClick}>
      {children && <div className="x-card__figure-content">{children}</div>}
      <img
        className={aspectRatio && aspectRatio > 0 ? 'x-card__figure-abs-img' : ''}
        src={image}
        alt={title}
        title={title}
      />
      {aspectRatio && aspectRatio > 0 ? (
        <div className="x-card__ar" style={{ marginTop: `${(1 / aspectRatio) * 100}%` }} />
      ) : null}
    </figure>
  )
}

interface ICardProps {
  shadow?: boolean
  children: React.ReactNode
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  aspectRatio?: number
  onClick?: () => void
  className?: string
  [otherProps: string]: any
}

const Card: React.FC<ICardProps> & {
  Figure: React.FC<IFigureProps>
} = props => {
  const { shadow, children, direction, aspectRatio, onClick, className, ...otherProps } = props

  const cls = cn(
    'x-card',
    {
      'x-card--shadow': shadow,
      'x-card--ar': aspectRatio && aspectRatio > 0,
      'x-card--activable': !!onClick,
    },
    className,
  )

  return (
    <div {...otherProps} className={cls} onClick={onClick}>
      <div className={`x-card__inner x-card--${direction || 'column'}`}>{children}</div>
      {aspectRatio && aspectRatio > 0 ? (
        <div className="x-card__ar" style={{ marginTop: `${(1 / aspectRatio) * 100}%` }} />
      ) : null}
    </div>
  )
}

Card.Figure = CardFigure

export default Card
