import Icon from '../Icon';
import { Component } from 'react';
import styles from './index.css';

const IconList = [
  'arrow-left',
  'arrow-right',
];

export default class IconDemo extends Component {
  render() {
    return (
      <div>
        {
          IconList.map(name => (
            <div className={styles['Icon--grid']} key={name}>
              <Icon size={48} name={name} />
              <span className={styles['Icon-name']}>{name}</span>
            </div>
          ))
        }
      </div>
    );
  }
}
