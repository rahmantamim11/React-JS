import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../utilitiess/Utilities';

const Cosmetics = () => {

    // const first = 55;
    // const second = 65;
    // const total = add(first, second);

    const cosmetics = [
        {id:'1', name:'Face Wash', price:'350'},
        {id:'2', name:'Perfume', price:'250'},
        {id:'3', name:'Cream', price:'570'},
        {id:'4', name:'Shampoo', price:'675'},
        {id:'5', name:'Comb', price:'167'},
    ]

    return (
        <div>

            <h1>Welcome To Cosmetics</h1>

            {/* <p>Total: {total}</p> */}

            {
                cosmetics.map(cosmetic => <Cosmetic 

                    key={cosmetic.id}
                    cosmetic = {cosmetic}
                    
                    >

                    </Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;