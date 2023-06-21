import styles from './Switch.module.css';

function Switch() {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
}

export default Switch;
