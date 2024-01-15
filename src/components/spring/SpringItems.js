
import React from 'react';
import './SpringItems.css';
import SpringItem from './SpringItem';

import SpringItem1 from '../../images/spring1.jpg';
import SpringItem2 from '../../images/spring2.jpg';
import SpringItem3 from '../../images/spring3.jpg';
import SpringItem4 from '../../images/spring4.jpg';
import SpringItem5 from '../../images/spring5.jpg';

const SpringItems = () => {
  return (
    <div className="spring-segment">
      <h2>Spring</h2>
      <div className="spring-items" >
        <SpringItem name="Pac-man T-shirt" image={SpringItem1} alt="Pac-man T-shirt" price={'$14.00'}/>
        <SpringItem name="Men T-shirts" image={SpringItem2} alt="Men T-shirts" price={'$13.99'}/>
        <SpringItem name="Branded T-shirts" image={SpringItem3} alt="Branded T-shirts" price={'$24.50'}/>
        <SpringItem name="Black T-shirts" image={SpringItem4} alt="Black T-shirts" price={'$9.00'}/>
        <SpringItem name="Women T-shirts" image={SpringItem5} alt="Women T-shirts" price={'$11.99'}/>
        
      </div>
    </div>
  );
};

export default SpringItems;
