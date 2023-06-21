import styles from './Button.module.css';
import { Text } from 'react-native';

function PlateButton() {
  return (
    <div className="plate">
      <button className="subtract">-</button>
      <div className="inner">10</div>
      <button className="add">+</button>
    </div>
  );
}

export default PlateButton;
