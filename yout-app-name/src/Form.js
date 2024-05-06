import { useState } from 'react';
function Form({ addTransaction }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    function submitHanddler(e) {
        e.prventDefault();
        let newTransaction = {
            description: description,
            amount: amount
        }
        addTransaction(newTransaction);
    }
    return (
        <form onSubmit={() => submitHanddler()}>
            <div className='form-control mb-4 mt-4'>
                <label for="desc">Description</label>
                <input class="form-control" type="text" name="desc"
                    id="desc" placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='form-control mb-3' >
                <label for="amount">Amount</label>
                <input class="form-control" name="amount" id="amount" type="text" placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)} />
            </div>
            <input className='btn btn-primary' type="submit" />
        </form>
    )
}

export default Form;