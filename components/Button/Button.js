import { Text } from 'react-native';
import './Button.css';

function PlateButton() {
  return (
    <div className="plate">

      <p className="header">25</p>

      <div className="middle">
        <button className="btn">-</button>
        <div className="inner">10</div>
        <button className="btn">+</button>
      </div>

      <p className="header">KG</p>
    </div>
  );
}

export default PlateButton;
