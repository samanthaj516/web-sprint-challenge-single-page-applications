import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    max-width: 900px;
    h2 {
        color: black;
        margin: 50px 0 30px;
        padding: 0 20px;
        font-size: 2rem;
    }
    h3 {
        background: #ececec;
        padding: 10px 10px;
        margin: 15px 0;
    }
    input, select {
        margin: 20px 0;
        padding: 5px;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        // display: inline-block;
    }
    input[type="text"], select {
        width: 40%;
        border: 2px solid #ececec;
        background: none;
        padding: 15px 20px;
    }
    input[type="radio"] {
        margin: 20px 10px 20px 0;
    }
    input[type="checkbox"] {
        margin: 20px 10px 20px 20px;
    }
    label {
        margin: 0 20px;
        // display: inline-block;
    }
    .toppings label, .substitute label {
        margin: 0 20px 0 0;
    }
    .submit-order {
        display: flex;
        justify-content: space-between;
        padding: 20px 0 100px;
        border-top: 2px solid #efefef;
        margin-top: 20px;
    }
    button {
        border: none;
        color: #fff;
        background: grey;
        padding: 0px 30px;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 2px;
        transition: all .2s linear;
        width: 100%;
        max-width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        :hover {
            background: green;
        }
        &[disabled] {
            background: #ccc;
            cursor: initial;
        }
    }
    .form-error {
        color: #c31313;
        font-weight: bold;
        padding: 0 20px;
    }
`;

const Form = (props) => {
    const { submit, inputChange, form, formErrors, disabled } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const returnValue = type === 'checkbox' ? checked : value;
        inputChange(name, returnValue);
    }

    return (
        <StyledForm>
            <h2>Build Your Own Pizza</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <h3>Name</h3>
                    <input 
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                        data-cy="name"
                    />
                    <div className="form-error">{formErrors.name}</div>
                </div>
                <div className="form-group">
                    <h3>Choice of Size</h3>
                    <select
                        name="size"
                        value={form.size}
                        onChange={onChange}
                        data-cy="size"
                    >
                        <option value="">Select</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    <div className="form-error">{formErrors.size}</div>
                </div>
                <div className="form-group">
                    <h3>Choice of Sauce</h3>
                    <label>
                        <input 
                            name="sauce"
                            type="radio"
                            value="originalRed"
                            checked={form.sauce === 'originalRed'}
                            onChange={onChange}
                            data-cy="originalRed"
                        />
                        Original Red 
                    </label>
                    <label>
                        <input 
                            name="sauce"
                            type="radio"
                            value="garlicRanch"
                            checked={form.sauce === 'garlicRanch'}
                            onChange={onChange}
                            data-cy="garlicRanch"
                        />
                        Garlic Ranch
                    </label>
                    <label>
                        <input 
                            name="sauce"
                            type="radio"
                            value="bbq"
                            checked={form.sauce === 'bbq'}
                            onChange={onChange}
                            data-cy="bbq"
                        />
                        BBQ Sauce
                    </label>
                    <label>
                        <input 
                            name="sauce"
                            type="radio"
                            value="noSauce"
                            checked={form.sauce === 'noSauce'}
                            onChange={onChange}
                            data-cy="noSauce"
                        />
                        No sauce
                    </label>
                    <div className="form-error">{formErrors.sauce}</div>
                </div>
                <div className="form-group toppings">
                    <h3>Add Toppings</h3>
                    <label>
                        <input 
                            name="pepperoni"
                            type="checkbox"
                            checked={form.pepperoni}
                            onChange={onChange}
                            data-cy="pepperoni"
                        />
                        Pepperoni
                    </label>
                    <label>
                        <input 
                            name="sausage"
                            type="checkbox"
                            checked={form.sausage}
                            onChange={onChange}
                            data-cy="sausage"
                        />
                        Sausage
                    </label>
                    <label>
                        <input 
                            name="onions"
                            type="checkbox"
                            checked={form.onions}
                            onChange={onChange}
                            data-cy="onions"
                        />
                        Onions
                    </label>
                    <label>
                        <input 
                            name="greenPepper"
                            type="checkbox"
                            checked={form.greenPepper}
                            onChange={onChange}
                            data-cy="greenPepper"
                        />
                        Green Pepper
                    </label>
                    <label>
                        <input 
                            name="dicedTomatoes"
                            type="checkbox"
                            checked={form.dicedTomatoes}
                            onChange={onChange}
                            data-cy="dicedTomatoes"
                        />
                        Diced Tomatoes
                    </label>
                    
                <div className="form-group">
                    <h3>Special Instructions</h3>
                    <input 
                        name="instructions"
                        type="text"
                        placeholder="Any special instructions?"
                        value={form.instructions}
                        onChange={onChange}
                        data-cy="instructions"
                    />
                </div>
                <div className="form-group submit-order">
                    <button data-cy="submit"><span>Add to Order</span></button>
                </div>
                </div>
            </form>
        </StyledForm>
    )
}

export default Form;