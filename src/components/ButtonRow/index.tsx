/* eslint-disable react/button-has-type */
import styles from './styles.module.scss';

// This serves as an example for how components should be defined, with props at the top in the same file.

interface Props {
  leftType: 'button' | 'submit' | 'reset';
  rightType: 'button' | 'submit' | 'reset';
  leftText: string;
  rightText: string;
  leftAction?: () => any;
  rightAction?: () => any;
  leftDisabled?: boolean;
  rightDisabled?: boolean;
  sticky?: boolean;
}

const ButtonRow = ({
  leftType = 'button',
  rightType = 'button',
  leftText,
  rightText,
  leftAction,
  rightAction,
  sticky,
  leftDisabled = false,
  rightDisabled = false,
}: Props) => {
  return (
    <div className={`${styles.buttonRow} ${sticky ? 'stickyBottomContainer' : ''}`}>
      <button type={leftType} onClick={leftAction} className="clearButton" disabled={leftDisabled}>
        {leftText}
      </button>
      <button
        type={rightType}
        className="blueButton"
        onClick={rightAction}
        disabled={rightDisabled}
      >
        {rightText}
      </button>
    </div>
  );
};

export default ButtonRow;
